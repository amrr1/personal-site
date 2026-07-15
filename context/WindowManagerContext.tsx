"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { getDesktopApp } from "@/config/desktopApps";
import { Z_INDEX_BASE } from "@/lib/constants";
import { getCenteredPosition } from "@/lib/windowUtils";
import type { DesktopAppId } from "@/types/app";
import type { WindowId, WindowInstance, WindowPosition } from "@/types/window";

interface WindowManagerContextValue {
  windows: WindowInstance[];
  activeWindowId: WindowId | null;
  openWindow: (appId: DesktopAppId) => void;
  closeWindow: (id: WindowId) => void;
  focusWindow: (id: WindowId) => void;
  moveWindow: (id: WindowId, position: WindowPosition) => void;
}

const WindowManagerContext = createContext<WindowManagerContextValue | null>(null);

export function WindowManagerProvider({ children }: { children: ReactNode }) {
  const [windows, setWindows] = useState<WindowInstance[]>([]);
  const [activeWindowId, setActiveWindowId] = useState<WindowId | null>(null);
  const zIndexCounter = useRef(Z_INDEX_BASE);

  const focusWindow = useCallback((id: WindowId) => {
    zIndexCounter.current += 1;
    const zIndex = zIndexCounter.current;
    setWindows((current) =>
      current.map((win) => (win.id === id ? { ...win, zIndex } : win)),
    );
    setActiveWindowId(id);
  }, []);

  const openWindow = useCallback((appId: DesktopAppId) => {
    const app = getDesktopApp(appId);
    if (!app) return;

    setWindows((current) => {
      const existing = current.find((win) => win.appId === appId);
      zIndexCounter.current += 1;

      if (existing) {
        setActiveWindowId(existing.id);
        return current.map((win) =>
          win.id === existing.id ? { ...win, zIndex: zIndexCounter.current } : win,
        );
      }

      const id = `${appId}-${Date.now()}`;
      setActiveWindowId(id);
      const newWindow: WindowInstance = {
        id,
        appId,
        position: getCenteredPosition(app.defaultSize),
        size: app.defaultSize,
        zIndex: zIndexCounter.current,
        isMinimized: false,
      };
      return [...current, newWindow];
    });
  }, []);

  const closeWindow = useCallback((id: WindowId) => {
    setWindows((current) => current.filter((win) => win.id !== id));
    setActiveWindowId((current) => (current === id ? null : current));
  }, []);

  const moveWindow = useCallback((id: WindowId, position: WindowPosition) => {
    setWindows((current) =>
      current.map((win) => (win.id === id ? { ...win, position } : win)),
    );
  }, []);

  const value = useMemo(
    () => ({ windows, activeWindowId, openWindow, closeWindow, focusWindow, moveWindow }),
    [windows, activeWindowId, openWindow, closeWindow, focusWindow, moveWindow],
  );

  return (
    <WindowManagerContext.Provider value={value}>
      {children}
    </WindowManagerContext.Provider>
  );
}

export function useWindowManagerContext() {
  const context = useContext(WindowManagerContext);
  if (!context) {
    throw new Error(
      "useWindowManagerContext must be used within a WindowManagerProvider",
    );
  }
  return context;
}
