import type { MetadataRoute } from "next";

const BASE = "https://petrostroy.biz";

const staticRoutes: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { url: "/", priority: 1.0, changeFrequency: "weekly" },
  { url: "/uslugi/stroitelstvo-domov", priority: 0.9, changeFrequency: "monthly" },
  { url: "/doma-iz-gazobetona-pod-klyuch", priority: 0.9, changeFrequency: "monthly" },
  { url: "/uslugi/stroitelstvo-domov/doma-iz-kirpicha", priority: 0.9, changeFrequency: "monthly" },
  { url: "/uslugi/stroitelstvo-domov/doma-iz-keramoblokov", priority: 0.9, changeFrequency: "monthly" },
  { url: "/doma-iz-kleenogo-brusa-pod-klyuch", priority: 0.9, changeFrequency: "monthly" },
  { url: "/projects", priority: 0.85, changeFrequency: "weekly" },
  { url: "/price", priority: 0.85, changeFrequency: "monthly" },
  { url: "/uslugi", priority: 0.8, changeFrequency: "monthly" },
  { url: "/uslugi/proektirovanie", priority: 0.8, changeFrequency: "monthly" },
  { url: "/uslugi/stroitelstvo-fundamenta", priority: 0.8, changeFrequency: "monthly" },
  { url: "/uslugi/dopolnitelnye-uslugi", priority: 0.7, changeFrequency: "monthly" },
  { url: "/uslugi/dopolnitelnye-uslugi/vyezd-speczialista-na-uchastok", priority: 0.7, changeFrequency: "monthly" },
  { url: "/uslugi/dopolnitelnye-uslugi/pomoshh-v-oformlenii-ipoteki-2", priority: 0.7, changeFrequency: "monthly" },
  { url: "/doma-iz-gazobetona", priority: 0.75, changeFrequency: "monthly" },
  { url: "/about/o-nas", priority: 0.75, changeFrequency: "monthly" },
  { url: "/otzyvy", priority: 0.75, changeFrequency: "weekly" },
  { url: "/about/garantii", priority: 0.7, changeFrequency: "monthly" },
  { url: "/about/akczii", priority: 0.7, changeFrequency: "weekly" },
  { url: "/faq", priority: 0.7, changeFrequency: "monthly" },
  { url: "/contacts", priority: 0.7, changeFrequency: "monthly" },
  { url: "/category/news", priority: 0.65, changeFrequency: "weekly" },
  { url: "/biznesu", priority: 0.65, changeFrequency: "monthly" },
  { url: "/sposoby-oplaty", priority: 0.6, changeFrequency: "monthly" },
  { url: "/privacy", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
