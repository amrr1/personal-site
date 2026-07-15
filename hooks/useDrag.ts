"use client";

import { useDraggable } from "@dnd-kit/core";
import type { WindowId } from "@/types/window";

export function useDrag(windowId: WindowId) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: windowId,
  });

  return { attributes, listeners, setNodeRef, transform, isDragging };
}
