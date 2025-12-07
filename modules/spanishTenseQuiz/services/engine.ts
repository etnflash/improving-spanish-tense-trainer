import { 
  VerbDefinition, 
  TenseId, 
  PRONOUNS, 
  Question,
  Difficulty 
} from '../../../types';
import { 
  VERBS, 
  REGULAR_ENDINGS, 
  IRREGULAR_TABLES, 
  HABER_CONJUGATION, 
  IRREGULAR_PARTICIPLES 
} from '../data/verbDatabase';
import { VERB_EXAMPLES } from '../data/verbExamples';

const STORAGE_KEY = 'adaptive-tense-stats-v1';
const XP_PER_LEVEL = 120;
const LEVEL_TITLES = ['Novato', 'Explorador', 'Aventurero', 'Conquistador', 'Maestro', 'Legendario'];
const GLOBAL_RECENT_WINDOW = 10;

const getStorage = (): Storage | null => {
  if (typeof window === 'undefined' || !window.localStorage) {
    return null;
  }
  try {
    return window.localStorage;
  } catch {
    return null;
  }
};

type TenseStats = {
  attempts: number;
  correct: number;
  streak: number;
  consecutiveIncorrect: number;
  lastIncorrectAt: number | null;
  recentResults: number[]; // 1 for correct, 0 for incorrect, capped
  xp: number;
};

export type TenseInsight = {
  tense: TenseId;
  attempts: number;
  correct: number;
  accuracy: number;
  recentAccuracy: number;
  recentSampleSize: number;
  streak: number;
  consecutiveIncorrect: number;
  lastIncorrectAt: number | null;
  priority: number;
  xp: number;
  level: number;
  currentLevelXp: number;
  nextLevelXp: number;
  progress: number;
};

export type PlayerBadge = {
  xp: number;
  level: number;
  title: string;
  nextLevelXp: number;
  currentLevelXp: number;
  progress: number; // 0-1
};

type PersistedPayload = {
  stats: Record<TenseId, TenseStats>;
  xp: number;
  recent: number[];
};

const createInitialStats = (): Record<TenseId, TenseStats> => {
  return (Object.values(TenseId) as TenseId[]).reduce((acc, tense) => {
    acc[tense] = {
      attempts: 0,
      correct: 0,
      streak: 0,
      consecutiveIncorrect: 0,
      lastIncorrectAt: null,
      recentResults: [],
      xp: 0
    };
    return acc;
  }, {} as Record<TenseId, TenseStats>);
};

const ADAPTIVE_STATE: Record<TenseId, TenseStats> = createInitialStats();
let PLAYER_XP = 0;
const GLOBAL_RECENT_RESULTS: number[] = [];

const serializeState = (): PersistedPayload => ({
  stats: ADAPTIVE_STATE,
  xp: PLAYER_XP,
  recent: GLOBAL_RECENT_RESULTS.slice(-GLOBAL_RECENT_WINDOW)
});

export const saveAdaptiveProgress = () => {
  const storage = getStorage();
  if (!storage) return;
  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(serializeState()));
  } catch {
    // Storage quota errors should not break gameplay, so we ignore them.
  }
};

export const loadAdaptiveProgress = () => {
  const storage = getStorage();
  if (!storage) return;
  const existing = storage.getItem(STORAGE_KEY);
  if (!existing) return;
  try {
    const parsed = JSON.parse(existing) as Partial<Record<string, unknown>> & {
      stats?: Partial<Record<TenseId, Partial<TenseStats>>>;
      xp?: number;
      recent?: number[];
    };
    const statsSource = parsed.stats && typeof parsed.stats === 'object' ? parsed.stats : (parsed as Partial<Record<TenseId, Partial<TenseStats>>>);
    const savedXp = typeof parsed.xp === 'number' ? parsed.xp : 0;
    (Object.keys(ADAPTIVE_STATE) as TenseId[]).forEach((tense) => {
      const entry = statsSource?.[tense];
      ADAPTIVE_STATE[tense] = {
        attempts: entry?.attempts ?? 0,
        correct: entry?.correct ?? 0,
        streak: entry?.streak ?? 0,
        consecutiveIncorrect: entry?.consecutiveIncorrect ?? 0,
        lastIncorrectAt: entry?.lastIncorrectAt ?? null,
        recentResults: Array.isArray(entry?.recentResults) ? entry!.recentResults!.slice(-5) : [],
        xp: typeof entry?.xp === 'number' ? entry.xp : 0
      };
    });
    PLAYER_XP = savedXp;
    GLOBAL_RECENT_RESULTS.splice(0, GLOBAL_RECENT_RESULTS.length);
    const savedRecent = Array.isArray(parsed.recent) ? parsed.recent : [];
    savedRecent.slice(-GLOBAL_RECENT_WINDOW).forEach(val => {
      GLOBAL_RECENT_RESULTS.push(val === 1 ? 1 : 0);
    });
  } catch {
    // If stored data is corrupt, drop it and start fresh.
    const storage = getStorage();
    storage?.removeItem(STORAGE_KEY);
  }
};

