import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import DimensionRule from "@/components/DimensionRule";
import { getCaseStudies, getCaseStudy } from "@/lib/wordpress";
import { breadcrumbJsonLd, caseStudyJsonLd } from "@/lib/seo";

export const revalidate = 3600;

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies();
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const caseStudy = await getCaseStudy(params.slug);
  if (!caseStudy) return {};

  return {
    title: caseStudy.title,
    description: caseStudy.excerpt,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.excerpt,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = await getCaseStudy(params.slug);
  if (!caseStudy) notFound();

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Work", path: "/work" },
    { name: caseStudy.title, path: `/work/${caseStudy.slug}` },
  ]);

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd(caseStudy)) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <Link href="/work" className="label-tag text-blueprint hover:text-blueprint-dark">
        ← All work
      </Link>

      <p className="eyebrow mt-8">{caseStudy.scope}</p>
      <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
        {caseStudy.title}
      </h1>

      <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 border-y border-line py-4">
        <div>
          <span className="label-tag block text-graphite">Client</span>
          <span className="font-mono text-sm text-ink">{caseStudy.client}</span>
        </div>
        <div>
          <span className="label-tag block text-graphite">Year</span>
          <span className="font-mono text-sm text-ink">{caseStudy.year}</span>
        </div>
        <div>
          <span className="label-tag block text-graphite">Scope</span>
          <span className="font-mono text-sm text-ink">{caseStudy.scope}</span>
        </div>
      </div>

      <div className="mt-10 space-y-5 font-serif text-[17px] leading-relaxed text-ink">
        {caseStudy.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {caseStudy.stats.length > 0 && (
        <div className="mt-12">
          <DimensionRule label="RESULTS" />
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {caseStudy.stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-semibold text-blueprint">
                  {stat.value}
                </div>
                <div className="label-tag mt-1 text-graphite">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-16 border-t border-line pt-8">
        <Link
          href="/contact"
          className="label-tag inline-block border border-ink px-5 py-3 text-ink hover:border-blueprint hover:text-blueprint"
        >
          Start a similar project →
        </Link>
      </div>
    </article>
  );
}
