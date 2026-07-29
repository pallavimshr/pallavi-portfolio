import type { Metadata } from "next";
import DimensionRule from "@/components/DimensionRule";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "About Pallavi Mishra — full-stack developer, Government College of Engineering, Chhatrapati Sambhajinagar.",
};

const CERTIFICATIONS = [
  "Qualified GATE 2026 in CS & IT",
  "Completed McKinsey Forward Program (2025)",
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-8 py-16 md:py-24 lg:px-12">
      {/* Header */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 rounded-full bg-blueprint/10 px-4 py-1.5">
          <span className="text-xs font-medium uppercase tracking-wider text-blueprint">
            About
          </span>
        </div>
        
        <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          A bit about me
        </h1>
      </div>

      {/* Bio */}
      <div className="space-y-6 font-serif text-base leading-relaxed text-graphite/90 md:text-lg">
        <p>
          I'm a full-stack developer with 2.5 years building and shipping production web
          applications using React.js, Next.js, Node.js, TypeScript, and SQL/NoSQL databases.
          I've worked end-to-end on payment gateway integrations, real-time systems, and
          third-party APIs — and I'm a regular user of AI coding tools like Copilot and
          Cursor, with a clear sense of when to trust generated code and when to rewrite it
          myself.
        </p>
        <p>
          Before my current role, I spent nearly two years preparing for the UPSC Civil
          Services Examination — a period that shaped how I approach hard, ambiguous
          problems and long feedback loops, both of which show up constantly in software.
        </p>
      </div>

      {/* Education */}
      <div className="mt-20">
        <DimensionRule label="EDUCATION" />
        <div className="mt-8 rounded-2xl border border-ink/5 bg-paper/50 p-6 transition-all hover:border-blueprint/20 md:p-8">
          <h2 className="font-display text-xl font-bold text-ink md:text-2xl">
            B.Tech — Computer Science and Engineering
          </h2>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <span className="font-mono text-sm font-medium text-blueprint">
              Government College of Engineering, Chhatrapati Sambhajinagar
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-graphite/30 md:block"></span>
            <span className="text-sm font-medium text-graphite/60">
              Maharashtra
            </span>
          </div>
          <div className="mt-3 inline-flex items-center rounded-full bg-ink/5 px-3 py-1">
            <span className="text-xs font-medium uppercase tracking-wider text-graphite/70">
              2018 – 2022
            </span>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="mt-20">
        <DimensionRule label="CERTIFICATIONS & ACHIEVEMENTS" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {CERTIFICATIONS.map((item, index) => (
            <div 
              key={item} 
              className="group flex items-start gap-4 rounded-xl border border-ink/5 p-5 transition-all hover:border-blueprint/20 hover:shadow-sm"
            >
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blueprint/10">
                <svg className="h-4 w-4 text-blueprint" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-serif text-sm leading-relaxed text-graphite/90 group-hover:text-ink md:text-base">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 rounded-2xl border-2 border-dashed border-ink/10 p-8 text-center">
        <p className="font-display text-lg font-semibold text-ink">
          Want to work together?
        </p>
        <Link
          href="/contact"
          className="group mt-4 inline-flex items-center gap-2 rounded-lg bg-blueprint px-6 py-3.5 font-mono text-sm font-medium uppercase tracking-wider text-paper transition-all hover:bg-blueprint/90 hover:shadow-lg"
        >
          Get in touch
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}