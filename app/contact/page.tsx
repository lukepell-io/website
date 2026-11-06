import type { Metadata } from "next";
import { site } from "@/content/site";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";

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
            <li className="icon-row">
              <Icon name="mail" />
              <a href={`mailto:${site.email}`} className="text-link">
                {site.email}
              </a>
            </li>
            <li className="icon-row">
              <Icon name="location" />
              <span>{c.details}</span>
            </li>
            <li className="icon-row">
              <Icon name="profile" />
              <a href={site.linkedin} className="text-link" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li className="icon-row">
              <Icon name="download" />
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
