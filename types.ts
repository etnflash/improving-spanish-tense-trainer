export enum Difficulty {
  BEGINNER = 'BEGINNER',       // Select ending
  INTERMEDIATE = 'INTERMEDIATE', // Type answer, no accents enforced
  EXPERT = 'EXPERT'            // Type answer, accents required
}

export enum VerbEndingType {
  AR = 'ar',
  ER = 'er',
  IR = 'ir'
}

export interface VerbDefinition {
  infinitive: string;
  translation: string;
  type: VerbEndingType;
  isRegular: boolean;
}

export type Pronoun = 'yo' | 'tú' | 'él/ella/usted' | 'nosotros' | 'vosotros' | 'ellos/ellas/ustedes';

export const PRONOUNS: Pronoun[] = [
  'yo', 
  'tú', 
  'él/ella/usted', 
  'nosotros', 
  'vosotros', 
  'ellos/ellas/ustedes'
];

export enum TenseId {
  // Simple Tenses
  PRESENT = 'present',
  PRETERITE = 'preterite',
  FUTURE = 'future',
  IMPERFECT = 'imperfect',
  CONDITIONAL = 'conditional',
  PRESENT_SUBJUNCTIVE = 'present_subjunctive',
  IMPERFECT_SUBJUNCTIVE = 'imperfect_subjunctive',
  
  // Moods
  IMPERATIVE = 'imperative', // Affirmative Commands

  // Compound Tenses (Perfects)
  PRESENT_PERFECT = 'present_perfect',
  PLUPERFECT = 'pluperfect', // Past Perfect
  FUTURE_PERFECT = 'future_perfect',
  CONDITIONAL_PERFECT = 'conditional_perfect',
  PRESENT_PERFECT_SUBJUNCTIVE = 'present_perfect_subjunctive',
  PLUPERFECT_SUBJUNCTIVE = 'pluperfect_subjunctive'
}

export interface Question {
  id: string;
  verb: VerbDefinition;
  tense: TenseId;
  pronounIndex: number; // 0-5 mapping to PRONOUNS
  correctConjugation: string;
  stem: string; // Used for Beginner mode hint
  regularEnding: string | null; // Used for Beginner mode options
  exampleSentence?: string; // Contextual example
}