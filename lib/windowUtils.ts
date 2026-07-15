import type { WindowPosition, WindowSize } from "@/types/window";

export function getCenteredPosition(size: WindowSize): WindowPosition {
  if (typeof window === "undefined") {
    return { x: 0, y: 0 };
  }
  return {
    x: Math.max((window.innerWidth - size.width) / 2, 0),
    y: Math.max((window.innerHeight - size.height) / 2, 0),
  };
}

export function clampPosition(
  position: WindowPosition,
  size: WindowSize,
  bounds: { width: number; height: number },
): WindowPosition {
  return {
    x: Math.min(Math.max(position.x, 0), Math.max(bounds.width - size.width, 0)),
    y: Math.min(Math.max(position.y, 0), Math.max(bounds.height - size.height, 0)),
  };
}
