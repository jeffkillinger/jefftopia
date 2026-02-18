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
    <article className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-wide text-stone-500">/jeff/{project.slug}</p>
        <h1 className="text-3xl font-semibold tracking-tight">{project.title}</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-stone-700">{project.description}</p>
      </header>

      {project.slug === "jeffipedia" ? (
        <JeffipediaProject />
      ) : (
        <PlaceholderProjectUI projectTitle={project.title} />
      )}

      <details className="rounded-xl border border-stone-200 bg-white p-4">
        <summary className="cursor-pointer select-none text-sm font-medium">How it works</summary>
        <p className="mt-3 text-sm leading-relaxed text-stone-700">
          Each project page is resolved by slug from <code>src/projects.ts</code>. Jeffipedia selects a
          random Jeff-related Wikipedia entry on each request and fetches a fresh summary from the Wikipedia
          API with no response caching.
        </p>
      </details>

      <Link href="/" className="inline-flex text-sm text-stone-700 underline underline-offset-2">
        Back to Home
      </Link>
    </article>
  );
}
