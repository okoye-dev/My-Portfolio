export const SITE = {
  name: "Okoye Divine",
  title: "Okoye Divine | Product-minded Software & AI Engineer",
  description:
    "Okoye Divine is a product-minded software and AI engineer. Projects, writing on engineering excellence, and personal work.",
  email: "dpokoye@gmail.com",
  nav: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Writing", href: "/blog" },
    { label: "Story", href: "/story" },
    { label: "Personal", href: "/personal" },
    { label: "Contact", href: "/#contact" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/okoye-dev" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/Okoye-Divine-9b8b491a7/",
    },
  ],
  projects: [
    {
      slug: "tonderbot",
      name: "Tonderbot",
      tags: [] as string[],
      summary: "Project summary to come.",
    },
    {
      slug: "lapisarchive",
      name: "LapisArchive",
      tags: [] as string[],
      summary: "Project summary to come.",
    },
  ],
  /** Most recent first */
  experience: [
    {
      company: "ActiveGiving",
      href: undefined as string | undefined,
      role: "Role to come",
      years: "Dates to come",
    },
    {
      company: "Kolanut Africa",
      href: "https://kolanutafrica.com" as string | undefined,
      role: "Role to come",
      years: "Dates to come",
    },
  ],
  /** Latest field notes, newest first. Each becomes a page at /blog/<slug>. */
  notes: [
    {
      slug: "profiling-a-slow-database-query",
      title: "What I learned profiling a slow database query",
    },
    {
      slug: "testing-code-written-by-coding-agents",
      title: "How I test code written by coding agents",
    },
    {
      slug: "simplest-architecture-that-satisfies-the-requirements",
      title: "The simplest architecture that satisfies these requirements",
    },
  ],
};
