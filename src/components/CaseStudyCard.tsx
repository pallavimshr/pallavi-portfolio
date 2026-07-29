import Link from "next/link";
import type { CaseStudy } from "@/lib/wordpress";

export default function CaseStudyCard({
  caseStudy,
  index,
}: {
  caseStudy: CaseStudy;
  index: number;
}) {
  return (
    <Link
      href={`/work/${caseStudy.slug}`}
      className="group block border border-line bg-paper p-6 transition-colors hover:border-blueprint"
    >
      <div className="flex items-baseline justify-between">
        <span className="label-tag text-graphite">
          FIG. {String(index + 1).padStart(2, "0")}
        </span>
        <span className="label-tag text-graphite">{caseStudy.year}</span>
      </div>

      <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-ink group-hover:text-blueprint">
        {caseStudy.title}
      </h3>

      <p className="mt-3 font-serif text-[15px] leading-relaxed text-graphite">
        {caseStudy.excerpt}
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
        <span className="label-tag text-ink">{caseStudy.client}</span>
        <span className="label-tag text-blueprint transition-transform group-hover:translate-x-1">
          VIEW →
        </span>
      </div>
    </Link>
  );
}
