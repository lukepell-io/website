"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { Wave } from "./Wave";
import { Wordmark } from "./Wordmark";

const links = [
  { href: "/work", label: "Case Studies" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

type Theme = "day" | "lagoon";

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

function currentTheme(): Theme {
  const set = document.documentElement.dataset.theme;
  if (set === "day" || set === "lagoon") return set;
  return "lagoon";
}

// A clearly labelled Day / Night switch, so visitors know both looks exist.
function ThemeSwitch({ theme, onChange }: { theme: Theme | null; onChange: (t: Theme) => void }) {
  return (
    <div className="theme-switch" role="group" aria-label="Colour theme" data-theme-active={theme ?? "day"}>
      <span className="theme-knob" aria-hidden="true" />
      <button type="button" aria-pressed={theme === "day"} aria-label="Switch to light mode" onClick={() => onChange("day")}>
        <SunIcon />
        <span>Day</span>
      </button>
      <button type="button" aria-pressed={theme === "lagoon"} aria-label="Switch to dark mode" onClick={() => onChange("lagoon")}>
        <MoonIcon />
        <span>Night</span>
      </button>
    </div>
  );
}

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(currentTheme());
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function chooseTheme(next: Theme) {
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  }

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <div className="header-inner">
        <Link href="/" className="wordmark" onClick={() => setOpen(false)}>
          <Wordmark className="wordmark-svg" />
        </Link>

        <nav aria-label="Main" className="nav-links">
          {links.map((l) => (
            <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? "page" : undefined}>
              {l.label}
              <Wave className="link-wave" />
            </Link>
          ))}
          <a href={site.resumeUrl} target="_blank" rel="noopener noreferrer">
            {site.ctas.resumeNav}
            <Wave className="link-wave" />
          </a>
        </nav>

        <div className="header-actions">
          <ThemeSwitch theme={theme} onChange={chooseTheme} />
          <Link className="btn btn-primary header-cta" href="/contact">
            Contact
          </Link>
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
      </div>

      <div className="mobile-sheet" data-open={open}>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            aria-current={isActive(l.href) ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        <a href={site.resumeUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
          {site.ctas.resumeNav}
        </a>
        <Link className="btn btn-primary" href="/contact" onClick={() => setOpen(false)}>
          Contact
        </Link>
      </div>
    </header>
  );
}
