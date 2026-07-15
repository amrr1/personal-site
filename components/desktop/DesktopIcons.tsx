"use client";

import { desktopApps } from "@/config/desktopApps";
import { useWindowManager } from "@/hooks/useWindowManager";
import { DesktopIcon } from "./DesktopIcon";

export function DesktopIcons() {
  const { openWindow } = useWindowManager();

  return (
    <div className="grid grid-cols-3 gap-4 p-4 sm:grid-cols-5">
      {desktopApps.map((app) => (
        <DesktopIcon key={app.id} app={app} onOpen={openWindow} />
      ))}
    </div>
  );
}
