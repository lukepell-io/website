import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { Text } from "@/components/Text";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  const { brands, agencies } = site.services;

  return (
    <div className="container page">
      <header className="page-head">
        <h1 className="display">Services</h1>
        <p className="body-lg muted">Two ways to work together, depending on who you are.</p>
        <div className="jump-links">
          <a href="#brands" className="btn btn-secondary">
            {brands.title}
          </a>
          <a href="#agencies" className="btn btn-secondary">
            {agencies.title}
          </a>
        </div>
      </header>

      <section id="brands" className="service">
        <div className="service-head">
          <h2 className="heading">{brands.title}</h2>
          <p className="body-lg muted">{brands.intro}</p>
        </div>
        <ul className="offers">
          {brands.offers.map((o) => (
            <li key={o.title}>
              <h3 className="title">{o.title}</h3>
              <p>{o.body}</p>
            </li>
          ))}
        </ul>
        <div className="service-cta">
          <span className="title">
            <Text>{brands.price}</Text>
          </span>
          <a className="btn btn-primary" href={site.bookingUrl}>
            {brands.action}
          </a>
        </div>
      </section>

      <section id="agencies" className="service">
        <div className="service-head">
          <h2 className="heading">{agencies.title}</h2>
          <p className="body-lg muted">{agencies.intro}</p>
        </div>
        <ul className="offers">
          {agencies.offers.map((o) => (
            <li key={o.title}>
              <h3 className="title">{o.title}</h3>
              <p>{o.body}</p>
            </li>
          ))}
        </ul>
        <div className="service-cta">
          <div>
            <span className="title">
              <Text>{agencies.rate}</Text>
            </span>
            <p className="caption" style={{ margin: "var(--space-1) 0 0" }}>
              <Text>{agencies.details}</Text>
            </p>
          </div>
          <a className="btn btn-primary" href={site.availabilityUrl}>
            {agencies.action}
          </a>
        </div>
      </section>

      <p className="body-lg" style={{ marginTop: "var(--space-16)" }}>
        Want to see the work first?{" "}
        <Link href="/work" className="text-link">
          Browse the case studies →
        </Link>
      </p>
    </div>
  );
}
