"use client";

import { useState } from "react";

type PlaceholderProjectUIProps = {
  projectTitle: string;
};

export function PlaceholderProjectUI({ projectTitle }: PlaceholderProjectUIProps) {
  const [count, setCount] = useState(0);

  return (
    <section className="rounded-2xl border border-stone-200/80 bg-white p-5 dark:border-stone-800 dark:bg-stone-950">
      <p className="text-sm text-stone-600 dark:text-stone-400">{projectTitle} playground controls</p>
      <p className="mt-1 text-2xl font-semibold tracking-tight text-stone-950 dark:text-stone-100">
        {count}
      </p>
      <button
        type="button"
        onClick={() => setCount((current) => current + 1)}
        className="mt-3 rounded-lg bg-cyan-700 px-3 py-2 text-sm text-white transition hover:bg-cyan-600"
      >
        Add weirdness
      </button>
    </section>
  );
}
