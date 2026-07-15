"use client";

import { getDesktopApp } from "@/config/desktopApps";
import { useWindowManager } from "@/hooks/useWindowManager";

export function Taskbar() {
  const { windows, activeWindowId, focusWindow } = useWindowManager();

  if (windows.length === 0) return null;

  return (
    <div className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 gap-2 rounded-full bg-white/80 px-3 py-2 shadow-md backdrop-blur">
      {windows.map((windowInstance) => {
        const app = getDesktopApp(windowInstance.appId);
        if (!app) return null;
        return (
          <button
            key={windowInstance.id}
            type="button"
            onClick={() => focusWindow(windowInstance.id)}
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              activeWindowId === windowInstance.id
                ? "bg-neutral-800 text-white"
                : "bg-neutral-100 text-neutral-700"
            }`}
          >
            {app.title}
          </button>
        );
      })}
    </div>
  );
}
