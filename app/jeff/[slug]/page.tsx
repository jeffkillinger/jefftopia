import Link from "next/link";
import { notFound } from "next/navigation";
import { PlaceholderProjectUI } from "@/app/components/placeholder-project-ui";
import { projects } from "@/src/projects";
import { JeffipediaProject } from "./jeffipedia-project";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="space-y-8 py-12">
      <header className="max-w-3xl space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">
          /jeff/{project.slug}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-stone-950 md:text-4xl dark:text-stone-100">
          {project.title}
        </h1>
        <p className="text-sm leading-relaxed text-stone-700 md:text-base dark:text-stone-300">
          {project.description}
        </p>
      </header>

      {project.slug === "jeffipedia" ? (
        <JeffipediaProject />
      ) : (
        <PlaceholderProjectUI projectTitle={project.title} />
      )}

      <details className="rounded-xl border border-stone-200/80 bg-white p-4 text-sm dark:border-stone-800 dark:bg-stone-950">
        <summary className="cursor-pointer select-none font-medium text-stone-900 dark:text-stone-100">
          How it works
        </summary>
        <p className="mt-3 leading-relaxed text-stone-700 dark:text-stone-300">
          Each experiment is resolved by slug from <code>src/projects.ts</code>. Jeffipedia selects a
          random Jeff-related Wikipedia entry on each request and fetches a fresh summary from the
          Wikipedia API with no response caching.
        </p>
      </details>

      <div className="flex gap-4 text-sm">
        <Link
          href="/lab"
          className="font-medium text-cyan-700 underline underline-offset-2 hover:text-cyan-600 dark:text-cyan-300 dark:hover:text-cyan-200"
        >
          Back to Lab
        </Link>
        <Link
          href="/"
          className="font-medium text-stone-700 underline underline-offset-2 hover:text-stone-900 dark:text-stone-300 dark:hover:text-stone-100"
        >
          Back to Home
        </Link>
      </div>
    </article>
  );
}
