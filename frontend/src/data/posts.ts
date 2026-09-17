export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  // Each string is a paragraph.
  content: string[];
  externalUrl?: string;
};

// Add new learning posts to the top of this list.
export const posts: Post[] = [
  {
    slug: "why-quantum-breaks-rsa",
    title: "Why quantum computers break RSA — a starting point",
    date: "2026-08-14",
    excerpt:
      "Working through Shor's algorithm at a level a second-year student can actually hold on to.",
    tags: ["PQC", "Cryptography"],
    content: [
      "RSA is safe today because factoring very large numbers takes classical computers an impractical amount of time. Shor's algorithm changes the shape of that problem rather than just speeding it up, which is why a large enough quantum computer would undo the assumption entirely.",
      "What I found useful was separating two questions that usually get mixed together: can the machine be built, and is my data already at risk. Recorded traffic can be stored now and decrypted later, so the second question does not wait for the first.",
      "Next in my notes: how key encapsulation mechanisms replace the exchange step, and what their much larger key sizes do to small services.",
    ],
  },
  {
    slug: "profiling-a-fastapi-endpoint",
    title: "Profiling a FastAPI endpoint I built",
    date: "2026-07-02",
    excerpt: "The slow part was not where I assumed. Notes on measuring before optimising.",
    tags: ["Python", "Backend"],
    content: [
      "I was convinced my endpoint was slow because of serialisation. Profiling showed almost all of the time sitting in a database query that ran once per item in a loop.",
      "Fixing it was a batching change, not a clever one. The lesson I keep relearning is that guessing costs more time than measuring.",
    ],
  },
  {
    slug: "reading-rfcs-without-getting-lost",
    title: "Reading an RFC without getting lost",
    date: "2026-05-21",
    excerpt: "A small process for working through dense specifications as a student.",
    tags: ["Security", "Learning"],
    content: [
      "Specifications are written for implementers, not learners. I now read the security considerations section first, because it tells me what the document is actually defending against.",
      "Then I write the protocol out as a sequence of messages in my own words before going back to the formal text. Anything I cannot write down is something I have not understood yet.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
