import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/projects";

const statusStyles: Record<Project["accent"], { badge: string; border: string }> = {
  quantum: { badge: "bg-quantum text-ink", border: "hover:border-quantum/50" },
  plasma: { badge: "bg-plasma text-ink", border: "hover:border-plasma/50" },
  cyber: { badge: "bg-cyber text-ink", border: "hover:border-cyber/50" },
};

export function ProjectCard({ project }: { project: Project }) {
  const style = statusStyles[project.accent];

  return (
    <article className={`panel-card flex flex-col p-6 transition ${style.border}`}>
      <span className={`w-fit rounded-full px-2.5 py-1 font-mono text-[11px] ${style.badge}`}>
        {project.status}
      </span>
      <img
        src={project.image}
        alt={project.imageAlt}
        width={1280}
        height={800}
        loading="lazy"
        className="mt-4 aspect-[16/10] w-full rounded-lg border border-line/60 object-cover"
      />
      <h3 className="mt-4 font-display text-lg font-semibold text-bright">{project.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-mist">{project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-4 font-mono text-xs">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-quantum hover:underline"
          >
            github ↗
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-mist transition hover:text-bright"
          >
            live demo ↗
          </a>
        )}
        <Link
          to="/projects/$slug"
          params={{ slug: project.slug }}
          className="text-mist transition hover:text-bright"
        >
          read notes →
        </Link>
      </div>
    </article>
  );
}
