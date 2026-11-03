import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";
import { Media } from "@/components/Media";
import { ProjectCard } from "@/components/ProjectCard";
import { LinkedNames } from "@/components/LinkedNames";
import { Text } from "@/components/Text";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return { title: "Work" };
  return {
    title: project.seoTitle ? { absolute: project.seoTitle } : project.title,
    description: project.metaDescription ?? project.summary,
  };
}

export default async function CaseStudyPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  const facts = [
    { label: "Client", value: project.facts.client },
    { label: "My Role", value: project.facts.role },
    { label: "Disciplines", value: project.facts.disciplines },
    { label: "Team", value: project.facts.team },
    { label: "Deliverables", value: project.facts.deliverables },
    { label: "Tools", value: project.facts.tools },
    { label: "Timeline", value: project.facts.timeline },
    { label: "Recognition", value: project.facts.recognition },
  ].filter((f): f is { label: string; value: string | string[] } => f.value !== undefined && f.value.length > 0);

  const paragraphs = (text: string | string[]) => (Array.isArray(text) ? text : [text]);

  return (
    <article>
      <div className="container">
        <header className="cs-head">
          <Link href="/work" className="back-link">
            ← All Case Studies
          </Link>
          <span className="eyebrow">
            <Text>{`${project.discipline} · ${project.year}`}</Text>
          </span>
          <h1 className="display">{project.title}</h1>
          <p className="body-lg muted" style={{ margin: 0, maxWidth: "var(--container-text)" }}>
            <Text>{project.summary}</Text>
          </p>
        </header>

        <Media
          folder={project.slug}
          name="hero"
          kind="video"
          label="Hero video"
          spec="16:9, the best 30–90s of this project, 1080p MP4 + a poster still"
          large
          youtube={project.youtube?.id}
          title={project.youtube?.title ?? project.bunny?.title}
          bunny={project.bunny}
        />
        {(project.youtube ?? project.bunny) && (
          <p className="caption" style={{ marginTop: "var(--space-3)" }}>
            {(project.youtube ?? project.bunny)!.title}
          </p>
        )}

        <dl className="facts">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="eyebrow" style={{ color: "var(--ink-muted)" }}>
                {f.label}
              </dt>
              <dd>
                {Array.isArray(f.value) ? (
                  <ul className="fact-list">
                    {f.value.map((item) => (
                      <li key={item}>
                        <Text>{item}</Text>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Text>{f.value}</Text>
                )}
              </dd>
            </div>
          ))}
        </dl>

        {project.stats && (
          <dl className="stats">
            {project.stats.map((s) => (
              <div key={s.label}>
                <dt className="stat-value">{s.value}</dt>
                <dd className="caption">{s.label}</dd>
              </div>
            ))}
          </dl>
        )}

        <section className="cs-section">
          <h2 className="heading">The Brief</h2>
          <div className="body-lg">
            {paragraphs(project.brief).map((para) => (
              <p key={para}>
                <Text>{para}</Text>
              </p>
            ))}
          </div>
        </section>

        <section className="cs-section">
          <h2 className="heading">The Approach</h2>
          <div className="body-lg">
            {paragraphs(project.approach).map((para) => (
              <p key={para}>
                <Text>{para}</Text>
              </p>
            ))}
          </div>
        </section>

        <section className="cs-section" style={{ display: "block" }}>
          <h2 className="heading" style={{ marginBottom: "var(--space-8)" }}>
            The Work
          </h2>
          <div className="media-grid">
            {Array.from({ length: Math.max(project.workSlots, project.work?.length ?? 0) }, (_, i) => {
              const video = project.work?.[i];
              return (
                <figure key={i} className="figure">
                  <Media
                    folder={project.slug}
                    name={`work-${i + 1}`}
                    kind="video"
                    label={`Work clip ${i + 1}`}
                    spec="16:9 clip or still (JPG works too)"
                    canopy={i % 2 === 1}
                    youtube={video?.id}
                    title={video?.title}
                  />
                  <figcaption className="caption">
                    <Text>{video?.title ?? project.workCaptions?.[i] ?? "[Caption: client · format · tools · year]"}</Text>
                  </figcaption>
                </figure>
              );
            })}
          </div>
          {project.shorts && project.shorts.length > 0 && (
            <>
              <span className="eyebrow" style={{ display: "block", margin: "var(--space-12) 0 var(--space-6)" }}>
                Shorts & social
              </span>
              <div className="shelf">
                {project.shorts.map((s, i) => (
                  <figure key={s.id} className="figure">
                    <Media
                      folder={project.slug}
                      name={`short-${i + 1}`}
                      kind="video"
                      ratio="vertical"
                      label={`Vertical ${i + 1}`}
                      spec="9:16, 1080×1920 MP4"
                      youtube={s.id}
                      title={s.title}
                    />
                    <figcaption className="caption">{s.title}</figcaption>
                  </figure>
                ))}
              </div>
            </>
          )}
        </section>

        <section className="cs-section">
          <h2 className="heading">The Result</h2>
          <div className="body-lg">
            {paragraphs(project.result).map((para) => (
              <p key={para}>
                <Text>{para}</Text>
              </p>
            ))}
            {project.links && project.links.length > 0 && (
              <p>
                {project.links.map((l) => (
                  <a key={l.href} href={l.href} className="text-link" target="_blank" rel="noopener noreferrer">
                    {l.label} <span className="arrow" aria-hidden="true">→</span>
                  </a>
                ))}
              </p>
            )}
            {project.quote && (
              <figure className="cs-quote">
                <blockquote>{`\u201c${project.quote.text}\u201d`}</blockquote>
                <figcaption className="caption">{project.quote.name}</figcaption>
              </figure>
            )}
            {project.press && project.press.length > 0 && (
              <div className="press">
                {project.press.map((item) => {
                  const img = (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={item.src} alt={item.alt} loading="lazy" />
                  );
                  return (
                    <figure key={item.src} className="press-item" data-narrow={item.narrow ? "true" : undefined}>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer">
                          {img}
                        </a>
                      ) : (
                        img
                      )}
                      <figcaption className="caption">{item.caption}</figcaption>
                    </figure>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {project.credits && project.credits.length > 0 && (
          <section className="cs-section">
            <h2 className="heading">Credits</h2>
            <dl className="credits">
              {project.credits.map((c) => (
                <div key={c.role}>
                  <dt className="caption">{c.role}</dt>
                  <dd>
                    <LinkedNames names={c.names} links={c.links} />
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <section className="section">
          <div className="section-head">
            <span className="eyebrow">Next Project</span>
          </div>
          <div style={{ maxWidth: 400 }}>
            <ProjectCard project={next} index={index + 1} />
          </div>
        </section>
      </div>
    </article>
  );
}
