import kyberBridge from "@/assets/project-kyber-bridge.jpg";
import threatLens from "@/assets/project-threat-lens.jpg";
import latticeNotes from "@/assets/project-lattice-notes.jpg";

export type ProjectStatus = "Completed" | "In Progress" | "Experimental" | "Archived";

export type Project = {
  slug: string;
  name: string;
  summary: string;
  status: ProjectStatus;
  accent: "quantum" | "plasma" | "cyber";
  image: string;
  imageAlt: string;
  tech: string[];
  problem: string;
  approach: string;
  features: string[];
  lessons: string;
  next: string;
  github?: string;
  demo?: string;
  date: string;
};

// Add, edit or remove entries here — the projects list and detail pages follow.
export const projects: Project[] = [
  {
    slug: "kyber-bridge",
    name: "Kyber Bridge",
    summary:
      "A Python prototype exploring post-quantum KEM migration for a small API gateway.",
    status: "In Progress",
    accent: "quantum",
    image: kyberBridge,
    imageAlt: "Abstract lattice of connected cryptographic key nodes",
    tech: ["Python", "FastAPI", "PQC"],
    problem:
      "Most small services still rely on classical key exchange. If a large quantum computer arrives, recorded traffic can be decrypted later — so migration has to start before it is urgent.",
    approach:
      "I wired a minimal API gateway with a swappable key-exchange layer so a classical handshake and a post-quantum key encapsulation mechanism can be compared side by side.",
    features: [
      "Swappable key-exchange layer behind one interface",
      "Timing measurements for handshake and payload size",
      "Notes explaining each trade-off in plain language",
    ],
    lessons:
      "Post-quantum keys are much larger than classical ones, and that size — not raw speed — is what breaks assumptions in small services.",
    next: "Add a hybrid mode that runs classical and post-quantum exchange together.",
    date: "2026-08",
  },
  {
    slug: "threat-lens",
    name: "Threat Lens",
    summary:
      "Log-analysis tool that flags anomalous patterns before they escalate into incidents.",
    status: "Completed",
    accent: "plasma",
    image: threatLens,
    imageAlt: "Dark analytics dashboard with charts summarising log activity",
    tech: ["Pandas", "SQL", "AI"],
    problem:
      "Server logs contain early warnings, but they are long, repetitive and easy to ignore until something has already broken.",
    approach:
      "I parsed captured log data with Pandas, built a baseline of normal behaviour, then scored each time window against it and wrote a short explanation for every alert.",
    features: [
      "Baseline profile built from historic activity",
      "Simple anomaly scoring per time window",
      "Plain-language explanation attached to each alert",
    ],
    lessons:
      "An alert nobody can interpret is not useful. Explaining why something is unusual mattered more than making the model clever.",
    next: "Stream live logs instead of analysing a captured file.",
    date: "2026-05",
  },
  {
    slug: "lattice-notes",
    name: "Lattice Notes",
    summary:
      "Interactive notebook visualising how lattice-based schemes resist quantum attacks.",
    status: "Experimental",
    accent: "cyber",
    image: latticeNotes,
    imageAlt: "Coral lattice diagram with encryption equations",
    tech: ["NumPy", "Math", "Crypto"],
    problem:
      "The maths behind post-quantum cryptography is where most people give up. I wanted a version I could actually see.",
    approach:
      "A notebook that generates small lattices, plots them, and shows how hard the shortest-vector problem becomes as dimensions grow.",
    features: [
      "Generated lattices with adjustable dimensions",
      "Plots of short-vector search behaviour",
      "Study notes written alongside each experiment",
    ],
    lessons:
      "Working the small cases by hand made the specifications readable in a way that reading alone never did.",
    next: "Extend the notebook to walk through a full key-encapsulation example.",
    date: "2026-03",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
