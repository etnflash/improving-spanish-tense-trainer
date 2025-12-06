import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { TenseId } from '../types';

type VerbExamples = Partial<Record<TenseId, string[]>>;

type VerbModule = {
  verb?: string;
  default?: VerbExamples;
};

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.resolve(__dirname, '../modules/spanishTenseQuiz/data/verbExamplesData');

const REQUIRED_TENSES = Object.values(TenseId);

function formatHeading(title: string): string {
  const bar = '-'.repeat(title.length);
  return `\n${title}\n${bar}`;
}

async function loadModule(filePath: string): Promise<VerbModule> {
  const moduleUrl = pathToFileURL(filePath).href;
  return import(moduleUrl);
}

function assertDirectory(): void {
  if (!fs.existsSync(dataDir)) {
    throw new Error(`Verb data directory not found: ${dataDir}`);
  }
}

function collectVerbFiles(): string[] {
  return fs
    .readdirSync(dataDir)
    .filter((file) => file.endsWith('.ts'))
    .map((file) => path.join(dataDir, file))
    .sort();
}

function validateSentences(verbalId: string, tense: TenseId, sentences: string[] | undefined, errors: string[]): void {
  if (!Array.isArray(sentences) || sentences.length === 0) {
    errors.push(`${verbalId}: missing examples for tense ${tense}`);
    return;
  }

  const unique = new Set<string>();
  sentences.forEach((sentence, index) => {
    if (typeof sentence !== 'string' || !sentence.trim()) {
      errors.push(`${verbalId}: invalid sentence at ${tense}[${index}]`);
      return;
    }
    const normalized = sentence.trim();
    if (unique.has(normalized)) {
      errors.push(`${verbalId}: duplicate sentence detected in ${tense} -> "${normalized}"`);
    } else {
      unique.add(normalized);
    }
  });
}

async function validate(): Promise<void> {
  assertDirectory();

  const files = collectVerbFiles();
  if (!files.length) {
    throw new Error('No verb data files found for validation.');
  }

  const errors: string[] = [];
  const seenVerbs = new Map<string, string>();

  for (const filePath of files) {
    const relPath = path.relative(process.cwd(), filePath);
    let verbId: string | undefined;
    let payload: VerbExamples | undefined;

    try {
      const mod = await loadModule(filePath);
      verbId = mod.verb;
      payload = mod.default;
    } catch (error) {
      errors.push(`${relPath}: failed to import (${(error as Error).message})`);
      continue;
    }

    if (!verbId || typeof verbId !== 'string') {
      errors.push(`${relPath}: missing exported verb name`);
      continue;
    }

    if (seenVerbs.has(verbId)) {
      errors.push(`${relPath}: duplicate verb id "${verbId}" also defined in ${seenVerbs.get(verbId)}`);
    } else {
      seenVerbs.set(verbId, relPath);
    }

    if (!payload || typeof payload !== 'object') {
      errors.push(`${relPath}: default export must be an object of tense arrays`);
      continue;
    }

    for (const tense of REQUIRED_TENSES) {
      validateSentences(`${verbId} (${relPath})`, tense, payload[tense], errors);
    }
  }

  if (errors.length) {
    console.error(formatHeading('Verb example validation failed'));
    errors.forEach((message) => console.error('-', message));
    process.exitCode = 1;
    return;
  }

  console.log(formatHeading('Verb example validation succeeded'));
  console.log(`Validated ${files.length} verb modules covering ${REQUIRED_TENSES.length} tenses.`);
}

validate().catch((error) => {
  console.error(formatHeading('Validator crashed'));
  console.error(error);
  process.exit(1);
});
