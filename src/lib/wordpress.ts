import { MOCK_EXPERIENCE, MOCK_PROJECTS } from "./mock-data";

/**
 * Headless WordPress client.
 *
 * Reads two custom post types over the WP REST API:
 *   - `project`    (fields via ACF: tagline, tech_stack, year, github_url,
 *      live_url, body, highlights — body/highlights are plain Text Area
 *      fields, one item per line/blank-line, so no ACF PRO is required)
 *   - `experience` (fields via ACF: role, company, location, period,
 *      order, bullets — bullets is also a plain Text Area, one bullet
 *      per line)
 *
 * See /wordpress-setup/theme-functions.php for the PHP that registers
 * these post types and exposes ACF fields on the REST response.
 *
 * If WORDPRESS_API_URL is unset, or the WP instance is unreachable, every
 * function below falls back to the bundled mock content (your real resume
 * data) so the app still builds and runs without a live WordPress backend.
 */

export type ProjectHighlight = string;

export type Project = {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  techStack: string;
  year: string;
  githubUrl: string | null;
  liveUrl: string | null;
  body: string[];
  highlights: ProjectHighlight[];
};

export type ExperienceEntry = {
  id: number;
  slug: string;
  role: string;
  company: string;
  location: string;
  period: string;
  order: number;
  bullets: string[];
};

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL?.replace(/\/+$/, "");

// Revalidate at most once an hour by default; individual fetches can
// override this, and /api/revalidate can force an immediate refresh
// on-demand from a WordPress `save_post` webhook.
const DEFAULT_REVALIDATE_SECONDS = 3600;

async function wpFetch<T>(path: string, tag: string): Promise<T | null> {
  if (!WORDPRESS_API_URL) return null;

  try {
    const res = await fetch(`${WORDPRESS_API_URL}/wp-json/wp/v2/${path}`, {
      next: { revalidate: DEFAULT_REVALIDATE_SECONDS, tags: [tag] },
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      console.warn(`[wordpress] ${path} returned ${res.status}, using mock data`);
      return null;
    }

    return (await res.json()) as T;
  } catch (err) {
    console.warn(`[wordpress] failed to fetch ${path}, using mock data`, err);
    return null;
  }
}

// --- Projects -------------------------------------------------------------

type WPProjectPost = {
  id: number;
  slug: string;
  title: { rendered: string };
  acf?: {
    tagline?: string;
    tech_stack?: string;
    year?: string;
    github_url?: string;
    live_url?: string;
    body?: string[] | string;
    highlights?: string[] | string;
  };
};

function normalizeProject(post: WPProjectPost): Project {
  const acf = post.acf ?? {};
  const body = Array.isArray(acf.body)
    ? acf.body
    : typeof acf.body === "string"
      ? acf.body.split("\n\n").filter(Boolean)
      : [];
  const highlights = Array.isArray(acf.highlights)
    ? acf.highlights
    : typeof acf.highlights === "string"
      ? acf.highlights.split("\n").map((h) => h.trim()).filter(Boolean)
      : [];

  return {
    id: post.id,
    slug: post.slug,
    title: post.title.rendered,
    tagline: acf.tagline ?? "",
    techStack: acf.tech_stack ?? "",
    year: acf.year ?? "",
    githubUrl: acf.github_url ?? null,
    liveUrl: acf.live_url ?? null,
    body,
    highlights,
  };
}

export async function getProjects(): Promise<Project[]> {
  const posts = await wpFetch<WPProjectPost[]>(
    "project?_fields=id,slug,title,acf&per_page=50",
    "projects",
  );
  if (!posts) return MOCK_PROJECTS;
  return posts.map(normalizeProject);
}

export async function getProject(slug: string): Promise<Project | null> {
  const posts = await wpFetch<WPProjectPost[]>(
    `project?slug=${encodeURIComponent(slug)}&_fields=id,slug,title,acf`,
    `project-${slug}`,
  );

  if (!posts) {
    return MOCK_PROJECTS.find((p) => p.slug === slug) ?? null;
  }
  if (posts.length === 0) return null;
  return normalizeProject(posts[0]);
}

// --- Experience -------------------------------------------------------------

type WPExperiencePost = {
  id: number;
  slug: string;
  title: { rendered: string }; // used as role title
  acf?: {
    role?: string;
    company?: string;
    location?: string;
    period?: string;
    order?: number;
    bullets?: string[] | string;
  };
};

function normalizeExperience(post: WPExperiencePost): ExperienceEntry {
  const acf = post.acf ?? {};
  const bullets = Array.isArray(acf.bullets)
    ? acf.bullets
    : typeof acf.bullets === "string"
      ? acf.bullets.split("\n").map((b) => b.trim()).filter(Boolean)
      : [];

  return {
    id: post.id,
    slug: post.slug,
    role: acf.role ?? post.title.rendered,
    company: acf.company ?? "",
    location: acf.location ?? "",
    period: acf.period ?? "",
    order: acf.order ?? 0,
    bullets,
  };
}

export async function getExperience(): Promise<ExperienceEntry[]> {
  const posts = await wpFetch<WPExperiencePost[]>(
    "experience?_fields=id,slug,title,acf&per_page=50",
    "experience",
  );
  if (!posts) return MOCK_EXPERIENCE;
  return posts.map(normalizeExperience).sort((a, b) => a.order - b.order);
}

export const isUsingMockData = !WORDPRESS_API_URL;