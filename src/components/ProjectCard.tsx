import Link from "next/link";
import type { Project } from "@/lib/wordpress";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block overflow-hidden rounded-2xl border border-ink/5 bg-paper/50 p-6 transition-all hover:border-blueprint/30 hover:shadow-lg hover:shadow-blueprint/5 md:p-8"
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blueprint/0 via-blueprint/0 to-blueprint/0 transition-all duration-500 group-hover:from-blueprint/[0.02] group-hover:to-blueprint/[0.05]"></div>
      
      {/* Header */}
      <div className="relative flex items-baseline justify-between">
        <span className="font-mono text-xs font-medium uppercase tracking-wider text-graphite/50">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="rounded-full bg-ink/5 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-graphite/60">
          {project.year}
        </span>
      </div>

      {/* Title */}
      <h3 className="relative mt-5 font-display text-xl font-bold leading-snug text-ink transition-colors group-hover:text-blueprint md:text-2xl">
        {project.title}
      </h3>

      {/* Tagline */}
      <p className="relative mt-3 font-serif text-[15px] leading-relaxed text-graphite/80 md:text-base">
        {project.tagline}
      </p>

      {/* Footer */}
      <div className="relative mt-6 flex items-center justify-between border-t border-ink/5 pt-5">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-blueprint/5 px-3 py-1 font-mono text-xs font-medium text-blueprint/80">
          <span className="h-1.5 w-1.5 rounded-full bg-blueprint/40"></span>
          {project.techStack}
        </span>
        <span className="group/link inline-flex items-center gap-1.5 font-mono text-xs font-medium uppercase tracking-wider text-blueprint transition-all group-hover:gap-2.5">
          <span>View</span>
          <svg className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute right-0 top-0 h-12 w-12 overflow-hidden opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute -right-6 -top-6 h-12 w-12 rotate-45 bg-blueprint/10"></div>
      </div>
    </Link>
  );
}