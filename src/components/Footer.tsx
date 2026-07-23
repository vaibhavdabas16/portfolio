import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 sm:px-8 py-8">
      <div className="mx-auto flex w-full max-w-3xl flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono text-xs text-text-tertiary">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>{profile.location}</span>
      </div>
    </footer>
  );
}
