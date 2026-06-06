import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { StickyStack } from "@/components/anim/StickyStack";
import { services } from "@/lib/services";

export function ServicesSection() {
  return (
    <section className="bg-surface py-24 md:py-32" aria-label="Digital solutions">
      <div className="mx-auto max-w-content px-[var(--gutter)]">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Digital Solutions"
            title="Technology built to scale, secure, and evolve"
            subtitle="We design, build, and manage digital systems that help organizations operate efficiently today and adapt confidently for what's next."
          />
          <Button href="/services" variant="ghost" withArrow>
            All services
          </Button>
        </div>

        {/* Sticky-stacking deck — cards overlap and scale as the next scrolls over. */}
        <StickyStack>
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className={`group grid gap-6 overflow-hidden rounded-card border border-border bg-${s.tint} p-8 shadow-card transition-shadow duration-500 hover:shadow-glow md:grid-cols-[1fr_1.2fr] md:p-12`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-xl bg-surface text-accent shadow-soft">
                    <Icon name={s.icon} size={26} />
                  </span>
                  <span className="font-mono text-sm text-text-muted">{s.eyebrow}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-heading md:text-3xl">{s.title}</h3>
                <p className="text-base font-semibold text-heading">{s.value}</p>
                <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Learn more
                  <Icon
                    name="arrow"
                    size={16}
                    className="transition-transform duration-[400ms] ease-signature group-hover:translate-x-1"
                  />
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 self-center">
                {s.capabilities.map((c) => (
                  <div key={c.title} className="rounded-2xl bg-surface/70 p-4">
                    <p className="text-sm font-bold text-heading">{c.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-text-muted">{c.body}</p>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </StickyStack>
      </div>
    </section>
  );
}
