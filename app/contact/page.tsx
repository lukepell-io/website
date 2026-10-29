import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="container page">
      <header className="page-head">
        <h1 className="display">Let&apos;s talk.</h1>
        <p className="body-lg muted">
          Tell me a little about what you need, and I&apos;ll get back to you.
        </p>
      </header>

      <div className="contact-options">
        <div className="contact-option">
          <h2 className="title">For brands & companies</h2>
          <p className="muted">A short call to talk through your content and what a system could do for you.</p>
          <a className="btn btn-primary" href={site.bookingUrl}>
            Book a call
          </a>
        </div>
        <div className="contact-option">
          <h2 className="title">For agencies</h2>
          <p className="muted">Send me your dates and a rough brief, and I&apos;ll confirm availability.</p>
          <a className="btn btn-primary" href={site.availabilityUrl}>
            Check availability
          </a>
        </div>
      </div>

      <p className="body-lg" style={{ marginTop: "var(--space-12)" }}>
        Or just email{" "}
        <a href={`mailto:${site.email}`} className="text-link">
          {site.email}
        </a>
      </p>
    </div>
  );
}
