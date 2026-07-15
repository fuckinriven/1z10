import { useState } from 'react';
import { ttsService } from '../services/ttsService';

interface ScoreEntry {
  name: string;
  score: number;
  chances: number;
  bonus: number;
  total: number;
  date: string;
}

const STORAGE_KEY = '1z10-leaderboard';

function getScores(): ScoreEntry[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

interface StartScreenProps {
  onStart: (position: number) => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  const [position, setPosition] = useState(5);
  const [showApiInput, setShowApiInput] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [apiKey, setApiKey] = useState(ttsService.getApiKey() || '');

  const handleApiSave = () => {
    if (apiKey.trim()) {
      ttsService.setApiKey(apiKey.trim());
    }
    setShowApiInput(false);
  };

  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center p-6 bg-gradient-to-b from-game-bg via-blue-950 to-game-bg relative overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.7 + 0.3,
              animation: `stars ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: Math.random() * 2 + 's',
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-md animate-slide-up">
        {/* Logo / Title */}
        <div className="mb-6 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-game-gold to-game-gold-dark mb-4 shadow-lg shadow-game-gold/30">
            <span className="text-3xl font-bold text-game-bg">1z10</span>
          </div>
          <h1 className="text-4xl font-bold text-game-gold font-game tracking-wide">
            Jeden z Dziesięciu
          </h1>
          <p className="text-blue-300/70 mt-2 text-sm">
            Teleturniej wiedzy
          </p>
        </div>

        {/* Decorative line */}
        <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-game-gold/40 to-transparent mb-8" />

        {/* Position selector */}
        <div className="w-full bg-game-surface rounded-2xl p-5 border border-white/5 mb-4">
          <label className="block text-sm text-blue-300/60 mb-3 text-center">
            Twoje stanowisko
          </label>
          <div className="flex justify-center gap-2">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((pos) => (
              <button
                key={pos}
                onClick={() => setPosition(pos)}
                className={`w-9 h-9 rounded-lg text-sm font-bold transition-all duration-200 ${
                  position === pos
                    ? 'bg-game-gold text-game-bg shadow-md shadow-game-gold/30 scale-110'
                    : 'bg-white/5 text-blue-300/50 hover:bg-white/10 hover:text-blue-300/80'
                }`}
              >
                {pos}
              </button>
            ))}
          </div>
        </div>

        {/* Start button */}
        <button
          onClick={() => onStart(position)}
          className="w-full py-4 px-8 bg-gradient-to-r from-game-gold-dark via-game-gold to-game-gold-dark bg-[length:200%_100%] animate-shimmer text-game-bg font-bold text-lg rounded-2xl shadow-lg shadow-game-gold/20 hover:shadow-game-gold/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 tracking-wide"
        >
          ROZPOCZNIJ GRĘ
        </button>

        {/* High Scores button */}
        <button
          onClick={() => setShowLeaderboard(true)}
          className="w-full mt-3 py-3 px-6 bg-white/[0.04] hover:bg-white/[0.08] text-blue-300/50 hover:text-blue-300/80 font-medium text-sm rounded-xl border border-white/5 hover:border-white/10 transition-all duration-200"
        >
          🏆 Tablica wyników
        </button>

        {/* API Key toggle */}
        <button
          onClick={() => setShowApiInput(!showApiInput)}
          className="mt-4 text-xs text-blue-400/40 hover:text-blue-400/70 transition-colors"
        >
          {showApiInput ? 'Schowaj' : '⚙️ Klucz ElevenLabs (opcjonalny)'}
        </button>

        {showApiInput && (
          <div className="w-full mt-3 bg-game-surface rounded-xl p-4 border border-white/5 animate-slide-up">
            <p className="text-xs text-blue-300/50 mb-2">
              Wklej klucz API ElevenLabs, aby włączyć lektora głosowego
            </p>
            <div className="flex gap-2">
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk_..."
                className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-blue-300/30 focus:outline-none focus:border-game-gold/40"
              />
              <button
                onClick={handleApiSave}
                className="px-4 py-2 bg-game-gold/20 text-game-gold text-sm rounded-lg hover:bg-game-gold/30 transition-colors"
              >
                Zapisz
              </button>
            </div>
          </div>
        )}

        {/* Rules hint */}
        <div className="mt-6 text-center">
          <p className="text-xs text-blue-300/30 leading-relaxed">
            10 zawodników · 3 szanse · I runda · II runda · Finał
          </p>
        </div>
      </div>

      {/* Leaderboard modal */}
      {showLeaderboard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={() => setShowLeaderboard(false)}>
          <div className="relative z-10 w-full max-w-md bg-game-bg rounded-2xl border border-white/10 shadow-2xl overflow-hidden animate-slide-up" onClick={e => e.stopPropagation()}>
            {/* Header */}
            <div className="text-center pt-6 pb-4 px-4 border-b border-white/5">
              <div className="text-3xl mb-2">🏆</div>
              <h2 className="text-xl font-bold text-game-gold font-game">
                Tablica wyników
              </h2>
              <p className="text-xs text-blue-300/40 mt-1">Najlepsi gracze "Jeden z Dziesięciu"</p>
            </div>

            {/* Scores */}
            <div className="max-h-[50vh] overflow-y-auto divide-y divide-white/5">
              {getScores().length === 0 ? (
                <div className="p-8 text-center text-blue-300/30">
                  Brak zapisanych wyników.<br />Zagraj i ustanów rekord!
                </div>
              ) : (
                getScores().map((entry, index) => (
                  <div
                    key={`${entry.date}-${entry.name}-${index}`}
                    className={`flex items-center gap-3 px-4 py-2.5 transition-all duration-300 ${
                      index % 2 === 0 ? 'bg-white/[0.01]' : ''
                    }`}
                  >
                    {/* Rank */}
                    <div className="w-6 text-center">
                      {index === 0 ? <span className="text-sm">🥇</span>
                      : index === 1 ? <span className="text-sm">🥈</span>
                      : index === 2 ? <span className="text-sm">🥉</span>
                      : <span className="text-xs font-bold text-blue-300/30">{index + 1}</span>}
                    </div>

                    {/* Name and date */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white/80 truncate">{entry.name}</p>
                      <p className="text-[10px] text-blue-300/30">{entry.date}</p>
                    </div>

                    {/* Score */}
                    <div className="text-right">
                      <p className="text-sm font-bold text-game-amber">{entry.total} pkt</p>
                      {entry.bonus > 0 && (
                        <p className="text-[10px] text-game-amber/40">+{entry.bonus} bonus</p>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Close button */}
            <button
              onClick={() => setShowLeaderboard(false)}
              className="w-full py-3 bg-white/[0.03] hover:bg-white/[0.06] text-blue-300/50 hover:text-blue-300/80 font-medium text-sm transition-all duration-200 border-t border-white/5"
            >
              Zamknij
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
