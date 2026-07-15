import type { ComponentType } from "react";
import type { WindowSize } from "./window";

export type DesktopAppId =
  | "about"
  | "projects"
  | "experience"
  | "contact"
  | "resume";

export interface DesktopAppDefinition {
  id: DesktopAppId;
  title: string;
  icon: string;
  description?: string;
  defaultSize: WindowSize;
  component: ComponentType;
}
