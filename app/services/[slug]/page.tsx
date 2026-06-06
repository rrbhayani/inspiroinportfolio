import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealItem } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { services, getService } from "@/lib/services";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const service = getService(params.slug);
  if (!service) return { title: "Service not found" };
  return { title: service.title, description: service.summary };
}

export default function ServiceDetailPage({ params }: Params) {
  const service = getService(params.slug);
  if (!service) notFound();

  const idx = services.findIndex((s) => s.slug === service.slug);
  const next = services[(idx + 1) % services.length];

  return (
    <>
      <PageHeader eyebrow={service.eyebrow} title={service.title} lede={service.summary}>
        <div className="mt-2 flex flex-wrap gap-4">
          <Button href="/contact" magnetic withArrow>
            Get In Touch
          </Button>
          <Button href="/services" variant="ghost">
            All Services
          </Button>
        </div>
      </PageHeader>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto grid max-w-content gap-14 px-[var(--gutter)] lg:grid-cols-[0.9fr_1.1fr]">
          {/* Outcomes */}
          <Reveal className="flex flex-col gap-6">
            <span className="eyebrow">What you get</span>
            <ul className="flex flex-col gap-4">
              {service.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                    <Icon name="check" size={14} />
                  </span>
                  <span className="text-base leading-relaxed text-text">{o}</span>
                </li>
              ))}
            </ul>

            <div className={`mt-4 rounded-card border border-border bg-${service.tint} p-6`}>
              <span className="eyebrow text-text-muted">Deliverables</span>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.deliverables.map((d) => (
                  <span
                    key={d}
                    className="rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-text-muted"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Capabilities */}
          <Reveal stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {service.capabilities.map((c) => (
              <RevealItem
                key={c.title}
                className="group rounded-card border border-border bg-surface p-6 shadow-card transition-all duration-[400ms] ease-signature hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow"
              >
                <h3 className="mb-2 text-lg font-bold text-heading">{c.title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">{c.body}</p>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Sub-services (Shopify) */}
      {service.subServices && (
        <section className="bg-surface py-20 md:py-28" aria-label="Sub-services">
          <div className="mx-auto max-w-content px-[var(--gutter)]">
            <div className="mb-12 max-w-2xl">
              <span className="eyebrow">What we offer</span>
              <h2 className="mt-3 text-h2 font-extrabold">{service.title} services</h2>
              <p className="mt-4 text-lg leading-relaxed text-text-muted">
                Everything you need across the Shopify platform — pick a starting point or let us
                scope the full build.
              </p>
            </div>

            <Reveal stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.subServices.map((sub, i) => (
                <RevealItem
                  key={sub.title}
                  className="group flex h-full flex-col gap-3 rounded-card border border-border bg-bg p-6 shadow-card transition-all duration-[400ms] ease-signature hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow"
                >
                  <span className="font-mono text-xs text-text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-bold leading-snug text-heading">{sub.title}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">{sub.body}</p>
                </RevealItem>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {/* Next service */}
      <section className="pb-8">
        <div className="mx-auto max-w-content px-[var(--gutter)]">
          <Link
            href={`/services/${next.slug}`}
            className="group flex items-center justify-between gap-4 rounded-card border border-border bg-surface p-6 shadow-card transition-all duration-[400ms] ease-signature hover:border-accent/30 hover:shadow-glow"
          >
            <span>
              <span className="eyebrow text-text-muted">Next service</span>
              <p className="mt-2 font-display text-lg font-bold text-heading">{next.title}</p>
            </span>
            <Icon
              name="arrow"
              size={22}
              className="text-accent transition-transform duration-[400ms] ease-signature group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
