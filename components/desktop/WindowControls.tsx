interface WindowControlsProps {
  onClose: () => void;
}

export function WindowControls({ onClose }: WindowControlsProps) {
  return (
    <button
      type="button"
      onClick={onClose}
      aria-label="Close window"
      className="rounded px-2 text-xs text-white/80 hover:bg-white/10 hover:text-white"
    >
      [ x ]
    </button>
  );
}
