import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/Icon";
import { HorizontalScroll } from "@/components/anim/HorizontalScroll";
import { industries } from "@/lib/site";

const tints = ["tint-sky", "tint-lavender", "tint-mint", "tint-pink"];

export function IndustriesSection() {
  return (
    <section className="py-24 md:py-32" aria-label="Industries we serve">
      <div className="mx-auto mb-12 max-w-content px-[var(--gutter)]">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Experience across diverse industries"
          subtitle="Our solutions are trusted by organizations across industries where people performance is critical. Scroll across to explore."
        />
      </div>

      {/* Pinned horizontal scroll on desktop; native swipe row on mobile. */}
      <HorizontalScroll>
        {industries.map((name, i) => (
          <div
            key={name}
            className={`flex w-[78vw] shrink-0 flex-col justify-between rounded-card border border-border bg-${tints[i % tints.length]} p-8 sm:w-[42vw] md:h-[56vh] md:w-[34vw] lg:w-[26vw]`}
          >
            <div className="flex items-center justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-surface text-accent shadow-soft">
                <Icon name="building" size={22} />
              </span>
              <span className="font-mono text-xs text-text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-8 text-2xl font-extrabold leading-tight text-heading">{name}</h3>
          </div>
        ))}
      </HorizontalScroll>
    </section>
  );
}
