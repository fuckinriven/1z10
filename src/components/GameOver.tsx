import { useEffect, useRef, useState } from 'react';
import type { Contestant } from '../types/game';

interface GameOverProps {
  contestants: Contestant[];
  winnerId: number | null;
  onRestart: () => void;
}

interface ScoreEntry {
  name: string;
  score: number;
  chances: number;
  bonus: number;
  total: number;
  date: string;
}

const STORAGE_KEY = '1z10-leaderboard';
const BONUS_PER_LIFE = 20;
const MAX_LEADERBOARD = 20;

function getScores(): ScoreEntry[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveScore(entry: ScoreEntry): void {
  const scores = getScores();
  scores.push(entry);
  scores.sort((a, b) => b.total - a.total);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(scores.slice(0, MAX_LEADERBOARD)));
}

function formatDate(): string {
  const d = new Date();
  return `${d.getDate().toString().padStart(2, '0')}.${(d.getMonth() + 1).toString().padStart(2, '0')}.${d.getFullYear()}`;
}

function LeaderboardView({ onBack, newEntry }: { onBack: () => void; newEntry?: ScoreEntry }) {
  const scores = getScores();

  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center p-6 bg-gradient-to-b from-game-bg via-blue-950 to-game-bg relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-md animate-slide-up">
        <div className="text-center mb-5">
          <div className="text-3xl mb-2">🏆</div>
          <h1 className="text-2xl font-bold text-game-gold font-game">
            Tablica wyników
          </h1>
          <p className="text-xs text-blue-300/40 mt-1">Najlepsi gracze "Jeden z Dziesięciu"</p>
        </div>

        <div className="bg-game-surface rounded-2xl border border-white/5 overflow-hidden max-h-[55vh] overflow-y-auto">
          {scores.length === 0 ? (
            <div className="p-8 text-center text-blue-300/30">
              Brak zapisanych wyników. Zagraj i ustanów rekord!
            </div>
          ) : (
            <div className="divide-y divide-white/5">
              {scores.map((entry, index) => {
                const isNew = newEntry && entry.date === newEntry.date && entry.name === newEntry.name && entry.total === newEntry.total;
                return (
                  <div
                    key={`${entry.date}-${entry.name}-${index}`}
                    className={`flex items-center gap-3 px-4 py-2.5 transition-all duration-300 ${
                      isNew ? 'bg-game-gold/10 animate-pulse-glow' : index % 2 === 0 ? 'bg-white/[0.01]' : ''
                    }`}
                  >
                    {/* Rank */}
                    <div className="w-6 text-center">
                      {index === 0 ? (
                        <span className="text-sm">🥇</span>
                      ) : index === 1 ? (
                        <span className="text-sm">🥈</span>
                      ) : index === 2 ? (
                        <span className="text-sm">🥉</span>
                      ) : (
                        <span className="text-xs font-bold text-blue-300/30">{index + 1}</span>
                      )}
                    </div>

                    {/* Name and date */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white/80 truncate">
                        {entry.name}
                      </p>
                      <p className="text-[10px] text-blue-300/30">{entry.date}</p>
                    </div>

                    {/* Score */}
                    <div className="text-right">
                      <p className="text-sm font-bold text-game-amber">
                        {entry.total} pkt
                      </p>
                      {entry.bonus > 0 && (
                        <p className="text-[10px] text-game-amber/40">
                          +{entry.bonus} bonus
                        </p>
                      )}
                    </div>

                    {/* New badge */}
                    {isNew && (
                      <span className="text-[9px] bg-game-gold/20 text-game-gold font-bold px-1.5 py-0.5 rounded-full animate-pulse">
                        NOWY
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <button
          onClick={onBack}
          className="w-full mt-4 py-3 px-6 bg-white/[0.05] hover:bg-white/[0.08] text-blue-300/60 hover:text-blue-300/80 font-medium text-sm rounded-xl border border-white/5 hover:border-white/10 transition-all duration-200"
        >
          ← Powrót do wyników
        </button>
      </div>
    </div>
  );
}

export function GameOver({ contestants, winnerId, onRestart }: GameOverProps) {
  const [view, setView] = useState<'result' | 'leaderboard'>('result');
  const [animPhase, setAnimPhase] = useState<'idle' | 'points' | 'bonus' | 'total' | 'done'>('idle');
  const [displayScore, setDisplayScore] = useState(0);
  const [displayBonus, setDisplayBonus] = useState(0);
  const [saved, setSaved] = useState(false);
  const animRef = useRef<number | null>(null);

  const sorted = [...contestants].sort((a, b) => b.points - a.points);
  const winner = contestants.find(c => c.id === winnerId);
  const isPlayerWinner = winner?.isHuman;

  const baseScore = winner?.points ?? 0;
  const livesLeft = winner?.chances ?? 0;
  const totalBonus = isPlayerWinner ? livesLeft * BONUS_PER_LIFE : 0;
  const finalScore = baseScore + totalBonus;

  // Start animation when component mounts
  useEffect(() => {
    if (!isPlayerWinner) return;

    const DURATION_POINTS = 1200;
    const DURATION_BONUS = 600;
    const DURATION_TOTAL = 400;
    let startTime = Date.now();

    setAnimPhase('points');

    function animate() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / DURATION_POINTS, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayScore(Math.floor(baseScore * eased));

      if (progress >= 1) {
        setDisplayScore(baseScore);
        setAnimPhase('bonus');
        startTime = Date.now();

        // Phase 2: bonus counting
        const animateBonus = () => {
          const bElapsed = Date.now() - startTime;
          const bProgress = Math.min(bElapsed / DURATION_BONUS, 1);
          const bEased = 1 - Math.pow(1 - bProgress, 3);
          setDisplayBonus(Math.floor(totalBonus * bEased));

          if (bProgress >= 1) {
            setDisplayBonus(totalBonus);
            setAnimPhase('total');
            startTime = Date.now();

            // Phase 3: total reveal (brief pause, then show total)
            setTimeout(() => {
              setAnimPhase('done');
              setDisplayScore(baseScore);
              setDisplayBonus(totalBonus);
            }, DURATION_TOTAL);

            return;
          }
          animRef.current = requestAnimationFrame(animateBonus);
        };
        animRef.current = requestAnimationFrame(animateBonus);
        return;
      }
      animRef.current = requestAnimationFrame(animate);
    }

    animRef.current = requestAnimationFrame(animate);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isPlayerWinner, baseScore, totalBonus]);

  // Save score once animation is done
  useEffect(() => {
    if (animPhase === 'done' && isPlayerWinner && !saved && finalScore > 0) {
      setSaved(true);
      saveScore({
        name: winner?.name || 'Gracz',
        score: baseScore,
        chances: livesLeft,
        bonus: totalBonus,
        total: finalScore,
        date: formatDate(),
      });
    }
  }, [animPhase, isPlayerWinner, saved, finalScore, winner, baseScore, livesLeft, totalBonus]);

  // Leaderboard view
  if (view === 'leaderboard') {
    const savedEntry = isPlayerWinner && saved ? {
      name: winner?.name || 'Gracz',
      score: baseScore,
      chances: livesLeft,
      bonus: totalBonus,
      total: finalScore,
      date: formatDate(),
    } : undefined;

    return <LeaderboardView onBack={() => setView('result')} newEntry={savedEntry} />;
  }

  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center p-6 bg-gradient-to-b from-game-bg via-blue-950 to-game-bg relative overflow-hidden">
      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-md animate-slide-up">
        {/* Winner announcement */}
        <div className="text-center mb-6">
          {isPlayerWinner ? (
            <>
              <div className={`text-5xl mb-3 ${animPhase === 'done' ? 'scale-110 transition-transform duration-500' : ''}`}>🏆</div>
              <h1 className="text-3xl font-bold text-game-gold font-game">
                Gratulacje!
              </h1>
              <p className="text-blue-300/60 mt-2">
                Wygrałeś "Jeden z Dziesięciu"!
              </p>
            </>
          ) : winner ? (
            <>
              <div className="text-5xl mb-3">👑</div>
              <h1 className="text-2xl font-bold text-game-gold font-game">
                {winner.emoji} {winner.name}
              </h1>
              <p className="text-blue-300/60 mt-2">
                Zwycięzca "Jeden z Dziesięciu"!
              </p>
            </>
          ) : (
            <>
              <div className="text-5xl mb-3">🎮</div>
              <h1 className="text-2xl font-bold text-game-gold font-game">
                Koniec gry
              </h1>
            </>
          )}
        </div>

        {/* Score display with animation */}
        {winner && (
          <div className="bg-game-surface rounded-2xl p-5 mb-4 border border-game-gold/10 text-center overflow-hidden">
            {/* Animated score */}
            {isPlayerWinner ? (
              <div className="space-y-2">
                {/* Base score */}
                <div className={`transition-all duration-300 ${animPhase === 'idle' || animPhase === 'points' ? '' : 'opacity-50'}`}>
                  <div className="text-xs text-blue-300/40 uppercase tracking-wider mb-1">Zdobyte punkty</div>
                  <div className="text-3xl font-bold text-game-amber font-mono tabular-nums">
                    {displayScore}
                    <span className="text-lg text-game-amber/60"> pkt</span>
                  </div>
                </div>

                {/* Life bonus */}
                {totalBonus > 0 && (
                  <div className={`transition-all duration-500 ${
                    animPhase === 'points' || animPhase === 'idle' ? 'opacity-0 translate-y-2' :
                    animPhase === 'bonus' ? 'opacity-80' : 'opacity-50'
                  }`}>
                    <div className="text-xs text-game-green/40 uppercase tracking-wider mb-1">
                      Bonus za życia ({livesLeft} × {BONUS_PER_LIFE})
                    </div>
                    <div className="text-2xl font-bold text-game-green font-mono tabular-nums">
                      +{displayBonus}
                      <span className="text-base text-game-green/60"> pkt</span>
                    </div>
                  </div>
                )}

                {/* Total */}
                <div className={`transition-all duration-700 ${
                  animPhase === 'done' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-game-gold/30 to-transparent my-2" />
                  <div className="text-xs text-game-gold/50 uppercase tracking-wider mb-1">Razem</div>
                  <div className="text-4xl font-bold text-game-gold font-mono tabular-nums">
                    {baseScore + totalBonus}
                    <span className="text-lg text-game-gold/70"> pkt</span>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="text-2xl font-bold text-game-amber mb-1">
                  {winner.points} punktów
                </div>
                <div className="text-sm text-blue-300/50">
                  {winner.isHuman ? 'Świetny wynik!' : 'Lepszym razem!'}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Scoreboard */}
        {(!isPlayerWinner || animPhase === 'done') && (
          <div className={`bg-game-surface rounded-2xl border border-white/5 overflow-hidden transition-all duration-500 ${
            isPlayerWinner ? 'animate-slide-up' : ''
          }`}>
            <div className="px-4 py-3 bg-white/[0.02] border-b border-white/5">
              <h2 className="text-sm font-semibold text-blue-300/60 uppercase tracking-wider">
                Wyniki końcowe
              </h2>
            </div>
            <div className="divide-y divide-white/5 max-h-[30vh] overflow-y-auto">
              {sorted.map((c, index) => (
                <div
                  key={c.id}
                  className={`flex items-center gap-3 px-4 py-2.5 ${
                    c.id === winnerId ? 'bg-game-gold/5' : ''
                  } ${c.isHuman && !c.isEliminated ? 'bg-game-gold/[0.02]' : ''}`}
                >
                  <span className={`w-5 text-xs font-bold ${
                    c.id === winnerId ? 'text-game-gold' : 'text-blue-300/30'
                  }`}>
                    {index + 1}
                  </span>
                  <span className="text-sm">{c.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium truncate ${
                      c.isHuman ? 'text-game-gold/80' : 'text-white/70'
                    }`}>
                      {c.name}
                      {c.isHuman && ' (Ty)'}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-[2px]">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-1.5 h-1.5 rounded-full ${
                            i < c.chances ? 'bg-blue-400' : 'bg-white/10'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-game-amber w-12 text-right">
                      {c.points} pkt
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Table score button + restart */}
        <div className="space-y-3 mt-6">
          {isPlayerWinner && animPhase === 'done' && (
            <button
              onClick={() => setView('leaderboard')}
              className="w-full py-3 px-6 bg-white/[0.04] hover:bg-white/[0.08] text-blue-300/50 hover:text-blue-300/80 font-medium text-sm rounded-xl border border-white/5 hover:border-white/10 transition-all duration-200"
            >
              📊 Zobacz tablicę wyników
            </button>
          )}

          <button
            onClick={onRestart}
            className="w-full py-4 px-8 bg-gradient-to-r from-game-gold-dark via-game-gold to-game-gold-dark bg-[length:200%_100%] animate-shimmer text-game-bg font-bold text-lg rounded-2xl shadow-lg shadow-game-gold/20 hover:shadow-game-gold/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 tracking-wide"
          >
            GRAJ PONOWNIE
          </button>
        </div>
      </div>
    </div>
  );
}
