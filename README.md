# personal-site

my own personal website :D !!

A retro-desktop-style portfolio and blog built with Next.js (App Router), React, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `app/` — Next.js App Router entry points (`layout.tsx`, `page.tsx`, `providers.tsx`, `globals.css`).
- `components/desktop/` — the draggable-window desktop shell (icons, window chrome, drag/z-index, taskbar).
- `components/mobile/` — the stacked-card layout shown below the 768px breakpoint.
- `components/shared/` — pieces used by both modes (theme/sound toggles, background, footer, mascot).
- `components/ui/` — small generic primitives (button, icon, tooltip, modal).
- `windows/` — content "apps" (About, Projects, Experience, Contact, Resume), each with its own data file. Named `windows/` rather than `apps/` to avoid reading like the Next.js `app/` router directory.
- `config/` — desktop app registry, theme tokens, breakpoints, site info.
- `context/` + `hooks/` — React Context providers (theme, sound, window manager) and the hooks that consume them.
- `lib/` — window positioning math, Framer Motion variants, shared constants.
- `styles/` — extra CSS (retro window chrome, mobile/desktop overrides) imported into `globals.css`, layered on top of Tailwind.
- `types/` — shared TypeScript types for windows, apps, and theme.
- `public/icons` `public/wallpapers` `public/mascots` `public/sounds` `public/images` — static assets referenced by the config/content above (currently empty placeholders).

All content (windows/config data) is separate from layout, so both desktop and mobile render from the same source.

This is phase 1: folder structure and compiling placeholder content. Drag/drop polish, real content, retro visual styling, and sound effects come in later phases.
