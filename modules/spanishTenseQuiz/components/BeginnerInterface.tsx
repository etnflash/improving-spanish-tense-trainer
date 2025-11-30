import React, { useMemo } from 'react';
import { Question } from '../../../types';
import { getDistractors } from '../services/engine';

interface BeginnerInterfaceProps {
  question: Question;
  onSelect: (value: string) => void;
  disabled: boolean;
}

export const BeginnerInterface: React.FC<BeginnerInterfaceProps> = ({ question, onSelect, disabled }) => {
  
  const options = useMemo(() => {
    return getDistractors(question.verb, question.tense, question.regularEnding, question.correctConjugation);
  }, [question]);

  const isFullForm = !question.regularEnding; // Irregular or Compound

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-6 text-center">
        <p className="text-sm text-slate-500 uppercase tracking-wide mb-2">Target</p>
        <div className="text-2xl font-bold text-slate-800 flex items-center justify-center gap-1">
          {!isFullForm ? (
            <>
              <span className="text-slate-400">{question.stem}</span>
              <span className="text-indigo-600 border-b-2 border-indigo-600 min-w-[30px] inline-block h-8">?</span>
            </>
          ) : (
            <span className="text-indigo-600 animate-pulse">Select the correct form</span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {options.map((opt, idx) => (
          <button
            key={`${opt}-${idx}`}
            onClick={() => onSelect(isFullForm ? opt : question.stem + opt)}
            disabled={disabled}
            className={`p-4 rounded-lg border-2 border-slate-200 hover:border-indigo-500 hover:bg-indigo-50 transition-all font-semibold text-lg text-slate-700 active:scale-95 disabled:opacity-50 disabled:pointer-events-none ${isFullForm ? 'text-base' : ''}`}
          >
            {isFullForm ? opt : `-${opt}`}
          </button>
        ))}
      </div>
       {isFullForm && (
         <p className="mt-4 text-xs text-center text-slate-400 font-medium">
           * Irregular or Compound Tense
         </p>
       )}
    </div>
  );
};