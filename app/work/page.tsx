import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = { title: "Case Studies" };

export default function WorkPage() {
  return (
    <div className="container page">
      <header className="page-head">
        <h1 className="display">Case Studies</h1>
        <p className="body-lg muted">
          Brand campaigns, content systems, broadcast and motion. Each one with the brief, the approach and what it
          delivered.
        </p>
      </header>
      <div className="work-grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </div>
  );
}
