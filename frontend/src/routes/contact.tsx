import { createFileRoute } from "@tanstack/react-router";
import { links, profile } from "@/data/profile";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Charity Michael — Email, LinkedIn, GitHub & X" },
      {
        name: "description",
        content:
          "Get in touch with Charity Michael (Charie) about internships, research collaboration or quantum-safe engineering — by email, LinkedIn, GitHub or X.",
      },
      { property: "og:title", content: "Contact Charity Michael" },
      {
        property: "og:description",
        content: "Email, LinkedIn, GitHub and X links, plus a downloadable résumé.",
      },
    ],
  }),
  component: Contact,
});

const channels = [
  { label: "Email", value: links.email, href: `mailto:${links.email}`, external: false },
  { label: "LinkedIn", value: "Professional profile", href: links.linkedin, external: true },
  { label: "GitHub", value: "Source code & projects", href: links.github, external: true },
  { label: "X", value: "Technical conversations", href: links.x, external: true },
];

function Contact() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <p className="mb-3 font-mono text-sm text-quantum">// connect</p>
        <h1 className="max-w-2xl font-display text-4xl font-bold tracking-tight text-bright sm:text-5xl">
          Let's build the future.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/90">
          I'm open to internships, research collaboration, mentorship and good technical
          conversation — especially anything touching cryptography or quantum-safe systems. Based in{" "}
          {profile.location}.
        </p>
      </section>

      <section className="grid gap-6 border-t border-line/70 py-16 lg:grid-cols-[1.1fr_.9fr]">
        <ul className="space-y-3">
          {channels.map((channel) => (
            <li key={channel.label}>
              <a
                href={channel.href}
                {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="panel-card flex items-center justify-between gap-4 p-5 transition hover:border-quantum/50"
              >
                <span>
                  <span className="block font-display font-semibold text-bright">
                    {channel.label}
                  </span>
                  <span className="mt-0.5 block font-mono text-xs text-mist">{channel.value}</span>
                </span>
                <span className="font-mono text-sm text-quantum" aria-hidden="true">
                  {channel.external ? "↗" : "→"}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="panel-card flex flex-col justify-center p-7">
          <p className="font-mono text-sm text-quantum">// résumé</p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-bright">
            Full background in one page
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-mist">
            The current version of my CV — education, skills and projects. Opens in the browser or
            saves as a PDF.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={links.resume} download className="btn-quantum px-6 py-3.5">
              ↓ Download Résumé
            </a>
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-quantum px-6 py-3.5"
            >
              View in browser ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
