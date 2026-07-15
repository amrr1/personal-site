"use client";

import Image from "next/image";
import type { DesktopAppDefinition, DesktopAppId } from "@/types/app";

interface DesktopIconProps {
  app: DesktopAppDefinition;
  onOpen: (id: DesktopAppId) => void;
}

export function DesktopIcon({ app, onOpen }: DesktopIconProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(app.id)}
      className="flex w-16 flex-col items-center gap-1 text-xs font-medium"
    >
      <span className="flex h-10 w-10 items-center justify-center">
        <Image src={app.icon} alt="" width={40} height={40} aria-hidden />
      </span>
      {app.title}
    </button>
  );
}