export const resetAdaptiveProgress = () => {
  const fresh = createInitialStats();
  (Object.keys(fresh) as TenseId[]).forEach((tense) => {
    ADAPTIVE_STATE[tense] = fresh[tense];
  });
  PLAYER_XP = 0;
  GLOBAL_RECENT_RESULTS.splice(0, GLOBAL_RECENT_RESULTS.length);
  getStorage()?.removeItem(STORAGE_KEY);
};

export const recordAnswerResult = (tense: TenseId, wasCorrect: boolean) => {
  const stats = ADAPTIVE_STATE[tense];
  stats.attempts += 1;
  if (wasCorrect) {
    stats.correct += 1;
    stats.streak += 1;
    stats.consecutiveIncorrect = 0;
  } else {
    stats.streak = 0;
    stats.consecutiveIncorrect += 1;
    stats.lastIncorrectAt = Date.now();
  }
  stats.recentResults.push(wasCorrect ? 1 : 0);
  if (stats.recentResults.length > 5) {
    stats.recentResults.shift();
  }
  const streakBonus = wasCorrect ? Math.max(stats.streak - 1, 0) * 2 : 0;
  const xpGain = wasCorrect ? 10 + streakBonus : 2;
  PLAYER_XP += xpGain;
  stats.xp += xpGain;
  GLOBAL_RECENT_RESULTS.push(wasCorrect ? 1 : 0);
  if (GLOBAL_RECENT_RESULTS.length > GLOBAL_RECENT_WINDOW) {
    GLOBAL_RECENT_RESULTS.shift();
  }
  saveAdaptiveProgress();
};

const getLevelBreakdown = (xp: number) => {
  const level = computeLevelFromXp(xp);
  const currentLevelXp = xp % XP_PER_LEVEL;
  const progress = XP_PER_LEVEL === 0 ? 1 : currentLevelXp / XP_PER_LEVEL;
  return {
    level,
    currentLevelXp,
    nextLevelXp: XP_PER_LEVEL,
    progress: Math.min(1, progress)
  };
};

export const getAdaptiveInsights = (): TenseInsight[] => {
  return (Object.keys(ADAPTIVE_STATE) as TenseId[]).map((tense) => {
    const stats = ADAPTIVE_STATE[tense];
    const accuracy = stats.attempts === 0 ? 1 : stats.correct / stats.attempts;
    const recentAccuracy = stats.recentResults.length === 0
      ? accuracy
      : stats.recentResults.reduce((sum, r) => sum + r, 0) / stats.recentResults.length;
    const priority = computeWeight(tense);
    const levelMeta = getLevelBreakdown(stats.xp);
    return {
      tense,
      attempts: stats.attempts,
      correct: stats.correct,
      accuracy,
      recentAccuracy,
      recentSampleSize: stats.recentResults.length,
      streak: stats.streak,
      consecutiveIncorrect: stats.consecutiveIncorrect,
      lastIncorrectAt: stats.lastIncorrectAt,
      priority,
      xp: stats.xp,
      level: levelMeta.level,
      currentLevelXp: levelMeta.currentLevelXp,
      nextLevelXp: levelMeta.nextLevelXp,
      progress: levelMeta.progress
    };
  });
};

