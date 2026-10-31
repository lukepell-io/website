import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

const s = site.services;

export const metadata: Metadata = { title: "Services", description: s.metaDescription };

export default function ServicesPage() {
  return (
    <div className="container page">
      <header className="page-head">
        <span className="eyebrow">Services</span>
        <h1 className="display">{s.headline}</h1>
        <p className="body-lg muted">{s.intro}</p>
        <div className="jump-links">
          {s.list.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="btn btn-secondary">
              {item.title}
            </a>
          ))}
        </div>
      </header>

      {s.list.map((item) => (
        <section key={item.id} id={item.id} className="service">
          <div className="service-head">
            <h2 className="heading">{item.title}</h2>
            <p className="caption">{item.tag}</p>
          </div>
          <ul className="offers">
            <li>
              <h3 className="title">The problem</h3>
              <p>{item.problem}</p>
            </li>
            <li>
              <h3 className="title">What I do</h3>
              <p>{item.does}</p>
            </li>
            <li>
              <h3 className="title">What you get</h3>
              <p>{item.gets}</p>
            </li>
          </ul>
          <p style={{ marginTop: "var(--space-6)" }}>
            <Link href={item.link.href} className="text-link">
              {item.link.label}
            </Link>
          </p>
        </section>
      ))}

      <section className="service">
        <h2 className="heading">{s.alongsideTitle}</h2>
        <p className="body-lg muted">{s.alongside}</p>
      </section>

      <div className="service-cta">
        <span className="title">{s.closing}</span>
        <div className="hero-actions">
          <a className="btn btn-primary" href={site.bookingUrl}>
            {site.ctas.call}
          </a>
          <a className="btn btn-secondary" href={site.availabilityUrl}>
            {site.ctas.availability}
          </a>
        </div>
      </div>
    </div>
  );
}
