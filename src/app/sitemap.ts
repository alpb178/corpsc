import type { MetadataRoute } from "next";

const base = "https://www.corpsc.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const languages = { es: `${base}/es`, en: `${base}/en` };

  return [
    { url: `${base}/es`, lastModified, alternates: { languages } },
    { url: `${base}/en`, lastModified, alternates: { languages } },
  ];
}
