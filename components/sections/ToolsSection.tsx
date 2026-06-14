import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, RevealItem } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { tools } from "@/lib/site";

const assurances = [
  "Shopify & custom web",
  "Admin panels built in",
  "Supported after launch",
];

export function ToolsSection() {
  return (
    <section className="py-24 md:py-32" aria-label="Tools we use">
      <div className="mx-auto max-w-content px-[var(--gutter)]">
        <SectionHeading
          align="center"
          eyebrow="Tools We Use"
          title="Built on reliable, industry-proven tools"
          subtitle="We use a carefully selected technology stack that prioritizes security, performance, and scalability — always up to date, always compliant."
          className="mb-12"
        />

        <Reveal stagger className="flex flex-wrap justify-center gap-3">
          {tools.map((t) => (
            <RevealItem key={t}>
              <div className="group flex items-center gap-3 rounded-full border border-border bg-surface px-5 py-3 shadow-card transition-all duration-[400ms] ease-signature hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow">
                <span className="h-2 w-2 rounded-full bg-accent transition-colors group-hover:bg-accent-2" />
                <span className="text-sm font-semibold text-heading">{t}</span>
              </div>
            </RevealItem>
          ))}
        </Reveal>

        <Reveal className="mx-auto mt-12 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {assurances.map((a) => (
            <span key={a} className="inline-flex items-center gap-2 text-sm font-medium text-text-muted">
              <Icon name="check" size={16} className="text-accent" />
              {a}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
