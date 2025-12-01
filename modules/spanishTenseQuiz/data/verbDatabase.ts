import { TenseId, VerbEndingType, VerbDefinition } from '../../../types';

// 1. Regular Ending Patterns (Simple Tenses)
export const REGULAR_ENDINGS: Record<string, Record<VerbEndingType, string[]>> = {
  [TenseId.PRESENT]: {
    [VerbEndingType.AR]: ['o', 'as', 'a', 'amos', 'áis', 'an'],
    [VerbEndingType.ER]: ['o', 'es', 'e', 'emos', 'éis', 'en'],
    [VerbEndingType.IR]: ['o', 'es', 'e', 'imos', 'ís', 'en'],
  },
  [TenseId.PRETERITE]: {
    [VerbEndingType.AR]: ['é', 'aste', 'ó', 'amos', 'asteis', 'aron'],
    [VerbEndingType.ER]: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'],
    [VerbEndingType.IR]: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'],
  },
  [TenseId.FUTURE]: {
    [VerbEndingType.AR]: ['é', 'ás', 'á', 'emos', 'éis', 'án'],
    [VerbEndingType.ER]: ['é', 'ás', 'á', 'emos', 'éis', 'án'],
    [VerbEndingType.IR]: ['é', 'ás', 'á', 'emos', 'éis', 'án'],
  },
  [TenseId.CONDITIONAL]: {
    [VerbEndingType.AR]: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'],
    [VerbEndingType.ER]: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'],
    [VerbEndingType.IR]: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'],
  },
  [TenseId.IMPERFECT]: {
    [VerbEndingType.AR]: ['aba', 'abas', 'aba', 'ábamos', 'abais', 'aban'],
    [VerbEndingType.ER]: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'],
    [VerbEndingType.IR]: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'],
  },
  [TenseId.PRESENT_SUBJUNCTIVE]: {
    [VerbEndingType.AR]: ['e', 'es', 'e', 'emos', 'éis', 'en'],
    [VerbEndingType.ER]: ['a', 'as', 'a', 'amos', 'áis', 'an'],
    [VerbEndingType.IR]: ['a', 'as', 'a', 'amos', 'áis', 'an'],
  },
  [TenseId.IMPERFECT_SUBJUNCTIVE]: {
    [VerbEndingType.AR]: ['ara', 'aras', 'ara', 'áramos', 'arais', 'aran'],
    [VerbEndingType.ER]: ['iera', 'ieras', 'iera', 'iéramos', 'ierais', 'ieran'],
    [VerbEndingType.IR]: ['iera', 'ieras', 'iera', 'iéramos', 'ierais', 'ieran'],
  },
  [TenseId.IMPERATIVE]: {
    // Note: Index 0 (Yo) is empty/unused for Imperative
    // Forms: -, tú, usted, nosotros, vosotros, ustedes
    [VerbEndingType.AR]: ['-', 'a', 'e', 'emos', 'ad', 'en'],
    [VerbEndingType.ER]: ['-', 'e', 'a', 'amos', 'ed', 'an'],
    [VerbEndingType.IR]: ['-', 'e', 'a', 'amos', 'id', 'an'],
  }
};

