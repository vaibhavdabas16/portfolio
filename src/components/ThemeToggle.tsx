"use client";

/**
 * Light / dark switch. Holds no React state: the current theme lives on
 * <html data-theme> (set before paint by the inline script in layout.tsx),
 * the icons are chosen by CSS from that attribute, and a click flips it
 * and stores the choice. Server and client markup are identical.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private mode or blocked storage: the choice just won't persist.
    }
  };

  const icon =
    "h-4 w-4 fill-none stroke-current [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round]";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark mode"
      title="Toggle theme"
      className={`flex h-9 w-9 items-center justify-center rounded-md text-text-secondary transition-colors hover:bg-bg-hover hover:text-text-primary ${className}`}
    >
      <svg aria-hidden viewBox="0 0 16 16" className={`theme-icon-sun ${icon}`}>
        <circle cx="8" cy="8" r="3" />
        <path d="M8 1.5v1.5M8 13v1.5M1.5 8H3M13 8h1.5M3.4 3.4l1 1M11.6 11.6l1 1M3.4 12.6l1-1M11.6 4.4l1-1" />
      </svg>
      <svg aria-hidden viewBox="0 0 16 16" className={`theme-icon-moon ${icon}`}>
        <path d="M13.5 9.5A5.5 5.5 0 0 1 6.5 2.5a5.5 5.5 0 1 0 7 7z" />
      </svg>
    </button>
  );
}
