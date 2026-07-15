import type { DesktopAppDefinition } from "@/types/app";
import { AboutApp } from "@/windows/About/AboutApp";
import { PhotosApp } from "@/windows/Photos/PhotosApp";
import { ProjectsApp } from "@/windows/Projects/ProjectsApp";
import { FAQApp } from "@/windows/FAQ/FAQApp";
import { ContactApp } from "@/windows/Contact/ContactApp";

export const desktopApps: DesktopAppDefinition[] = [
  {
    id: "about",
    title: "about",
    icon: "/icons/about.svg",
    defaultSize: { width: 560, height: 420 },
    component: AboutApp,
  },
  {
    id: "photos",
    title: "photos",
    icon: "/icons/photos.svg",
    defaultSize: { width: 640, height: 460 },
    component: PhotosApp,
  },
  {
    id: "projects",
    title: "work",
    icon: "/icons/work.svg",
    defaultSize: { width: 640, height: 460 },
    component: ProjectsApp,
  },
  {
    id: "faq",
    title: "faq",
    icon: "/icons/faq.svg",
    defaultSize: { width: 560, height: 440 },
    component: FAQApp,
  },
  {
    id: "contact",
    title: "contact",
    icon: "/icons/contact.svg",
    defaultSize: { width: 480, height: 360 },
    component: ContactApp,
  },
];

export function getDesktopApp(id: string) {
  return desktopApps.find((app) => app.id === id);
}
