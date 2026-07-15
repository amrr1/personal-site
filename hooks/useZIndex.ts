"use client";

import { useCallback } from "react";
import { useWindowManagerContext } from "@/context/WindowManagerContext";
import type { WindowId } from "@/types/window";

export function useZIndex(windowId: WindowId) {
  const { focusWindow, activeWindowId } = useWindowManagerContext();

  const bringToFront = useCallback(() => {
    focusWindow(windowId);
  }, [focusWindow, windowId]);

  return { isActive: activeWindowId === windowId, bringToFront };
}
