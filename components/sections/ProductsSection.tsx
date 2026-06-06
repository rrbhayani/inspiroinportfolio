import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { products } from "@/lib/products";

export function ProductsSection() {
  const bgv = products[0];
  return (
    <section className="bg-surface py-24 md:py-32" aria-label="Upcoming products">
      <div className="mx-auto max-w-content px-[var(--gutter)]">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Upcoming Products"
            title="Purpose-built products for modern teams"
            subtitle="Our products support learning, talent management, and workforce effectiveness — helping organizations operate more efficiently and make better people decisions."
          />
          <Button href="/products" variant="ghost" withArrow>
            View all
          </Button>
        </div>

        <Reveal className="overflow-hidden rounded-card border border-border bg-bg shadow-card">
          <div className="grid lg:grid-cols-2">
            {/* Left: intro */}
            <div className="flex flex-col gap-6 p-9 md:p-12">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-tint-sky text-accent">
                  <Icon name={bgv.icon} size={24} />
                </span>
                <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-accent">
                  {bgv.status}
                </span>
              </div>
              <div>
                <span className="eyebrow text-text-muted">{bgv.badge}</span>
                <h3 className="mt-2 text-3xl font-extrabold text-heading">{bgv.name}</h3>
              </div>
              <p className="text-lg font-semibold text-heading">{bgv.tagline}</p>
              <Button href="/products" magnetic withArrow>
                Get In Touch
              </Button>
            </div>

            {/* Right: solving / impact */}
            <div className="flex flex-col justify-center gap-5 border-t border-border bg-surface p-9 md:border-l md:border-t-0 md:p-12">
              <div className="rounded-2xl border border-border bg-bg p-6">
                <span className="eyebrow text-text-muted">What we&apos;re solving</span>
                <p className="mt-3 text-base leading-relaxed text-text">{bgv.solving}</p>
              </div>
              <div className="rounded-2xl border border-border bg-bg p-6">
                <span className="eyebrow text-text-muted">Impact we&apos;re making</span>
                <p className="mt-3 text-base leading-relaxed text-text">{bgv.impact}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