// 2. Irregular Overrides for Simple Tenses
export const IRREGULAR_TABLES: Record<string, Partial<Record<TenseId, string[]>>> = {
  'ser': {
    [TenseId.PRESENT]: ['soy', 'eres', 'es', 'somos', 'sois', 'son'],
    [TenseId.PRETERITE]: ['fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron'],
    [TenseId.IMPERFECT]: ['era', 'eras', 'era', 'éramos', 'erais', 'eran'],
    [TenseId.PRESENT_SUBJUNCTIVE]: ['sea', 'seas', 'sea', 'seamos', 'seáis', 'sean'],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: ['fuera', 'fueras', 'fuera', 'fuéramos', 'fuerais', 'fueran'],
    [TenseId.IMPERATIVE]: ['-', 'sé', 'sea', 'seamos', 'sed', 'sean'],
  },
  'estar': {
    [TenseId.PRESENT]: ['estoy', 'estás', 'está', 'estamos', 'estáis', 'están'],
    [TenseId.PRETERITE]: ['estuve', 'estuviste', 'estuvo', 'estuvimos', 'estuvisteis', 'estuvieron'],
    [TenseId.PRESENT_SUBJUNCTIVE]: ['esté', 'estés', 'esté', 'estemos', 'estéis', 'estén'],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: ['estuviera', 'estuvieras', 'estuviera', 'estuviéramos', 'estuvierais', 'estuvieran'],
    [TenseId.IMPERATIVE]: ['-', 'está', 'esté', 'estemos', 'estad', 'estén'],
  },
  'ir': {
    [TenseId.PRESENT]: ['voy', 'vas', 'va', 'vamos', 'vais', 'van'],
    [TenseId.PRETERITE]: ['fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron'],
    [TenseId.IMPERFECT]: ['iba', 'ibas', 'iba', 'íbamos', 'ibais', 'iban'],
    [TenseId.PRESENT_SUBJUNCTIVE]: ['vaya', 'vayas', 'vaya', 'vayamos', 'vayáis', 'vayan'],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: ['fuera', 'fueras', 'fuera', 'fuéramos', 'fuerais', 'fueran'],
    [TenseId.IMPERATIVE]: ['-', 've', 'vaya', 'vayamos', 'id', 'vayan'],
  },
  'tener': {
    [TenseId.PRESENT]: ['tengo', 'tienes', 'tiene', 'tenemos', 'tenéis', 'tienen'],
    [TenseId.PRETERITE]: ['tuve', 'tuviste', 'tuvo', 'tuvimos', 'tuvisteis', 'tuvieron'],
    [TenseId.FUTURE]: ['tendré', 'tendrás', 'tendrá', 'tendremos', 'tendréis', 'tendrán'],
    [TenseId.CONDITIONAL]: ['tendría', 'tendrías', 'tendría', 'tendríamos', 'tendríais', 'tendrían'],
    [TenseId.PRESENT_SUBJUNCTIVE]: ['tenga', 'tengas', 'tenga', 'tengamos', 'tengáis', 'tengan'],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: ['tuviera', 'tuvieras', 'tuviera', 'tuviéramos', 'tuvierais', 'tuvieran'],
    [TenseId.IMPERATIVE]: ['-', 'ten', 'tenga', 'tengamos', 'tened', 'tengan'],
  },
  'hacer': {
    [TenseId.PRESENT]: ['hago', 'haces', 'hace', 'hacemos', 'hacéis', 'hacen'],
    [TenseId.PRETERITE]: ['hice', 'hiciste', 'hizo', 'hicimos', 'hicisteis', 'hicieron'],
    [TenseId.FUTURE]: ['haré', 'harás', 'hará', 'haremos', 'haréis', 'harán'],
    [TenseId.CONDITIONAL]: ['haría', 'harías', 'haría', 'haríamos', 'haríais', 'harían'],
    [TenseId.PRESENT_SUBJUNCTIVE]: ['haga', 'hagas', 'haga', 'hagamos', 'hagéis', 'hagan'],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: ['hiciera', 'hicieras', 'hiciera', 'hiciéramos', 'hicierais', 'hicieran'],
    [TenseId.IMPERATIVE]: ['-', 'haz', 'haga', 'hagamos', 'haced', 'hagan'],
  },
  'poder': {
    [TenseId.PRESENT]: ['puedo', 'puedes', 'puede', 'podemos', 'podéis', 'pueden'],
    [TenseId.PRETERITE]: ['pude', 'pudiste', 'pudo', 'pudimos', 'pudisteis', 'pudieron'],
    [TenseId.FUTURE]: ['podré', 'podrás', 'podrá', 'podremos', 'podréis', 'podrán'],
    [TenseId.CONDITIONAL]: ['podría', 'podrías', 'podría', 'podríamos', 'podríais', 'podrían'],
    [TenseId.PRESENT_SUBJUNCTIVE]: ['pueda', 'puedas', 'pueda', 'podamos', 'podáis', 'puedan'],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: ['pudiera', 'pudieras', 'pudiera', 'pudiéramos', 'pudierais', 'pudieran'],
    [TenseId.IMPERATIVE]: ['-', 'puede', 'pueda', 'podamos', 'poded', 'puedan'],
  },
  'decir': {
    [TenseId.PRESENT]: ['digo', 'dices', 'dice', 'decimos', 'decís', 'dicen'],
    [TenseId.PRETERITE]: ['dije', 'dijiste', 'dijo', 'dijimos', 'dijisteis', 'dijeron'],
    [TenseId.FUTURE]: ['diré', 'dirás', 'dirá', 'diremos', 'diréis', 'dirán'],
    [TenseId.CONDITIONAL]: ['diría', 'dirías', 'diría', 'diríamos', 'diríais', 'dirían'],
    [TenseId.PRESENT_SUBJUNCTIVE]: ['diga', 'digas', 'diga', 'digamos', 'digáis', 'digan'],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: ['dijera', 'dijeras', 'dijera', 'dijéramos', 'dijerais', 'dijeran'],
    [TenseId.IMPERATIVE]: ['-', 'di', 'diga', 'digamos', 'decid', 'digan'],
  },
  'ver': {
    [TenseId.PRESENT]: ['veo', 'ves', 've', 'vemos', 'veis', 'ven'],
    [TenseId.PRETERITE]: ['vi', 'viste', 'vio', 'vimos', 'visteis', 'vieron'],
    [TenseId.IMPERFECT]: ['veía', 'veías', 'veía', 'veíamos', 'veíais', 'veían'],
    [TenseId.PRESENT_SUBJUNCTIVE]: ['vea', 'veas', 'vea', 'veamos', 'veáis', 'vean'],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: ['viera', 'vieras', 'viera', 'viéramos', 'vierais', 'vieran'],
    [TenseId.IMPERATIVE]: ['-', 've', 'vea', 'veamos', 'ved', 'vean'],
  },
  'querer': {
    [TenseId.PRESENT]: ['quiero', 'quieres', 'quiere', 'queremos', 'queréis', 'quieren'],
    [TenseId.PRETERITE]: ['quise', 'quisiste', 'quiso', 'quisimos', 'quisisteis', 'quisieron'],
    [TenseId.FUTURE]: ['querré', 'querrás', 'querrá', 'querremos', 'querréis', 'querrán'],
    [TenseId.CONDITIONAL]: ['querría', 'querrías', 'querría', 'querríamos', 'querríais', 'querrían'],
    [TenseId.PRESENT_SUBJUNCTIVE]: ['quiera', 'quieras', 'quiera', 'queramos', 'queráis', 'quieran'],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: ['quisiera', 'quisieras', 'quisiera', 'quisiéramos', 'quisierais', 'quisieran'],
    [TenseId.IMPERATIVE]: ['-', 'quiere', 'quiera', 'queramos', 'quered', 'quieran'],
  },
  'saber': {
    [TenseId.PRESENT]: ['sé', 'sabes', 'sabe', 'sabemos', 'sabéis', 'saben'],
    [TenseId.PRETERITE]: ['supe', 'supiste', 'supo', 'supimos', 'supisteis', 'supieron'],
    [TenseId.FUTURE]: ['sabré', 'sabrás', 'sabrá', 'sabremos', 'sabréis', 'sabrán'],
    [TenseId.CONDITIONAL]: ['sabría', 'sabrías', 'sabría', 'sabríamos', 'sabríais', 'sabrían'],
    [TenseId.PRESENT_SUBJUNCTIVE]: ['sepa', 'sepas', 'sepa', 'sepamos', 'sepáis', 'sepan'],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: ['supiera', 'supieras', 'supiera', 'supiéramos', 'supierais', 'supieran'],
    [TenseId.IMPERATIVE]: ['-', 'sabe', 'sepa', 'sepamos', 'sabed', 'sepan'],
  },
  'dar': {
    [TenseId.PRESENT]: ['doy', 'das', 'da', 'damos', 'dais', 'dan'],
    [TenseId.PRETERITE]: ['di', 'diste', 'dio', 'dimos', 'disteis', 'dieron'],
    [TenseId.PRESENT_SUBJUNCTIVE]: ['dé', 'des', 'dé', 'demos', 'deis', 'den'],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: ['diera', 'dieras', 'diera', 'diéramos', 'dierais', 'dieran'],
    [TenseId.IMPERATIVE]: ['-', 'da', 'dé', 'demos', 'dad', 'den'],
  },
  'venir': {
    [TenseId.PRESENT]: ['vengo', 'vienes', 'viene', 'venimos', 'venís', 'vienen'],
    [TenseId.PRETERITE]: ['vine', 'viniste', 'vino', 'vinimos', 'vinisteis', 'vinieron'],
    [TenseId.FUTURE]: ['vendré', 'vendrás', 'vendrá', 'vendremos', 'vendréis', 'vendrán'],
    [TenseId.CONDITIONAL]: ['vendría', 'vendrías', 'vendría', 'vendríamos', 'vendríais', 'vendrían'],
    [TenseId.PRESENT_SUBJUNCTIVE]: ['venga', 'vengas', 'venga', 'vengamos', 'vengáis', 'vengan'],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: ['viniera', 'vinieras', 'viniera', 'viniéramos', 'vinierais', 'vinieran'],
    [TenseId.IMPERATIVE]: ['-', 'ven', 'venga', 'vengamos', 'venid', 'vengan'],
  },
  'poner': {
    [TenseId.PRESENT]: ['pongo', 'pones', 'pone', 'ponemos', 'ponéis', 'ponen'],
    [TenseId.PRETERITE]: ['puse', 'pusiste', 'puso', 'pusimos', 'pusisteis', 'pusieron'],
    [TenseId.FUTURE]: ['pondré', 'pondrás', 'pondrá', 'pondremos', 'pondréis', 'pondrán'],
    [TenseId.CONDITIONAL]: ['pondría', 'pondrías', 'pondría', 'pondríamos', 'pondríais', 'pondrían'],
    [TenseId.PRESENT_SUBJUNCTIVE]: ['ponga', 'pongas', 'ponga', 'pongamos', 'pongáis', 'pongan'],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: ['pusiera', 'pusieras', 'pusiera', 'pusiéramos', 'pusierais', 'pusieran'],
    [TenseId.IMPERATIVE]: ['-', 'pon', 'ponga', 'pongamos', 'poned', 'pongan'],
  },
  'salir': {
    [TenseId.PRESENT]: ['salgo', 'sales', 'sale', 'salimos', 'salís', 'salen'],
    [TenseId.FUTURE]: ['saldré', 'saldrás', 'saldrá', 'saldremos', 'saldréis', 'saldrán'],
    [TenseId.CONDITIONAL]: ['saldría', 'saldrías', 'saldría', 'saldríamos', 'saldríais', 'saldrían'],
    [TenseId.PRESENT_SUBJUNCTIVE]: ['salga', 'salgas', 'salga', 'salgamos', 'salgáis', 'salgan'],
    [TenseId.IMPERATIVE]: ['-', 'sal', 'salga', 'salgamos', 'salid', 'salgan'],
  },
  'volver': {
    [TenseId.PRESENT]: ['vuelvo', 'vuelves', 'vuelve', 'volvemos', 'volvéis', 'vuelven'],
    [TenseId.PRESENT_SUBJUNCTIVE]: ['vuelva', 'vuelvas', 'vuelva', 'volvamos', 'volváis', 'vuelvan'],
    [TenseId.IMPERATIVE]: ['-', 'vuelve', 'vuelva', 'volvamos', 'volved', 'vuelvan'],
  }
};

