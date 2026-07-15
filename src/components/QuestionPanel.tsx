import { useEffect, useState, useCallback } from 'react';
import type { Question, Contestant } from '../types/game';
import { ttsService } from '../services/ttsService';

interface QuestionPanelProps {
  question: Question;
  contestant: Contestant | null;
  phase: string;
  onAnswer: (index: number) => void;
  onTimeout: () => void;
  onBuzz?: () => void;
  isBuzzerPhase?: boolean;
  answeredCorrectly: boolean | null;
  selectedAnswerText?: string | null;
  catchphrase?: string | null;
}

export function QuestionPanel({
  question,
  contestant,
  phase,
  onAnswer,
  onTimeout,
  onBuzz,
  isBuzzerPhase,
  answeredCorrectly,
  selectedAnswerText,
  catchphrase,
}: QuestionPanelProps) {
  const [timeLeft, setTimeLeft] = useState(100);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [hasSpoken, setHasSpoken] = useState(false);

  const isHumanTurn = contestant?.isHuman;
  const isAnswering = phase.includes('question') || phase.includes('answer') || phase.includes('result');
  const showOptions = isAnswering && (answeredCorrectly === null);

  // Vibrate when it's the human's turn (buzz or answer)
  useEffect(() => {
    if (isBuzzerPhase || (showOptions && isHumanTurn)) {
      try { navigator.vibrate?.(200); } catch { /* not supported */ }
    }
  }, [isBuzzerPhase, showOptions, isHumanTurn, question.id]);

  useEffect(() => {
    if (!hasSpoken && question && !isBuzzerPhase) {
      setHasSpoken(true);
      ttsService.speakQuestion(question.text).catch(() => {});
    }
  }, [question, hasSpoken, isBuzzerPhase]);

  // Reset when question changes
  useEffect(() => {
    setTimeLeft(100);
    setSelectedAnswer(null);
    setHasSpoken(false);
  }, [question.id]);

  // Timer for answering phase — 6 seconds (2x longer)
  useEffect(() => {
    if (!showOptions || !isHumanTurn) return;

    const startTime = Date.now();
    const duration = 9000; // 9 seconds (1.5x more comfortable)

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 100 - (elapsed / duration) * 100);
      setTimeLeft(remaining);

      if (elapsed >= duration) {
        clearInterval(interval);
        onTimeout();
      }
    }, 30);

    return () => clearInterval(interval);
  }, [showOptions, isHumanTurn, question.id, onTimeout]);

  const handleAnswer = useCallback((index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    ttsService.stop();
    onAnswer(index);
  }, [selectedAnswer, onAnswer]);

  const getOptionStyle = (index: number) => {
    if (selectedAnswer === null && answeredCorrectly === null) {
      return 'bg-white/5 border-white/10 hover:border-blue-400/30 hover:bg-white/10 text-white/80';
    }
    if (answeredCorrectly !== null) {
      if (index === question.options.indexOf(question.answer)) {
        return 'bg-game-green/20 border-game-green text-game-green';
      }
      if (selectedAnswer === index && !answeredCorrectly) {
        return 'bg-game-red/20 border-game-red text-game-red';
      }
    }
    return 'bg-white/5 border-white/10 text-white/30';
  };

  // Buzzer phase — always show the buzz button for the human
  if (isBuzzerPhase) {
    return (
      <div className="flex flex-col items-center gap-4 p-6 animate-slide-up">
        <div className="w-full bg-game-surface rounded-xl p-4 border border-white/10">
          <div className="text-xs text-blue-300/40 uppercase tracking-wider mb-2">
            {question.category}
          </div>
          <p className="text-lg font-medium text-white/90 leading-relaxed">
            {question.text}
          </p>
        </div>

        <button
          onClick={onBuzz}
          className="w-32 h-32 rounded-full bg-gradient-to-br from-game-red to-red-700 text-white font-bold text-lg animate-buzz-pulse shadow-xl shadow-red-500/30 active:scale-95 transition-transform"
        >
          <div className="flex flex-col items-center">
            <span className="text-2xl">🔴</span>
            <span className="text-base mt-1">BUZZ!</span>
          </div>
        </button>

        <p className="text-sm text-blue-300/30">Wciśnij przycisk, aby odpowiedzieć</p>
      </div>
    );
  }

  // Question display with options
  return (
    <div className="flex flex-col gap-3 p-4 animate-slide-up">
      {/* Question card */}
      <div className="bg-gradient-to-br from-game-surface to-game-surface-light rounded-xl p-5 border border-white/10 shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-blue-300/40 uppercase tracking-wider">
            {question.category}
          </span>
          <span className="text-xs text-blue-300/20">·</span>
          <span className={`text-xs uppercase tracking-wider ${
            question.difficulty === 'easy' ? 'text-game-green/50' :
            question.difficulty === 'medium' ? 'text-game-amber/50' :
            'text-game-red/50'
          }`}>
            {question.difficulty}
          </span>
        </div>

        <p className="text-lg md:text-xl font-medium text-white/90 leading-relaxed">
          {question.text}
        </p>
      </div>

      {/* Timer bar */}
      {showOptions && isHumanTurn && (
        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-100"
            style={{
              width: `${timeLeft}%`,
              backgroundColor: timeLeft > 50 ? '#16a34a' : timeLeft > 20 ? '#f59e0b' : '#dc2626',
            }}
          />
        </div>
      )}

      {/* Answer options — only show for the player's turn */}
      {showOptions && isHumanTurn && (
        <div className="grid grid-cols-1 gap-2">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={selectedAnswer !== null}
              className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 ${
                getOptionStyle(index)
              } ${selectedAnswer === null ? 'active:scale-[0.98] cursor-pointer' : 'cursor-default'}`}
            >
              <div className="flex items-center gap-3">
                <span className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold ${
                  selectedAnswer === null
                    ? 'bg-white/5 text-blue-300/50'
                    : index === question.options.indexOf(question.answer)
                    ? 'bg-game-green/30 text-game-green'
                    : selectedAnswer === index
                    ? 'bg-game-red/30 text-game-red'
                    : 'bg-white/5 text-blue-300/30'
                }`}>
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-base">{option}</span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* AI waiting indicator */}
      {showOptions && !isHumanTurn && selectedAnswer === null && (
        <div className="flex items-center justify-center gap-2 text-blue-300/40 py-3">
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
          <span className="text-base">{contestant?.name} odpowiada...</span>
        </div>
      )}

      {/* Result display — with selected answer and catchphrase inline */}
      {answeredCorrectly !== null && (
        <div className="space-y-3 animate-fade-in">
          {/* The selected answer + result */}
          <div className={`p-4 rounded-xl border ${
            answeredCorrectly
              ? 'bg-game-green/10 border-game-green/30'
              : 'bg-game-red/10 border-game-red/30'
          }`}>
            {/* Who answered */}
            {contestant && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{contestant.emoji}</span>
                <span className={`text-base font-medium ${answeredCorrectly ? 'text-game-green' : 'text-game-red'}`}>
                  {contestant.name}
                </span>
              </div>
            )}

            {/* What they answered */}
            {selectedAnswerText && (
              <div className="mb-2">
                <span className="text-xs text-blue-300/40 uppercase tracking-wider">Odpowiedź:</span>
                <p className={`text-base mt-0.5 ${answeredCorrectly ? 'text-game-green/80' : 'text-game-red/80'}`}>
                  {selectedAnswerText}
                </p>
              </div>
            )}

            {/* Correct/wrong label */}
            <div className={`text-lg font-bold ${answeredCorrectly ? 'text-game-green' : 'text-game-red'}`}>
              {answeredCorrectly ? '✓ PRAWIDŁOWO!' : '✗ NIEPRAWIDŁOWO'}
            </div>

            {/* Show correct answer if wrong */}
            {!answeredCorrectly && (
              <div className="text-base opacity-80 mt-1">
                Poprawna odpowiedź: <strong>{question.answer}</strong>
              </div>
            )}
          </div>

          {/* Catchphrase inline with the result */}
          {catchphrase && (
            <div className="bg-gradient-to-r from-purple-500/8 to-pink-500/8 border border-purple-500/15 rounded-xl p-3">
              <p className="text-sm text-purple-300/60 italic leading-relaxed text-center">
                &ldquo;{catchphrase}&rdquo;
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
