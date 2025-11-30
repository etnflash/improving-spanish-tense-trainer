import React, { useState, useEffect, useRef } from 'react';
import { Difficulty } from '../../../types';

interface TypingInterfaceProps {
  difficulty: Difficulty;
  onSubmit: (val: string) => void;
  disabled: boolean;
}

export const TypingInterface: React.FC<TypingInterfaceProps> = ({ difficulty, onSubmit, disabled }) => {
  const [val, setVal] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus input on mount or when re-enabled
    if (!disabled) {
      setVal('');
      inputRef.current?.focus();
    }
  }, [disabled]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && val.trim().length > 0) {
      onSubmit(val);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          placeholder="Type the conjugation..."
          className="w-full p-4 text-center text-xl border-2 border-slate-300 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all disabled:bg-slate-100 disabled:text-slate-400"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <button
                onClick={() => onSubmit(val)}
                disabled={disabled || val.length === 0}
                className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 disabled:opacity-0 transition-opacity"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </button>
        </div>
      </div>
      
      {difficulty === Difficulty.INTERMEDIATE && (
        <p className="text-center mt-3 text-slate-500 text-sm">
          Accents are not required in this mode.
        </p>
      )}
      {difficulty === Difficulty.EXPERT && (
        <div className="mt-4 flex justify-center gap-2">
            {['á','é','í','ó','ú','ñ'].map(char => (
                <button 
                    key={char}
                    onClick={() => setVal(prev => prev + char)}
                    disabled={disabled}
                    className="w-8 h-8 rounded bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold text-sm disabled:opacity-50"
                >
                    {char}
                </button>
            ))}
        </div>
      )}
    </div>
  );
};
