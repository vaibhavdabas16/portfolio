"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

const sections = [
  { id: "top", label: "home" },
  { id: "about", label: "about" },
  { id: "work", label: "work" },
  { id: "experience", label: "experience" },
  { id: "skills", label: "skills" },
  { id: "highlights", label: "highlights" },
  { id: "contact", label: "contact" },
];

export default function Nav() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 sm:pt-5">
      <nav className="flex w-full max-w-3xl items-center justify-between rounded-full border border-border bg-bg/80 px-3 py-2 backdrop-blur-md">
        <a
          href="#top"
          className="flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[13px] text-text-primary transition-colors hover:text-accent"
        >
          <span className="text-accent">/</span>
          {profile.name.split(" ")[0].toLowerCase()}
        </a>

        <ul className="hidden md:flex items-center gap-0.5 font-mono text-[13px]">
          {sections.slice(1).map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`rounded-full px-3 py-1.5 transition-colors ${
                  active === s.id
                    ? "text-accent"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Drop a resume.pdf into /public and set profile.resumeUrl to
            "/resume.pdf" to turn this into a resume button. */}
        <a
          href={profile.resumeUrl || `mailto:${profile.email}`}
          {...(profile.resumeUrl ? { target: "_blank", rel: "noopener" } : {})}
          className="rounded-full border border-border-strong px-3.5 py-1.5 font-mono text-[13px] text-text-primary transition-colors hover:border-accent hover:text-accent"
        >
          {profile.resumeUrl ? "resume" : "email"}
        </a>
      </nav>
    </header>
  );
}
