"use client";

import { Howl, Howler } from "howler";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

interface AudioContextValue {
  isMuted: boolean;
  toggleMuted: () => void;
  playSound: (src: string) => void;
}

const AudioContext = createContext<AudioContextValue | null>(null);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [isMuted, setIsMuted] = useState(false);
  const soundCache = useRef(new Map<string, Howl>());

  const toggleMuted = useCallback(() => {
    setIsMuted((current) => {
      const next = !current;
      Howler.mute(next);
      return next;
    });
  }, []);

  const playSound = useCallback((src: string) => {
    let sound = soundCache.current.get(src);
    if (!sound) {
      sound = new Howl({ src: [src] });
      soundCache.current.set(src, sound);
    }
    sound.play();
  }, []);

  const value = useMemo(
    () => ({ isMuted, toggleMuted, playSound }),
    [isMuted, toggleMuted, playSound],
  );

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>;
}

export function useAudioContext() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudioContext must be used within an AudioProvider");
  }
  return context;
}
