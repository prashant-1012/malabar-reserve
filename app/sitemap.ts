import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/products", priority: 0.95, changeFrequency: "weekly" },
  { path: "/products/black-pepper", priority: 0.85, changeFrequency: "weekly" },
  { path: "/products/green-cardamom", priority: 0.85, changeFrequency: "weekly" },
  { path: "/products/turmeric", priority: 0.85, changeFrequency: "weekly" },
  { path: "/products/red-chilli", priority: 0.85, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
