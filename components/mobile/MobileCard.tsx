import type { ReactNode } from "react";

interface MobileCardProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function MobileCard({ id, title, children }: MobileCardProps) {
  return (
    <section
      id={id}
      className="mx-4 mb-4 rounded-lg border border-neutral-200 bg-white shadow-sm"
    >
      <div className="rounded-t-lg bg-neutral-800 px-3 py-2 text-sm text-white">
        {title}
      </div>
      <div className="p-4">{children}</div>
    </section>
  );
}
