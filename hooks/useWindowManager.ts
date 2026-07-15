"use client";

import { useWindowManagerContext } from "@/context/WindowManagerContext";

export function useWindowManager() {
  return useWindowManagerContext();
}
