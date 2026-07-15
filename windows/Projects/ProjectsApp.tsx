import { projectsData } from "./projects.data";

export function ProjectsApp() {
  return (
    <div className="flex flex-col gap-3 p-4 text-sm">
      {projectsData.map((project) => (
        <div key={project.id} className="rounded-md border border-neutral-200 p-3">
          <h3 className="font-bold">{project.title}</h3>
          <p className="text-neutral-500">{project.description}</p>
          <div className="mt-2 flex gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded bg-neutral-100 px-2 py-0.5 text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
