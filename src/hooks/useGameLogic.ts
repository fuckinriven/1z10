import { useReducer, useCallback, useEffect, useRef } from 'react';
import type { GameState, Contestant, Question } from '../types/game';
import { createContestants } from '../data/contestants';
import { shuffleQuestions } from '../data/questions';

type GameAction =
  | { type: 'START_GAME'; playerPosition: number }
  | { type: 'NEXT_STAGE1' }
  | { type: 'ANSWER_STAGE1'; answerIndex: number }
  | { type: 'TIMEOUT_STAGE1' }
  | { type: 'ADVANCE_STAGE1_RESULT' }
  | { type: 'START_STAGE2' }
  | { type: 'ANSWER_STAGE2'; answerIndex: number }
  | { type: 'TIMEOUT_STAGE2' }
  | { type: 'NOMINATE_STAGE2'; targetId: number }
  | { type: 'ADVANCE_STAGE2_RESULT' }
  | { type: 'START_STAGE3' }
  | { type: 'PLAYER_BUZZ' }
  | { type: 'AI_BUZZ'; contestantId: number }
  | { type: 'ANSWER_STAGE3'; answerIndex: number }
  | { type: 'TIMEOUT_STAGE3' }
  | { type: 'NOMINATE_STAGE3'; targetId: number }
  | { type: 'ADVANCE_STAGE3_RESULT' }
  | { type: 'END_GAME' }
  | { type: 'SET_MESSAGE'; message: string };

function getActive(cs: Contestant[]) { return cs.filter(c => !c.isEliminated).sort((a, b) => a.position - b.position); }

function freshQuestion(usedIds: Set<number>): { q: Question; ids: Set<number> } {
  const all = shuffleQuestions();
  for (const q of all) if (!usedIds.has(q.id)) { const s = new Set(usedIds); s.add(q.id); return { q, ids: s }; }
  const fallback = shuffleQuestions()[0];
  return { q: fallback, ids: usedIds };
}

const INIT: GameState = {
  phase: 'menu', contestants: [], currentQuestion: null, currentContestantId: null,
  questionNumber: 0, stage1ContestantIndex: 0, stage1Pass: 0, stage1AccumMap: {},
  answeredCorrectly: null, nominatedBy: null, finalQuestionCount: 0, message: '',
  usedQuestionIds: new Set(), winnerId: null, stage3BuzzerWinner: null, stage3SelfNominated: false,
  selectedAnswerText: null, nominatedTargetId: null, stage3BuzzWins: {},
};

