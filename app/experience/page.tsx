import type { Metadata } from "next";
import { PageLayout } from "@/app/components/page-layout";
import { Tag } from "@/app/components/tag";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience focused on frontend engineering, API integration, system design, CI/CD, and accessibility at the University of Chicago.",
};

const highlights = [
  "Built and maintained React/Gatsby applications for high-traffic academic and admissions platforms.",
  "Integrated GraphQL and REST services to power dynamic content, forms, and data-driven UX.",
  "Designed frontend architecture patterns and reusable component systems across multiple sites.",
  "Collaborated with CMS teams to align content modeling with engineering constraints.",
  "Implemented CI/CD quality gates for linting, type safety, and production build confidence.",
  "Led cross-functional implementation with designers, content strategists, and program stakeholders.",
  "Delivered performance and accessibility improvements aligned with Core Web Vitals and WCAG standards.",
  "Contributed to system design decisions balancing editorial flexibility, scalability, and maintainability.",
];

const skills = ["React", "Gatsby", "GraphQL", "REST", "Contentful", "Netlify", "CI/CD", "CMS", "Accessibility"];

export default function ExperiencePage() {
  return (
    <PageLayout
      title="Experience"
      description="Production-focused engineering work with long-term ownership, architecture responsibility, and collaborative delivery."
    >
      <article className="fade-in space-y-8 rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm md:p-8 dark:border-stone-800 dark:bg-stone-950">
        <header className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-950 dark:text-stone-100">
            University of Chicago
          </h2>
          <p className="text-base font-medium text-stone-800 dark:text-stone-200">Frontend Web Developer</p>
          <p className="text-sm text-stone-600 dark:text-stone-400">2019–2026</p>
        </header>

        <ul className="space-y-3 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
          {highlights.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true" className="text-cyan-700 dark:text-cyan-300">
                •
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Tag key={skill} label={skill} />
          ))}
        </div>
      </article>
    </PageLayout>
  );
}
