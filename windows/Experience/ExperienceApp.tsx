import { experienceData } from "./experience.data";

export function ExperienceApp() {
  return (
    <div className="flex flex-col gap-3 p-4 text-sm">
      {experienceData.map((entry) => (
        <div key={entry.id} className="rounded-md border border-neutral-200 p-3">
          <div className="flex items-baseline justify-between">
            <h3 className="font-bold">{entry.role}</h3>
            <span className="text-xs text-neutral-400">{entry.period}</span>
          </div>
          <p className="text-neutral-500">{entry.company}</p>
          <p className="mt-1">{entry.summary}</p>
        </div>
      ))}
    </div>
  );
}
