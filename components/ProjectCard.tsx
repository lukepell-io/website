import Link from "next/link";
import type { Project } from "@/content/projects";
import { Media } from "./Media";
import { Text } from "./Text";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link href={`/work/${project.slug}`} className="card">
      <Media
        folder={project.slug}
        name="cover"
        kind="image"
        label="Card thumbnail"
        spec="16:9 still, 1920×1080 JPG"
        canopy={index % 2 === 1}
        youtube={project.youtube?.id}
        title={project.youtube?.title}
      />
      <div className="card-body">
        <p className="caption card-byline">
          <Text>{`${project.meta.split(" · ")[0]}, ${project.year}`}</Text>
        </p>
        <h3 className="title">{project.title}</h3>
        {project.blurb && <p className="card-blurb">{project.blurb}</p>}
        <div className="tags">
          {project.tags.map((t, i) => (
            <span key={i} className="tag">
              <Text>{t}</Text>
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
