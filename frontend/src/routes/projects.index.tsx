import { createFileRoute } from "@tanstack/react-router";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Post-Quantum & Security Tools | Charity Michael" },
      {
        name: "description",
        content:
          "Projects built by Charity Michael: a post-quantum key exchange prototype, a log-anomaly analysis tool and a lattice cryptography notebook — with technologies and source links.",
      },
      { property: "og:title", content: "Projects — Charity Michael" },
      {
        property: "og:description",
        content:
          "Python, backend, data and post-quantum cryptography projects, each with the problem it solves and what I learned.",
      },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <p className="mb-3 font-mono text-sm text-quantum">// projects</p>
        <h1 className="max-w-2xl font-display text-4xl font-bold tracking-tight text-bright sm:text-5xl">
          What I've built
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/90">
          Each project started with a problem I noticed. Open any one for the problem, the approach,
          and what I'd do differently next time.
        </p>
      </section>

      <section className="border-t border-line/70 py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
