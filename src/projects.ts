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
      "A random Wikipedia pull that gives you a new Jeff-focused entry on each visit.",
    tags: ["wikipedia", "random", "interactive"],
    dateAdded: "2026-02-17",
  },
  {
    slug: "jeff-noise",
    title: "Jeff Noise",
    description:
      "A tiny signal toy where each click layers another waveform and slowly turns into digital chaos.",
    tags: ["audio", "toy", "interactive"],
    dateAdded: "2026-02-16",
  },
  {
    slug: "jeff-mirror",
    title: "Jeff Mirror",
    description:
      "A text reflection lab that mutates phrases into mirrored, looped, and glitched variants.",
    tags: ["text", "playground", "interactive"],
    dateAdded: "2026-02-15",
  },
];