function red(state: GameState, action: GameAction): GameState {
  const dbg = (label: string) => console.log(`[REDUCER] ${label} | phase=${state.phase} | pass=${state.stage1Pass} | idx=${state.stage1ContestantIndex} | answered=${state.answeredCorrectly} | currentId=${state.currentContestantId}`);
  switch (action.type) {
    case 'START_GAME': {
      dbg('START_GAME');
      return { ...INIT, contestants: createContestants(action.playerPosition), phase: 'stage1_intro' as const, message: '"Jeden z Dziesięciu" — zaczynamy!' };
    }

    // ───── Stage 1 — each person gets 1 question per pass, 2 passes total ─────
    case 'NEXT_STAGE1': {
      const active = getActive(state.contestants);
      const currentIdx = state.stage1ContestantIndex;

      // Check if we've finished the current pass
      if (currentIdx >= active.length) {
        if (state.stage1Pass === 0) {
          // First pass done → start second pass
          dbg('NEXT_STAGE1 (→pass 1)');
          return { ...state, stage1Pass: 1, stage1ContestantIndex: 0, answeredCorrectly: null, currentQuestion: null, message: 'Koniec pierwszego okrążenia! Drugie pytanie dla każdego.' };
        } else {
          // Second pass done → check accumulation, go to stage 2
          const survivors = state.contestants.map(c => {
            const passed = state.stage1AccumMap[c.id] === true;
            return { ...c, passedStage1: passed, isEliminated: !passed };
          });
          dbg('NEXT_STAGE1 (→stage2)');
          return {
            ...state, contestants: survivors, stage1ContestantIndex: 0, stage1Pass: 0,
            stage1AccumMap: {}, phase: 'stage2_intro' as const, answeredCorrectly: null,
            selectedAnswerText: null, currentQuestion: null,
            message: 'Koniec rundy eliminacyjnej!',
          };
        }
      }

      // Ask question for currentIdx, then increment for next call
      const c = active[currentIdx];
      const fq = freshQuestion(state.usedQuestionIds);
      dbg('NEXT_STAGE1 (ask)');
      return { ...state, currentQuestion: fq.q, currentContestantId: c.id,
        stage1ContestantIndex: currentIdx + 1, answeredCorrectly: null, selectedAnswerText: null,
        phase: 'stage1_question' as const, usedQuestionIds: fq.ids,
        message: c.isHuman
          ? `Pytanie ${state.stage1Pass === 0 ? '1' : '2'} dla ${c.name}:`
          : `Pytanie dla ${c.name}:`
      };
    }

    case 'ANSWER_STAGE1': {
      if (!state.currentQuestion) return state;
      const c = state.contestants.find(x => x.id === state.currentContestantId);
      if (!c) return state;
      const correct = c.isHuman ? state.currentQuestion.options[action.answerIndex] === state.currentQuestion.answer : Math.random() < c.skill;
      // Check for instant elimination: 2nd pass + wrong answer + already had 0 correct
      const prevAccum = state.stage1AccumMap[c.id] ?? false;
      const twoWrongs = !correct && state.stage1Pass === 1 && !prevAccum;
      const ups = state.contestants.map(x => x.id === c.id
        ? { ...x, chances: correct ? x.chances : x.chances - 1, isEliminated: x.isEliminated || twoWrongs }
        : x
      );
      // Update accum map for this contestant
      const newMap = { ...state.stage1AccumMap, [c.id]: correct || prevAccum };
      // Compute what answer was selected (for display)
      let selected: string | null = null;
      if (c.isHuman && action.answerIndex >= 0) {
        selected = state.currentQuestion.options[action.answerIndex];
      } else if (!c.isHuman) {
        const wrongOpts = state.currentQuestion.options.filter(o => o !== state.currentQuestion!.answer);
        selected = correct ? state.currentQuestion.answer : wrongOpts[Math.floor(Math.random() * wrongOpts.length)];
      }
      dbg(`ANSWER_STAGE1 correct=${correct} twoWrongs=${twoWrongs}`);
      return { ...state, contestants: ups, answeredCorrectly: correct, stage1AccumMap: newMap, selectedAnswerText: selected, phase: 'stage1_result' as const, message: twoWrongs ? `${c.name} odpada!` : correct ? 'Odpowiedź prawidłowa!' : 'Nieprawidłowo!' };
    }

    case 'TIMEOUT_STAGE1': return red(state, { type: 'ANSWER_STAGE1', answerIndex: -1 });

    // ADVANCE_STAGE1_RESULT is no longer used — NEXT_STAGE1 handles contestant cycling

    // ───── Stage 2 ─────
    case 'START_STAGE2': {
      const active = getActive(state.contestants);
      if (active.length <= 3) {
        dbg('START_STAGE2 (→stage3)');      return { ...state, phase: 'stage3_intro' as const, nominatedBy: null, message: 'Finał! Trzech najlepszych!' };
    }
      const c = active[0];
      const fq = freshQuestion(state.usedQuestionIds);
      dbg('START_STAGE2');
      return { ...state, currentQuestion: fq.q, currentContestantId: c.id, answeredCorrectly: null, selectedAnswerText: null, phase: 'stage2_question' as const, usedQuestionIds: fq.ids, message: `Runda 2! ${c.name} zaczyna.` };
    }

    case 'ANSWER_STAGE2': {
      if (!state.currentQuestion) return state;
      const c = state.contestants.find(x => x.id === state.currentContestantId);
      if (!c) return state;
      const correct = c.isHuman ? state.currentQuestion.options[action.answerIndex] === state.currentQuestion.answer : Math.random() < c.skill;
      // Compute what answer was selected
      let selected: string | null = null;
      if (c.isHuman && action.answerIndex >= 0) {
        selected = state.currentQuestion.options[action.answerIndex];
      } else if (!c.isHuman) {
        const wrongOpts = state.currentQuestion.options.filter(o => o !== state.currentQuestion!.answer);
        selected = correct ? state.currentQuestion.answer : wrongOpts[Math.floor(Math.random() * wrongOpts.length)];
      }
      if (!correct) {
        const ups = state.contestants.map(x => x.id === c.id ? { ...x, chances: x.chances - 1, isEliminated: x.chances - 1 <= 0 } : x);
        return { ...state, contestants: ups, answeredCorrectly: false, selectedAnswerText: selected, phase: 'stage2_result', message: ups.find(x => x.id === c.id)?.isEliminated ? `${c.name} odpada!` : `Nieprawidłowo!` };
      }
      const ups = state.contestants.map(x => x.id === c.id ? { ...x, points: x.points + 10 } : x);
      return { ...state, contestants: ups, answeredCorrectly: true, selectedAnswerText: selected, phase: 'stage2_result' as const, message: 'Odpowiedź prawidłowa!' };
    }

    case 'TIMEOUT_STAGE2': return red(state, { type: 'ANSWER_STAGE2', answerIndex: -1 });

    case 'NOMINATE_STAGE2': {
      const target = state.contestants.find(x => x.id === action.targetId);
      const fq = freshQuestion(state.usedQuestionIds);
      return { ...state, currentQuestion: fq.q, currentContestantId: action.targetId, nominatedBy: state.currentContestantId, nominatedTargetId: action.targetId, answeredCorrectly: null, selectedAnswerText: null, phase: 'stage2_question' as const, usedQuestionIds: fq.ids, message: target ? `Pytanie dla ${target.name}:` : 'Pytanie:' };
    }

    case 'ADVANCE_STAGE2_RESULT': {
      // Correct answer → the person who answered gets to nominate
      if (state.answeredCorrectly === true) {
        const c = state.contestants.find(x => x.id === state.currentContestantId);
        dbg('ADVANCE_STAGE2_RESULT (→nomination)');
        return { ...state, phase: 'stage2_nomination' as const, nominatedTargetId: null, message: c ? `${c.name} — wybierz kolejnego zawodnika.` : 'Wybierz kolejnego zawodnika.' };
      }

      // Wrong answer → the NOMINATOR gets to choose again (not next in line!)
      const active = getActive(state.contestants);
      if (active.length <= 3) {
        dbg('ADVANCE_STAGE2_RESULT (→stage3)');
        return { ...state, phase: 'stage3_intro' as const, nominatedTargetId: null, nominatedBy: null, message: 'Przechodzimy do finału!' };
      }
      if (state.nominatedBy !== null) {
        const renominator = state.contestants.find(c => c.id === state.nominatedBy);
        if (renominator && !renominator.isEliminated) {
          dbg('ADVANCE_STAGE2_RESULT (→renomination)');
          return {
            ...state, phase: 'stage2_nomination' as const, currentContestantId: state.nominatedBy,
            nominatedTargetId: null, answeredCorrectly: null, message: renominator.isHuman
              ? 'Wybierz kolejnego zawodnika.'
              : `${renominator.emoji} ${renominator.name} wybiera ponownie.`
          };
        }
      }
      // Fallback: no nominator or renominator eliminated → next contestant in line
      const lastId = state.currentContestantId;
      const si = lastId !== null ? active.findIndex(x => x.id === lastId) : -1;
      const ni = (si + 1) % active.length;
      const next = active[ni];
      const fq = freshQuestion(state.usedQuestionIds);
      dbg('ADVANCE_STAGE2_RESULT (→next)');
      return { ...state, currentQuestion: fq.q, currentContestantId: next.id, answeredCorrectly: null, selectedAnswerText: null, nominatedTargetId: null, phase: 'stage2_question' as const, usedQuestionIds: fq.ids, message: `Pytanie dla ${next.name}:` };
    }

    // ───── Stage 3 (Finał) ─────
    case 'START_STAGE3': {
      const finalists = getActive(state.contestants).slice(0, 3);
      const refreshed = state.contestants.map(c => { const f = finalists.find(x => x.id === c.id); return f ? { ...f, chances: 3 } : { ...c, isEliminated: true }; });
      const fq = freshQuestion(state.usedQuestionIds);
      // Initialize buzz wins to 0 for each finalist
      const buzzWins: Record<number, number> = {};
      finalists.forEach(c => { buzzWins[c.id] = 0; });
      // Solo mode: only 1 active player (human) — skip buzzer
      const activeFinalists = getActive(refreshed);
      if (activeFinalists.length === 1 && activeFinalists[0]?.isHuman) {
        return { ...state, contestants: refreshed, currentQuestion: fq.q, currentContestantId: 0, finalQuestionCount: 1, phase: 'stage3_answer' as const, usedQuestionIds: fq.ids, stage3BuzzerWinner: 0, answeredCorrectly: null, selectedAnswerText: null, nominatedBy: null, stage3BuzzWins: buzzWins, message: 'Finał! Odpowiadasz sam.' };
      }
      return { ...state, contestants: refreshed, currentQuestion: fq.q, currentContestantId: null, finalQuestionCount: 1, phase: 'stage3_buzzer', usedQuestionIds: fq.ids, stage3BuzzerWinner: null, answeredCorrectly: null, selectedAnswerText: null, nominatedBy: null, stage3BuzzWins: buzzWins, message: 'Finał! Pytanie 1 z 40:' };
    }

    case 'PLAYER_BUZZ': {
      if (state.phase !== 'stage3_buzzer') return state;
      return { ...state, stage3BuzzerWinner: 0, currentContestantId: 0, phase: 'stage3_answer', message: 'Twoja kolej!' };
    }

    case 'AI_BUZZ': {
      if (state.phase !== 'stage3_buzzer') return state;
      const c = state.contestants.find(x => x.id === action.contestantId);
      if (!c) return state;
      return { ...state, stage3BuzzerWinner: action.contestantId, currentContestantId: action.contestantId, phase: 'stage3_answer', message: `${c.name} wciska przycisk!` };
    }

    case 'ANSWER_STAGE3': {
      const wid = state.currentContestantId;
      if (wid === null || !state.currentQuestion) return state;
      const c = state.contestants.find(x => x.id === wid);
      if (!c) return state;
      const correct = c.isHuman ? state.currentQuestion.options[action.answerIndex] === state.currentQuestion.answer : Math.random() < c.skill;
      // Compute what answer was selected
      let selected: string | null = null;
      if (c.isHuman && action.answerIndex >= 0) {
        selected = state.currentQuestion.options[action.answerIndex];
      } else if (!c.isHuman) {
        const wrongOpts = state.currentQuestion.options.filter(o => o !== state.currentQuestion!.answer);
        selected = correct ? state.currentQuestion.answer : wrongOpts[Math.floor(Math.random() * wrongOpts.length)];
      }
      const ups = state.contestants.map(x => {
        if (x.id !== wid) return x;
        if (correct) return { ...x, points: x.points + (state.stage3SelfNominated ? 20 : 10) };
        return { ...x, chances: x.chances - 1, isEliminated: x.chances - 1 <= 0 };
      });
      // Buzz win: increment only for correct buzz answers (not nominated answers)
      const newBuzzWins = { ...state.stage3BuzzWins };
      // Solo mode: don't increment buzz wins (no buzzer competition)
      const isSolo = getActive(state.contestants).length === 1 && state.contestants.some(x => x.isHuman && !x.isEliminated);
      if (correct && state.nominatedBy === null && !state.stage3SelfNominated && !isSolo) {
        newBuzzWins[wid] = (newBuzzWins[wid] ?? 0) + 1;
      }
      return { ...state, contestants: ups, answeredCorrectly: correct, selectedAnswerText: selected, stage3BuzzWins: newBuzzWins, phase: 'stage3_result', message: correct ? `${c.name} OK!${state.stage3SelfNominated ? ' ×2' : ''}` : `${c.name} źle!` + (ups.find(x => x.id === wid)?.isEliminated ? ' Odpada.' : '') };
    }

    case 'TIMEOUT_STAGE3': {
      // Nobody buzzed or answered in time → skip this question
      const active = getActive(state.contestants);
      if (active.length <= 0) {
        // Last contestant timed out — if it was the human (solo mode), they still win
        const isHumanWinner = state.currentContestantId === 0;
        return { ...state, phase: 'gameover', winnerId: isHumanWinner ? 0 : null, message: isHumanWinner ? 'Wygrywasz! Ostatni zawodnik!' : 'Koniec!' };
      }
      // Solo AI: only AI remains — AI wins
      if (active.length === 1 && !active[0]?.isHuman) {
        return { ...state, phase: 'gameover', winnerId: active[0].id, message: `${active[0].name} wygrywa!` };
      }
      if (state.finalQuestionCount >= 40) {
        const s = [...state.contestants].sort((a, b) => b.points - a.points);
        return { ...state, phase: 'gameover', winnerId: s[0].id, message: 'Koniec 40 pytań!' };
      }
      const fq = freshQuestion(state.usedQuestionIds);
      // Solo mode: skip buzzer, go directly to next answer
      if (active.length === 1 && active[0]?.isHuman) {
        return { ...state, currentQuestion: fq.q, currentContestantId: 0, stage3BuzzerWinner: 0, nominatedBy: null, answeredCorrectly: null, selectedAnswerText: null, usedQuestionIds: fq.ids, finalQuestionCount: state.finalQuestionCount + 1, phase: 'stage3_answer' as const, message: `Pytanie ${state.finalQuestionCount + 1} z 40:` };
      }
      return { ...state, currentQuestion: fq.q, phase: 'stage3_buzzer', stage3BuzzerWinner: null, nominatedBy: null, stage3SelfNominated: false, answeredCorrectly: null, selectedAnswerText: null, usedQuestionIds: fq.ids, finalQuestionCount: state.finalQuestionCount + 1, message: `Pytanie ${state.finalQuestionCount + 1} z 40:` };
    }

    case 'NOMINATE_STAGE3': {
      const target = state.contestants.find(x => x.id === action.targetId);
      const fq = freshQuestion(state.usedQuestionIds);
      const selfNom = action.targetId === state.stage3BuzzerWinner;
      const nextNum = state.finalQuestionCount + 1;
      // Skip buzzer — nominated person answers directly
      // Keep stage3BuzzerWinner as the nominator (for green highlight via nominatedBy)
      return { ...state, currentQuestion: fq.q, currentContestantId: action.targetId, stage3SelfNominated: selfNom, nominatedTargetId: action.targetId, nominatedBy: state.stage3BuzzerWinner, answeredCorrectly: null, selectedAnswerText: null, phase: 'stage3_answer' as const, usedQuestionIds: fq.ids, finalQuestionCount: nextNum, message: selfNom ? 'Podwójna stawka!' : target ? `Pytanie ${nextNum} z 40 dla ${target.name}:` : `Pytanie ${nextNum} z 40:` };
    }

    case 'ADVANCE_STAGE3_RESULT': {
      const active = getActive(state.contestants);
      if (active.length <= 0) {
        // Last contestant eliminated — if it was the human (solo mode), they still win
        const isHumanWinner = state.currentContestantId === 0;
        return { ...state, phase: 'gameover', winnerId: isHumanWinner ? 0 : null, message: isHumanWinner ? 'Wygrywasz! Ostatni zawodnik!' : 'Koniec gry!' };
      }
      // Solo AI: only AI remains — AI wins
      if (active.length === 1 && !active[0]?.isHuman) {
        return { ...state, phase: 'gameover', winnerId: active[0].id, message: `${active[0].name} wygrywa!` };
      }
      if (state.finalQuestionCount >= 40) {
        const s = [...state.contestants].sort((a, b) => b.points - a.points);
        return { ...state, phase: 'gameover', winnerId: s[0].id, message: 'Koniec 40 pytań!' };
      }

      const isCorrect = state.answeredCorrectly === true;
      const isNominated = state.nominatedBy !== null;
      const isSelfNom = state.stage3SelfNominated;
      const bw = state.stage3BuzzerWinner;

      // SOLO MODE: only 1 human player — skip buzzer & nomination, go directly to next answer
      if (active.length === 1 && active[0]?.isHuman) {
        const fq = freshQuestion(state.usedQuestionIds);
        return { ...state, currentQuestion: fq.q, currentContestantId: 0, stage3BuzzerWinner: 0, nominatedBy: null, answeredCorrectly: null, selectedAnswerText: null, usedQuestionIds: fq.ids, finalQuestionCount: state.finalQuestionCount + 1, phase: 'stage3_answer' as const, message: `Pytanie ${state.finalQuestionCount + 1} z 40:` };
      }

      if (isCorrect && !isNominated) {
        // Buzz answer (not nominated) → check if reached 3 wins
        const wins = state.stage3BuzzWins[bw ?? -1] ?? 0;
        if (wins >= 3) {
          // Reached 3 buzz wins → nomination phase!
          const c = state.contestants.find(x => x.id === bw);
          return { ...state, phase: 'stage3_nomination' as const, currentContestantId: bw, stage3BuzzerWinner: bw, nominatedBy: null, nominatedTargetId: null, stage3SelfNominated: false, message: c ? `${c.name} zdobył 3 wygrane! Wybiera następnego.` : 'Kto następny?' };
        }
        // Less than 3 → next buzzer question
        const fq = freshQuestion(state.usedQuestionIds);
        const winsDisplay = `${wins}/3`;
        return { ...state, currentQuestion: fq.q, phase: 'stage3_buzzer' as const, stage3BuzzerWinner: null, nominatedBy: null, stage3SelfNominated: false, answeredCorrectly: null, selectedAnswerText: null, usedQuestionIds: fq.ids, finalQuestionCount: state.finalQuestionCount + 1, message: `Pytanie ${state.finalQuestionCount + 1} z 40 (${winsDisplay})` };
      }

      if (isCorrect && isSelfNom) {
        // Self-nomination + correct → keep nominating
        return { ...state, phase: 'stage3_nomination' as const, currentContestantId: bw, stage3BuzzerWinner: bw, nominatedBy: null, nominatedTargetId: null, stage3SelfNominated: false, message: 'Kto następny?' };
      }

      if (isCorrect && isNominated && !isSelfNom) {
        // Other-nomination + correct → answerer becomes new chooser
        return { ...state, phase: 'stage3_nomination' as const, currentContestantId: state.currentContestantId, stage3BuzzerWinner: state.currentContestantId, nominatedBy: null, nominatedTargetId: null, stage3SelfNominated: false, message: 'Kto następny?' };
      }

      if (!isCorrect && isSelfNom) {
        // Self-nomination + wrong → back to buzzer
        const fq = freshQuestion(state.usedQuestionIds);
        return { ...state, currentQuestion: fq.q, phase: 'stage3_buzzer' as const, stage3BuzzerWinner: null, nominatedBy: null, stage3SelfNominated: false, answeredCorrectly: null, selectedAnswerText: null, usedQuestionIds: fq.ids, finalQuestionCount: state.finalQuestionCount + 1, message: `Pytanie ${state.finalQuestionCount + 1} z 40:` };
      }

      if (!isCorrect && isNominated && !isSelfNom) {
        // Other-nomination + wrong → nominator renominates
        const nominator = state.contestants.find(c => c.id === bw);
        return { ...state, phase: 'stage3_nomination' as const, currentContestantId: bw, stage3BuzzerWinner: bw, nominatedBy: null, nominatedTargetId: null, stage3SelfNominated: false, message: nominator ? `${nominator.name} — wybierz ponownie.` : 'Kto następny?' };
      }

      // Buzz + wrong or timeout → next buzzer question
      const fq = freshQuestion(state.usedQuestionIds);
      return { ...state, currentQuestion: fq.q, phase: 'stage3_buzzer' as const, stage3BuzzerWinner: null, nominatedBy: null, stage3SelfNominated: false, answeredCorrectly: null, selectedAnswerText: null, usedQuestionIds: fq.ids, finalQuestionCount: state.finalQuestionCount + 1, message: `Pytanie ${state.finalQuestionCount + 1} z 40:` };
    }

    case 'END_GAME': {
      const s = [...state.contestants].sort((a, b) => b.points - a.points);
      return { ...state, phase: 'gameover', winnerId: s[0].id, message: 'Koniec gry!' };
    }

    case 'SET_MESSAGE': return { ...state, message: action.message };

    default: return state;
  }
}

