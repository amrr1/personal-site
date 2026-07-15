"use client";

import { useState } from "react";
import { SoundToggle } from "@/components/shared/SoundToggle";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { getDesktopApp } from "@/config/desktopApps";
import type { DesktopAppId } from "@/types/app";
import { MobileCard } from "./MobileCard";
import { MobileFooter } from "./MobileFooter";
import { MobileIconGrid } from "./MobileIconGrid";

export function MobileHome() {
  const [activeAppId, setActiveAppId] = useState<DesktopAppId | null>(null);
  const activeApp = activeAppId ? getDesktopApp(activeAppId) : undefined;

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg)]">
      <div className="flex items-center justify-between px-4 py-3">
        <ThemeToggle />
        <SoundToggle />
      </div>
      {activeApp ? (
        <MobileCard title={activeApp.title} onBack={() => setActiveAppId(null)}>
          <activeApp.component />
        </MobileCard>
      ) : (
        <>
          <MobileIconGrid onSelect={setActiveAppId} />
          <MobileFooter />
        </>
      )}
    </div>
  );
}
