// Central place for personal details and external links.
// Update these values and every page picks up the change.

export const profile = {
  fullName: "Charity Michael",
  preferredName: "Charie",
  role: "Cybersecurity Student",
  direction: "Future Quantum-Safe Engineer",
  tagline: "I build practical solutions with an eye on the problems technology will face tomorrow.",
  status: "200-Level Cybersecurity · FUTA, Akure",
  university: "Federal University of Technology Akure (FUTA)",
  program: "Cybersecurity",
  level: "200 Level",
  location: "Nigeria",
};

export const links = {
  email: "charityo.michael@gmail.com",
  linkedin: "https://www.linkedin.com/in/charity-michael-321822390/",
  github: "https://github.com/CharieCyber",
  x: "https://x.com/Onecho_o",
  // Drop a PDF at public/charity-michael-resume.pdf to replace the draft résumé.
  resume: "/charity-michael-resume.pdf",
};

export const navItems = [
  { to: "/", label: "home" },
  { to: "/about", label: "about" },
  { to: "/skills", label: "skills" },
  { to: "/projects", label: "projects" },
  { to: "/learning", label: "learning" },
  { to: "/interests", label: "interests" },
  { to: "/contact", label: "contact" },
] as const;
