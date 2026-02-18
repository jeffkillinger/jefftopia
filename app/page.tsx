import Link from "next/link";
import { ProjectGrid } from "@/app/components/project-grid";
import { projects } from "@/src/projects";

export default function HomePage() {
  const featuredProject = projects.find((project) => project.slug === "jeffipedia");

  return (
    <div className="space-y-7">
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Weird Projects Playground</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-stone-700">
          Clean experiments, small interfaces, and questionable ideas that still ship.
        </p>
      </section>

      {featuredProject ? (
        <Link
          href={`/jeff/${featuredProject.slug}`}
          className="block rounded-3xl border border-stone-300 bg-white p-6 transition hover:-translate-y-0.5"
        >
          <p className="text-xs uppercase tracking-wide text-stone-500">Featured Today</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">{featuredProject.title}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone-700">
            {featuredProject.description}
          </p>
        </Link>
      ) : null}

      <ProjectGrid projects={projects} />
    </div>
  );
}
