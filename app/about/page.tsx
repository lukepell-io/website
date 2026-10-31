import type { Metadata } from "next";
import { site } from "@/content/site";
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

          <h2 className="heading about-subhead">{a.storyTitle}</h2>
          {a.story.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
      </div>

      <section className="service">
        <h2 className="heading">{a.quotesTitle}</h2>
        <div className="quotes">
          {a.quotes.map((q) => (
            <figure key={q.name} className="quote">
              <blockquote className="body-lg">“{q.text}”</blockquote>
              <figcaption className="caption">
                <strong>{q.name}</strong>, {q.role}
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

      <section className="service">
        <p className="body-lg">
          {a.signOff}{" "}
          <a href={`mailto:${site.email}`} className="text-link">
            {site.email}
          </a>
          .
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
