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

type JeffipediaStats = {
  requests: number;
  cacheHits: number;
  cacheMisses: number;
  fetches: number;
  fallbacks: number;
};

const SUMMARY_CACHE_TTL_MS = 5 * 60 * 1000;
const FALLBACK_CACHE_TTL_MS = 60 * 1000;
const FETCH_TIMEOUT_MS = 1200;
const MAX_CACHE_ENTRIES = 64;
const JEFFIPEDIA_STATE_KEY = "__jeffipediaState__";

type JeffipediaState = {
  summaryCache: Map<string, CachedJeffSummary>;
  stats: JeffipediaStats;
};

function createInitialState(): JeffipediaState {
  return {
    summaryCache: new Map<string, CachedJeffSummary>(),
    stats: {
      requests: 0,
      cacheHits: 0,
      cacheMisses: 0,
      fetches: 0,
      fallbacks: 0,
    },
  };
}

const globalStore = globalThis as typeof globalThis & {
  [JEFFIPEDIA_STATE_KEY]?: JeffipediaState;
};

const jeffipediaState = globalStore[JEFFIPEDIA_STATE_KEY] ?? createInitialState();
if (!globalStore[JEFFIPEDIA_STATE_KEY]) {
  globalStore[JEFFIPEDIA_STATE_KEY] = jeffipediaState;
}

const summaryCache = jeffipediaState.summaryCache;
const stats = jeffipediaState.stats;

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

function pruneExpiredCacheEntries() {
  const now = Date.now();
  for (const [key, entry] of summaryCache.entries()) {
    if (entry.expiresAt <= now) {
      summaryCache.delete(key);
    }
  }
}

function writeCachedSummary(title: string, value: JeffOfTheVisit, ttlMs = SUMMARY_CACHE_TTL_MS) {
  pruneExpiredCacheEntries();
  summaryCache.set(title, {
    value,
    expiresAt: Date.now() + ttlMs,
  });

  if (summaryCache.size > MAX_CACHE_ENTRIES) {
    const oldestKey = summaryCache.keys().next().value;
    if (oldestKey !== undefined) {
      summaryCache.delete(oldestKey);
    }
  }
}

function buildDebugStats() {
  return {
    ...stats,
    cacheSize: summaryCache.size,
    cacheKeys: Array.from(summaryCache.keys()),
  };
}

export function getJeffipediaDebugStats() {
  return buildDebugStats();
}

export async function getJeffOfTheVisit(): Promise<JeffOfTheVisit> {
  stats.requests += 1;
  const title = pickRandomTitle();
  const logPrefix = `[jeffipedia] ${title}`;
  const requestStart = Date.now();
  const debugLogging = process.env.NODE_ENV === "development" && process.env.MEM_DEBUG === "1";
  const cached = readCachedSummary(title);

  if (cached) {
    stats.cacheHits += 1;
    if (debugLogging) {
      console.info(`${logPrefix} cache hit in ${Date.now() - requestStart}ms`);
    }
    return cached;
  }
  stats.cacheMisses += 1;

  const timeoutController = new AbortController();
  const timeoutId = setTimeout(() => timeoutController.abort(), FETCH_TIMEOUT_MS);

  try {
    stats.fetches += 1;
    const response = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`,
      {
        cache: "no-store",
        signal: timeoutController.signal,
        headers: {
          Accept: "application/json",
        },
      },
    );

    if (!response.ok) {
      stats.fallbacks += 1;
      const fallback = buildFallback(title);
      writeCachedSummary(title, fallback, FALLBACK_CACHE_TTL_MS);
      if (debugLogging) {
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

    if (debugLogging) {
      console.info(`${logPrefix} fetched in ${Date.now() - requestStart}ms`);
    }

    return result;
  } catch (error) {
    stats.fallbacks += 1;
    const fallback = buildFallback(title);
    writeCachedSummary(title, fallback, FALLBACK_CACHE_TTL_MS);
    if (debugLogging) {
      const message = error instanceof Error ? error.message : String(error);
      console.warn(`${logPrefix} failed after ${Date.now() - requestStart}ms: ${message}`);
    }
    return fallback;
  } finally {
    clearTimeout(timeoutId);
  }
}
