import type { Metadata } from "next";
import DimensionRule from "@/components/DimensionRule";
import { getServices } from "@/lib/wordpress";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Services",
  description: "How Northline Studio engages: product engineering, systems architecture, and hardware integration.",
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <p className="eyebrow">Capabilities</p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
        How we engage
      </h1>
      <p className="mt-4 max-w-prose font-serif text-graphite">
        Three ways teams typically bring us in — often starting with one and expanding
        into another once the first phase ships.
      </p>

      <div className="mt-14 space-y-14">
        {services.map((service, i) => (
          <div key={service.id}>
            <DimensionRule label={`0${i + 1}`} />
            <h2 className="mt-6 font-display text-2xl font-semibold text-ink">
              {service.title}
            </h2>
            <p className="mt-3 max-w-prose font-serif text-[17px] leading-relaxed text-graphite">
              {service.detail || service.excerpt}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
