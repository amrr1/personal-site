export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
}

export const projectsData: Project[] = [
  {
    id: "placeholder-project",
    title: "Placeholder Project",
    description: "A short description of this project goes here.",
    tags: ["Next.js", "TypeScript"],
    href: "#",
  },
];
