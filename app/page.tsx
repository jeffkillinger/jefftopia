import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/app/components/card";
import { Tag } from "@/app/components/tag";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Jeff Killinger is a software engineer focused on frontend systems, API integration, cloud deployments, and production-ready architecture.",
};

const highlightedProjects = [
  {
    title: "UChicago Admissions Ecosystem",
    href: "/projects#uchicago-admissions-ecosystem",
    description:
      "Frontend architecture across admissions pathways with reusable components and API-backed content delivery.",
    tags: ["Next.js", "TypeScript", "CMS", "GraphQL"],
  },
  {
    title: "Summer Programs",
    href: "/projects#uchicago-summer-programs",
    description:
      "Enrollment-focused platform engineering with scalable templates and high-velocity content publishing.",
    tags: ["React", "REST", "Performance", "CI/CD"],
  },
  {
    title: "Financial Aid",
    href: "/projects#uchicago-financial-aid",
    description:
      "Accessible information architecture and service integration for high-stakes financial workflows.",
    tags: ["Accessibility", "GraphQL", "System Design"],
  },
  {
    title: "Career Advancement",
    href: "/projects#uchicago-career-advancement",
    description:
      "Modular frontend system for dynamic events, advising resources, and multi-audience journeys.",
    tags: ["Next.js", "APIs", "Cloud", "Analytics"],
  },
];

const technicalFocus = [
  "React and modern frontend architecture",
  "API-driven systems across GraphQL and REST",
  "Cloud-native deployment and release workflows",
  "Performance and accessibility engineering",
  "AI-assisted development workflows",
];

export default function HomePage() {
  return (
    <div className="space-y-20 py-12 md:py-16">
      <section className="fade-in max-w-3xl space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">
          Software Engineering Portfolio
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-stone-950 md:text-6xl dark:text-stone-100">
          Jeff Killinger
        </h1>
        <p className="text-xl font-medium text-stone-800 dark:text-stone-200">Software Engineer</p>
        <p className="max-w-2xl text-base leading-relaxed text-stone-700 md:text-lg dark:text-stone-300">
          I design and ship production web systems with an emphasis on scalable frontend architecture,
          API integration, and dependable delivery pipelines. My work combines technical rigor,
          maintainable implementation, and practical product thinking.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-full bg-cyan-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-600"
          >
            View Projects
          </Link>
          <a
            href="https://github.com/jeffkillinger"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold text-stone-800 transition hover:bg-stone-50 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-100 dark:hover:bg-stone-900"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jeffkillinger/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold text-stone-800 transition hover:bg-stone-50 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-100 dark:hover:bg-stone-900"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-950 dark:text-stone-100">
            Selected Work
          </h2>
          <p className="text-sm text-stone-700 dark:text-stone-300">
            Featured case studies focused on architecture, integration, and production execution.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {highlightedProjects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              href={project.href}
              tags={project.tags}
              ctaLabel="View Case Study"
              imageAlt={`${project.title} preview`}
            />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-stone-950 dark:text-stone-100">
          Technical Focus
        </h2>
        <ul className="grid gap-3 md:grid-cols-2">
          {technicalFocus.map((focus) => (
            <li
              key={focus}
              className="fade-in rounded-xl border border-stone-200/80 bg-white px-4 py-3 text-sm text-stone-700 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-300"
            >
              {focus}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-cyan-200/70 bg-cyan-50/60 p-6 dark:border-cyan-900/70 dark:bg-cyan-950/30">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold tracking-tight text-stone-950 dark:text-stone-100">
              Lab / Experiments
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-stone-700 dark:text-stone-300">
              Jeffipedia and future absurd projects live in a separate playground so core portfolio work
              stays clear and focused.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/jeff/jeffipedia"
              prefetch={false}
              className="rounded-full border border-cyan-300 bg-white px-4 py-2 text-sm font-semibold text-cyan-800 transition hover:bg-cyan-100 dark:border-cyan-800 dark:bg-cyan-950 dark:text-cyan-200 dark:hover:bg-cyan-900"
            >
              Jeffipedia
            </Link>
            <Link
              href="/lab"
              className="rounded-full border border-cyan-300 bg-white px-4 py-2 text-sm font-semibold text-cyan-800 transition hover:bg-cyan-100 dark:border-cyan-800 dark:bg-cyan-950 dark:text-cyan-200 dark:hover:bg-cyan-900"
            >
              Future Jeff Projects
            </Link>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Tag label="Experimental" />
          <Tag label="Playful" />
          <Tag label="Separate from production work" />
        </div>
      </section>
    </div>
  );
}
