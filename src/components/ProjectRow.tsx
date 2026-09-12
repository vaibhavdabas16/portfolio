import type { Project } from "@/data/portfolio";
import Pipeline from "./Pipeline";
import Arrow from "./Arrow";

export default function ProjectRow({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const num = String(index + 1).padStart(2, "0");
  const all = String(total).padStart(2, "0");
  const primary = project.repo ?? project.link;

  return (
    <article
      data-reveal
      style={{ "--d": `${Math.min(index, 3) * 50}ms` } as React.CSSProperties}
      className={`project-row group -mx-4 rounded-lg border-t border-border px-4 md:-mx-6 md:px-6 ${
        project.featured ? "py-10 md:py-12" : "py-8 md:py-10"
      }`}
    >
      <div className="grid gap-5 lg:grid-cols-[112px_1fr] lg:gap-8">
        {/* Index + year */}
        <div className="flex items-baseline gap-4 font-mono text-[12px] lg:flex-col lg:gap-2">
          <span className="row-index text-text-primary">
            {num}
            <span className="text-text-tertiary"> / {all}</span>
          </span>
          <span className="row-meta text-text-tertiary">{project.year}</span>
        </div>

        <div className="min-w-0">
          <h3
            className={`font-medium tracking-[-0.02em] text-text-primary ${
              project.featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
            }`}
          >
            {primary ? (
              <a
                href={primary}
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw"
              >
                {project.name}
              </a>
            ) : (
              project.name
            )}
          </h3>

          <p
            className={`mt-4 leading-relaxed text-text-secondary ${
              project.featured ? "max-w-2xl text-base" : "max-w-xl text-[15px]"
            }`}
          >
            {project.description}
          </p>

          {project.pipeline && (
            <div className="mt-6">
              <Pipeline steps={project.pipeline} label={project.name} compact />
            </div>
          )}

          <div className="mt-6 flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
            <p className="row-meta font-mono text-[12px] text-text-tertiary">
              {project.tags.join(" · ")}
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px]">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="arrow-link text-text-primary transition-colors hover:text-accent-strong"
                >
                  View repository
                  <Arrow dir="r" className="ml-1 inline align-[-2px]" />
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="arrow-link text-text-primary transition-colors hover:text-accent-strong"
                >
                  Live site
                  <Arrow dir="ne" className="ml-1 inline align-[-2px]" />
                </a>
              )}
              {!project.repo && !project.link && (
                <span className="font-mono text-[12px] text-text-tertiary">
                  Private repository
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
