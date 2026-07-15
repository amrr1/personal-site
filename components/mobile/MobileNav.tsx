import { desktopApps } from "@/config/desktopApps";

export function MobileNav() {
  return (
    <nav className="sticky top-0 z-10 flex gap-3 overflow-x-auto bg-white/90 px-4 py-3 backdrop-blur">
      {desktopApps.map((app) => (
        <a
          key={app.id}
          href={`#${app.id}`}
          className="whitespace-nowrap text-sm font-medium text-neutral-600"
        >
          {app.title}
        </a>
      ))}
    </nav>
  );
}
