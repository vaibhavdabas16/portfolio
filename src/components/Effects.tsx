"use client";

import { useEffect } from "react";

/**
 * Scroll reveal, mounted once in the root layout. Adds .is-visible to
 * every [data-reveal] element as it enters the viewport and dispatches
 * a "reveal" event on it (Counter listens for that).
 *
 * Driven by scroll position rather than IntersectionObserver so it can
 * never leave content hidden if an observer fails to fire.
 */
export default function Effects() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let pending = new Set(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    const reveal = (el: HTMLElement) => {
      el.classList.add("is-visible");
      el.dispatchEvent(new CustomEvent("reveal"));
      pending.delete(el);
    };

    // [data-draw] elements (timeline rails) get --draw in 0..1: how far
    // the 80% line of the viewport has travelled down them.
    const drawables = Array.from(
      document.querySelectorAll<HTMLElement>("[data-draw]")
    );

    // Reveal once the element's top crosses 92% of the viewport height.
    const update = () => {
      const line = window.innerHeight * 0.92;
      for (const el of pending) {
        const r = el.getBoundingClientRect();
        if (r.top < line && r.bottom > 0) reveal(el);
      }
      if (!reduceMotion) {
        const drawLine = window.innerHeight * 0.8;
        for (const el of drawables) {
          const r = el.getBoundingClientRect();
          const p = Math.min(1, Math.max(0, (drawLine - r.top) / r.height));
          el.style.setProperty("--draw", p.toFixed(3));
        }
      }
    };

    if (reduceMotion) {
      pending.forEach(reveal);
      pending = new Set();
      drawables.forEach((el) => el.style.setProperty("--draw", "1"));
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    // Second pass after fonts settle and shift layout.
    const settle = window.setTimeout(update, 600);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.clearTimeout(settle);
    };
  }, []);

  return null;
}
