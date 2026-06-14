import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { HorizontalScroll } from "@/components/anim/HorizontalScroll";
import { industries } from "@/lib/site";

export function IndustriesSection() {
  return (
    <section className="py-24 md:py-32" aria-label="Industries we serve">
      <div className="mx-auto mb-12 max-w-content px-[var(--gutter)]">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Experience across diverse industries"
          subtitle="We serve e-commerce brands on Shopify and businesses that need fully custom websites, portals, and admin-driven platforms."
        />
      </div>

      <HorizontalScroll>
        {industries.map((industry, i) => (
          <article
            key={industry.name}
            className="group relative w-[78vw] shrink-0 overflow-hidden rounded-card border border-border shadow-card sm:w-[42vw] md:h-[56vh] md:w-[34vw] lg:w-[26vw]"
          >
            <Image
              src={industry.image}
              alt={industry.alt}
              fill
              quality={92}
              priority={i < 2}
              sizes="(max-width: 640px) 78vw, (max-width: 768px) 42vw, (max-width: 1024px) 34vw, 26vw"
              className="object-cover object-center transition-transform duration-700 ease-signature group-hover:scale-[1.04]"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10"
            />

            <div className="relative flex h-full min-h-[320px] flex-col justify-between p-8 md:min-h-0">
              <span className="self-end font-mono text-xs font-medium text-white/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-2xl font-extrabold leading-tight text-white">{industry.name}</h3>
            </div>
          </article>
        ))}
      </HorizontalScroll>
    </section>
  );
}
