import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Difficulty, Question, PRONOUNS, TenseId } from '../../types';
import {
  generateQuestion,
  checkAnswer,
  recordAnswerResult,
  loadAdaptiveProgress,
  getAdaptiveInsights,
  TenseInsight,
  getPlayerBadge,
  PlayerBadge,
  getRecentAccuracyWindow,
  conjugate,
} from './services/engine';
import { BeginnerInterface } from './components/BeginnerInterface';
import { TypingInterface } from './components/TypingInterface';

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export default function SpanishTenseQuiz() {
  const [mode, setMode] = useState<Difficulty>(Difficulty.BEGINNER);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);
  const [streak, setStreak] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [tenseInsights, setTenseInsights] = useState<TenseInsight[]>([]);
  const [badgeInfo, setBadgeInfo] = useState<PlayerBadge>(getPlayerBadge());
  const [celebrationMessage, setCelebrationMessage] = useState<string | null>(null);
  const [showMomentumPanel, setShowMomentumPanel] = useState(true);
  const [showAllFocus, setShowAllFocus] = useState(false);
  const [recentSnapshot, setRecentSnapshot] = useState(() => getRecentAccuracyWindow());
  const [mistakeBreakdown, setMistakeBreakdown] = useState<null | {
    verb: string;
    translation: string;
    tense: TenseId;
    rows: { pronoun: string; conjugation: string }[];
  }>(null);
  const mistakeBreakdownRef = useRef<HTMLDivElement | null>(null);

  const insightSummary = useMemo(() => {
    const attempts = tenseInsights.reduce((sum, entry) => sum + entry.attempts, 0);
    const correct = tenseInsights.reduce((sum, entry) => sum + entry.correct, 0);
    const accuracy = attempts === 0 ? 1 : correct / attempts;
    const orderedFocus = [...tenseInsights]
      .filter((entry) => entry.attempts > 0)
      .sort((a, b) => a.recentAccuracy - b.recentAccuracy || b.priority - a.priority);
    const focus = orderedFocus.slice(0, 3);
    return {
      attempts,
      correct,
      accuracy,
      focus,
      orderedFocus,
    };
  }, [tenseInsights]);

  const focusCards = useMemo(() => {
    return showAllFocus ? insightSummary.orderedFocus : insightSummary.focus;
  }, [showAllFocus, insightSummary]);

  const canExpandFocus = insightSummary.orderedFocus.length > 3;

  const formatTenseLabel = useCallback((tense: TenseId) => {
    return tense.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
  }, []);

  // Tense Selection State
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [selectedTenses, setSelectedTenses] = useState<TenseId[]>(Object.values(TenseId));

  // Load persisted adaptive stats before first question
  useEffect(() => {
    loadAdaptiveProgress();
    setTenseInsights(getAdaptiveInsights());
    setBadgeInfo(getPlayerBadge());
    setRecentSnapshot(getRecentAccuracyWindow());
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem('improving-show-momentum');
      if (stored !== null) {
        setShowMomentumPanel(stored === 'true');
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('improving-show-momentum', showMomentumPanel ? 'true' : 'false');
    }
    if (!showMomentumPanel) {
      setShowAllFocus(false);
    }
  }, [showMomentumPanel]);

  // Initialize first question
  useEffect(() => {
    nextQuestion();
  }, []); // Run once on mount

  const nextQuestion = () => {
    setFeedback(null);
    setMistakeBreakdown(null);
    setIsAnimating(true);
    setTimeout(() => {
      // Pass the selected tenses to the generator
      setCurrentQuestion(generateQuestion(selectedTenses));
      setIsAnimating(false);
    }, 200);
  };

  const refreshInsights = useCallback(() => {
    const latest = getAdaptiveInsights();
    setTenseInsights(latest);
    setRecentSnapshot(getRecentAccuracyWindow());
    return latest;
  }, []);

  const refreshBadge = useCallback(() => {
    setBadgeInfo(getPlayerBadge());
  }, []);

  const buildConjugationBreakdown = useCallback((question: Question) => {
    return PRONOUNS.map((pronoun, index) => {
      const form = conjugate(question.verb, question.tense, index).full || '—';
      return {
        pronoun,
        conjugation: form === '-' ? '—' : form,
      };
    });
  }, []);

  const maskExampleSentence = useCallback(
    (sentence?: string) => {
      if (!sentence || !currentQuestion) return sentence;
      const pattern = escapeRegExp(currentQuestion.correctConjugation);
      return sentence.replace(new RegExp(pattern, 'giu'), '_______');
    },
    [currentQuestion],
  );

  const handleAnswer = useCallback(
    (input: string) => {
      if (!currentQuestion) return;

      const correct = checkAnswer(input, currentQuestion.correctConjugation, mode);

      recordAnswerResult(currentQuestion.tense, correct);
      const latest = refreshInsights();
      refreshBadge();

      if (correct) {
        const tenseStats = latest.find((entry) => entry.tense === currentQuestion.tense);
        if (tenseStats && tenseStats.recentSampleSize >= 3 && tenseStats.recentAccuracy === 1) {
          const message = `🔥 Perfect run in ${formatTenseLabel(currentQuestion.tense)}!`;
          setCelebrationMessage(message);
          setTimeout(() => setCelebrationMessage(null), 2500);
        }
        setStreak((s) => s + 1);
        setFeedback({
          isCorrect: true,
          message: '¡Excelente!',
        });
        setMistakeBreakdown(null);
        // Auto advance after short delay
        setTimeout(nextQuestion, 1500);
      } else {
        setCelebrationMessage(null);
        setStreak(0);
        setFeedback({
          isCorrect: false,
          message: `Incorrect. The answer was "${currentQuestion.correctConjugation}"`,
        });
        setMistakeBreakdown({
          verb: currentQuestion.verb.infinitive,
          translation: currentQuestion.verb.translation,
          tense: currentQuestion.tense,
          rows: buildConjugationBreakdown(currentQuestion),
        });
      }
    },
    [buildConjugationBreakdown, currentQuestion, mode, selectedTenses],
  ); // Added selectedTenses to deps if needed, though strictly handled by nextQuestion

  const skipQuestion = () => {
    if (currentQuestion) {
      recordAnswerResult(currentQuestion.tense, false);
      refreshInsights();
      refreshBadge();
    }
    setStreak(0);
    nextQuestion();
  };

  const showBreakdown = Boolean(mistakeBreakdown && feedback && !feedback.isCorrect);

  useEffect(() => {
    if (showBreakdown && mistakeBreakdownRef.current) {
      mistakeBreakdownRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [showBreakdown]);

  const toggleTense = (tense: TenseId) => {
    setSelectedTenses((prev) => {
      const exists = prev.includes(tense);
      if (exists) {
        // Prevent unchecking the last one
        if (prev.length === 1) return prev;
        return prev.filter((t) => t !== tense);
      } else {
        return [...prev, tense];
      }
    });
  };

  const toggleAllTenses = () => {
    if (selectedTenses.length === Object.values(TenseId).length) {
      // If all selected, select just Present (as a fallback minimum)
      setSelectedTenses([TenseId.PRESENT]);
    } else {
      // Select all
      setSelectedTenses(Object.values(TenseId));
    }
  };

  // Determine which UI to show
  const renderInterface = () => {
    if (!currentQuestion)
      return <div className="p-8 text-center text-slate-400">Loading Quiz...</div>;

    if (mode === Difficulty.BEGINNER) {
      return (
        <BeginnerInterface
          question={currentQuestion}
          onSelect={handleAnswer}
          disabled={!!feedback}
        />
      );
    }
    return <TypingInterface difficulty={mode} onSubmit={handleAnswer} disabled={!!feedback} />;
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-12 px-4">
      {/* Header / Mode Selector */}
      <header className="mb-8 w-full max-w-2xl flex flex-col items-center relative z-10">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">I'mProving</h1>
        <h2 className="text-slate-500 font-medium mb-6">Spanish Tense Trainer</h2>

        <div className="flex gap-2 w-full justify-center items-center">
          <div className="bg-white p-1 rounded-xl shadow-sm border border-slate-200 flex gap-1">
            {Object.values(Difficulty).map((d) => (
              <button
                key={d}
                onClick={() => {
                  setMode(d);
                  nextQuestion();
                  setStreak(0);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  mode === d
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                {d.charAt(0) + d.slice(1).toLowerCase()}
              </button>
            ))}
          </div>

          {/* Tense Settings Button */}
          <button
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            className={`p-3 rounded-xl shadow-sm border transition-all ${isSettingsOpen ? 'bg-indigo-100 border-indigo-300 text-indigo-700' : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'}`}
            title="Filter Tenses"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
          </button>
        </div>

        {/* Settings Panel */}
        {isSettingsOpen && (
          <div className="absolute top-full mt-4 w-full bg-white p-6 rounded-2xl shadow-xl border border-slate-200 animate-in fade-in slide-in-from-top-2 z-20">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-slate-800">Select Tenses</h3>
              <button
                onClick={toggleAllTenses}
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 underline"
              >
                Toggle All
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {Object.values(TenseId).map((t) => (
                <button
                  key={t}
                  onClick={() => toggleTense(t)}
                  className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    selectedTenses.includes(t)
                      ? 'bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200'
                      : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedTenses.includes(t) ? 'border-indigo-500 bg-indigo-500' : 'border-slate-300'}`}
                  >
                    {selectedTenses.includes(t) && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  {t.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                </button>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => {
                  setIsSettingsOpen(false);
                  nextQuestion();
                  setStreak(0);
                }}
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Apply & Restart
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Card */}
      <main
        className={`w-full max-w-2xl mb-6 transition-opacity duration-200 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
      >
        {currentQuestion && (
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            {/* Question Header */}
            <div className="bg-slate-900 p-8 text-center relative">
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <span className="text-slate-400 text-xs font-bold tracking-wider">STREAK</span>
                <span className="bg-indigo-500 text-white px-2 py-0.5 rounded text-sm font-bold">
                  {streak}
                </span>
              </div>

              <div className="inline-block px-3 py-1 bg-slate-800 rounded-full text-indigo-300 text-xs font-bold tracking-widest uppercase mb-4">
                {currentQuestion.tense.replace(/_/g, ' ')} Tense
              </div>

              <div className="flex flex-col gap-2 mb-2">
                <h3 className="text-4xl text-white font-bold">
                  {PRONOUNS[currentQuestion.pronounIndex]}
                </h3>
                <p className="text-slate-400 text-lg">
                  + {currentQuestion.verb.infinitive}
                  <span className="text-slate-600 ml-2 italic">
                    ({currentQuestion.verb.translation})
                  </span>
                </p>
              </div>
            </div>

            {/* Interaction Area */}
            <div
              className={`p-8 bg-white min-h-[300px] flex flex-col justify-center ${
                showBreakdown ? 'pb-36 md:pb-8' : ''
              }`}
            >
              {/* Example Sentence Display */}
              {currentQuestion.exampleSentence && (
                <div className="mt-6 mb-2 p-4 bg-indigo-50 rounded-xl border border-indigo-100 text-center">
                  <p className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">
                    Context
                  </p>
                  <p className="text-indigo-900 font-medium text-lg">
                    {feedback
                      ? currentQuestion.exampleSentence
                      : maskExampleSentence(currentQuestion.exampleSentence)}
                  </p>
                </div>
              )}

              {renderInterface()}

              {/* Feedback Overlay */}
              {feedback && (
                <div
                  className={`mt-6 p-4 rounded-xl text-center animate-in fade-in slide-in-from-bottom-4 ${
                    feedback.isCorrect
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  <p className="font-bold text-lg mb-1">
                    {feedback.isCorrect ? 'Correct!' : 'Wrong!'}
                  </p>
                  <p>{feedback.message}</p>
                  {!feedback.isCorrect && (
                    <button
                      onClick={nextQuestion}
                      className="mt-3 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-800 rounded-lg text-sm font-semibold"
                    >
                      Next Question
                    </button>
                  )}
                </div>
              )}

              {mistakeBreakdown && feedback && !feedback.isCorrect && (
                <div
                  ref={mistakeBreakdownRef}
                  className="hidden md:block mt-6 bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 animate-in fade-in slide-in-from-bottom-2"
                >
                  <div className="flex flex-col gap-1 mb-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400 font-semibold">
                      Study This Pattern
                    </p>
                    <h4 className="text-xl font-bold">
                      {mistakeBreakdown.verb} · {formatTenseLabel(mistakeBreakdown.tense)}
                    </h4>
                    <p className="text-sm text-slate-300">{mistakeBreakdown.translation}</p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {mistakeBreakdown.rows.map((row) => (
                      <div
                        key={`${mistakeBreakdown.verb}-${row.pronoun}`}
                        className="bg-slate-800/60 rounded-xl p-3 border border-slate-700"
                      >
                        <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                          {row.pronoun}
                        </p>
                        <p className="text-base font-bold mt-1 text-white break-words">
                          {row.conjugation}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer Actions */}
            <div className="bg-slate-50 p-4 border-t border-slate-100 flex justify-between items-center">
              <button
                onClick={skipQuestion}
                className="text-slate-400 hover:text-slate-600 text-sm font-medium px-4 py-2"
              >
                Skip Question
              </button>
              <div className="text-xs text-slate-300">ID: {currentQuestion.id.split('-')[0]}</div>
            </div>
          </div>
        )}
      </main>

      {/* Motivation Panel */}
      <section className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-5">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                  Momentum Pulse
                </p>
                <h3 className="text-xl font-bold text-slate-900">Keep the streak alive!</h3>
                {showMomentumPanel ? (
                  recentSnapshot.sampleSize > 0 ? (
                    <p className="text-sm text-slate-500">
                      Recent accuracy {Math.round(recentSnapshot.accuracy * 100)}% · last{' '}
                      {recentSnapshot.sampleSize}/{recentSnapshot.windowSize} attempts
                    </p>
                  ) : (
                    <p className="text-sm text-slate-500">
                      Answer a few questions to unlock personalized focus tips.
                    </p>
                  )
                ) : (
                  <p className="text-sm text-slate-500">
                    Panel hidden · click show to bring it back.
                  </p>
                )}
              </div>
              <div className="flex items-center gap-3">
                {showMomentumPanel && insightSummary.attempts > 0 && (
                  <div className="bg-indigo-50 border border-indigo-100 rounded-xl px-4 py-3 text-indigo-900 text-sm font-semibold">
                    Daily boost: conquer{' '}
                    {formatTenseLabel(insightSummary.focus[0]?.tense ?? TenseId.PRESENT)} next!
                  </div>
                )}
                <button
                  onClick={() => setShowMomentumPanel((v) => !v)}
                  className="px-3 py-2 rounded-lg border border-slate-200 text-sm font-semibold text-slate-500 hover:bg-slate-50"
                >
                  {showMomentumPanel ? 'Hide Panel' : 'Show Panel'}
                </button>
              </div>
            </div>

            {showMomentumPanel ? (
              <>
                {badgeInfo && (
                  <div className="flex flex-col gap-2 bg-slate-900 rounded-2xl p-4 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-300 font-semibold">
                          Badge
                        </p>
                        <p className="text-2xl font-extrabold">
                          Level {badgeInfo.level}: {badgeInfo.title}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-slate-300">XP</p>
                        <p className="text-lg font-bold">
                          {badgeInfo.currentLevelXp}/{badgeInfo.nextLevelXp}
                        </p>
                      </div>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-400 via-indigo-300 to-pink-300"
                        style={{ width: `${Math.min(100, Math.round(badgeInfo.progress * 100))}%` }}
                      />
                    </div>
                    <p className="text-xs text-slate-300">
                      Answer questions to earn XP. Consecutive correct answers grant bonus points!
                    </p>
                  </div>
                )}

                {celebrationMessage && (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-4 text-green-800 font-semibold">
                    {celebrationMessage}
                  </div>
                )}

                {focusCards.length > 0 && (
                  <div className="flex flex-col gap-2">
                    {canExpandFocus && (
                      <div className="flex justify-end">
                        <button
                          onClick={() => setShowAllFocus((v) => !v)}
                          className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 underline"
                        >
                          {showAllFocus
                            ? 'Show less'
                            : `Show all (${insightSummary.orderedFocus.length})`}
                        </button>
                      </div>
                    )}
                    <div className="grid gap-3 sm:grid-cols-3">
                      {focusCards.map((entry) => {
                        const recentPercent = Math.round(entry.recentAccuracy * 100);
                        const sampleLabel =
                          entry.recentSampleSize > 0
                            ? `Last ${entry.recentSampleSize} tries`
                            : 'Warming up';
                        const encouragement =
                          recentPercent >= 80 ? 'On fire!' : 'Next milestone within reach';
                        return (
                          <div
                            key={entry.tense}
                            className="bg-slate-50 rounded-xl border border-slate-100 p-4"
                          >
                            <div className="flex items-center justify-between">
                              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                Focus Tense
                              </p>
                              <p className="text-xs font-semibold text-indigo-500">
                                Level {entry.level}
                              </p>
                            </div>
                            <p className="text-base font-bold text-slate-900">
                              {formatTenseLabel(entry.tense)}
                            </p>
                            <p className="text-sm text-indigo-600 font-semibold mt-1">
                              Recent accuracy {recentPercent}%
                            </p>
                            <p className="text-xs text-slate-500 mt-1">{sampleLabel}</p>
                            <div className="mt-2">
                              <div className="h-1.5 bg-white/70 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-indigo-500 to-pink-400"
                                  style={{
                                    width: `${Math.min(100, Math.round(entry.progress * 100))}%`,
                                  }}
                                />
                              </div>
                              <p className="text-[10px] text-slate-400 mt-1">
                                {entry.currentLevelXp}/{entry.nextLevelXp} XP
                              </p>
                            </div>
                            <p className="text-xs text-green-600 font-semibold mt-1">
                              {encouragement}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-slate-50 border border-dashed border-slate-200 rounded-xl p-4 text-sm text-slate-500">
                Momentum panel is hidden. Click “Show Panel” when you want a motivation boost.
              </div>
            )}
          </div>
        </div>
      </section>

      {showBreakdown && mistakeBreakdown && (
        <>
          <div
            className="fixed inset-0 bg-slate-900/60 z-40 md:hidden"
            onClick={() => setMistakeBreakdown(null)}
          />
          <div
            className="fixed inset-x-0 bottom-0 z-50 md:hidden px-4 pb-4"
            role="dialog"
            aria-label="Conjugation breakdown"
          >
            <div
              className="bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-2xl p-5 max-h-[70vh] overflow-y-auto"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex flex-col gap-1 mb-4">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400 font-semibold">
                  Study This Pattern
                </p>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-xl font-bold">
                      {mistakeBreakdown.verb} · {formatTenseLabel(mistakeBreakdown.tense)}
                    </h4>
                    <p className="text-sm text-slate-300">{mistakeBreakdown.translation}</p>
                  </div>
                  <button
                    className="text-xs font-semibold text-slate-300 underline"
                    onClick={() => setMistakeBreakdown(null)}
                  >
                    닫기
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {mistakeBreakdown.rows.map((row) => (
                  <div
                    key={`${mistakeBreakdown.verb}-${row.pronoun}`}
                    className="bg-slate-800/60 rounded-xl p-3 border border-slate-700"
                  >
                    <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                      {row.pronoun}
                    </p>
                    <p className="text-base font-bold mt-1 text-white break-words">
                      {row.conjugation}
                    </p>
                  </div>
                ))}
              </div>
              <button
                onClick={nextQuestion}
                className="mt-5 w-full px-4 py-3 rounded-2xl bg-indigo-500 text-white font-semibold text-base"
              >
                Next Question
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
