import Link from "next/link";
import { site } from "@/content/site";
import { Wordmark } from "./Wordmark";

const links = [
  { href: "/work", label: "Case Studies" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Link href="/" className="wordmark footer-wordmark" aria-label="lukepell.io home">
          <Wordmark className="wordmark-svg" />
        </Link>
        <p className="muted footer-line">{site.footer.line}</p>
        <nav aria-label="Footer" className="footer-nav">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
        <a className="footer-email" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        <div className="footer-bottom caption">
          <span>
            © {new Date().getFullYear()} {site.name}. ABN {site.abn}. Icons by{" "}
            <a href="https://www.streamlinehq.com" target="_blank" rel="noopener noreferrer">
              Streamline
            </a>
            , licensed{" "}
            <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">
              CC BY 4.0
            </a>
            .
          </span>
          <ul>
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={site.resumeUrl} target="_blank" rel="noopener noreferrer">
                {site.ctas.resumeNav}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
