"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";
import Arrow from "./Arrow";
import ThemeToggle from "./ThemeToggle";

const sections = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "highlights", label: "Highlights" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Solidify the bar once the hero starts leaving, and track the
  // section nearest the top third of the viewport.
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const line = window.innerHeight * 0.35;
      let current = "";
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape and lock scroll while it is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-border bg-bg/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="container-x flex h-16 items-center justify-between"
      >
        <a
          href="#top"
          className="font-mono text-[12px] font-medium uppercase tracking-[0.16em] text-text-primary"
        >
          {profile.name}
        </a>

        <div className="hidden items-center gap-2 md:flex">
          <ul className="flex items-center gap-1">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={active === s.id ? "location" : undefined}
                  className={`relative rounded-md px-3 py-2 text-[13px] transition-colors ${
                    active === s.id
                      ? "text-text-primary"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {s.label}
                  <span
                    aria-hidden
                    className={`absolute inset-x-3 -bottom-px h-px bg-accent transition-opacity duration-300 ${
                      active === s.id ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
          <span aria-hidden className="mx-1 h-4 w-px bg-border" />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-md text-text-primary"
          >
            <span className="relative block h-3 w-5" aria-hidden>
              <span
                className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform duration-300 ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-px w-5 bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        data-open={open}
        className="menu-panel absolute inset-x-0 top-full border-t border-border bg-bg px-6 pb-8 pt-4 md:hidden"
        aria-hidden={!open}
      >
        <ul className="flex flex-col">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className={`flex items-center justify-between border-b border-border py-4 text-lg transition-colors ${
                  active === s.id ? "text-text-primary" : "text-text-secondary"
                }`}
              >
                {s.label}
                <span className="font-mono text-[11px] text-text-tertiary">
                  0{sections.indexOf(s) + 1}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[12px] text-text-secondary">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? 0 : -1}
              className="hover:text-text-primary"
            >
              {s.label}
              <Arrow dir="ne" className="ml-1 inline align-[-2px]" />
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            tabIndex={open ? 0 : -1}
            className="hover:text-text-primary"
          >
            Email
            <Arrow dir="r" className="ml-1 inline align-[-2px]" />
          </a>
        </div>
      </div>
    </header>
  );
}
