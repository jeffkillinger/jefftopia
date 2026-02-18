import Image from "next/image";
import { getJeffOfTheVisit } from "@/src/lib/jeffipedia";

export async function JeffipediaProject() {
  const jeff = await getJeffOfTheVisit();

  return (
    <section className="rounded-2xl border border-stone-200 bg-white p-5">
      <p className="text-xs uppercase tracking-wide text-stone-500">Jeff for this Visit</p>

      <div className="mt-4 grid gap-4 sm:grid-cols-[auto_1fr] sm:items-start">
        {jeff.thumbnailUrl ? (
          <Image
            src={jeff.thumbnailUrl}
            alt={jeff.title}
            width={160}
            height={160}
            className="rounded-xl border border-stone-200 object-cover"
          />
        ) : null}

        <div>
          <h2 className="text-xl font-semibold tracking-tight">{jeff.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-stone-700">{jeff.summary}</p>
          <a
            href={jeff.wikipediaUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex text-sm text-blue-700 underline underline-offset-2"
          >
            Open on Wikipedia
          </a>
        </div>
      </div>
    </section>
  );
}
