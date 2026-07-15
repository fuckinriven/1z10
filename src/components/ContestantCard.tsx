import { useState } from 'react';
import type { Contestant } from '../types/game';

interface ContestantCardProps {
  contestant: Contestant;
  isActive: boolean;
  isCurrent: boolean;
  size?: 'sm' | 'md' | 'lg';
  /** Makes card clickable (for nomination phase) */
  selectable?: boolean;
  onClick?: () => void;
  /** Shows green highlight (nominated target) */
  selected?: boolean;
  /** Shows submission animation (after AI picked) */
  submitted?: boolean;
  /** The nominator's ID (for highlighting self-nomination) */
  nominatorId?: number | null;
  /** Green highlight — this person has the right to nominate/renominate */
  isNominator?: boolean;
  /** Show buzz visual (Stage 3 — someone buzzed) */
  buzzed?: boolean;
  /** Stage 3 buzz wins count (for display) */
  buzzWins?: number;
}

export function ContestantCard({
  contestant, isActive, isCurrent, size = 'md',
  selectable, onClick, selected, submitted, nominatorId, isNominator, buzzed, buzzWins,
}: ContestantCardProps) {
  const sizeClasses = {
    sm: {
      container: 'p-1.5',
      name: 'text-[11px]',
      emoji: 'text-base',
      chance: 'w-2 h-2',
      points: 'text-[10px]',
      badge: 'text-[9px] px-1',
    },
    md: {
      container: 'p-3',
      name: 'text-sm',
      emoji: 'text-lg',
      chance: 'w-2.5 h-2.5',
      points: 'text-xs',
      badge: 'text-[11px] px-1.5',
    },
    lg: {
      container: 'p-4',
      name: 'text-base',
      emoji: 'text-2xl',
      chance: 'w-3 h-3',
      points: 'text-sm',
      badge: 'text-xs px-2',
    },
  };

  const s = sizeClasses[size];
  const [imgError, setImgError] = useState(false);
  const showImg = contestant.avatarUrl && !imgError;
  const imgSize = size === 'sm' ? '1.5rem' : size === 'lg' ? '2.5rem' : '2rem';

  const isSelf = contestant.id === nominatorId;

  let borderStyle = '';
  if (buzzed) {
    borderStyle = 'border-game-amber/60 bg-game-amber/20 shadow-lg shadow-game-amber/30 scale-110 animate-buzz-pulse';
  } else if (isNominator) {
    borderStyle = 'border-game-green/40 bg-game-green/5 shadow-sm shadow-game-green/20 scale-105';
  } else if (isCurrent && !selectable) {
    borderStyle = 'border-game-gold/60 bg-game-gold/5 shadow-md shadow-game-gold/10 scale-105';
  } else if (submitted && selected) {
    borderStyle = 'border-game-green/50 bg-game-green/15 animate-select-flash';
  } else if (selected) {
    borderStyle = 'border-game-cyan/40 bg-game-cyan/10 ring-1 ring-game-cyan/30';
  } else if (selectable) {
    borderStyle = 'border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 cursor-pointer active:scale-[0.97]';
  } else if (contestant.isEliminated) {
    borderStyle = 'border-white/5 bg-white/[0.02] opacity-40';
  } else if (isActive) {
    borderStyle = 'border-white/10 bg-white/[0.04]';
  } else {
    borderStyle = 'border-transparent bg-transparent opacity-40';
  }

  const card = (
    <div
      className={`relative rounded-xl border transition-all duration-200 ${borderStyle} ${s.container} ${selectable ? 'select-none' : ''}`}
    >
      {/* Player badge */}
      {contestant.isHuman && !contestant.isEliminated && (
        <div className="absolute -top-1.5 -right-1.5 bg-game-gold text-game-bg text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-sm z-10">
          TY
        </div>
      )}

      <div className={`flex ${size === 'sm' ? 'items-center gap-1.5' : 'items-center gap-2'}`}>
        {/* Avatar image or emoji fallback — sm=1.5rem, md=2rem, lg=2.5rem */}
        <div className="flex-shrink-0">
          {showImg ? (
            <img
              src={contestant.avatarUrl}
              alt={contestant.name}
              loading="lazy"
              onError={() => setImgError(true)}
              className="rounded-full bg-white/5 ring-2 ring-white/10"
              style={{ width: imgSize, height: imgSize }}
            />
          ) : (
            <span
              className={s.emoji}
              style={{ fontSize: imgSize, lineHeight: 1 }}
            >{contestant.emoji}</span>
          )}
        </div>

        {/* Name and info */}
        <div className="flex-1 min-w-0">
          <p className={`font-semibold text-white/80 leading-tight ${s.name} ${size === 'sm' ? 'truncate' : ''}`}>
            {contestant.name}
          </p>
          <div className="flex items-center gap-2 mt-0.5">
            {/* Chances */}
            <div className="flex gap-[2px]">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className={`${s.chance} rounded-full transition-all duration-300 ${
                    i < contestant.chances
                      ? contestant.isHuman
                        ? 'bg-game-gold shadow-sm shadow-game-gold/30'
                        : 'bg-blue-400 shadow-sm shadow-blue-400/30'
                      : 'bg-white/10'
                  }`}
                />
              ))}
            </div>
            {/* Points */}
            {contestant.points > 0 && (
              <span className={`${s.points} text-game-amber/70 font-medium`}>
                {contestant.points}pkt
              </span>
            )}
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-col items-end gap-1">
          {buzzed && (
            <span className="text-xs text-game-amber font-bold animate-buzz-pulse">
              ⚡ BUZZ!
            </span>
          )}
          {isNominator && (
            <span className="text-[10px] text-game-green/60 font-medium whitespace-nowrap">
              ◉ WYBÓR
            </span>
          )}
          {isSelf && selectable && (
            <span className="text-[11px] text-game-gold/60 font-medium">
              ×2
            </span>
          )}
          {contestant.isEliminated && (
            <span className={`${s.badge} bg-red-500/10 text-red-400/70 rounded-full`}>
              OUT
            </span>
          )}
          {buzzWins !== undefined && !contestant.isEliminated && (
            <span className={`${s.badge} ${buzzWins >= 3 ? 'bg-game-gold/20 text-game-gold' : 'bg-blue-500/10 text-blue-400'} rounded-full font-bold`}>
              {buzzWins >= 3 ? '🏆' : `⚡${buzzWins}`}
            </span>
          )}
          {selected && submitted && (
            <span className="text-xs text-game-green font-bold">✓</span>
          )}
        </div>
      </div>
    </div>
  );

  if (selectable && onClick) {
    return <button type="button" onClick={onClick} className="block w-full text-left">{card}</button>;
  }

  return card;
}
