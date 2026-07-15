import { useEffect, useRef, useState } from 'react';
import { useGameLogic } from '../hooks/useGameLogic';
import { ContestantCard } from './ContestantCard';
import { QuestionPanel } from './QuestionPanel';
import { GameOver } from './GameOver';
import { presenter } from '../services/presenterService';
import { getRandomCatchphrase } from '../data/contestants';

interface Props {
  playerPosition: number;
  onRestart: () => void;
}

export function GameScreen({ playerPosition, onRestart }: Props) {
  const { state, startGame, playerAnswer, playerBuzz, nominate, timeout, advance } = useGameLogic();
  const toRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [started, setStarted] = useState(false);
  const [bubbleMessage, setBubbleMessage] = useState<string | null>(null);
  const bubbleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [resultCatchphrase, setResultCatchphrase] = useState<string | null>(null);
  // Guard against Strict Mode double-fire + dedup TTS calls
  const speechFingerprint = useRef<string | null>(null);

  console.log(`[GameScreen] phase=${state.phase} idx=${state.stage1ContestantIndex} answered=${state.answeredCorrectly} accum=${state.stage1Pass} currentId=${state.currentContestantId} msg=${state.message}`);

  // Init once
  useEffect(() => {
    if (!started) { startGame(playerPosition); setStarted(true); }
  }, [playerPosition, startGame, started]);

  // Show bubble message for AI catchphrases
  const showBubble = (msg: string | null, duration = 3000) => {
    if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
    setBubbleMessage(msg);
    if (msg) {
      bubbleTimer.current = setTimeout(() => setBubbleMessage(null), duration);
    }
  };

  // Update result catchphrase — passed to QuestionPanel
  useEffect(() => {
    if (state.answeredCorrectly === null) {
      setResultCatchphrase(null);
      return;
    }
    const isCorrect = state.answeredCorrectly === true;

    if (state.phase === 'stage3_result') {
      // Use currentContestantId — handles both buzz and nomination answers
      const answererId = state.currentContestantId;
      if (answererId !== null && answererId !== 0) {
        const answerer = state.contestants.find(c => c.id === answererId);
        if (answerer) {
          setResultCatchphrase(`"${getRandomCatchphrase(answerer, isCorrect ? 'correct' : 'wrong')}"`);
          return;
        }
      }
    } else if (state.currentContestantId !== null && state.currentContestantId !== 0) {
      const current = state.contestants.find(c => c.id === state.currentContestantId);
      if (current) {
        setResultCatchphrase(`"${getRandomCatchphrase(current, isCorrect ? 'correct' : 'wrong')}"`);
        return;
      }
    }
    setResultCatchphrase(null);
  }, [state.answeredCorrectly, state.currentContestantId, state.phase]);

  // Build a fingerprint to dedup TTS calls (React Strict Mode double-fires effects)
  const ttsKey = `${state.phase}|${state.currentQuestion?.id ?? ''}|${state.answeredCorrectly}|${state.currentContestantId}|${state.stage3BuzzerWinner}`;

  // Auto-advance through phase transitions + presenter reactions
  useEffect(() => {
    if (toRef.current) clearTimeout(toRef.current);

    const current = state.contestants.find(c => c.id === state.currentContestantId);
    const phase = state.phase;

    // Helper: call TTS only once per unique state
    const speak = (fn: () => Promise<void>) => {
      if (speechFingerprint.current === ttsKey) {
        console.log(`[TTS] SKIP (duplicate) key=${ttsKey}`);
        return;
      }
      speechFingerprint.current = ttsKey;
      console.log(`[TTS] SPEAK key=${ttsKey}`);
      fn().catch(() => {});
    };

    if (phase === 'stage1_intro') {
      speak(() => presenter.announceIntro());
      toRef.current = setTimeout(() => advance(), 2500);
      return;
    }

    if (phase === 'stage1_result') {
      const isCorrect = state.answeredCorrectly === true;
      const isPlayer = state.currentContestantId === 0;

      if (!isCorrect && state.currentQuestion) {
        speak(() => presenter.announceWrong(isPlayer, state.currentQuestion!.answer, state.selectedAnswerText));
      } else if (isCorrect && state.currentQuestion) {
        speak(() => presenter.announceCorrect(isPlayer, state.currentQuestion!.answer));
      }

      toRef.current = setTimeout(() => advance(), 2500);
      return;
    }

    if (phase === 'stage2_intro') {
      speak(() => presenter.announceStage2());
      toRef.current = setTimeout(() => advance(), 3000);
      return;
    }

    if (phase === 'stage2_result') {
      const isCorrect = state.answeredCorrectly === true;
      const isPlayer = state.currentContestantId === 0;

      if (isCorrect && state.currentQuestion) {
        speak(() => presenter.announceCorrect(isPlayer, state.currentQuestion!.answer));
      } else {
        if (isPlayer) speak(() => presenter.announceWrong(true, state.currentQuestion?.answer ?? '', state.selectedAnswerText));
        else if (current) speak(() => presenter.announceAiWrong(current.name));
      }

      toRef.current = setTimeout(() => advance(), 3000);
      return;
    }

    if (phase === 'stage3_intro') {
      speak(() => presenter.announceStage3());
      toRef.current = setTimeout(() => advance(), 3500);
      return;
    }

    if (phase === 'stage3_buzzer') {
      speak(() => presenter.announceBuzzOpen());
      return;
    }

    if (phase === 'stage3_result') {
      const isCorrect = state.answeredCorrectly === true;
      // Use currentContestantId to determine who actually answered
      const answererId = state.currentContestantId;
      const answerer = answererId !== null ? state.contestants.find(c => c.id === answererId) : null;

      if (isCorrect && state.currentQuestion) {
        speak(() => presenter.announceCorrect(answerer?.isHuman ?? false, state.currentQuestion!.answer));
      } else if (answerer?.isHuman) {
        speak(() => presenter.announceWrong(true, state.currentQuestion?.answer ?? '', state.selectedAnswerText));
      }

      toRef.current = setTimeout(() => advance(), 2500);
      return;
    }

    if (phase === 'stage3_nomination' && state.stage3BuzzerWinner !== null) {
      if (state.stage3SelfNominated) {
        speak(() => presenter.announceSelfNomination());
      } else {
        speak(() => presenter.announceNomination());
      }
      if (state.stage3BuzzerWinner !== 0) {
        const nominator = state.contestants.find(c => c.id === state.stage3BuzzerWinner);
        if (nominator) {
          // Pick target name — actual chosen target, or a random eligible contestant
          const target = state.nominatedTargetId
            ? state.contestants.find(c => c.id === state.nominatedTargetId)
            : state.contestants.filter(c => !c.isEliminated && c.id !== state.stage3BuzzerWinner).sort((a, b) => a.position - b.position)[0];
          const targetName = target?.name?.split(' ').slice(-1)[0];
          const phrase = getRandomCatchphrase(nominator, 'nominate', targetName);
          showBubble(`"${phrase}"`, 3000);
        }
      }
    }

    if (phase === 'stage2_nomination') {
      speak(() => presenter.announceNomination());
      const nominator = current;
      if (nominator && !nominator.isHuman) {
        // Pick a random eligible non-self contestant for the placeholder bubble
        // (the AI hasn't actually chosen yet — the actual pick happens in the AI effect)
        const candidates = state.contestants.filter(c => !c.isEliminated && c.id !== nominator.id);
        // Pick a candidate from the middle-ish range to avoid always showing "TY" for position-1 players
        const target = candidates.length > 1
          ? candidates[Math.floor(candidates.length / 2)]
          : candidates[0];
        if (target) {
          const targetName = target.name?.split(' ').slice(-1)[0];
          const phrase = getRandomCatchphrase(nominator, 'nominate', targetName);
          showBubble(`"${phrase}"`, 3000);
        }
      }
    }

    if (phase === 'gameover') {
      if (state.winnerId === 0) {
        speak(() => presenter.announcePlayerWins());
      }
    }

    const delays: Record<string, number> = {
      stage1_result: 2500,
      stage2_intro: 2000,
      stage2_result: 2500,
      stage3_intro: 3000,
      stage3_result: 2000,
    };
    const ms = delays[phase];
    if (ms !== undefined && toRef.current === null) {
      toRef.current = setTimeout(() => advance(), ms);
    }

    return () => {
      if (toRef.current) clearTimeout(toRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.phase, state.answeredCorrectly, advance, ttsKey]);

  // Cleanup bubble timer
  useEffect(() => {
    return () => { if (bubbleTimer.current) clearTimeout(bubbleTimer.current); };
  }, []);

  // Game over screen
  if (state.phase === 'gameover') {
    return <GameOver contestants={state.contestants} winnerId={state.winnerId} onRestart={onRestart} />;
  }

  const current = state.contestants.find(c => c.id === state.currentContestantId) ?? null;
  const isStage3 = state.phase.startsWith('stage3');
  const isBuzzer = state.phase === 'stage3_buzzer';
  const isNomination = state.phase === 'stage2_nomination' || state.phase === 'stage3_nomination';
  // Green-highlight: the person with the right to nominate/renominate
  // During nomination → the nominator is currentContestantId
  // During stage2/stage3 questions → nominatedBy (they can renominate if wrong)
  const nominatorHighlight = isNomination
    ? state.currentContestantId
    : (state.phase === 'stage2_result' || state.phase === 'stage3_result') && state.answeredCorrectly === true
      ? state.currentContestantId  // Właśnie zdobył prawo wyboru — od razu zielony
      : (state.phase.startsWith('stage2') || state.phase.startsWith('stage3')) ? state.nominatedBy : null;

  const badge = (() => {
    if (state.phase.startsWith('stage1')) return { label: 'Runda 1', color: 'bg-blue-500/20 text-blue-400' };
    if (state.phase.startsWith('stage2')) return { label: 'Runda 2', color: 'bg-amber-500/20 text-amber-400' };
    if (state.phase.startsWith('stage3')) return { label: 'Finał', color: 'bg-game-gold/20 text-game-gold' };
    return { label: '', color: '' };
  })();

  const human = state.contestants.find(c => c.isHuman);

  const sorted = [...state.contestants].sort((a, b) => a.position - b.position);

  return (
    <div className="min-h-[100dvh] bg-gradient-to-b from-game-bg via-blue-950 to-game-bg flex flex-col">
      {/* Top bar */}
      <div className="sticky top-0 z-20 bg-game-bg/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center justify-between px-4 py-2.5 max-w-lg mx-auto w-full">
          <div className="flex items-center gap-2">
            <span className="text-xs text-blue-300/30 font-game">1z10</span>
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${badge.color}`}>{badge.label}</span>
            <button
              onClick={onRestart}
              className="text-[10px] text-blue-400/30 hover:text-blue-400/70 transition-colors ml-1 underline decoration-dotted underline-offset-2"
              title="Nowa gra"
            >
              nowa gra
            </button>
          </div>
          <div className="flex items-center gap-3">
            {isStage3 && <span className="text-xs text-blue-300/50">Pytanie {state.finalQuestionCount}/40</span>}
            {human && <span className="text-sm text-game-amber/60 font-medium">{human.points} pkt</span>}
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col max-w-lg mx-auto w-full">
        {/* ── Always show the bigger 2-column grid ── */}
        <div className="px-3 pt-3 pb-2">
          {/* Nomination header */}
          {isNomination && (
            <div className="text-center mb-3 animate-slide-up">
              <p className="text-sm md:text-base text-blue-300/70">
                {current?.isHuman
                  ? `${current.emoji} ${current.name} — wybierz kolejnego`
                  : `${current?.emoji} ${current?.name} wybiera przeciwnika...`
                }
              </p>
              {state.phase === 'stage3_nomination' && (
                <p className="text-xs text-game-amber/50 mt-1">
                  Wybierz siebie za podwójną liczbę punktów!
                </p>
              )}
            </div>
          )}
          <div className="grid grid-cols-2 gap-2">
            {sorted.filter(c => !c.isEliminated).map(c => (
              <ContestantCard
                key={c.id}
                contestant={c}
                isActive={true}
                isCurrent={c.id === state.currentContestantId}
                size="md"
                selectable={isNomination && !!current?.isHuman}
                onClick={isNomination && current?.isHuman ? () => nominate(c.id) : undefined}
                selected={state.nominatedTargetId === c.id}
                nominatorId={current?.id}
                isNominator={c.id === nominatorHighlight}
                buzzed={state.stage3BuzzerWinner === c.id && state.phase === 'stage3_answer' && state.nominatedBy === null}
                buzzWins={isStage3 ? (state.stage3BuzzWins[c.id] ?? 0) : undefined}
              />
            ))}
          </div>
        </div>

        {/* Catchphrase bubble — pod kartami, żeby nie przesuwać UI */}
        {bubbleMessage && (
          <div className="px-3 pb-2 animate-slide-up">
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-3">
              <p className="text-sm text-purple-300/70 italic leading-relaxed text-center">{bubbleMessage}</p>
            </div>
          </div>
        )}

        {/* Message banner — też pod kartami */}
        {state.message && !bubbleMessage && (
          <div className="px-3 pb-2 animate-slide-up">
            <div className="bg-gradient-to-r from-transparent via-blue-500/5 to-transparent rounded-lg py-2 px-3">
              <p className="text-sm md:text-base text-blue-300/70 text-center leading-relaxed">{state.message}</p>
            </div>
          </div>
        )}

        {/* Content area */}
        <div className="flex-1 flex flex-col">
          {/* Question & answers */}
          {state.currentQuestion && !state.phase.includes('nomination') && !state.phase.includes('intro') && (
            <QuestionPanel
              question={state.currentQuestion}
              contestant={current}
              phase={state.phase}
              onAnswer={playerAnswer}
              onTimeout={timeout}
              onBuzz={playerBuzz}
              isBuzzerPhase={isBuzzer}
              answeredCorrectly={state.answeredCorrectly}
              selectedAnswerText={state.selectedAnswerText}
              catchphrase={resultCatchphrase}
            />
          )}

          {/* Intro screens */}
          {(state.phase === 'stage1_intro' || state.phase === 'stage2_intro' || state.phase === 'stage3_intro') && (
            <div className="flex-1 flex items-center justify-center p-6">
              <div className="text-center animate-fade-in">
                <div className="text-4xl mb-3">{state.phase === 'stage1_intro' ? '🎯' : state.phase === 'stage2_intro' ? '⚡' : '🏆'}</div>
                <h2 className="text-xl font-bold text-white/70 font-game">
                  {state.phase === 'stage1_intro' && 'Runda Eliminacyjna'}
                  {state.phase === 'stage2_intro' && 'Runda Nominacji'}
                  {state.phase === 'stage3_intro' && 'Wielki Finał'}
                </h2>
                <p className="text-sm md:text-base text-blue-300/40 mt-2">
                  {state.phase === 'stage1_intro' && 'Każdy z 10 zawodników odpowie na 2 pytania'}
                  {state.phase === 'stage2_intro' && 'Tylko 3 najlepszych przejdzie dalej!'}
                  {state.phase === 'stage3_intro' && 'Kto pierwszy, ten lepszy! 40 pytań o zwycięstwo!'}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
