import Link from "next/link";
import { projects } from "@/content/projects";
import { shorts, site } from "@/content/site";
import { Highlight } from "@/components/Highlight";
import { Media } from "@/components/Media";
import { ProjectCard } from "@/components/ProjectCard";
import { Text } from "@/components/Text";
import { Wave } from "@/components/Wave";

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
      </section>

      {/* What I do, and the two doors */}
      <section className="intro">
        <div className="container intro-grid">
          <div className="intro-text">
            <h1 className="display">{site.hero.headline}</h1>
            <p className="body-lg muted">{site.hero.intro}</p>
          </div>
          <ul className="doors">
            {site.doors.map((d) => (
              <li key={d.href}>
                <Link href={d.href} className="door">
                  <span className="door-title">
                    {d.title}
                    <span className="door-arrow" aria-hidden="true">
                      →
                    </span>
                  </span>
                  <span className="door-line">{d.line}</span>
                  <span className="door-action">{d.action}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* End to end, at a glance */}
      <section className="pipeline-wrap" aria-label="What I do, end to end">
        <div className="container">
          <ol className="pipeline">
            {site.pipeline.map((step, i) => (
              <li key={step}>
                <span>{step}</span>
                {i < site.pipeline.length - 1 && <Wave className="pipeline-wave" />}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Proof */}
      <section className="section">
        <div className="container proof">
          <span className="eyebrow">{site.proof.label}</span>
          <p className="proof-sentence">
            <Highlight>{site.proof.sentence}</Highlight>
          </p>
          <p className="caption">{site.proof.footnote}</p>
        </div>
      </section>

      {/* Selected work */}
      <section className="section" id="work">
        <div className="container">
          <div className="section-head row">
            <h2 className="heading">Selected work</h2>
            <Link href="/work" className="text-link">
              All case studies →
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
