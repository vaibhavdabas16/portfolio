import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 sm:px-8 py-8">
      <div className="mx-auto flex w-full max-w-3xl flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs text-text-tertiary">
        <span>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </span>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/vaibhavdabas16/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="link-draw hover:text-text-primary"
          >
            source ↗
          </a>
          <a href="#top" className="link-draw hover:text-text-primary">
            back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
