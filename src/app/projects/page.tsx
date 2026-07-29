import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import DimensionRule from "@/components/DimensionRule";
import { getProjects } from "@/lib/wordpress";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects built by Pallavi Mishra — full-stack apps, real-time platforms, and tools.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section className="mx-auto max-w-7xl px-8 py-16 md:py-24 lg:px-12">
      {/* Header */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 rounded-full bg-blueprint/10 px-4 py-1.5">
          <span className="text-xs font-medium uppercase tracking-wider text-blueprint">
            Archive
          </span>
        </div>
        
        <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          Projects
        </h1>
        
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-graphite/80 md:text-lg">
          Work built end-to-end — some shipped for clients, some built to learn a specific
          problem in depth.
        </p>
      </div>

      {/* Project count with rule */}
      <div className="mb-12">
        <DimensionRule label={`${projects.length} PROJECTS`} />
      </div>

      {/* Projects grid */}
      {projects.length === 0 ? (
        <div className="flex min-h-[200px] items-center justify-center rounded-2xl border-2 border-dashed border-ink/10">
          <p className="text-graphite/60">No projects found</p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      )}
    </section>
  );
}