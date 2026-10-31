import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { Faq } from "@/components/Faq";

const b = site.brands;

export const metadata: Metadata = { title: b.metaTitle, description: b.metaDescription };

export default function BrandsPage() {
  return (
    <div className="container page">
      <header className="page-head">
        <span className="eyebrow">For Brands and Companies</span>
        <h1 className="display">{b.headline}</h1>
        <p className="body-lg muted">{b.intro}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={site.bookingUrl}>
            {site.ctas.call}
          </a>
          <span className="muted hero-or">
            or email{" "}
            <a href={`mailto:${site.email}`} className="text-link">
              {site.email}
            </a>
          </span>
        </div>
      </header>

      <section className="service">
        <h2 className="heading">{b.stepsTitle}</h2>
        <ol className="offers steps">
          {b.steps.map((step) => (
            <li key={step.title}>
              <h3 className="title">{step.title}</h3>
              {step.tag && <p className="step-tag">{step.tag}</p>}
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="service">
        <h2 className="heading">{b.proofTitle}</h2>
        <p className="body-lg proof-copy">{b.proof}</p>
        <Link href="/work" className="text-link">
          See the case study →
        </Link>
      </section>

      <Faq title={b.faqTitle} items={b.faq} />

      <div className="service-cta">
        <span className="title">{b.closing}</span>
        <div className="hero-actions">
          <a className="btn btn-primary" href={site.bookingUrl}>
            {site.ctas.call}
          </a>
          <a className="btn btn-secondary" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
      </div>
    </div>
  );
}
