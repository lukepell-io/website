import Link from "next/link";
import { projects } from "@/content/projects";
import { shorts, site } from "@/content/site";
import { Media } from "@/components/Media";
import { ProjectCard } from "@/components/ProjectCard";
import { Text } from "@/components/Text";
import { CountUp } from "@/components/CountUp";
import { PlayWithSound } from "@/components/PlayWithSound";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      {/* Showreel, full width */}
      <section className="reel-full" aria-label="Showreel">
        <Media
          folder="home"
          name="showreel"
          kind="video"
          label="Showreel"
          spec="16:9, 60–90s, 1080p MP4 (H.264), under 50 MB · plays muted on loop"
          autoplay
        />
        <PlayWithSound />
      </section>

      {/* What I do */}
      <section className="intro">
        <div className="container">
          <div className="intro-text">
            <span className="eyebrow">{site.hero.eyebrow}</span>
            <h1 className="display hero-headline">
              {site.hero.headline.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h1>
            <p className="body-lg muted">{site.hero.intro}</p>
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
          </div>
        </div>
      </section>

      {/* The two doors */}
      <section className="doors-section" aria-labelledby="doors-title">
        <div className="container">
          <h2 id="doors-title" className="heading">
            {site.doorsTitle}
          </h2>
          <ul className="door-cards">
            {site.doors.map((d) => (
              <li key={d.href}>
                <Link href={d.href} className="door-card">
                  <span className="door-title">
                    {d.title}
                    <span className="door-arrow" aria-hidden="true">
                      →
                    </span>
                  </span>
                  <span className="door-line">{d.line}</span>
                  <span className="door-action">{d.action} →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Proof */}
      <section className="section">
        <div className="container proof">
          <span className="eyebrow">{site.proof.label}</span>
          <p className="proof-sentence">{site.proof.sentence}</p>
        </div>
      </section>

      {/* The numbers, counting up in the gradient band */}
      <section className="stats-band" aria-label="The numbers">
        <div className="container">
          <dl className="stat-row">
            {site.proof.stats.map((st) => (
              <div key={st.label}>
                <dt className="stat-label">{st.label}</dt>
                <dd>
                  <CountUp value={st.value} prefix={st.prefix} suffix={st.suffix} />
                </dd>
              </div>
            ))}
          </dl>
          <p className="caption stats-footnote">{site.proof.footnote}</p>
        </div>
      </section>

      {/* Selected work */}
      <section className="section" id="work">
        <div className="container">
          <div className="section-head row">
            <h2 className="heading">Selected work</h2>
            <Link href="/work" className="text-link">
              All Case Studies →
            </Link>
          </div>
          <div className="work-grid featured">
            {featured.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Shorts shelf */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="heading">Made for the scroll</h2>
          </div>
          <div className="shelf">
            {shorts.map((s, i) => (
              <figure key={s.id} className="figure">
                <Media
                  folder="home"
                  name={s.id}
                  kind="video"
                  ratio="vertical"
                  label={`Vertical ${i + 1}`}
                  spec="9:16, 1080×1920 MP4, under 60s"
                  canopy={i % 2 === 1}
                  youtube={s.youtube}
                  title={s.title}
                />
                <span className="title" style={{ fontSize: 18, lineHeight: "24px" }}>
                  <Text>{s.title}</Text>
                </span>
                <span className="caption">
                  <Text>{s.credit}</Text>
                </span>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
