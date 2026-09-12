import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container-x flex flex-col gap-3 font-mono text-[12px] text-text-tertiary sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </span>
        <div className="flex items-center gap-2">
          {profile.socials.map((s, i) => (
            <span key={s.label} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden>·</span>}
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw hover:text-text-primary"
              >
                {s.label}
              </a>
            </span>
          ))}
          <span aria-hidden>·</span>
          <a
            href={`mailto:${profile.email}`}
            className="link-draw hover:text-text-primary"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