// 3. Verb List
export const VERBS: VerbDefinition[] = [
  { infinitive: 'hablar', translation: 'to speak', type: VerbEndingType.AR, isRegular: true },
  { infinitive: 'comer', translation: 'to eat', type: VerbEndingType.ER, isRegular: true },
  { infinitive: 'vivir', translation: 'to live', type: VerbEndingType.IR, isRegular: true },
  { infinitive: 'ser', translation: 'to be (permanent)', type: VerbEndingType.ER, isRegular: false },
  { infinitive: 'estar', translation: 'to be (temporary)', type: VerbEndingType.AR, isRegular: false },
  { infinitive: 'ir', translation: 'to go', type: VerbEndingType.IR, isRegular: false },
  { infinitive: 'tener', translation: 'to have', type: VerbEndingType.ER, isRegular: false },
  { infinitive: 'caminar', translation: 'to walk', type: VerbEndingType.AR, isRegular: true },
  { infinitive: 'beber', translation: 'to drink', type: VerbEndingType.ER, isRegular: true },
  { infinitive: 'escribir', translation: 'to write', type: VerbEndingType.IR, isRegular: true },
  { infinitive: 'hacer', translation: 'to do/make', type: VerbEndingType.ER, isRegular: false },
  { infinitive: 'poder', translation: 'to be able to', type: VerbEndingType.ER, isRegular: false },
  { infinitive: 'decir', translation: 'to say/tell', type: VerbEndingType.IR, isRegular: false },
  { infinitive: 'ver', translation: 'to see', type: VerbEndingType.ER, isRegular: false },
  { infinitive: 'querer', translation: 'to want', type: VerbEndingType.ER, isRegular: false },
  { infinitive: 'saber', translation: 'to know (facts)', type: VerbEndingType.ER, isRegular: false },
  { infinitive: 'dar', translation: 'to give', type: VerbEndingType.AR, isRegular: false },
  { infinitive: 'venir', translation: 'to come', type: VerbEndingType.IR, isRegular: false },
  { infinitive: 'poner', translation: 'to put', type: VerbEndingType.ER, isRegular: false },
  { infinitive: 'salir', translation: 'to leave/go out', type: VerbEndingType.IR, isRegular: false },
  { infinitive: 'volver', translation: 'to return', type: VerbEndingType.ER, isRegular: false },
];

