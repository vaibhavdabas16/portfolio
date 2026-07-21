import type { Project } from "@/data/portfolio";

export default function ProjectCard({ project }: { project: Project }) {
  const Wrapper = project.link ? "a" : "div";
  const wrapperProps = project.link
    ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group flex flex-col rounded-2xl border border-border bg-bg-elevated p-6 transition-colors hover:border-border-strong hover:bg-bg-elevated-hover"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="shrink-0 font-mono text-[11px] text-text-tertiary">
          {project.year}
        </span>
      </div>

      <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-semibold text-text-primary transition-colors group-hover:text-accent">
        {project.name}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
        {project.description}
      </p>

      <div className="mt-5 flex items-center gap-1 font-mono text-xs text-text-tertiary">
        {project.repo && <span>view repo</span>}
        {project.repo && project.link && <span>·</span>}
        {project.link && <span>live</span>}
      </div>
    </Wrapper>
  );
}
