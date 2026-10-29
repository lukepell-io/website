"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
      {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
  );
}

function currentTheme(): "day" | "lagoon" {
  const set = document.documentElement.dataset.theme;
  if (set === "day" || set === "lagoon") return set;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "lagoon" : "day";
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"day" | "lagoon" | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(currentTheme());
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleTheme() {
    const next = currentTheme() === "day" ? "lagoon" : "day";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  }

  const themeLabel = theme === "lagoon" ? "Switch to Daytime" : "Switch to Lagoon night";

  return (
    <div className="nav-wrap">
      <nav className="nav" data-scrolled={scrolled} aria-label="Main">
        <Link href="/" className="wordmark" onClick={() => setOpen(false)}>
          {site.wordmark}
          <span className="dot">.</span>io
        </Link>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <button type="button" className="icon-btn" onClick={toggleTheme} aria-label={themeLabel} title={themeLabel}>
            {theme === "lagoon" ? <SunIcon /> : <MoonIcon />}
          </button>
          <a className="btn btn-primary" href={`mailto:${site.email}`}>
            Get in touch
          </a>
          <button
            type="button"
            className="icon-btn menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </nav>
      <div className="mobile-sheet" data-open={open}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <a className="btn btn-primary" href={`mailto:${site.email}`}>
          Get in touch
        </a>
      </div>
    </div>
  );
}
