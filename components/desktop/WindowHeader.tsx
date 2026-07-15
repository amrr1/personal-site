import type { DraggableAttributes, DraggableSyntheticListeners } from "@dnd-kit/core";
import { WindowControls } from "./WindowControls";

interface WindowHeaderProps {
  title: string;
  onClose: () => void;
  dragHandleAttributes: DraggableAttributes;
  dragHandleListeners: DraggableSyntheticListeners;
}

export function WindowHeader({
  title,
  onClose,
  dragHandleAttributes,
  dragHandleListeners,
}: WindowHeaderProps) {
  return (
    <div
      {...dragHandleAttributes}
      {...dragHandleListeners}
      className="flex cursor-grab items-center justify-between rounded-t-lg bg-neutral-800 px-3 py-2 text-sm text-white active:cursor-grabbing"
    >
      <span>{title}</span>
      <WindowControls onClose={onClose} />
    </div>
  );
}
