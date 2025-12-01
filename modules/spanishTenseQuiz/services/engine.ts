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
  const pool = allowedTenses.length > 0 ? allowedTenses : Object.values(TenseId);
  const tense = pool[Math.floor(Math.random() * pool.length)];
  
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