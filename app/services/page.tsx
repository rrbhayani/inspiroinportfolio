import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal } from "@/components/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Digital solutions from INSPIROIN — web & app development, product development, cloud & infrastructure, managed IT, and consulting.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Digital Solutions"
        title="Technology built to scale, secure, and evolve"
        lede="We design, build, and manage digital systems that help organizations operate efficiently today and adapt confidently for what's next."
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

      <FinalCTA />
    </>
  );
}
