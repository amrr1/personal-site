"use client";

import { Tooltip } from "@/components/ui/Tooltip";
import { useAudioContext } from "@/context/AudioContext";

export function SoundToggle() {
  const { isMuted, toggleMuted } = useAudioContext();

  return (
    <Tooltip label={isMuted ? "unmute sound" : "mute sound"}>
      <button
        type="button"
        onClick={toggleMuted}
        aria-label="Toggle sound"
        className="flex h-8 w-8 items-center justify-center rounded-md text-neutral-700 hover:bg-black/5 dark:text-neutral-200 dark:hover:bg-white/10"
      >
        {isMuted ? "🔇" : "🔊"}
      </button>
    </Tooltip>
  );
}
