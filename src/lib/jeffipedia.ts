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

type CachedJeffSummary = {
  expiresAt: number;
  value: JeffOfTheVisit;
};

const SUMMARY_CACHE_TTL_MS = 5 * 60 * 1000;
const FALLBACK_CACHE_TTL_MS = 60 * 1000;
const FETCH_TIMEOUT_MS = 1200;
const summaryCache = new Map<string, CachedJeffSummary>();

function pickRandomTitle(): string {
  const index = Math.floor(Math.random() * JEFF_WIKIPEDIA_TITLES.length);
  return JEFF_WIKIPEDIA_TITLES[index];
}

function buildFallback(title: string): JeffOfTheVisit {
  return {
    title,
    summary: "Wikipedia summary is temporarily unavailable. Please try again later.",
    wikipediaUrl: `https://en.wikipedia.org/wiki/${encodeURIComponent(title.replaceAll(" ", "_"))}`,
  };
}

function readCachedSummary(title: string): JeffOfTheVisit | null {
  const cached = summaryCache.get(title);
  if (!cached) {
    return null;
  }

  if (Date.now() > cached.expiresAt) {
    summaryCache.delete(title);
    return null;
  }

  return cached.value;
}

function writeCachedSummary(title: string, value: JeffOfTheVisit, ttlMs = SUMMARY_CACHE_TTL_MS) {
  summaryCache.set(title, {
    value,
    expiresAt: Date.now() + ttlMs,
  });
}

export async function getJeffOfTheVisit(): Promise<JeffOfTheVisit> {
  const title = pickRandomTitle();
  const logPrefix = `[jeffipedia] ${title}`;
  const requestStart = Date.now();
  const cached = readCachedSummary(title);

  if (cached) {
    if (process.env.NODE_ENV === "development") {
      console.info(`${logPrefix} cache hit in ${Date.now() - requestStart}ms`);
    }
    return cached;
  }

  const timeoutController = new AbortController();
  const timeoutId = setTimeout(() => timeoutController.abort(), FETCH_TIMEOUT_MS);

  try {
    const response = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`,
      {
        cache: "force-cache",
        next: { revalidate: 300 },
        signal: timeoutController.signal,
        headers: {
          Accept: "application/json",
        },
      },
    );

    if (!response.ok) {
      const fallback = buildFallback(title);
      writeCachedSummary(title, fallback, FALLBACK_CACHE_TTL_MS);
      if (process.env.NODE_ENV === "development") {
        console.warn(
          `${logPrefix} non-OK response (${response.status}) after ${Date.now() - requestStart}ms`,
        );
      }
      return fallback;
    }

    const data = (await response.json()) as {
      title?: string;
      extract?: string;
      thumbnail?: { source?: string };
      content_urls?: { desktop?: { page?: string } };
    };

    const result = {
      title: data.title ?? title,
      summary: data.extract ?? "No summary available.",
      thumbnailUrl: data.thumbnail?.source,
      wikipediaUrl:
        data.content_urls?.desktop?.page ??
        `https://en.wikipedia.org/wiki/${encodeURIComponent(title.replaceAll(" ", "_"))}`,
    };

    writeCachedSummary(title, result);

    if (process.env.NODE_ENV === "development") {
      console.info(`${logPrefix} fetched in ${Date.now() - requestStart}ms`);
    }

    return result;
  } catch (error) {
    const fallback = buildFallback(title);
    writeCachedSummary(title, fallback, FALLBACK_CACHE_TTL_MS);
    if (process.env.NODE_ENV === "development") {
      const message = error instanceof Error ? error.message : String(error);
      console.warn(`${logPrefix} failed after ${Date.now() - requestStart}ms: ${message}`);
    }
    return fallback;
  } finally {
    clearTimeout(timeoutId);
  }
}
