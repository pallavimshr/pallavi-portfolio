import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import DimensionRule from "@/components/DimensionRule";
import { getProjects, getProject } from "@/lib/wordpress";
import { breadcrumbJsonLd, projectJsonLd } from "@/lib/seo";

export const revalidate = 3600;

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = await getProject(params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: project.title,
      description: project.tagline,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);
  if (!project) notFound();

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Projects", path: "/projects" },
    { name: project.title, path: `/projects/${project.slug}` },
  ]);

  return (
    <article className="mx-auto max-w-4xl px-8 py-16 md:py-24 lg:px-12">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd(project)) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Back button */}
      <Link 
        href="/projects" 
        className="group inline-flex items-center gap-2 text-sm font-medium text-graphite/70 transition-all hover:text-blueprint"
      >
        <svg className="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        All projects
      </Link>

      {/* Header */}
      <div className="mt-8 space-y-4">
        <div className="inline-flex items-center rounded-full bg-blueprint/10 px-4 py-1.5">
          <span className="text-xs font-medium uppercase tracking-wider text-blueprint">
            {project.techStack}
          </span>
        </div>
        
        <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {project.title}
        </h1>
        
        <p className="max-w-2xl text-lg leading-relaxed text-graphite/80 md:text-xl">
          {project.tagline}
        </p>
      </div>

      {/* Project metadata */}
      <div className="mt-8 grid grid-cols-2 gap-6 rounded-2xl border border-ink/5 bg-paper/50 p-6 sm:grid-cols-4">
        <div>
          <span className="text-xs font-medium uppercase tracking-wider text-graphite/60">
            Year
          </span>
          <p className="mt-1 font-mono text-sm font-medium text-ink">{project.year}</p>
        </div>
        <div>
          <span className="text-xs font-medium uppercase tracking-wider text-graphite/60">
            Stack
          </span>
          <p className="mt-1 font-mono text-sm font-medium text-ink">{project.techStack}</p>
        </div>
        {project.liveUrl && (
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-graphite/60">
              Live
            </span>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 flex items-center gap-1.5 font-mono text-sm font-medium text-blueprint transition-colors hover:text-blueprint/80"
            >
              View site
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}
        {project.githubUrl && (
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-graphite/60">
              Code
            </span>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 flex items-center gap-1.5 font-mono text-sm font-medium text-blueprint transition-colors hover:text-blueprint/80"
            >
              GitHub
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}
      </div>

      {/* Body content */}
      <div className="mt-12 space-y-6 font-serif text-base leading-relaxed text-ink/90 md:text-lg">
        {project.body.map((paragraph, i) => (
          <p key={i} className="first:mt-0">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Highlights */}
      {project.highlights.length > 0 && (
        <div className="mt-16">
          <DimensionRule label="HIGHLIGHTS" />
          <div className="mt-8 space-y-4">
            {project.highlights.map((highlight, i) => (
              <div 
                key={i} 
                className="group flex items-start gap-4 rounded-xl border border-ink/5 p-5 transition-all hover:border-blueprint/20 hover:shadow-sm"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blueprint/10 font-mono text-xs font-bold text-blueprint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-serif text-[15px] leading-relaxed text-graphite/90">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="mt-20 rounded-2xl border-2 border-dashed border-ink/10 p-8 text-center">
        <p className="font-display text-lg font-semibold text-ink">
          Have a similar project in mind?
        </p>
        <Link
          href="/contact"
          className="group mt-4 inline-flex items-center gap-2 rounded-lg bg-blueprint px-6 py-3.5 font-mono text-sm font-medium uppercase tracking-wider text-paper transition-all hover:bg-blueprint/90 hover:shadow-lg"
        >
          Let's talk
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
}