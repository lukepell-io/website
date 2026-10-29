import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <span className="eyebrow">Contact</span>
        <h2 className="display" style={{ marginTop: "var(--space-3)" }}>
          Got a project in mind?
        </h2>
        <a className="footer-email" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        <div className="footer-bottom caption">
          <span>
            © {new Date().getFullYear()} {site.name} · {site.location}
          </span>
          <ul>
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
