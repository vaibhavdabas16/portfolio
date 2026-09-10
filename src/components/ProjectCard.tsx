import type { Project } from "@/data/portfolio";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-bg-elevated p-6 transition-colors hover:border-border-strong hover:bg-bg-elevated-hover">
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

      <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-text-primary">
        {project.name}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs">
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-tertiary transition-colors hover:text-accent"
          >
            view repo →
          </a>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-tertiary transition-colors hover:text-accent"
          >
            live site →
          </a>
        )}
        {!project.repo && !project.link && (
          <span className="text-text-tertiary">private repo</span>
        )}
      </div>
    </article>
  );
}
