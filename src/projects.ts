export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  dateAdded: string;
};

export const projects: Project[] = [
  {
    slug: "jeffipedia",
    title: "Jeffipedia",
    description:
      "A random Wikipedia pull that gives you a new Jeff-related entry every time you load the page.",
    tags: ["wikipedia", "api", "experimental"],
    dateAdded: "2026-02-17",
  },
  {
    slug: "jeff-noise",
    title: "Jeff Noise",
    description:
      "An intentionally chaotic audio interface where each action layers additional generated sound.",
    tags: ["audio", "web-audio", "experimental"],
    dateAdded: "2026-02-16",
  },
  {
    slug: "jeff-mirror",
    title: "Jeff Mirror",
    description:
      "A text mutation playground for mirrored, looped, and glitched phrase generation.",
    tags: ["text", "interaction", "experimental"],
    dateAdded: "2026-02-15",
  },
];
