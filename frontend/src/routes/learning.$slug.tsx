import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPost, posts } from "@/data/posts";

export const Route = createFileRoute("/learning/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Post not found — Charity Michael" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — Charity Michael` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: `${post.title} — Charity Michael` },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: PostNotFound,
  component: PostDetail,
});

function PostNotFound() {
  return (
    <section className="py-24 text-center">
      <h1 className="font-display text-3xl font-bold text-bright">Post not found</h1>
      <p className="mt-3 text-sm text-mist">This note doesn't exist or has been renamed.</p>
      <Link to="/learning" className="btn-quantum mt-6 px-5 py-3">
        Back to all notes
      </Link>
    </section>
  );
}

function PostDetail() {
  const { post } = Route.useLoaderData();
  const index = posts.findIndex((p) => p.slug === post.slug);
  const previous = posts[index + 1];
  const next = posts[index - 1];

  return (
    <>
      <article className="py-16">
        <Link to="/learning" className="font-mono text-sm text-mist transition hover:text-quantum">
          ← all notes
        </Link>
        <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-[11px] text-mist/70">
          <span>{post.date}</span>
          {post.tags.map((tag) => (
            <span key={tag} className="text-quantum">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-bright sm:text-4xl">
          {post.title}
        </h1>
        <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-foreground/90">
          {post.content.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
        {post.externalUrl && (
          <a
            href={post.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block font-mono text-sm text-quantum hover:underline"
          >
            read the full version elsewhere ↗
          </a>
        )}
      </article>

      <nav className="flex flex-wrap justify-between gap-4 border-t border-line/70 py-10 font-mono text-sm">
        {previous ? (
          <Link
            to="/learning/$slug"
            params={{ slug: previous.slug }}
            className="text-mist transition hover:text-quantum"
          >
            ← {previous.title}
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            to="/learning/$slug"
            params={{ slug: next.slug }}
            className="text-mist transition hover:text-quantum"
          >
            {next.title} →
          </Link>
        )}
      </nav>
    </>
  );
}
