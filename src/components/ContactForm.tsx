"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-8 text-center transition-all">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
          <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-display text-xl font-semibold text-ink">
          Message received
        </p>
        <p className="mt-2 font-serif text-sm text-graphite/70">
          I'll get back to you within two business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="group">
        <label htmlFor="name" className="text-xs font-medium uppercase tracking-wider text-graphite/60 transition-colors group-focus-within:text-blueprint">
          Name
        </label>
        <div className="relative mt-1.5">
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-ink/10 bg-paper/50 px-4 py-3 font-serif text-sm text-ink outline-none transition-all placeholder:text-graphite/30 focus:border-blueprint/50 focus:bg-paper focus:shadow-sm"
            placeholder="Your name"
          />
        </div>
      </div>

      <div className="group">
        <label htmlFor="email" className="text-xs font-medium uppercase tracking-wider text-graphite/60 transition-colors group-focus-within:text-blueprint">
          Email
        </label>
        <div className="relative mt-1.5">
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-ink/10 bg-paper/50 px-4 py-3 font-serif text-sm text-ink outline-none transition-all placeholder:text-graphite/30 focus:border-blueprint/50 focus:bg-paper focus:shadow-sm"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="group">
        <label htmlFor="message" className="text-xs font-medium uppercase tracking-wider text-graphite/60 transition-colors group-focus-within:text-blueprint">
          What are you building?
        </label>
        <div className="relative mt-1.5">
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full rounded-lg border border-ink/10 bg-paper/50 px-4 py-3 font-serif text-sm text-ink outline-none transition-all placeholder:text-graphite/30 focus:border-blueprint/50 focus:bg-paper focus:shadow-sm resize-y"
            placeholder="Tell me about your project..."
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-blueprint px-6 py-3.5 font-mono text-sm font-medium uppercase tracking-wider text-paper transition-all hover:bg-blueprint/90 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <span className="relative z-10">
          {status === "submitting" ? (
            <span className="flex items-center gap-3">
              <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            <>
              Send message
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </>
          )}
        </span>
      </button>

      {status === "error" && (
        <div className="flex items-start gap-3 rounded-lg border border-red-500/20 bg-red-500/5 p-4">
          <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="text-sm font-medium text-red-600">
              Something went wrong
            </p>
            <p className="text-sm text-red-500/70">
              Please email me directly at <a href="mailto:pallavimshr2707@gmail.com" className="underline hover:text-red-600">pallavimshr2707@gmail.com</a>
            </p>
          </div>
        </div>
      )}
    </form>
  );
}