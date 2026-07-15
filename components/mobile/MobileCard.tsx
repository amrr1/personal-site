import type { ReactNode } from "react";

interface MobileCardProps {
  title: string;
  onBack: () => void;
  children: ReactNode;
}

export function MobileCard({ title, onBack, children }: MobileCardProps) {
  return (
    <div className="flex flex-1 flex-col">
      <button
        type="button"
        onClick={onBack}
        aria-label={`Back to home from ${title}`}
        className="flex items-center justify-between bg-neutral-800 px-4 py-3 text-left text-sm font-bold text-white"
      >
        <span>{title}</span>
        <span aria-hidden>⌄</span>
      </button>
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
