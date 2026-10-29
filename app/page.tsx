import { projects } from "@/content/projects";
import { shorts, site } from "@/content/site";
import { Media } from "@/components/Media";
import { ProjectCard } from "@/components/ProjectCard";
import { Text } from "@/components/Text";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <span className="eyebrow">{site.hero.eyebrow}</span>
            <h1 className="display-xl">{site.hero.headline}</h1>
            <p className="body-lg">{site.hero.intro}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#reel">
                Watch the reel
              </a>
              <a className="btn btn-secondary" href="#work">
                See the work
              </a>
            </div>
          </div>
          <div className="hero-reel" id="reel">
            <Media
              folder="home"
              name="showreel"
              kind="video"
              label="Showreel"
              spec="16:9, 60–90s, 1080p MP4 (H.264), under 50 MB · plays muted on loop"
              large
              autoplay
            />
          </div>
          <p className="caption hero-clients">
            Selected clients · {site.hero.clients.join(" · ")}
          </p>
        </div>
      </section>

      {/* Selected work */}
      <section className="section" id="work">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Selected work</span>
            <h2 className="display">Case studies</h2>
          </div>
          <div className="work-grid">
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Shorts shelf */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Shorts & social</span>
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

      {/* About */}
      <section className="section" id="about">
        <div className="container about">
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
            <span className="eyebrow">{site.about.eyebrow}</span>
            <h2 className="display" style={{ marginTop: "var(--space-3)" }}>
              {site.about.heading}
            </h2>
            {site.about.paragraphs.map((para, i) => (
              <p key={i} className={i === 0 ? "body-lg" : undefined}>
                <Text>{para}</Text>
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
