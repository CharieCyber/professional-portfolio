import { createFileRoute, Link } from "@tanstack/react-router";
import { links, profile } from "@/data/profile";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Charity Michael — From Cybersecurity to Quantum-Safe Engineering" },
      {
        name: "description",
        content:
          "Charity Michael's story: a 200-level cybersecurity student at FUTA, Nigeria, building Python backends and working toward a career in quantum-safe engineering.",
      },
      { property: "og:title", content: "About Charity Michael — Cybersecurity to Quantum-Safe" },
      {
        property: "og:description",
        content:
          "Education, career story and long-term goals of a cybersecurity student heading toward post-quantum cryptography.",
      },
    ],
  }),
  component: About,
});

const stages = [
  {
    title: "Cybersecurity",
    body: "It started with wanting to know how systems fail. Coursework at FUTA gave me the vocabulary; curiosity gave me the habit of poking at things.",
  },
  {
    title: "Understanding how systems work",
    body: "Defending something means understanding it end to end — the network, the service, the data and the people using it.",
  },
  {
    title: "Python & backend development",
    body: "So I started building instead of only reading. Small services, scripts and APIs in Python taught me where real weaknesses live.",
  },
  {
    title: "Building practical solutions",
    body: "My rule: if I notice a problem, I try to ship something small that addresses it rather than filing it away.",
  },
  {
    title: "Cryptography & mathematical foundations",
    body: "Security eventually becomes maths. I'm working through the algebra that modern schemes rest on.",
  },
  {
    title: "Post-quantum cryptography",
    body: "This is my current research interest — reading the specifications, running small experiments, and writing up what I understand so far.",
  },
  {
    title: "Quantum-safe engineering",
    body: "The long-term goal: helping real systems migrate to cryptography that survives quantum computers.",
  },
];

function About() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <p className="mb-3 font-mono text-sm text-quantum">// about</p>
        <h1 className="max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight text-bright sm:text-5xl">
          I spot problems early, then build something practical for them.
        </h1>
        <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-foreground/90">
          <p>
            I'm {profile.fullName} — most people call me {profile.preferredName}. I'm a{" "}
            {profile.level} {profile.program} student at {profile.university} in {profile.location},
            and I describe myself as a solution builder: someone who notices the problem before it
            becomes urgent and builds something useful in response.
          </p>
          <p>
            Right now that means Python and backend development, data analysis and AI, and a growing
            research interest in post-quantum cryptography. It's a journey in progress, not a
            finished CV — this site is deliberately honest about which parts are strong and which
            parts I'm still learning.
          </p>
        </div>
      </section>

      <section className="border-t border-line/70 py-16">
        <p className="mb-3 font-mono text-sm text-quantum">// career_story</p>
        <h2 className="mb-8 font-display text-3xl font-bold tracking-tight text-bright">
          How the path connects
        </h2>
        <ol className="relative space-y-6 border-l border-line pl-6">
          {stages.map((stage, i) => (
            <li key={stage.title} className="relative">
              <span
                className="absolute -left-[31px] top-1.5 grid size-4 place-items-center rounded-full border border-line bg-panel"
                aria-hidden="true"
              >
                <span className="size-1.5 rounded-full bg-quantum" />
              </span>
              <p className="font-mono text-xs text-mist/70">
                stage {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 font-display text-lg font-semibold text-bright">{stage.title}</h3>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-mist">{stage.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="grid gap-8 border-t border-line/70 py-16 lg:grid-cols-3">
        <div className="panel-card p-6">
          <p className="font-mono text-xs text-quantum">education</p>
          <h2 className="mt-2 font-display text-xl font-semibold text-bright">
            {profile.university}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-mist">
            B.Tech {profile.program} · {profile.level}. Coursework across network security,
            programming, and the mathematics behind cryptography.
          </p>
        </div>
        <div className="panel-card p-6">
          <p className="font-mono text-xs text-quantum">career_goal</p>
          <h2 className="mt-2 font-display text-xl font-semibold text-bright">
            Quantum-Safe Engineer
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-mist">
            Building and migrating systems so they stay secure against quantum-capable attackers —
            combining backend engineering with post-quantum cryptography.
          </p>
        </div>
        <div className="panel-card p-6">
          <p className="font-mono text-xs text-quantum">philosophy</p>
          <h2 className="mt-2 font-display text-xl font-semibold text-bright">Foresight first</h2>
          <p className="mt-2 text-sm leading-relaxed text-mist">
            Evidence over claims, growth over perfection. I'd rather show the work in progress than
            overstate what I already know.
          </p>
        </div>
      </section>

      <section className="border-t border-line/70 py-16">
        <div className="flex flex-wrap gap-3">
          <Link to="/projects" className="btn-quantum px-6 py-3.5">
            See my projects <span aria-hidden="true">→</span>
          </Link>
          <a href={links.resume} download className="btn-outline-quantum px-6 py-3.5">
            ↓ Download Résumé
          </a>
        </div>
      </section>
    </>
  );
}
