import type { Metadata } from "next";
import { site } from "@/content/site";

const c = site.contact;

export const metadata: Metadata = { title: "Contact", description: c.metaDescription };

export default function ContactPage() {
  return (
    <div className="container page">
      <header className="page-head">
        <h1 className="display">{c.headline}</h1>
        <p className="body-lg muted">{c.intro}</p>
      </header>

      <div className="contact-options">
        <div className="contact-option">
          <h2 className="title">{c.brands.title}</h2>
          <p className="muted">{c.brands.body}</p>
          <a className="btn btn-primary" href={site.bookingUrl}>
            {site.ctas.call}
          </a>
        </div>
        <div className="contact-option">
          <h2 className="title">{c.agencies.title}</h2>
          <p className="muted">{c.agencies.body}</p>
          <a className="btn btn-primary" href={site.availabilityUrl}>
            {site.ctas.availability}
          </a>
        </div>
      </div>

      <section className="service" style={{ marginTop: "var(--space-12)" }}>
        <h2 className="heading">{c.emailTitle}</h2>
        <p className="body-lg">
          <a href={`mailto:${site.email}`} className="text-link">
            {site.email}
          </a>
        </p>
        <p className="caption">{c.emailHint}</p>
      </section>

      <section className="service">
        <h2 className="heading">Details</h2>
        <ul className="plain-list">
          <li>{c.details}</li>
          <li>
            <a href={site.linkedin} className="text-link" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={site.resumeUrl} className="text-link" target="_blank" rel="noopener noreferrer">
              {site.ctas.resumeBody}
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
