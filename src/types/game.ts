export interface Personality {
  trait: string;
  catchphrases: {
    correct: string[];
    wrong: string[];
    nominate: string[];
    buzz: string[];
  };
  /** Strategy for nomination: target humans, target strongest, self-nominate often, random */
  nominationStyle: 'hunter' | 'strategist' | 'showman' | 'random' | 'selfish';
}

export interface Contestant {
  id: number;
  name: string;
  chances: number;
  points: number;
  isHuman: boolean;
  isEliminated: boolean;
  passedStage1: boolean;
  position: number;
  emoji: string;
  avatarUrl: string;
  color: string;
  skill: number;
  buzzSpeed: number;
  personality: Personality;
}

export interface Question {
  id: number;
  text: string;
  answer: string;
  options: string[];
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export type GamePhase =
  | 'menu'
  | 'intro_game'
  | 'stage1_intro'
  | 'stage1_question'
  | 'stage1_answer'
  | 'stage1_result'
  | 'stage1_elimination'
  | 'stage2_intro'
  | 'stage2_question'
  | 'stage2_answer'
  | 'stage2_result'
  | 'stage2_nomination'
  | 'stage2_elimination'
  | 'stage3_intro'
  | 'stage3_buzzer'
  | 'stage3_answer'
  | 'stage3_result'
  | 'stage3_nomination'
  | 'stage3_elimination'
  | 'gameover';

export interface GameState {
  phase: GamePhase;
  contestants: Contestant[];
  currentQuestion: Question | null;
  currentContestantId: number | null;
  questionNumber: number;
  stage1ContestantIndex: number;
  stage1Pass: number; // 0 = first pass (1 question each), 1 = second pass
  stage1AccumMap: Record<number, boolean>; // per-contestant: czy choć jedna odpowiedź była poprawna (kumulacja)
  answeredCorrectly: boolean | null;
  nominatedBy: number | null;
  nominatedTargetId: number | null;
  finalQuestionCount: number;
  message: string;
  usedQuestionIds: Set<number>;
  winnerId: number | null;
  stage3BuzzerWinner: number | null;
  stage3SelfNominated: boolean;
  selectedAnswerText: string | null;
  stage3BuzzWins: Record<number, number>;
}
