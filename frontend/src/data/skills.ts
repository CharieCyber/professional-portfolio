export type SkillLevel = "core" | "developing" | "exploring" | "direction";

export type SkillGroup = {
  id: string;
  title: string;
  summary: string;
  level: SkillLevel;
  skills: { name: string; note: string; evidence?: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "programming-backend",
    title: "Programming & Backend",
    summary: "Python · FastAPI · REST · SQL",
    level: "core",
    skills: [
      {
        name: "Python",
        note: "My main language for scripts, tools and backend services.",
        evidence: "Used in every project listed on this site.",
      },
      {
        name: "Backend development",
        note: "Building small APIs, handling auth, logging and data storage.",
        evidence: "Kyber Bridge, Threat Lens.",
      },
      {
        name: "SQL & data modelling",
        note: "Querying and shaping relational data for analysis.",
      },
    ],
  },
  {
    id: "data-ai",
    title: "Data & AI",
    summary: "Pandas · NumPy · Analysis · ML basics",
    level: "developing",
    skills: [
      {
        name: "Data analysis",
        note: "Cleaning, exploring and explaining datasets with Pandas.",
        evidence: "Threat Lens log analysis.",
      },
      {
        name: "Artificial intelligence",
        note: "Learning the fundamentals of machine learning and applying them to security data.",
      },
    ],
  },
  {
    id: "security-crypto",
    title: "Security & Cryptography",
    summary: "Cybersecurity · PQC · Lattice math",
    level: "direction",
    skills: [
      {
        name: "Cybersecurity",
        note: "Coursework plus hands-on practice with system hardening and log review.",
        evidence: "FUTA Cybersecurity programme.",
      },
      {
        name: "Post-quantum cryptography",
        note: "An active research interest — reading specifications and running small experiments.",
        evidence: "Kyber Bridge, Lattice Notes.",
      },
      {
        name: "Mathematical foundations",
        note: "Working through the algebra and lattice problems behind modern schemes.",
      },
    ],
  },
];

export const levelLabels: Record<SkillLevel, string> = {
  core: "core",
  developing: "developing",
  exploring: "exploring",
  direction: "direction",
};
