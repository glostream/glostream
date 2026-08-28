import type { MetadataRoute } from "next";
import { site, substackPages } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: `${site.url}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${site.url}${substackPages.product}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${site.url}${substackPages.faq}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${site.url}${substackPages.docs}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
