"use client";

import { useEffect } from "react";

/**
 * Page-wide interactive effects, mounted once in the root layout:
 *  - cursor glow (updates --mx/--my on the glow layer)
 *  - reading progress bar (updates --progress)
 *  - scroll reveal (adds .is-visible to [data-reveal] elements and
 *    dispatches a "reveal" event on each, which Counter listens for)
 *
 * Reveal is driven by scroll position rather than IntersectionObserver,
 * so it cannot leave content hidden if the observer never fires.
 */
export default function Effects() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");

    const glow = document.getElementById("cursor-glow");
    const bar = document.getElementById("progress-bar");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // ── Pointer glow, one style write per frame ──
    let raf = 0;
    let mx = -1000;
    let my = -1000;
    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          glow?.style.setProperty("--mx", `${mx}px`);
          glow?.style.setProperty("--my", `${my}px`);
          raf = 0;
        });
      }
    };
    const onLeave = () => {
      glow?.style.setProperty("--mx", "-1000px");
      glow?.style.setProperty("--my", "-1000px");
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    // ── Reveal + progress, both recomputed on scroll and resize ──
    let pending = new Set(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    const reveal = (el: HTMLElement) => {
      el.classList.add("is-visible");
      el.dispatchEvent(new CustomEvent("reveal"));
      pending.delete(el);
    };

    const update = () => {
      const max = root.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      bar?.style.setProperty("--progress", p.toFixed(4));

      // Reveal once the element's top crosses 92% of the viewport height.
      const line = window.innerHeight * 0.92;
      for (const el of pending) {
        const r = el.getBoundingClientRect();
        if (r.top < line && r.bottom > 0) reveal(el);
      }
    };

    // Synchronous on purpose: scroll already fires at most once per frame,
    // and the work is a handful of rect reads that shrink as items reveal.
    const onScroll = () => update();

    if (reduceMotion) {
      pending.forEach(reveal);
      pending = new Set();
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // Anything still pending after a beat gets a second pass; fonts and
    // images shifting layout on load can move elements into view.
    const settle = window.setTimeout(update, 600);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearTimeout(settle);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div id="progress-bar" className="progress-bar" aria-hidden />
      <div id="cursor-glow" className="cursor-glow" aria-hidden />
    </>
  );
}
