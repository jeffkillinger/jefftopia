"use client";

import { useState } from "react";

type PlaceholderProjectUIProps = {
  projectTitle: string;
};

export function PlaceholderProjectUI({ projectTitle }: PlaceholderProjectUIProps) {
  const [count, setCount] = useState(0);

  return (
    <section className="rounded-2xl border border-stone-200 bg-white p-5">
      <p className="text-sm text-stone-600">{projectTitle} playground controls</p>
      <p className="mt-1 text-2xl font-semibold tracking-tight">{count}</p>
      <button
        type="button"
        onClick={() => setCount((current) => current + 1)}
        className="mt-3 rounded-lg bg-ink px-3 py-2 text-sm text-white transition hover:opacity-90"
      >
        Add weirdness
      </button>
    </section>
  );
}
