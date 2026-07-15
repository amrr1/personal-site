"use client";

import Image from "next/image";
import { desktopApps } from "@/config/desktopApps";
import type { DesktopAppId } from "@/types/app";

interface MobileIconGridProps {
  onSelect: (id: DesktopAppId) => void;
}

export function MobileIconGrid({ onSelect }: MobileIconGridProps) {
  return (
    <div className="grid grid-cols-3 gap-4 px-6 py-4">
      {desktopApps.map((app) => (
        <button
          key={app.id}
          type="button"
          onClick={() => onSelect(app.id)}
          className="flex flex-col items-center gap-2"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50">
            <Image src={app.icon} alt="" width={32} height={32} aria-hidden />
          </span>
          <span className="text-sm font-medium">{app.title}</span>
        </button>
      ))}
    </div>
  );
}
