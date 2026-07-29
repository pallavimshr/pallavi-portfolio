import type { Metadata } from "next";
import CaseStudyCard from "@/components/CaseStudyCard";
import DimensionRule from "@/components/DimensionRule";
import { getCaseStudies } from "@/lib/wordpress";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies from Northline Studio's product engineering and architecture engagements.",
};

export default async function WorkPage() {
  const caseStudies = await getCaseStudies();

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <p className="eyebrow">Archive</p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
        Selected work
      </h1>
      <p className="mt-4 max-w-prose font-serif text-graphite">
        A record of engagements, in the order they shipped.
      </p>

      <div className="mt-12">
        <DimensionRule label={`${caseStudies.length} PROJECTS`} />
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {caseStudies.map((cs, i) => (
          <CaseStudyCard key={cs.id} caseStudy={cs} index={i} />
        ))}
      </div>
    </section>
  );
}
