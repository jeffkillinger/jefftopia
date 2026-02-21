import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jefftopia.dev";

  return [
    "",
    "/projects",
    "/experience",
    "/lab",
    "/jeff/jeffipedia",
    "/jeff/jeff-noise",
    "/jeff/jeff-mirror",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
