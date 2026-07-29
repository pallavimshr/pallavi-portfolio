import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import DimensionRule from "@/components/DimensionRule";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Pallavi Mishra.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-2xl px-8 py-16 md:py-24 lg:px-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-blueprint/10 px-4 py-1.5">
          <span className="text-xs font-medium uppercase tracking-wider text-blueprint">
            Get in touch
          </span>
        </div>
        
        <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          Let's talk
        </h1>
        
        <p className="mt-4 text-base leading-relaxed text-graphite/80 md:text-lg">
          Open to full-stack roles and freelance work. Reach out here, or directly:
        </p>
      </div>

      {/* Contact methods */}
      <div className="mb-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
        <a
          href="mailto:pallavimshr2707@gmail.com"
          className="group inline-flex items-center gap-2.5 rounded-full bg-ink/5 px-5 py-2.5 font-mono text-sm text-ink transition-all hover:bg-blueprint/10 hover:text-blueprint"
        >
          <svg className="h-4 w-4 text-graphite/60 transition-colors group-hover:text-blueprint" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          pallavimshr2707@gmail.com
        </a>
        <a
          href="tel:+918408941673"
          className="group inline-flex items-center gap-2.5 rounded-full bg-ink/5 px-5 py-2.5 font-mono text-sm text-ink transition-all hover:bg-blueprint/10 hover:text-blueprint"
        >
          <svg className="h-4 w-4 text-graphite/60 transition-colors group-hover:text-blueprint" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          +91-8408941673
        </a>
      </div>

      <div className="my-12">
        <DimensionRule />
      </div>

      {/* Form */}
      <div className="rounded-2xl border border-ink/5 bg-paper/50 p-6 md:p-8">
        <div className="mb-8">
          <h2 className="font-display text-xl font-semibold text-ink">
            Send a message
          </h2>
          <p className="mt-1 text-sm text-graphite/60">
            I'll get back to you within 24 hours
          </p>
        </div>
        <ContactForm />
      </div>

      {/* Social/Alternative contact */}
      <div className="mt-12 text-center">
        <p className="text-sm text-graphite/60">
          Or connect with me on
        </p>
        <div className="mt-3 flex justify-center gap-4">
          <a
            href="https://github.com/pallavimshr"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-ink/5 p-2.5 text-graphite/60 transition-all hover:bg-blueprint/10 hover:text-blueprint"
            aria-label="GitHub"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/pallavimshr"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-ink/5 p-2.5 text-graphite/60 transition-all hover:bg-blueprint/10 hover:text-blueprint"
            aria-label="LinkedIn"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}