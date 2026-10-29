import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";
import { Media } from "@/components/Media";
import { ProjectCard } from "@/components/ProjectCard";
import { Text } from "@/components/Text";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  return { title: project?.title ?? "Work" };
}

export default async function CaseStudyPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  const facts = [
    { label: "Client", value: project.facts.client },
    { label: "Role", value: project.facts.role },
    { label: "Tools", value: project.facts.tools },
    { label: "Deliverables", value: project.facts.deliverables },
  ];

  return (
    <article>
      <div className="container">
        <header className="cs-head">
          <Link href="/work" className="back-link">
            ← All case studies
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
          title={project.youtube?.title}
        />
        {project.youtube && (
          <p className="caption" style={{ marginTop: "var(--space-3)" }}>
            {project.youtube.title}
          </p>
        )}

        <dl className="facts">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="eyebrow" style={{ color: "var(--ink-muted)" }}>
                {f.label}
              </dt>
              <dd>
                <Text>{f.value}</Text>
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
          <h2 className="heading">The brief</h2>
          <div className="body-lg">
            <p>
              <Text>{project.brief}</Text>
            </p>
          </div>
        </section>

        <section className="cs-section">
          <h2 className="heading">The approach</h2>
          <div className="body-lg">
            <p>
              <Text>{project.approach}</Text>
            </p>
          </div>
        </section>

        <section className="cs-section" style={{ display: "block" }}>
          <h2 className="heading" style={{ marginBottom: "var(--space-8)" }}>
            The work
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
                    <Text>{video?.title ?? "[Caption: client · format · tools · year]"}</Text>
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
          <h2 className="heading">The result</h2>
          <div className="body-lg">
            <p>
              <Text>{project.result}</Text>
            </p>
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <span className="eyebrow">Next project</span>
          </div>
          <div style={{ maxWidth: 400 }}>
            <ProjectCard project={next} index={index + 1} />
          </div>
        </section>
      </div>
    </article>
  );
}
