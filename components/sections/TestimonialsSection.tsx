import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, RevealItem } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { testimonials } from "@/lib/testimonials";

export function TestimonialsSection() {
  if (testimonials.length === 0) return null;

  return (
    <section className="py-24 md:py-32" aria-label="Client testimonials">
      <div className="mx-auto max-w-content px-[var(--gutter)]">
        <SectionHeading
          align="center"
          eyebrow="What Clients Say"
          title="Results from Shopify and custom web projects"
          subtitle="Feedback from merchants and teams we’ve supported — on stores, admin panels, and long-term management."
          className="mb-14"
        />

        <Reveal stagger className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <RevealItem
              key={t.name}
              className="flex h-full flex-col gap-5 rounded-card border border-border bg-surface p-7 shadow-card"
            >
              <Icon name="spark" size={22} className="text-accent" />
              <p className="flex-1 text-sm leading-relaxed text-text">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="font-bold text-heading">{t.name}</p>
                <p className="font-mono text-xs uppercase tracking-widest text-text-muted">
                  {t.role} · {t.region}
                </p>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
