import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/app/components/card";
import { PageLayout } from "@/app/components/page-layout";
import { projects } from "@/src/projects";

export const metadata: Metadata = {
  title: "Lab",
  description:
    "Jefftopia Lab for experimental side projects, including Jeffipedia and future prototype concepts.",
};

export default function LabPage() {
  return (
    <PageLayout
      eyebrow="Experiments"
      title="Lab"
      description="This is where I experiment. It is intentionally playful, but built with the same engineering discipline as production work."
    >
      <section className="space-y-6">
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.slug}
              title={project.title}
              description={project.description}
              href={`/jeff/${project.slug}`}
              tags={project.tags}
              ctaLabel="Open Experiment"
              imageAlt={`${project.title} experiment thumbnail`}
            />
          ))}
        </div>

        <article className="fade-in rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-950">
          <h2 className="text-lg font-semibold tracking-tight text-stone-950 dark:text-stone-100">
            Future Jeff Projects
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone-700 dark:text-stone-300">
            Additional experiments are planned for interaction design, data APIs, and creative tooling.
            New projects will ship in this section without diluting the professional portfolio narrative.
          </p>
          <Link
            href="/jeff/jeffipedia"
            prefetch={false}
            className="mt-4 inline-flex items-center text-sm font-semibold text-cyan-700 transition hover:text-cyan-600 dark:text-cyan-300 dark:hover:text-cyan-200"
          >
            Jump to Jeffipedia
            <span aria-hidden="true" className="ml-1">
              →
            </span>
          </Link>
        </article>
      </section>
    </PageLayout>
  );
}
