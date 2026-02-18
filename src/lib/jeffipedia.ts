const JEFF_WIKIPEDIA_TITLES = [
  "Jeff Bridges",
  "Jeff Buckley",
  "Jeff Goldblum",
  "Jeff Hardy",
  "Jeff Koons",
  "Jeff Lynne",
  "Jeff Probst",
  "Jeff Ross",
  "Jeff Sessions",
  "Jeff Beck",
  "Jeff Tweedy",
  "Jeff Bezos",
  "Geoffrey Rush",
  "Geoffrey Chaucer",
  "Geoff Johns",
];

export type JeffOfTheVisit = {
  title: string;
  summary: string;
  thumbnailUrl?: string;
  wikipediaUrl: string;
};

function pickRandomTitle(): string {
  const index = Math.floor(Math.random() * JEFF_WIKIPEDIA_TITLES.length);
  return JEFF_WIKIPEDIA_TITLES[index];
}

export async function getJeffOfTheVisit(): Promise<JeffOfTheVisit> {
  const title = pickRandomTitle();

  const response = await fetch(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`,
    {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    },
  );

  if (!response.ok) {
    return {
      title,
      summary: "Wikipedia summary is temporarily unavailable. Please try again later.",
      wikipediaUrl: `https://en.wikipedia.org/wiki/${encodeURIComponent(title.replaceAll(" ", "_"))}`,
    };
  }

  const data = (await response.json()) as {
    title?: string;
    extract?: string;
    thumbnail?: { source?: string };
    content_urls?: { desktop?: { page?: string } };
  };

  return {
    title: data.title ?? title,
    summary: data.extract ?? "No summary available.",
    thumbnailUrl: data.thumbnail?.source,
    wikipediaUrl:
      data.content_urls?.desktop?.page ??
      `https://en.wikipedia.org/wiki/${encodeURIComponent(title.replaceAll(" ", "_"))}`,
  };
}
