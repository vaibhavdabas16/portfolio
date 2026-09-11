import { projects } from "@/data/portfolio";
import SectionLabel from "./SectionLabel";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="px-6 sm:px-8 py-28 sm:py-32">
      <div className="mx-auto w-full max-w-3xl">
        <SectionLabel command="ls ./projects" title="Selected work" />

        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
