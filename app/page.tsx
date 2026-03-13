import type { Metadata } from "next";
import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/app/components/card";
import { Tag } from "@/app/components/tag";
import { caseStudies } from "@/src/data/case-studies";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Jeff Killinger is a solutions architect and developer focused on API-driven SaaS systems, composable architecture, and scalable frontend delivery.",
};

const highlightedProjects = caseStudies.map((study) => ({
  title: study.title,
  href: `/projects#${study.slug}`,
  description: study.homepageDescription,
  focus: study.homepageFocus,
  imageSrc: study.imageSrc,
}));

const coreStack = [
  "JavaScript",
  "React",
  "Gatsby",
  "Contentful",
  "GraphQL",
  "Netlify",
  "CI/CD",
  "Accessibility",
  "Performance",
];

const technicalFocus = [
  "Composable architecture and platform thinking",
  "Headless CMS modeling and content operations",
  "API integrations across GraphQL and REST",
  "Scalable frontend systems in React and Gatsby",
  "Technical communication and stakeholder alignment",
  "Performance, accessibility, and production delivery",
];

// Drop your headshot at /public/images/jeff-killinger.jpg
const headshotPath = "/images/jeff-killinger.jpg";
const hasHeadshot = existsSync(join(process.cwd(), "public", "images", "jeff-killinger.jpg"));

export default function HomePage() {
  return (
    <div className="space-y-20 py-12 md:py-16">
      <section className="fade-in grid items-center gap-8 md:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] md:gap-10">
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-stone-950 md:text-6xl dark:text-stone-100">
            Jeff Killinger
          </h1>
          <p className="text-xl font-medium text-stone-800 dark:text-stone-200">
            Solutions Architect & Developer
          </p>
          <p className="max-w-prose text-base leading-relaxed text-stone-700 md:max-w-[min(50vw,42rem)] md:text-lg dark:text-stone-300">
            I design and build API-driven SaaS systems using headless CMS, composable architecture, and
            scalable frontend systems. My work spans structured integrations across GraphQL and REST APIs,
            reusable content models, and clear technical communication with cross-functional teams. I&apos;m
            especially interested in onboarding, personalization, and billing flows that hold up in
            production.
          </p>
          <p className="max-w-prose text-sm leading-relaxed text-stone-700 md:max-w-[min(50vw,42rem)] md:text-base dark:text-stone-300">
            Recent work: Led frontend architecture for a multi-site admissions platform at the University
            of Chicago used across recruitment, financial aid, and academic programs.
          </p>
          <p className="max-w-prose text-sm leading-relaxed text-stone-600 md:max-w-[min(50vw,42rem)] md:text-base dark:text-stone-400">
            Currently building a multi-tenant SaaS platform that combines CMS-driven content, rule-based
            personalization, and Stripe subscription logic.
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
              rel="noopener noreferrer"
              className="rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold text-stone-800 transition hover:bg-stone-50 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-100 dark:hover:bg-stone-900"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jeff-killinger/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold text-stone-800 transition hover:bg-stone-50 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-100 dark:hover:bg-stone-900"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="justify-self-start md:justify-self-end">
          {hasHeadshot ? (
            <div className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-stone-200/80 bg-stone-100 shadow-sm dark:border-stone-800 dark:bg-stone-900">
              <Image
                src={headshotPath}
                alt="Jeff Killinger headshot"
                width={720}
                height={900}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          ) : (
            // Drop your headshot at /public/images/jeff-killinger.jpg
            <div className="flex aspect-[4/5] w-full max-w-sm items-center justify-center rounded-3xl border border-dashed border-stone-300 bg-stone-100 px-6 text-center text-sm text-stone-500 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-400">
              Headshot placeholder
            </div>
          )}
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-950 dark:text-stone-100">
            Selected Work
          </h2>
          <div className="pt-2">
            <div className="flex flex-wrap gap-2">
              {coreStack.map((item) => (
                <Tag key={item} label={item} />
              ))}
            </div>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {highlightedProjects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              href={project.href}
              focus={project.focus}
              ctaLabel="View Case Study"
              imageAlt={`${project.title} preview`}
              imageSrc={project.imageSrc}
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
    </div>
  );
}
