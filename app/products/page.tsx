import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealItem } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Purpose-built products for modern teams — including BGV, automated background verification built for modern hiring.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Upcoming Products"
        title="Purpose-built products for modern teams"
        lede="Our products support learning, talent management, and workforce effectiveness — helping organizations operate more efficiently and make better people decisions."
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto flex max-w-content flex-col gap-10 px-[var(--gutter)]">
          {products.map((p) => (
            <Reveal
              key={p.slug}
              className="overflow-hidden rounded-card border border-border bg-surface shadow-card"
            >
              <div className="grid lg:grid-cols-2">
                <div className="flex flex-col gap-6 p-9 md:p-12">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-tint-sky text-accent">
                      <Icon name={p.icon} size={24} />
                    </span>
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-accent">
                      {p.status}
                    </span>
                  </div>
                  <div>
                    <span className="eyebrow text-text-muted">{p.badge}</span>
                    <h2 className="mt-2 text-3xl font-extrabold text-heading">{p.name}</h2>
                  </div>
                  <p className="text-lg font-semibold text-heading">{p.tagline}</p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-tint-lavender p-5">
                      <span className="eyebrow text-text-muted">What we&apos;re solving</span>
                      <p className="mt-2 text-sm leading-relaxed text-text">{p.solving}</p>
                    </div>
                    <div className="rounded-2xl bg-tint-mint p-5">
                      <span className="eyebrow text-text-muted">Impact</span>
                      <p className="mt-2 text-sm leading-relaxed text-text">{p.impact}</p>
                    </div>
                  </div>

                  <div>
                    <Button href="/contact" magnetic withArrow>
                      Get In Touch
                    </Button>
                  </div>
                </div>

                <div className="border-t border-border bg-bg p-9 md:border-l md:border-t-0 md:p-12">
                  <span className="eyebrow text-text-muted">Capabilities</span>
                  <Reveal stagger className="mt-5 flex flex-col gap-3">
                    {p.features.map((f) => (
                      <RevealItem
                        key={f}
                        className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4"
                      >
                        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                          <Icon name="check" size={14} />
                        </span>
                        <span className="text-sm leading-relaxed text-text">{f}</span>
                      </RevealItem>
                    ))}
                  </Reveal>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
