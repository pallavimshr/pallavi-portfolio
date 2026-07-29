import Link from "next/link";
import BlueprintHero from "@/components/BlueprintHero";
import ProjectCard from "@/components/ProjectCard";
import DimensionRule from "@/components/DimensionRule";
import { getProjects, getExperience } from "@/lib/wordpress";

export const revalidate = 3600;

const SKILLS: { category: string; items: string[] }[] = [
  { category: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL"] },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Redux", "Zustand"],
  },
  {
    category: "Backend & CMS",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "OAuth2",
      "Razorpay",
      "MongoDB",
      "MySQL / PostgreSQL",
      "WordPress (Headless CMS)",
    ],
  },
  {
    category: "Tools & Practices",
    items: ["Git", "GitHub", "Docker", "Postman", "Webhooks", "Real-time Systems", "AI Coding Tools (Copilot, Cursor)"],
  },
];

export default async function HomePage() {
  const [projects, experience] = await Promise.all([getProjects(), getExperience()]);
  const featured = projects.slice(0, 3);
  const currentRole = experience[0];

  return (
    <>
      {/* Hero */}
      <section className="relative mx-auto max-w-7xl overflow-hidden px-8 pb-24 pt-20 md:pt-28 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="animate-fade-up space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-blueprint/10 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blueprint/60"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blueprint"></span>
              </span>
              <span className="text-xs font-medium uppercase tracking-wider text-blueprint">
                Full-Stack Developer · Gandhinagar, India
              </span>
            </div>
            
            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              I build production web apps that ship
            </h1>
            
            <p className="max-w-prose text-base leading-relaxed text-graphite/80 md:text-lg">
              2.5 years building with React.js, Next.js, Node.js, and TypeScript —
              {currentRole ? ` currently ${currentRole.role} at ${currentRole.company}. ` : " "}
              I've integrated payment gateways, real-time systems, and third-party APIs
              end-to-end, and this site itself runs on the same headless WordPress + Next.js
              stack you'll see in the work below.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/projects"
                className="group relative inline-flex items-center gap-2 rounded-lg bg-ink px-6 py-3.5 font-mono text-sm font-medium uppercase tracking-wider text-paper transition-all hover:bg-ink/90 hover:shadow-lg"
              >
                View projects
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg border-2 border-ink/20 px-6 py-3.5 font-mono text-sm font-medium uppercase tracking-wider text-ink transition-all hover:border-blueprint hover:bg-blueprint/5"
              >
                Get in touch
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-blueprint/5 blur-2xl"></div>
              <BlueprintHero />
            </div>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-7xl px-8 py-20 lg:px-12">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <DimensionRule label="SELECTED PROJECTS" />
          </div>
          <Link 
            href="/projects" 
            className="group inline-flex items-center gap-2 text-sm font-medium text-blueprint transition-all hover:text-blueprint/80"
          >
            View all
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-7xl px-8 py-20 lg:px-12">
        <DimensionRule label="TECHNICAL SKILLS" />
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((group) => (
            <div key={group.category} className="group">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-ink/70">
                {group.category}
              </h3>
              <div className="mt-4 h-0.5 w-12 bg-blueprint/20 transition-all group-hover:w-16 group-hover:bg-blueprint"></div>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-graphite/80 transition-colors hover:text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Experience preview */}
      <section className="mx-auto max-w-7xl px-8 py-20 lg:px-12">
        <div className="mb-12 flex items-center justify-between">
          <DimensionRule label="EXPERIENCE" />
          <Link 
            href="/experience" 
            className="group inline-flex items-center gap-2 text-sm font-medium text-blueprint transition-all hover:text-blueprint/80"
          >
            View all
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        <div className="space-y-6">
          {experience.slice(0, 2).map((entry, index) => (
            <div 
              key={entry.id} 
              className="group flex flex-wrap items-center justify-between gap-4 rounded-xl border border-ink/5 bg-paper/50 px-6 py-5 transition-all hover:border-blueprint/20 hover:shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="hidden h-10 w-10 items-center justify-center rounded-full bg-blueprint/5 text-blueprint sm:flex">
                  <span className="text-sm font-bold">{index + 1}</span>
                </div>
                <div>
                  <span className="font-display text-lg font-semibold text-ink">{entry.role}</span>
                  <span className="ml-2 text-graphite/70">— {entry.company}</span>
                </div>
              </div>
              <span className="rounded-full bg-ink/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-graphite/70">
                {entry.period}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}