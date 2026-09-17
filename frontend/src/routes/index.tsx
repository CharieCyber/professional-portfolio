import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { links, profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { posts } from "@/data/posts";
import { professionalInterests } from "@/data/interests";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Charity Michael (Charie) — Cybersecurity Student & Future Quantum-Safe Engineer" },
      {
        name: "description",
        content:
          "I build practical solutions with an eye on the problems technology will face tomorrow. Python, backend development, data & AI, and post-quantum cryptography.",
      },
      {
        property: "og:title",
        content: "Charity Michael (Charie) — Cybersecurity Student & Future Quantum-Safe Engineer",
      },
      {
        property: "og:description",
        content:
          "Portfolio of a FUTA cybersecurity student working toward quantum-safe engineering: projects, skills and learning in public.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-[1.1fr_.9fr] lg:gap-14">
        <div>
          <p className="mb-6 flex items-center gap-2 font-mono text-[13px] text-quantum">
            <span className="size-2 rounded-full bg-cyber" aria-hidden="true" />
            {profile.status}
          </p>
          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-bright sm:text-6xl lg:text-7xl">
            Charity
            <br />
            Michael
          </h1>
          <p className="mt-5 font-mono text-sm text-mist sm:text-base">
            {profile.role} <span className="text-plasma">→</span> {profile.direction}
          </p>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-foreground/90">
            {profile.tagline}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/projects" className="btn-quantum px-6 py-3.5 text-base">
              View My Projects <span aria-hidden="true">→</span>
            </Link>
            <Link to="/about" className="btn-outline-quantum px-6 py-3.5 text-base">
              About Me
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-mist/70">
            <span>◆ Python</span>
            <span>◆ Backend</span>
            <span>◆ Data &amp; AI</span>
            <span>◆ PQC</span>
          </div>
        </div>

        {/* terminal card */}
        <div className="relative">
          <div
            className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-quantum/20 via-plasma/10 to-cyber/20 blur-xl"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-2xl border border-line bg-panel/90 shadow-2xl">
            <div className="flex items-center gap-2 border-b border-line bg-panel2/60 px-4 py-3">
              <span className="size-3 rounded-full bg-cyber/70" />
              <span className="size-3 rounded-full bg-plasma/70" />
              <span className="size-3 rounded-full bg-quantum/70" />
              <span className="ml-2 font-mono text-xs text-mist/70">charie@quantum:~</span>
            </div>
            <pre className="min-h-[280px] px-5 py-4 font-mono text-[13px] leading-relaxed text-foreground/90">
              <span className="text-mist/60">$ whoami</span>
              {"\n"}
              <span className="text-quantum">charity_michael</span>
              {"\n"}
              <span className="text-mist/60">$ cat role.txt</span>
              {"\ncybersecurity_student\nfuture_quantum_safe_engineer\n"}
              <span className="text-mist/60">$ ./build_solution.sh</span>
              {"\n"}
              <span className="text-plasma">[✓] spotting problems early</span>
              {"\n"}
              <span className="text-plasma">[✓] prototyping in python</span>
              {"\n"}
              <span className="text-plasma">[✓] hardening for post-quantum</span>
              {"\n"}
              <span className="text-cyber">[&gt;] learning in public_</span>
            </pre>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-t border-line/70 py-16">
        <div className="grid gap-8 lg:grid-cols-[.35fr_.65fr] lg:gap-14">
          <div>
            <p className="mb-3 font-mono text-sm text-quantum">// about</p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-bright sm:text-4xl">
              The
              <br />
              solution
              <br />
              builder.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-foreground/90">
            <p>
              I'm a cybersecurity student at FUTA who keeps asking{" "}
              <em className="font-medium not-italic text-bright">what breaks first</em>. I moved
              from securing systems to building them — writing Python backends, analysing data, and
              probing how cryptography has to change once quantum machines arrive.
            </p>
            <p>
              My direction is{" "}
              <span className="font-medium text-quantum">quantum-safe engineering</span>: the long
              game of protecting today's infrastructure from tomorrow's threat. This site tracks
              that journey — the code, the maths, and the public mistakes.
            </p>
            <div className="grid gap-4 pt-2 sm:grid-cols-3">
              <div className="rounded-xl border border-line bg-panel/50 p-4">
                <p className="font-display text-2xl font-bold text-bright">FUTA</p>
                <p className="mt-1 font-mono text-xs text-mist">Cybersecurity · 200 Lvl</p>
              </div>
              <div className="rounded-xl border border-line bg-panel/50 p-4">
                <p className="font-display text-2xl font-bold text-bright">PQC</p>
                <p className="mt-1 font-mono text-xs text-mist">Research interest</p>
              </div>
              <div className="rounded-xl border border-line bg-panel/50 p-4">
                <p className="font-display text-2xl font-bold text-bright">Foresight</p>
                <p className="mt-1 font-mono text-xs text-mist">Core philosophy</p>
              </div>
            </div>
            <Link
              to="/about"
              className="inline-block font-mono text-sm text-quantum hover:underline"
            >
              read the full story →
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="border-t border-line/70 py-16">
        <SectionHeading
          kicker="selected_projects"
          title="What I've built"
          action={
            <Link
              to="/projects"
              className="hidden font-mono text-sm text-mist transition hover:text-quantum sm:inline"
            >
              view all →
            </Link>
          }
        />
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* SKILLS + CONTACT */}
      <section className="grid gap-12 border-t border-line/70 py-16 lg:grid-cols-2">
        <div>
          <p className="mb-3 font-mono text-sm text-quantum">// skills</p>
          <h2 className="mb-6 font-display text-3xl font-bold tracking-tight text-bright">
            Technical map
          </h2>
          <div className="space-y-5">
            {skillGroups.map((group, index) => (
              <div
                key={group.id}
                className={`flex items-center justify-between gap-4 ${
                  index < skillGroups.length - 1 ? "border-b border-line/60 pb-4" : ""
                }`}
              >
                <div>
                  <p className="font-display font-semibold text-bright">{group.title}</p>
                  <p className="mt-0.5 font-mono text-xs text-mist">{group.summary}</p>
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
            ))}
          </div>
          <Link
            to="/skills"
            className="mt-6 inline-block font-mono text-sm text-quantum hover:underline"
          >
            see the evidence →
          </Link>
        </div>

        <div className="panel-card flex flex-col p-7">
          <p className="mb-3 font-mono text-sm text-quantum">// connect</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-bright">
            Let's build
            <br />
            the future.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-mist">
            Open to collaboration, mentorship, and conversations about quantum-safe systems.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-quantum justify-center px-4 py-3 font-mono text-sm"
            >
              LinkedIn ↗
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-quantum justify-center px-4 py-3 font-mono text-sm"
            >
              GitHub ↗
            </a>
            <a
              href={links.x}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-quantum justify-center px-4 py-3 font-mono text-sm"
            >
              X ↗
            </a>
            <a
              href={`mailto:${links.email}`}
              className="btn-outline-quantum justify-center px-4 py-3 font-mono text-sm"
            >
              Email
            </a>
          </div>
          <a href={links.resume} download className="btn-quantum mt-4 justify-center px-6 py-3.5">
            ↓ Download Résumé
          </a>
        </div>
      </section>

      {/* LEARNING + INTERESTS */}
      <section className="grid gap-12 border-t border-line/70 py-16 lg:grid-cols-2">
        <div>
          <p className="mb-3 font-mono text-sm text-quantum">// learning_in_public</p>
          <h2 className="mb-6 font-display text-3xl font-bold tracking-tight text-bright">
            What I'm exploring
          </h2>
          <ul className="divide-y divide-line/60">
            {posts.slice(0, 3).map((post) => (
              <li key={post.slug} className="py-4">
                <div className="flex items-center gap-3 font-mono text-[11px] text-mist/70">
                  <span>{post.date}</span>
                  <span className="text-quantum">{post.tags[0]}</span>
                </div>
                <Link
                  to="/learning/$slug"
                  params={{ slug: post.slug }}
                  className="mt-1 block font-display text-sm text-bright transition hover:text-quantum"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 font-mono text-sm text-quantum">// interests</p>
          <h2 className="mb-6 font-display text-3xl font-bold tracking-tight text-bright">
            Beyond the code
          </h2>
          <div className="flex flex-wrap gap-2">
            {professionalInterests.map((interest) => (
              <span
                key={interest}
                className="rounded-lg border border-line bg-panel/60 px-3 py-1.5 font-mono text-xs text-bright"
              >
                {interest}
              </span>
            ))}
          </div>
          <Link
            to="/interests"
            className="mt-6 inline-block font-mono text-sm text-quantum hover:underline"
          >
            more interests →
          </Link>
        </div>
      </section>
    </>
  );
}
