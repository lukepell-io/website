import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { Faq } from "@/components/Faq";

const a = site.agencies;

export const metadata: Metadata = { title: a.metaTitle, description: a.metaDescription };

export default function AgenciesPage() {
  return (
    <div className="container page">
      <header className="page-head">
        <span className="eyebrow">For Agencies</span>
        <h1 className="display">{a.headline}</h1>
        <p className="body-lg muted">{a.intro}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={site.availabilityUrl}>
            {site.ctas.availability}
          </a>
        </div>
        <p className="caption">{a.rate}</p>
      </header>

      <section className="service">
        <h2 className="heading">{a.offersTitle}</h2>
        <ul className="offers">
          {a.offers.map((o) => (
            <li key={o.title}>
              <h3 className="title">{o.title}</h3>
              <p>{o.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="service">
        <h2 className="heading">{a.teamTitle}</h2>
        <ul className="plain-list">
          {a.team.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>

      <section className="service">
        <h2 className="heading">{a.trialTitle}</h2>
        <p className="body-lg">{a.trial}</p>
      </section>

      <section className="service">
        <h2 className="heading">{a.creditsTitle}</h2>
        <ul className="plain-list">
          {a.credits.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <Link href="/work" className="text-link">
          See the case studies <span className="arrow" aria-hidden="true">→</span>
        </Link>
      </section>

      <Faq title={a.faqTitle} items={a.faq} />

      <div className="service-cta">
        <span className="title">{a.closing}</span>
        <div className="hero-actions">
          <a className="btn btn-primary" href={site.availabilityUrl}>
            {site.ctas.availability}
          </a>
          <a className="btn btn-secondary" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
      </div>
    </div>
  );
}
