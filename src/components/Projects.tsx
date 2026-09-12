import { projects } from "@/data/portfolio";
import Section from "./Section";
import ProjectRow from "./ProjectRow";

export default function Projects() {
  return (
    <Section id="work" index="02" label="Selected work">
      <div className="border-b border-border">
        {projects.map((project, i) => (
          <ProjectRow
            key={project.slug}
            project={project}
            index={i}
            total={projects.length}
          />
        ))}
      </div>
    </Section>
  );
}
