import { Footer } from "@/components/shared/Footer";
import { SoundToggle } from "@/components/shared/SoundToggle";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { DesktopBackground } from "./DesktopBackground";
import { DesktopIcons } from "./DesktopIcons";
import { Taskbar } from "./Taskbar";
import { WindowManager } from "./WindowManager";

export function Desktop() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <DesktopBackground />
      <div className="absolute left-4 top-4 z-30 flex gap-2">
        <ThemeToggle />
        <SoundToggle />
      </div>
      <main className="mx-auto mt-24 w-full max-w-2xl rounded-lg border border-neutral-300 bg-white/95 shadow-lg">
        <div className="rounded-t-lg bg-neutral-800 px-3 py-2 text-sm text-white">
          home
        </div>
        <DesktopIcons />
      </main>
      <WindowManager />
      <Taskbar />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
