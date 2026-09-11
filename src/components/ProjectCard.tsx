"use client";

import { useRef } from "react";
import type { Project } from "@/data/portfolio";

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  // Feed the cursor position (relative to the card) to the CSS spotlight.
  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  return (
    <article
      ref={ref}
      onPointerMove={onMove}
      data-reveal
      style={{ "--d": `${index * 70}ms` } as React.CSSProperties}
      className={`spot-card group flex flex-col rounded-2xl border border-border bg-bg-elevated p-6 transition-transform duration-300 hover:-translate-y-1 ${
        project.featured ? "sm:col-span-2 sm:p-8" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="chip rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="shrink-0 font-mono text-[11px] text-text-tertiary">
          {project.year}
        </span>
      </div>

      <h3
        className={`mt-5 font-[family-name:var(--font-display)] font-semibold tracking-tight text-text-primary transition-colors group-hover:text-accent ${
          project.featured ? "text-xl sm:text-2xl" : "text-lg"
        }`}
      >
        {project.name}
      </h3>

      <p
        className={`mt-2 text-sm leading-relaxed text-text-secondary ${
          project.featured ? "max-w-2xl sm:text-[15px]" : ""
        }`}
      >
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs">
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="link-draw relative z-10 text-text-tertiary hover:text-accent"
          >
            view repo →
          </a>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="link-draw relative z-10 text-text-tertiary hover:text-accent"
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
