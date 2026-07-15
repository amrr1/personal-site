import { aboutData } from "./about.data";

export function AboutApp() {
  return (
    <div className="flex flex-col gap-3 p-4 text-sm">
      <h2 className="text-lg font-bold">{aboutData.name}</h2>
      <p className="text-neutral-500">{aboutData.headline}</p>
      {aboutData.bio.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}
