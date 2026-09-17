import { createFileRoute } from "@tanstack/react-router";
import { personalInterests, professionalInterests } from "@/data/interests";

export const Route = createFileRoute("/interests")({
  head: () => ({
    meta: [
      { title: "Interests — Cryptography, Quantum Computing & Research | Charity Michael" },
      {
        name: "description",
        content:
          "The technical and personal interests behind Charity Michael's portfolio: cryptography, post-quantum research, quantum computing, AI and backend systems.",
      },
      { property: "og:title", content: "Interests — Charity Michael" },
      {
        property: "og:description",
        content:
          "Professional research interests and a few personal ones, from post-quantum cryptography to puzzles and mentoring.",
      },
    ],
  }),
  component: Interests,
});

function Interests() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <p className="mb-3 font-mono text-sm text-quantum">// interests</p>
        <h1 className="max-w-2xl font-display text-4xl font-bold tracking-tight text-bright sm:text-5xl">
          Beyond the code
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/90">
          What holds my attention when nobody assigns it. These interests are where most of my
          projects and reading start.
        </p>
      </section>

      <section className="grid gap-6 border-t border-line/70 py-16 lg:grid-cols-2">
        <div className="panel-card p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold text-bright">
            Professional interests
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {professionalInterests.map((interest) => (
              <span
                key={interest}
                className="rounded-lg border border-line bg-panel/60 px-3 py-1.5 font-mono text-xs text-bright"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
        <div className="panel-card p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold text-bright">Outside of tech</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {personalInterests.map((interest) => (
              <span
                key={interest}
                className="rounded-lg border border-line bg-panel/60 px-3 py-1.5 font-mono text-xs text-mist"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
