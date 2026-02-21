"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Project } from "@/src/projects";

type ProjectGridProps = {
  projects: Project[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string>("all");

  const allTags = useMemo(
    () => [...new Set(projects.flatMap((project) => project.tags))].sort(),
    [projects],
  );

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesQuery =
        query.length === 0 ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query);

      const matchesTag = activeTag === "all" || project.tags.includes(activeTag);

      return matchesQuery && matchesTag;
    });
  }, [activeTag, projects, search]);

  return (
    <section className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search projects"
          className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm outline-none ring-0 transition focus:border-stone-500 sm:max-w-md"
        />
        <p className="text-xs text-stone-600">{filteredProjects.length} visible</p>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveTag("all")}
          className={`rounded-full px-3 py-1 text-xs transition ${
            activeTag === "all" ? "bg-ink text-white" : "bg-white text-stone-700"
          }`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(tag)}
            className={`rounded-full px-3 py-1 text-xs transition ${
              activeTag === tag ? "bg-ink text-white" : "bg-white text-stone-700"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/jeff/${project.slug}`}
            prefetch={false}
            className="group rounded-2xl border border-stone-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-stone-300"
          >
            <p className="text-sm text-stone-500">{project.dateAdded}</p>
            <h2 className="mt-2 text-lg font-semibold tracking-tight">{project.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-stone-700">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={`${project.slug}-${tag}`}
                  className="rounded-full bg-stone-100 px-2 py-1 text-[11px] uppercase tracking-wide text-stone-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
