import type { Contestant } from '../types/game';

interface NominationPanelProps {
  contestants: Contestant[];
  nominator: Contestant | null;
  onNominate: (targetId: number) => void;
  phase: string;
  nominatedTargetId?: number | null;
  submitted?: boolean;
}

export function NominationPanel({ contestants, nominator, onNominate, phase, nominatedTargetId, submitted = false }: NominationPanelProps) {
  const activeContestants = contestants.filter(c => !c.isEliminated);
  const isStage3 = phase === 'stage3_nomination';
  const isAiNominating = nominator && !nominator.isHuman;

  return (
    <div className={`p-4 ${submitted ? 'animate-slide-up' : 'animate-slide-up'}`}>
      <div className="text-center mb-4">
        {submitted && nominatedTargetId !== null ? (
          <p className="text-sm md:text-base text-game-green/80 font-medium">
            ✓ Wybrano!
          </p>
        ) : (
          <p className="text-sm md:text-base text-blue-300/70">
            {isAiNominating
              ? `${nominator.emoji} ${nominator.name} wybiera przeciwnika...`
              : `${nominator?.emoji} ${nominator?.name} — wybierz kolejnego zawodnika`
            }
          </p>
        )}
        {isStage3 && !submitted && (
          <p className="text-xs text-game-amber/50 mt-1">
            Wybierz siebie za podwójną liczbę punktów!
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-2">
        {activeContestants.map(c => {
          const isSelected = nominatedTargetId === c.id;
          return (
            <button
              key={c.id}
              onClick={() => !submitted && onNominate(c.id)}
              disabled={!nominator?.isHuman || submitted}
              className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all duration-200 ${
                isSelected
                  ? submitted
                    ? 'border-game-green/50 bg-game-green/15 animate-select-flash'
                    : 'border-game-cyan/40 bg-game-cyan/10 ring-1 ring-game-cyan/30'
                  : c.id === nominator?.id
                  ? 'border-game-gold/40 bg-game-gold/10'
                  : 'border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20'
              } ${!submitted && nominator?.isHuman ? 'active:scale-[0.97]' : ''}`}
            >
              <span className="text-xl">{c.emoji}</span>
              <div className="flex-1 text-left min-w-0">
                <p className={`text-sm md:text-base font-medium truncate ${
                  isSelected && submitted ? 'text-game-green' : 'text-white/80'
                }`}>
                  {c.name}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  {/* Chances as dots */}
                  <div className="flex gap-[3px]">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          i < c.chances
                            ? c.isHuman
                              ? 'bg-game-gold/70'
                              : 'bg-blue-400/60'
                            : 'bg-white/15'
                        }`}
                      />
                    ))}
                  </div>
                  {/* Points */}
                  <span className="text-xs text-game-amber/60 font-medium">
                    {c.points}pkt
                  </span>
                </div>
              </div>
              {c.id === nominator?.id && (
                <span className="text-[11px] text-game-gold/60 font-medium">
                  ×2
                </span>
              )}
              {isSelected && submitted && (
                <span className="text-xs text-game-green font-bold">
                  ✓
                </span>
              )}
              {isSelected && !submitted && (
                <span className="text-[10px] text-game-cyan/70 font-medium bg-game-cyan/10 px-2 py-0.5 rounded-full">
                  WYBRANY
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
