import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { links, navItems } from "@/data/profile";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/85 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="group flex items-center gap-2.5" aria-label="Charie — home">
          <span className="grid size-9 place-items-center rounded-lg bg-quantum/15 font-mono text-sm font-medium text-quantum outline outline-quantum/40">
            C
          </span>
          <span className="font-display font-semibold tracking-tight text-bright">
            Charie<span className="text-quantum">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 font-mono text-[13px] text-mist md:flex" aria-label="Primary">
          {navItems
            .filter((item) => item.to !== "/")
            .map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-md px-3 py-2 transition hover:bg-bright/5 hover:text-bright"
                activeProps={{ className: "bg-bright/5 text-bright" }}
              >
                /{item.label}
              </Link>
            ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={links.resume}
            className="btn-quantum hidden px-4 py-2 font-mono text-[13px] sm:inline-flex"
            download
          >
            ↓ Résumé
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-md border border-line text-mist md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className="font-mono text-sm">{open ? "×" : "≡"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-line/70 px-5 pb-4 pt-2 font-mono text-sm text-mist md:hidden"
          aria-label="Mobile"
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block rounded-md px-2 py-3 transition hover:text-bright"
              activeProps={{ className: "text-quantum" }}
            >
              /{item.label}
            </Link>
          ))}
          <a href={links.resume} download className="block px-2 py-3 text-quantum">
            ↓ résumé
          </a>
        </nav>
      )}
    </header>
  );
}
