import { createFileRoute, Link } from "@tanstack/react-router";
import { skillGroups } from "@/data/skills";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Python, Backend, Data & AI, Cybersecurity, PQC | Charity Michael" },
      {
        name: "description",
        content:
          "Charity Michael's technical skills grouped by track: Python and backend development, data analysis and AI, cybersecurity and post-quantum cryptography — each with supporting evidence.",
      },
      { property: "og:title", content: "Skills — Charity Michael" },
      {
        property: "og:description",
        content:
          "Programming and backend, data and AI, security and cryptography — with honest levels and project evidence.",
      },
    ],
  }),
  component: Skills,
});

function Skills() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <p className="mb-3 font-mono text-sm text-quantum">// skills</p>
        <h1 className="max-w-2xl font-display text-4xl font-bold tracking-tight text-bright sm:text-5xl">
          Technical map
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/90">
          Grouped by track, with the level stated plainly.{" "}
          <span className="text-quantum">core</span> means I use it regularly,{" "}
          <span className="text-plasma">developing</span> means I'm actively building competence,
          and <span className="text-cyber">direction</span> means it's where I'm heading — studied
          and experimented with, not yet mastered.
        </p>
      </section>

      <section className="space-y-6 border-t border-line/70 py-16">
        {skillGroups.map((group) => (
          <div key={group.id} className="panel-card p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <h2 className="font-display text-2xl font-semibold text-bright">{group.title}</h2>
                <p className="mt-1 font-mono text-xs text-mist">{group.summary}</p>
              </div>
              <span
                className={`font-mono text-xs ${
                  group.level === "core"
                    ? "text-quantum"
                    : group.level === "developing"
                      ? "text-plasma"
                      : "text-cyber"
                }`}
              >
                {group.level}
              </span>
            </div>
            <ul className="mt-6 divide-y divide-line/60">
              {group.skills.map((skill) => (
                <li key={skill.name} className="py-4">
                  <p className="font-display font-semibold text-bright">{skill.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-mist">{skill.note}</p>
                  {skill.evidence && (
                    <p className="mt-2 font-mono text-xs text-mist/70">
                      evidence: {skill.evidence}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="border-t border-line/70 py-16">
        <Link to="/projects" className="btn-quantum px-6 py-3.5">
          See the projects behind these skills <span aria-hidden="true">→</span>
        </Link>
      </section>
    </>
  );
}
