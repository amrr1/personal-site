"use client";

import { motion } from "framer-motion";
import { getDesktopApp } from "@/config/desktopApps";
import { useDrag } from "@/hooks/useDrag";
import { useWindowManager } from "@/hooks/useWindowManager";
import { useZIndex } from "@/hooks/useZIndex";
import { windowVariants } from "@/lib/animation";
import type { WindowInstance } from "@/types/window";
import { WindowHeader } from "./WindowHeader";

interface WindowProps {
  windowInstance: WindowInstance;
}

export function Window({ windowInstance }: WindowProps) {
  const { closeWindow } = useWindowManager();
  const { bringToFront } = useZIndex(windowInstance.id);
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDrag(
    windowInstance.id,
  );
  const app = getDesktopApp(windowInstance.appId);

  if (!app) return null;

  const AppComponent = app.component;

  return (
    <motion.div
      ref={setNodeRef}
      variants={windowVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      onPointerDown={bringToFront}
      style={{
        position: "absolute",
        left: windowInstance.position.x,
        top: windowInstance.position.y,
        width: windowInstance.size.width,
        zIndex: windowInstance.zIndex,
        transform: transform
          ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
          : undefined,
      }}
      className={`overflow-hidden rounded-lg border border-neutral-300 bg-white shadow-xl ${
        isDragging ? "cursor-grabbing" : ""
      }`}
    >
      <WindowHeader
        title={app.title}
        onClose={() => closeWindow(windowInstance.id)}
        dragHandleAttributes={attributes}
        dragHandleListeners={listeners}
      />
      <div className="max-h-[70vh] overflow-y-auto">
        <AppComponent />
      </div>
    </motion.div>
  );
}
