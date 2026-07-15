"use client";

import type { ReactNode } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

export const TOOLTIP_ID = "app-tooltip";

interface TooltipProps {
  label: string;
  children: ReactNode;
}

export function Tooltip({ label, children }: TooltipProps) {
  return (
    <span data-tooltip-id={TOOLTIP_ID} data-tooltip-content={label} className="inline-flex">
      {children}
    </span>
  );
}

export function TooltipRoot() {
  return <ReactTooltip id={TOOLTIP_ID} className="z-50 text-xs" />;
}
