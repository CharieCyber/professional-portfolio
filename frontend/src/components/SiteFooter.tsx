import { Link } from "@tanstack/react-router";
import { links, navItems, profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-6xl border-t border-line/70 px-5 py-10 sm:px-8">
      <div className="flex flex-col gap-6 font-mono text-xs text-mist/70 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-3">
          <p>
            © {new Date().getFullYear()} {profile.fullName} — built as a living portfolio.
          </p>
          <p className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-quantum" aria-hidden="true" />
            cybersecurity → quantum-safe engineering
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="transition hover:text-bright">
              /{item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-bright"
          >
            LinkedIn ↗
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-bright"
          >
            GitHub ↗
          </a>
          <a
            href={links.x}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-bright"
          >
            X ↗
          </a>
          <a href={`mailto:${links.email}`} className="transition hover:text-bright">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
