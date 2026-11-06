import type { Metadata } from "next";
import { site } from "@/content/site";
import { ContactForm } from "@/components/ContactForm";

const c = site.contact;

export const metadata: Metadata = { title: "Contact", description: c.metaDescription };

export default function ContactPage() {
  return (
    <div className="container page">
      <header className="page-head">
        <h1 className="display">{c.headline}</h1>
        <p className="body-lg muted">{c.intro}</p>
      </header>

      <div className="contact-grid">
        <ContactForm />

        <aside className="contact-aside">
          <div className="contact-option">
            <h2 className="title">{c.talkTitle}</h2>
            <p className="muted">{c.brands.body}</p>
            <a className="btn btn-primary" href={site.bookingUrl}>
              {site.ctas.call}
            </a>
          </div>
          <div className="contact-option">
            <h2 className="title">{c.agencies.title}</h2>
            <p className="muted">{c.agencies.body}</p>
            <a className="btn btn-secondary" href={site.availabilityUrl}>
              {site.ctas.availability}
            </a>
          </div>
          <ul className="plain-list contact-details">
            <li>
              <a href={`mailto:${site.email}`} className="text-link">
                {site.email}
              </a>
            </li>
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
        </aside>
      </div>
    </div>
  );
}