export const getRecentAccuracyWindow = () => {
  const sampleSize = GLOBAL_RECENT_RESULTS.length;
  const accuracy = sampleSize === 0
    ? 1
    : GLOBAL_RECENT_RESULTS.reduce((sum, val) => sum + val, 0) / sampleSize;
  return {
    accuracy,
    sampleSize,
    windowSize: GLOBAL_RECENT_WINDOW
  };
};

const computeLevelFromXp = (xp: number): number => {
  return Math.floor(xp / XP_PER_LEVEL) + 1;
};

export const getPlayerBadge = (): PlayerBadge => {
  const level = computeLevelFromXp(PLAYER_XP);
  const title = LEVEL_TITLES[Math.min(level - 1, LEVEL_TITLES.length - 1)];
  const currentLevelXp = PLAYER_XP % XP_PER_LEVEL;
  const progress = XP_PER_LEVEL === 0 ? 1 : currentLevelXp / XP_PER_LEVEL;
  return {
    xp: PLAYER_XP,
    level,
    title,
    nextLevelXp: XP_PER_LEVEL,
    currentLevelXp,
    progress: Math.min(1, progress)
  };
};

const computeWeight = (tense: TenseId): number => {
  const stats = ADAPTIVE_STATE[tense];
  if (!stats) return 1;
  const base = stats.attempts === 0 ? 1.3 : 1;
  const incorrect = stats.attempts - stats.correct;
  const accuracyPenalty = incorrect * 0.6;
  const streakAdjustment = Math.max(0.4, 1 - stats.streak * 0.15);
  const consecutivePenalty = stats.consecutiveIncorrect * 0.8;
  const recencyBoost = stats.lastIncorrectAt
    ? Math.max(0, 1.2 - (Date.now() - stats.lastIncorrectAt) / (1000 * 60 * 10))
    : 0;
  const weight = base + accuracyPenalty + consecutivePenalty;
  return Math.max(0.2, weight * streakAdjustment + recencyBoost);
};

const pickAdaptiveTense = (pool: TenseId[]): TenseId => {
  const weights = pool.map((tense) => ({ tense, weight: computeWeight(tense) }));
  const totalWeight = weights.reduce((sum, entry) => sum + entry.weight, 0);
  if (totalWeight === 0) {
    return pool[Math.floor(Math.random() * pool.length)];
  }
  let threshold = Math.random() * totalWeight;
  for (const entry of weights) {
    if (threshold <= entry.weight) {
      return entry.tense;
    }
    threshold -= entry.weight;
  }
  return pool[pool.length - 1];
};

export const normalizeSpanishChars = (str: string): string => {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
};

export const checkAnswer = (input: string, correct: string, mode: Difficulty): boolean => {
  const cleanInput = input.trim();
  
  if (mode === Difficulty.EXPERT) {
    return cleanInput === correct;
  }
  
  return normalizeSpanishChars(cleanInput) === normalizeSpanishChars(correct);
};

const getParticiple = (verb: VerbDefinition): string => {
  // Check irregular map first
  if (IRREGULAR_PARTICIPLES[verb.infinitive]) {
    return IRREGULAR_PARTICIPLES[verb.infinitive];
  }
  
  // Regular formation
  const stem = verb.infinitive.slice(0, -2);
  if (verb.type === 'ar') {
    return stem + 'ado';
  } else {
    // er and ir both use -ido
    return stem + 'ido';
  }
};

export const conjugate = (verb: VerbDefinition, tense: TenseId, pronounIdx: number): { full: string, stem: string, ending: string | null } => {
  
  // --- COMPOUND TENSE LOGIC ---
  if (HABER_CONJUGATION[tense]) {
    const auxiliary = HABER_CONJUGATION[tense][pronounIdx];
    const participle = getParticiple(verb);
    const full = `${auxiliary} ${participle}`;
    
    // For Beginner mode, treating compound tenses as "Full Form" questions (ending = null)
    return {
      full,
      stem: auxiliary, 
      ending: null 
    };
  }

  // --- SIMPLE TENSE LOGIC ---
  
  // 1. Check Irregular Table First
  const irregularEntry = IRREGULAR_TABLES[verb.infinitive];
  if (irregularEntry && irregularEntry[tense]) {
    const fullForm = irregularEntry[tense]![pronounIdx];
    return { full: fullForm, stem: fullForm, ending: null };
  }

  // 2. Regular Logic
  let stem = '';
  // Check if regular ending exists for this tense (safe check)
  const pattern = REGULAR_ENDINGS[tense];
  if (!pattern) {
      console.error(`Missing patterns for tense: ${tense}`);
      return { full: '?', stem: '?', ending: '?' };
  }
  
  const endings = pattern[verb.type];
  const ending = endings[pronounIdx];

  // Future and Conditional use the full infinitive as the stem
  if (tense === TenseId.FUTURE || tense === TenseId.CONDITIONAL) {
    stem = verb.infinitive;
  } else {
    // Present, Preterite, Imperfect, Subjunctives, Imperative use the root (remove ar/er/ir)
    stem = verb.infinitive.slice(0, -2);
  }

  return {
    full: stem + ending,
    stem,
    ending
  };
};

