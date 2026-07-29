import Link from "next/link";
import DimensionRule from "@/components/DimensionRule";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-24 text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-ink">
        Nothing drawn at this coordinate
      </h1>
      <p className="mt-4 font-serif text-graphite">
        The page you&apos;re looking for doesn&apos;t exist, or has moved.
      </p>
      <div className="my-10">
        <DimensionRule />
      </div>
      <Link
        href="/"
        className="label-tag border border-ink px-5 py-3 text-ink hover:border-blueprint hover:text-blueprint"
      >
        ← Back to home
      </Link>
    </section>
  );
}
