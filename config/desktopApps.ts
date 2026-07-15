import type { DesktopAppDefinition } from "@/types/app";
import { AboutApp } from "@/windows/About/AboutApp";
import { ProjectsApp } from "@/windows/Projects/ProjectsApp";
import { ExperienceApp } from "@/windows/Experience/ExperienceApp";
import { ContactApp } from "@/windows/Contact/ContactApp";
import { ResumeApp } from "@/windows/Resume/ResumeApp";

export const desktopApps: DesktopAppDefinition[] = [
  {
    id: "about",
    title: "about",
    icon: "/icons/about.svg",
    defaultSize: { width: 560, height: 420 },
    component: AboutApp,
  },
  {
    id: "projects",
    title: "work",
    icon: "/icons/work.svg",
    defaultSize: { width: 640, height: 460 },
    component: ProjectsApp,
  },
  {
    id: "experience",
    title: "experience",
    icon: "/icons/experience.svg",
    defaultSize: { width: 600, height: 440 },
    component: ExperienceApp,
  },
  {
    id: "contact",
    title: "contact",
    icon: "/icons/contact.svg",
    defaultSize: { width: 480, height: 360 },
    component: ContactApp,
  },
  {
    id: "resume",
    title: "resume",
    icon: "/icons/resume.svg",
    defaultSize: { width: 560, height: 480 },
    component: ResumeApp,
  },
];

export function getDesktopApp(id: string) {
  return desktopApps.find((app) => app.id === id);
}
