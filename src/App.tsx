import { useState, useCallback } from 'react';
import { StartScreen } from './components/StartScreen';
import { GameScreen } from './components/GameScreen';

type AppPhase = 'start' | 'playing';

function App() {
  const [phase, setPhase] = useState<AppPhase>('start');
  const [playerPosition, setPlayerPosition] = useState(5);

  const handleStart = useCallback((position: number) => {
    setPlayerPosition(position);
    setPhase('playing');
  }, []);

  const handleRestart = useCallback(() => {
    setPhase('start');
  }, []);

  if (phase === 'start') {
    return <StartScreen onStart={handleStart} />;
  }

  return <GameScreen playerPosition={playerPosition} onRestart={handleRestart} />;
}

export default App;
