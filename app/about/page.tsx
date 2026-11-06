import type { Metadata } from "next";
import { site } from "@/content/site";
import Link from "next/link";
import { Media } from "@/components/Media";

const a = site.about;

export const metadata: Metadata = { title: "About", description: a.metaDescription };

export default function AboutPage() {
  return (
    <div className="container page">
      <div className="about">
        <div className="about-photo">
          <Media
            folder="home"
            name="portrait"
            kind="image"
            ratio="square"
            label="Portrait"
            spec="Square photo of you, 1200×1200 JPG"
            canopy
          />
        </div>
        <div className="about-text">
          <h1 className="display">{a.heading}</h1>
          <p className="body-lg">{a.intro}</p>
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

          <h2 className="heading about-subhead">{a.storyTitle}</h2>
          {a.story.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
      </div>

      <section className="service">
        <h2 className="heading">{a.whyTitle}</h2>
        <div className="body-lg about-why">
          {a.why.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
      </section>

      <section className="service">
        <h2 className="heading">{a.quotesTitle}</h2>
        <div className="quotes">
          {a.quotes.map((q) => (
            <figure key={q.name} className="quote">
              <blockquote className="body-lg">“{q.text}”</blockquote>
              <figcaption className="quote-by">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={q.photo} alt={q.name} width={48} height={48} loading="lazy" />
                <span className="caption">
                  <strong>{q.name}</strong>
                  <br />
                  {q.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="service">
        <h2 className="heading">{a.factsTitle}</h2>
        <ul className="plain-list">
          {a.facts.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </section>

      <section className="service about-close">
        <h2 className="heading">{a.closingTitle}</h2>
        <p className="body-lg muted">{a.closingLine}</p>
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
        <p className="about-doors">
          <Link href="/agencies" className="text-link">
            See how I work with agencies
          </Link>
          <Link href="/brands" className="text-link">
            See how I work with brands
          </Link>
        </p>
        <p className="caption">
          {site.ctas.hiring}{" "}
          <a href={site.resumeUrl} className="text-link" target="_blank" rel="noopener noreferrer">
            {site.ctas.resumeBody}
          </a>
        </p>
      </section>
    </div>
  );
}
