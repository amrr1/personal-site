"use client";

import type { ReactNode } from "react";
import { AudioProvider } from "@/context/AudioContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { WindowManagerProvider } from "@/context/WindowManagerContext";
import { TooltipRoot } from "@/components/ui/Tooltip";
import "react-tooltip/dist/react-tooltip.css";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <AudioProvider>
        <WindowManagerProvider>
          {children}
          <TooltipRoot />
        </WindowManagerProvider>
      </AudioProvider>
    </ThemeProvider>
  );
}
