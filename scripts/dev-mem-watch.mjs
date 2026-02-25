const MEM_WATCH_ENABLED = process.env.MEM_WATCH === "1";
const MEM_WATCH_KEY = "__jefftopiaMemWatch__";
const INTERVAL_MS = 30_000;

if (MEM_WATCH_ENABLED) {
  const globalStore = globalThis;
  if (!globalStore[MEM_WATCH_KEY]) {
    const toMb = (bytes) => (bytes / (1024 * 1024)).toFixed(1);

    const intervalId = setInterval(() => {
      const usage = process.memoryUsage();
      console.info(
        `[mem-watch] pid=${process.pid} rss=${toMb(usage.rss)}MB heapUsed=${toMb(usage.heapUsed)}MB heapTotal=${toMb(usage.heapTotal)}MB external=${toMb(usage.external)}MB`,
      );
    }, INTERVAL_MS);

    intervalId.unref();
    globalStore[MEM_WATCH_KEY] = { intervalId };

    process.once("exit", () => {
      clearInterval(intervalId);
      delete globalStore[MEM_WATCH_KEY];
    });
  }
}
