import type { Project } from "./wordpress";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const SITE_NAME = "Pallavi Mishra";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    url: SITE_URL,
    jobTitle: "Full-Stack Developer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gandhinagar",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    email: "mailto:pallavimshr2707@gmail.com",
    sameAs: ["https://linkedin.com/in/pallavimshr", "https://github.com/pallavimshr"],
  };
}

export function projectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    about: project.tagline,
    creator: { "@type": "Person", name: SITE_NAME },
    dateCreated: project.year,
    url: `${SITE_URL}/projects/${project.slug}`,
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export { SITE_URL, SITE_NAME };
