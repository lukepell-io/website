import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { Media } from "@/components/Media";
import { Text } from "@/components/Text";

export const metadata: Metadata = { title: "About" };

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
          <h1 className="display">{site.about.heading}</h1>
          {site.about.paragraphs.map((para, i) => (
            <p key={i} className={i === 0 ? "body-lg" : undefined}>
              <Text>{para}</Text>
            </p>
          ))}
          <div className="hero-actions" style={{ marginTop: "var(--space-8)" }}>
            <Link className="btn btn-primary" href="/contact">
              Get in touch
            </Link>
            <Link className="btn btn-secondary" href="/work">
              See the work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
