import Image from "next/image";
import { getJeffOfTheVisit } from "@/src/lib/jeffipedia";

export async function JeffipediaProject() {
  const jeff = await getJeffOfTheVisit();

  return (
    <section className="rounded-2xl border border-stone-200/80 bg-white p-5 dark:border-stone-800 dark:bg-stone-950">
      <p className="text-xs uppercase tracking-wide text-stone-500 dark:text-stone-400">Jeff for this Visit</p>

      <div className="mt-4 grid gap-4 sm:grid-cols-[auto_1fr] sm:items-start">
        {jeff.thumbnailUrl ? (
          <Image
            src={jeff.thumbnailUrl}
            alt={jeff.title}
            width={160}
            height={160}
            className="rounded-xl border border-stone-200 object-cover dark:border-stone-700"
          />
        ) : null}

        <div>
          <h2 className="text-xl font-semibold tracking-tight text-stone-950 dark:text-stone-100">
            {jeff.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-stone-700 dark:text-stone-300">{jeff.summary}</p>
          <a
            href={jeff.wikipediaUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex text-sm font-medium text-cyan-700 underline underline-offset-2 hover:text-cyan-600 dark:text-cyan-300 dark:hover:text-cyan-200"
          >
            Open on Wikipedia
          </a>
        </div>
      </div>
    </section>
  );
}