export function useGameLogic() {
  const [state, dispatch] = useReducer(red, INIT);
  const ref = useRef(state);
  ref.current = state;

  const startGame = useCallback((p: number) => dispatch({ type: 'START_GAME', playerPosition: p }), []);
  const playerAnswer = useCallback((i: number) => {
    const s = ref.current;
    if (s.phase === 'stage1_question' && s.currentContestantId === 0) dispatch({ type: 'ANSWER_STAGE1', answerIndex: i });
    else if (s.phase === 'stage2_question' && s.currentContestantId === 0) dispatch({ type: 'ANSWER_STAGE2', answerIndex: i });
    else if (s.phase === 'stage3_answer' && s.currentContestantId === 0) dispatch({ type: 'ANSWER_STAGE3', answerIndex: i });
  }, []);
  const playerBuzz = useCallback(() => dispatch({ type: 'PLAYER_BUZZ' }), []);
  const nominate = useCallback((id: number) => {
    const s = ref.current;
    if (s.phase === 'stage2_nomination') dispatch({ type: 'NOMINATE_STAGE2', targetId: id });
    else if (s.phase === 'stage3_nomination') dispatch({ type: 'NOMINATE_STAGE3', targetId: id });
  }, []);
  const timeout = useCallback(() => {
    const s = ref.current;
    if (s.phase === 'stage1_question') dispatch({ type: 'TIMEOUT_STAGE1' });
    else if (s.phase === 'stage2_question') dispatch({ type: 'TIMEOUT_STAGE2' });
    else if (s.phase === 'stage3_answer') dispatch({ type: 'TIMEOUT_STAGE3' });
  }, []);
  const advance = useCallback(() => {
    const s = ref.current;
    switch (s.phase) {
      case 'stage1_intro': dispatch({ type: 'NEXT_STAGE1' }); break;
      case 'stage1_result': {
        // Each answer → next contestant or next pass
        dispatch({ type: 'NEXT_STAGE1' });
        break;
      }
      case 'stage2_intro': dispatch({ type: 'START_STAGE2' }); break;
      case 'stage2_result': dispatch({ type: 'ADVANCE_STAGE2_RESULT' }); break;
      case 'stage3_intro': dispatch({ type: 'START_STAGE3' }); break;
      case 'stage3_result': dispatch({ type: 'ADVANCE_STAGE3_RESULT' }); break;
    }
  }, []);

  // AI actions (auto-triggered on phase/question change)
  useEffect(() => {
    const s = ref.current;
    const tids: ReturnType<typeof setTimeout>[] = [];

    // Stage 1 AI answer
    if (s.phase === 'stage1_question' && s.currentContestantId && s.currentContestantId !== 0) {
      tids.push(setTimeout(() => {
        if (ref.current.phase === 'stage1_question') dispatch({ type: 'ANSWER_STAGE1', answerIndex: 0 });
      }, 1500 + Math.random() * 2000));
    }

    // Stage 2 AI answer
    if (s.phase === 'stage2_question' && s.currentContestantId && s.currentContestantId !== 0) {
      tids.push(setTimeout(() => {
        if (ref.current.phase === 'stage2_question') dispatch({ type: 'ANSWER_STAGE2', answerIndex: 0 });
      }, 1500 + Math.random() * 1500));
    }

    // Stage 2 AI nomination (personality-driven)
    if (s.phase === 'stage2_nomination' && s.currentContestantId && s.currentContestantId !== 0) {
      tids.push(setTimeout(() => {
        const cur = ref.current;
        if (cur.phase !== 'stage2_nomination') return;
        const ai = cur.contestants.find(c => c.id === cur.currentContestantId);
        if (!ai) return;
        const active = getActive(cur.contestants).filter(c => c.id !== cur.currentContestantId);
        const human = cur.contestants.find(c => c.isHuman && !c.isEliminated);
        const r = Math.random();
        let target: number | undefined;
        const style = ai.personality.nominationStyle;
        switch (style) {
          case 'hunter':
            // Target the human 70% of the time
            if (r < 0.70 && human) target = human.id;
            else target = active.sort((a, b) => b.chances - a.chances || b.points - a.points)[0]?.id ?? active[0]?.id;
            break;
          case 'strategist':
            // Target the strongest non-human opponent
            target = active.sort((a, b) => b.chances - a.chances || b.points - a.points)[0]?.id ?? active[0]?.id;
            break;
          case 'showman':
            // 30% self-nominate, 40% target human, else random
            if (r < 0.30) target = cur.currentContestantId!;
            else if (r < 0.70 && human) target = human.id;
            else target = active[Math.floor(Math.random() * active.length)]?.id;
            break;
          case 'selfish':
            // 50% self-nominate, rest target weakest
            if (r < 0.50) target = cur.currentContestantId!;
            else target = active.sort((a, b) => a.chances - b.chances || a.points - b.points)[0]?.id ?? active[0]?.id;
            break;
          default:
            // random
            if (r < 0.15) target = cur.currentContestantId!;
            else if (r < 0.45 && human) target = human.id;
            else target = active[Math.floor(Math.random() * active.length)]?.id;
        }
        if (target !== undefined) dispatch({ type: 'NOMINATE_STAGE2', targetId: target });
      }, 2000 + Math.random() * 1500));
    }

    // Stage 3 AI buzz
    if (s.phase === 'stage3_buzzer') {
      getActive(s.contestants).filter(c => !c.isHuman).forEach(ai => {
        tids.push(setTimeout(() => {
          const cur = ref.current;
          if (cur.phase === 'stage3_buzzer' && cur.stage3BuzzerWinner === null) {
            dispatch({ type: 'AI_BUZZ', contestantId: ai.id });
          }
        }, Math.max(2000, ai.buzzSpeed + Math.random() * 2000)));
      });
    }

    // Stage 3 AI answer (uses currentContestantId — works for both buzz and nomination)
    if (s.phase === 'stage3_answer' && s.currentContestantId && s.currentContestantId !== 0) {
      tids.push(setTimeout(() => {
        if (ref.current.phase === 'stage3_answer') dispatch({ type: 'ANSWER_STAGE3', answerIndex: 0 });
      }, 2000 + Math.random() * 1000));
    }

    // Stage 3 AI nomination (personality-driven)
    if (s.phase === 'stage3_nomination' && s.stage3BuzzerWinner && s.stage3BuzzerWinner !== 0) {
      tids.push(setTimeout(() => {
        const cur = ref.current;
        if (cur.phase !== 'stage3_nomination') return;
        const bw = cur.stage3BuzzerWinner!;
        const ai = cur.contestants.find(c => c.id === bw);
        if (!ai) return;
        const active = getActive(cur.contestants).filter(c => c.id !== bw);
        const human = cur.contestants.find(c => c.isHuman && !c.isEliminated);
        const r = Math.random();
        let target: number | undefined;
        const style = ai.personality.nominationStyle;
        switch (style) {
          case 'hunter':
            if (r < 0.70 && human) target = human.id;
            else target = active.sort((a, b) => b.chances - a.chances || b.points - a.points)[0]?.id ?? active[0]?.id;
            break;
          case 'strategist':
            target = active.sort((a, b) => b.chances - a.chances || b.points - a.points)[0]?.id ?? active[0]?.id;
            break;
          case 'showman':
            if (r < 0.35) target = bw; // self-nominate for double points
            else if (r < 0.70 && human) target = human.id;
            else target = active[Math.floor(Math.random() * active.length)]?.id;
            break;
          case 'selfish':
            if (r < 0.50) target = bw; // self-nominate heavily
            else target = active.sort((a, b) => a.chances - b.chances || a.points - b.points)[0]?.id ?? active[0]?.id;
            break;
          default:
            if (r < 0.2) target = bw;
            else if (r < 0.5 && human) target = human.id;
            else target = active[Math.floor(Math.random() * active.length)]?.id;
        }
        if (target !== undefined) dispatch({ type: 'NOMINATE_STAGE3', targetId: target });
      }, 2000 + Math.random() * 1500));
    }

    // Stage 3: no one buzzed → timeout
    if (s.phase === 'stage3_answer' && s.stage3BuzzerWinner === null && s.currentContestantId === null) {
      tids.push(setTimeout(() => {
        if (ref.current.phase === 'stage3_answer' && ref.current.stage3BuzzerWinner === null && ref.current.currentContestantId === null) {
          dispatch({ type: 'TIMEOUT_STAGE3' });
        }
      }, 3000));
    }

    return () => tids.forEach(clearTimeout);
  }, [state.phase, state.currentQuestion?.id]);

  return { state, startGame, playerAnswer, playerBuzz, nominate, timeout, advance };
}
