import { TenseId } from '../../../types';

type VerbExamples = Partial<Record<TenseId, string[]>>;
type VerbExamplesMap = Record<string, VerbExamples>;

type VerbModule = {
  default: VerbExamples;
  verb: string;
};

const modules = import.meta.glob<VerbModule>('./verbExamplesData/*.ts', { eager: true });

function buildVerbKey(filePath: string, explicitKey?: string): string {
  if (explicitKey) {
    return explicitKey;
  }
  const fileName = filePath.split('/').pop() ?? '';
  return fileName.replace(/\.ts$/, '');
}

export const VERB_EXAMPLES: VerbExamplesMap = Object.entries(modules)
  .map(([filePath, mod]) => {
    const typed = mod as VerbModule;
    return [buildVerbKey(filePath, typed.verb), typed.default] as const;
  })
  .sort(([a], [b]) => a.localeCompare(b))
  .reduce((acc, [verb, examples]) => {
    acc[verb] = examples;
    return acc;
  }, {} as VerbExamplesMap);
