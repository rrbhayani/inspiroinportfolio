import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, RevealItem } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { solutions } from "@/lib/site";

export function SolutionsSection() {
  return (
    <section className="py-24 md:py-32" aria-label="Our solutions">
      <div className="mx-auto max-w-content px-[var(--gutter)]">
        <SectionHeading
          eyebrow="Our Solutions"
          title="Solutions designed around real workflows"
          subtitle="Two core strengths — Shopify commerce and fully custom websites with admin panels. Pick one or combine both."
          className="mb-14"
        />

        <Reveal stagger className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {solutions.map((s) => (
            <RevealItem key={s.slug}>
              <Link
                href={`/solutions#${s.slug}`}
                className={`group relative flex h-full flex-col gap-5 overflow-hidden rounded-card border border-border bg-${s.tint} p-9 shadow-card transition-all duration-[400ms] ease-signature hover:-translate-y-1.5 hover:shadow-glow`}
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-surface p-3 text-accent shadow-soft">
                  <Icon name={s.icon} size={24} />
                </span>
                <div>
                  <span className="eyebrow text-text-muted">{s.eyebrow}</span>
                  <h3 className="mt-2 text-2xl font-bold text-heading">{s.title}</h3>
                </div>
                <p className="text-base font-semibold text-heading">{s.value}</p>
                <p className="text-sm leading-relaxed text-text-muted">{s.body}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Learn more
                  <Icon
                    name="arrow"
                    size={16}
                    className="transition-transform duration-[400ms] ease-signature group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