// --- NEW DATA FOR COMPOUND TENSES ---

// 4. Irregular Participles (Infinitive -> Participle)
export const IRREGULAR_PARTICIPLES: Record<string, string> = {
  'hacer': 'hecho',
  'escribir': 'escrito',
  'ver': 'visto',
  'romper': 'roto',
  'morir': 'muerto',
  'abrir': 'abierto',
  'decir': 'dicho',
  'poner': 'puesto',
  'volver': 'vuelto',
};

// 5. Haber Conjugations for Auxiliary
export const HABER_CONJUGATION: Record<string, string[]> = {
  // Present Perfect (uses Present of Haber)
  [TenseId.PRESENT_PERFECT]: ['he', 'has', 'ha', 'hemos', 'habéis', 'han'],
  // Pluperfect (uses Imperfect of Haber)
  [TenseId.PLUPERFECT]: ['había', 'habías', 'había', 'habíamos', 'habíais', 'habían'],
  // Future Perfect (uses Future of Haber)
  [TenseId.FUTURE_PERFECT]: ['habré', 'habrás', 'habrá', 'habremos', 'habréis', 'habrán'],
  // Conditional Perfect (uses Conditional of Haber)
  [TenseId.CONDITIONAL_PERFECT]: ['habría', 'habrías', 'habría', 'habríamos', 'habríais', 'habrían'],
  // Present Perfect Subjunctive (uses Present Subj of Haber)
  [TenseId.PRESENT_PERFECT_SUBJUNCTIVE]: ['haya', 'hayas', 'haya', 'hayamos', 'hayáis', 'hayan'],
  // Pluperfect Subjunctive (uses Imperfect Subj of Haber)
  [TenseId.PLUPERFECT_SUBJUNCTIVE]: ['hubiera', 'hubieras', 'hubiera', 'hubiéramos', 'hubierais', 'hubieran'],
};