import { useRef, useEffect, useCallback } from 'react';

interface UseTimerOptions {
  duration: number;
  onExpire: () => void;
  autoStart?: boolean;
}

export function useTimer({ duration, onExpire, autoStart = false }: UseTimerOptions) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startTimeRef = useRef<number>(0);
  const remainingRef = useRef<number>(duration);
  const onExpireRef = useRef(onExpire);
  const isRunningRef = useRef(false);

  onExpireRef.current = onExpire;

  const clear = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    isRunningRef.current = false;
  }, []);

  const start = useCallback((newDuration?: number) => {
    clear();
    const dur = newDuration ?? remainingRef.current;
    remainingRef.current = dur;
    startTimeRef.current = Date.now();
    isRunningRef.current = true;
    timerRef.current = setTimeout(() => {
      isRunningRef.current = false;
      onExpireRef.current();
    }, dur);
  }, [clear]);

  const pause = useCallback(() => {
    if (isRunningRef.current) {
      clear();
      const elapsed = Date.now() - startTimeRef.current;
      remainingRef.current = Math.max(0, remainingRef.current - elapsed);
    }
  }, [clear]);

  const resume = useCallback(() => {
    if (remainingRef.current > 0 && !isRunningRef.current) {
      start(remainingRef.current);
    }
  }, [start]);

  const getElapsed = useCallback(() => {
    if (!isRunningRef.current) return 0;
    return Date.now() - startTimeRef.current;
  }, []);

  const getRemaining = useCallback(() => {
    if (!isRunningRef.current) return 0;
    const elapsed = Date.now() - startTimeRef.current;
    return Math.max(0, remainingRef.current - elapsed);
  }, []);

  useEffect(() => {
    if (autoStart) start(duration);
    return clear;
  }, [autoStart, duration, start, clear]);

  return { start, pause, resume, clear, getElapsed, getRemaining, isRunning: isRunningRef };
}
