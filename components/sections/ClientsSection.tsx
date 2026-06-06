import { SectionHeading } from "@/components/SectionHeading";
import { Marquee } from "@/components/Marquee";
import { clients } from "@/lib/site";

export function ClientsSection() {
  return (
    <section className="bg-surface py-24 md:py-28" aria-label="Our clients">
      <div className="mx-auto mb-12 max-w-content px-[var(--gutter)]">
        <SectionHeading
          align="center"
          eyebrow="Our Clients"
          title="Chosen by high-growth teams"
          subtitle="Helping modern businesses automate operations with speed, clarity, and confidence."
        />
      </div>
      {/* PLACEHOLDER wordmarks — replace each with a real <Image> logo. */}
      <Marquee>
        {clients.map((name) => (
          <span
            key={name}
            className="select-none whitespace-nowrap font-display text-2xl font-bold text-text-muted/60 transition-colors hover:text-heading"
          >
            {name}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
