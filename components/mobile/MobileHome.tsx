import { SoundToggle } from "@/components/shared/SoundToggle";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { desktopApps } from "@/config/desktopApps";
import { MobileCard } from "./MobileCard";
import { MobileFooter } from "./MobileFooter";
import { MobileNav } from "./MobileNav";

export function MobileHome() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg)]">
      <div className="flex items-center justify-between px-4 py-3">
        <ThemeToggle />
        <SoundToggle />
      </div>
      <MobileNav />
      <main className="flex-1 py-4">
        {desktopApps.map((app) => {
          const AppComponent = app.component;
          return (
            <MobileCard key={app.id} id={app.id} title={app.title}>
              <AppComponent />
            </MobileCard>
          );
        })}
      </main>
      <MobileFooter />
    </div>
  );
}