export const generateQuestion = (allowedTenses: TenseId[] = []): Question => {
  const verb = VERBS[Math.floor(Math.random() * VERBS.length)];
  const pool = allowedTenses.length > 0 ? allowedTenses : (Object.values(TenseId) as TenseId[]);
  const tense = pickAdaptiveTense(pool);
  
  // Random Pronoun
  let pronounIndex = Math.floor(Math.random() * PRONOUNS.length);

  // Special Check: Imperative does not have "Yo" (index 0)
  if (tense === TenseId.IMPERATIVE) {
    // If we picked 0, just pick again from 1-5
    while (pronounIndex === 0) {
      pronounIndex = Math.floor(Math.random() * PRONOUNS.length);
    }
  }

  const conjugation = conjugate(verb, tense, pronounIndex);

  // Fetch Example Sentence
  let exampleSentence: string | undefined;
  const verbExamples = VERB_EXAMPLES[verb.infinitive];
  if (verbExamples && verbExamples[tense]) {
    exampleSentence = verbExamples[tense]![pronounIndex];
  }

  return {
    id: `${verb.infinitive}-${tense}-${pronounIndex}-${Date.now()}`,
    verb,
    tense,
    pronounIndex,
    correctConjugation: conjugation.full,
    stem: conjugation.stem,
    regularEnding: conjugation.ending,
    exampleSentence
  };
};

export const getDistractors = (verb: VerbDefinition, tense: TenseId, correctEnding: string | null, correctFull: string): string[] => {
    
    // COMPOUND TENSES LOGIC
    if (HABER_CONJUGATION[tense]) {
        const auxiliaries = HABER_CONJUGATION[tense];
        const participle = correctFull.split(' ')[1]; // Extract participle
        
        // Create full phrases for all persons
        const allForms = auxiliaries.map(aux => `${aux} ${participle}`);
        
        // Filter out correct one
        const wrong = allForms.filter(f => f !== correctFull);
        
        // Shuffle and take 3
        const shuffledWrong = wrong.sort(() => 0.5 - Math.random()).slice(0, 3);
        
        // Return options
        return [...shuffledWrong, correctFull].sort(() => 0.5 - Math.random());
    }

    // SIMPLE IRREGULAR LOGIC
    if (!correctEnding) {
      const irregRow = IRREGULAR_TABLES[verb.infinitive]?.[tense];
      if (irregRow) {
          // Note for Imperative: Index 0 is '-' (dash). Filter that out from distractors too.
          const wrongOptions = irregRow.filter(w => w !== correctFull && w !== '-');
          const distinctWrong = Array.from(new Set(wrongOptions));
          const shuffledWrong = distinctWrong.sort(() => 0.5 - Math.random()).slice(0, 3);
          return [...shuffledWrong, correctFull].sort(() => 0.5 - Math.random());
      }
      return [correctFull, '?', '?', '?'];
    }

    // SIMPLE REGULAR LOGIC
    const allEndingsForType = REGULAR_ENDINGS[tense][verb.type];
    // Filter unique endings and remove the '-' (dash) if it exists (for imperative yo)
    const uniqueEndings = Array.from(new Set(allEndingsForType)).filter(e => e !== '-');
    const wrong = uniqueEndings.filter(e => e !== correctEnding);
    
    const shuffled = wrong.sort(() => 0.5 - Math.random()).slice(0, 3);
    const options = [...shuffled, correctEnding].sort(() => 0.5 - Math.random());
    
    return options;
}