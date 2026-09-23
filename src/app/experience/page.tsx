import type { Metadata } from "next";
import DimensionRule from "@/components/DimensionRule";
import { getExperience } from "@/lib/wordpress";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Experience",
  description: "Pallavi Mishra's work experience — full-stack and frontend roles.",
};

export default async function ExperiencePage() {
  const experience = await getExperience();

  return (
    <section className="mx-auto max-w-4xl px-8 py-16 md:py-24 lg:px-12">
      {/* Header */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 rounded-full bg-blueprint/10 px-4 py-1.5">
          <span className="text-xs font-medium uppercase tracking-wider text-blueprint">
            Career
          </span>
        </div>
        
        <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          Experience
        </h1>
        
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-graphite/80 md:text-lg">
          4 years across full-stack and frontend roles, building production applications
          used by real users.
        </p>
      </div>

      {/* Experience timeline */}
      <div className="relative space-y-16">
        {/* Timeline line */}
        <div className="absolute left-[7px] top-8 h-[calc(100%-4rem)] w-0.5 bg-blueprint/10 md:left-[11px]"></div>
        
        {experience.map((entry, index) => (
          <div key={entry.id} className="relative pl-10 md:pl-14">
            {/* Timeline dot */}
            <div className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-blueprint bg-paper md:h-5 md:w-5">
              <div className="h-1.5 w-1.5 rounded-full bg-blueprint md:h-2 md:w-2"></div>
            </div>

            {/* Period badge */}
            <div className="inline-flex items-center rounded-full bg-ink/5 px-4 py-1.5">
              <span className="text-xs font-medium uppercase tracking-wider text-graphite/70">
                {entry.period}
              </span>
            </div>

            {/* Content */}
            <div className="mt-4 space-y-3">
              <div>
                <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
                  {entry.role}
                </h2>
                <div className="mt-1 flex flex-wrap items-center gap-3">
                  <span className="font-mono text-sm font-medium text-blueprint">
                    {entry.company}
                  </span>
                  {entry.location && (
                    <>
                      <span className="h-1 w-1 rounded-full bg-graphite/30"></span>
                      <span className="text-sm text-graphite/60">{entry.location}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Bullets */}
              <ul className="mt-4 space-y-3">
                {entry.bullets.map((bullet, j) => (
                  <li key={j} className="group flex gap-4">
                    <span className="mt-2.5 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blueprint/40 transition-colors group-hover:bg-blueprint"></span>
                    <span className="font-serif text-[15px] leading-relaxed text-graphite/90 transition-colors group-hover:text-ink md:text-base">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {experience.length === 0 && (
        <div className="flex min-h-[200px] items-center justify-center rounded-2xl border-2 border-dashed border-ink/10">
          <p className="text-graphite/60">No experience entries found</p>
        </div>
      )}
    </section>
  );
}
