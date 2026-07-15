"use client";

import Wave from "react-wavify";
import { themeColors } from "@/config/theme";
import { useTheme } from "@/hooks/useTheme";

export function Background() {
  const { theme } = useTheme();

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[var(--color-bg)]"
    >
      <div className="absolute bottom-0 left-0 h-1/3 w-full">
        <Wave
          fill={themeColors[theme].background}
          paused={false}
          options={{ height: 20, amplitude: 20, speed: 0.2, points: 4 }}
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
