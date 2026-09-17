import { createFileRoute, Link } from "@tanstack/react-router";
import { posts } from "@/data/posts";

export const Route = createFileRoute("/learning/")({
  head: () => ({
    meta: [
      { title: "Learning in Public — Notes on PQC, Python & Security | Charity Michael" },
      {
        name: "description",
        content:
          "Charity Michael's learning-in-public notes: post-quantum cryptography, Python backend lessons, and how to read dense security specifications as a student.",
      },
      { property: "og:title", content: "Learning in Public — Charity Michael" },
      {
        property: "og:description",
        content: "Study notes and experiments on cryptography, Python and cybersecurity.",
      },
    ],
  }),
  component: Learning,
});

function Learning() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <p className="mb-3 font-mono text-sm text-quantum">// learning_in_public</p>
        <h1 className="max-w-2xl font-display text-4xl font-bold tracking-tight text-bright sm:text-5xl">
          Notes &amp; experiments
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/90">
          Working notes as I learn — including the parts I got wrong first. Writing things down is
          how I check whether I actually understood them.
        </p>
      </section>

      <section className="border-t border-line/70 py-16">
        <ul className="divide-y divide-line/60">
          {posts.map((post) => (
            <li key={post.slug} className="py-6">
              <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] text-mist/70">
                <span>{post.date}</span>
                {post.tags.map((tag) => (
                  <span key={tag} className="text-quantum">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="mt-2 font-display text-xl font-semibold text-bright">
                <Link
                  to="/learning/$slug"
                  params={{ slug: post.slug }}
                  className="transition hover:text-quantum"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mist">{post.excerpt}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
