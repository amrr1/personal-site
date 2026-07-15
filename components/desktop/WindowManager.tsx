"use client";

import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import { AnimatePresence } from "framer-motion";
import { useWindowManager } from "@/hooks/useWindowManager";
import { Window } from "./Window";

export function WindowManager() {
  const { windows, moveWindow } = useWindowManager();

  function handleDragEnd(event: DragEndEvent) {
    const windowInstance = windows.find((win) => win.id === event.active.id);
    if (!windowInstance) return;
    moveWindow(windowInstance.id, {
      x: windowInstance.position.x + event.delta.x,
      y: windowInstance.position.y + event.delta.y,
    });
  }

  return (
    <DndContext modifiers={[restrictToWindowEdges]} onDragEnd={handleDragEnd}>
      <AnimatePresence>
        {windows.map((windowInstance) => (
          <Window key={windowInstance.id} windowInstance={windowInstance} />
        ))}
      </AnimatePresence>
    </DndContext>
  );
}
