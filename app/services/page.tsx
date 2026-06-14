import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "INSPIROIN services — Shopify development, custom websites with admin panels, store management, custom Shopify work, e-commerce, and ongoing support.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Shopify stores and custom websites — built, managed, and supported"
        lede="Whether you sell on Shopify or need a fully custom website with your own admin panel, we design, build, deploy, and support the entire platform."
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-content px-[var(--gutter)]">
          <Reveal stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </Reveal>
        </div>
      </section>

    </>
  );
}
