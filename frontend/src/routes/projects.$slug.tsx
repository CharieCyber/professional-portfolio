import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject, projects } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found — Charity Michael" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.name} — Project by Charity Michael` },
        { name: "description", content: project.summary },
        { property: "og:title", content: `${project.name} — Project by Charity Michael` },
        { property: "og:description", content: project.summary },
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectDetail,
});

function ProjectNotFound() {
  return (
    <section className="py-24 text-center">
      <h1 className="font-display text-3xl font-bold text-bright">Project not found</h1>
      <p className="mt-3 text-sm text-mist">This project doesn't exist or has been renamed.</p>
      <Link to="/projects" className="btn-quantum mt-6 px-5 py-3">
        Back to projects
      </Link>
    </section>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const others = projects.filter((p) => p.slug !== project.slug);

  return (
    <>
      <section className="py-16">
        <Link to="/projects" className="font-mono text-sm text-mist transition hover:text-quantum">
          ← all projects
        </Link>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-quantum px-2.5 py-1 font-mono text-[11px] text-ink">
            {project.status}
          </span>
          <span className="font-mono text-xs text-mist/70">{project.date}</span>
        </div>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-bright sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground/90">
          {project.summary}
        </p>
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        {(project.github || project.demo) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-quantum px-5 py-3 text-sm"
              >
                View source ↗
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-quantum px-5 py-3 text-sm"
              >
                Live demo ↗
              </a>
            )}
          </div>
        )}
        <img
          src={project.image}
          alt={project.imageAlt}
          width={1280}
          height={800}
          className="mt-10 aspect-[16/10] w-full rounded-2xl border border-line object-cover"
        />
      </section>

      <section className="grid gap-10 border-t border-line/70 py-16 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-semibold text-bright">The problem</h2>
          <p className="mt-3 leading-relaxed text-mist">{project.problem}</p>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-bright">The approach</h2>
          <p className="mt-3 leading-relaxed text-mist">{project.approach}</p>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-bright">Key features</h2>
          <ul className="mt-3 space-y-2 text-mist">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-quantum" aria-hidden="true" />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="font-display text-2xl font-semibold text-bright">What I learned</h2>
            <p className="mt-3 leading-relaxed text-mist">{project.lessons}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-bright">Next improvement</h2>
            <p className="mt-3 leading-relaxed text-mist">{project.next}</p>
          </div>
        </div>
      </section>

      <section className="border-t border-line/70 py-16">
        <h2 className="mb-6 font-display text-2xl font-semibold text-bright">Other projects</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {others.map((other) => (
            <Link
              key={other.slug}
              to="/projects/$slug"
              params={{ slug: other.slug }}
              className="panel-card p-5 transition hover:border-quantum/50"
            >
              <p className="font-display font-semibold text-bright">{other.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-mist">{other.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
