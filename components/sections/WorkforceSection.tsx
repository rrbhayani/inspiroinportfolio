import { Reveal, RevealItem } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";

const points = [
  { title: "Catalog & merchandising", body: "Products, collections, and promotions kept accurate across every store." },
  { title: "Operations & fulfillment", body: "Order flows, app health, and day-to-day store tasks handled reliably." },
  { title: "Performance & reporting", body: "Regular health checks and clear summaries so you always know where you stand." },
];

export function WorkforceSection() {
  return (
    <section className="py-24 md:py-32" aria-label="Store management">
      <div className="mx-auto grid max-w-content items-center gap-14 px-[var(--gutter)] lg:grid-cols-2">
        <Reveal className="flex flex-col gap-6">
          <span className="eyebrow">Store Management</span>
          <h2 className="text-h2 font-extrabold">Your stores, managed end to end</h2>
          <p className="text-lg leading-relaxed text-text-muted">
            We manage Shopify stores day to day — one store or many. Catalog updates, operations,
            integrations, and performance monitoring so your team can focus on growth, not upkeep.
          </p>
          <div>
            <Button href="/services/shopify-store-management" withArrow>
              Learn more
            </Button>
          </div>
        </Reveal>

        <Reveal stagger className="flex flex-col gap-4">
          <RevealItem className="rounded-card border border-border bg-tint-lavender p-6">
            <span className="eyebrow text-text-muted">Multi-store ready</span>
            <p className="mt-3 text-base font-semibold text-heading">
              Consistent management across brands, regions, and wholesale channels.
            </p>
          </RevealItem>
          {points.map((p) => (
            <RevealItem
              key={p.title}
              className="flex items-start gap-4 rounded-card border border-border bg-surface p-6 shadow-card transition-all duration-[400ms] ease-signature hover:-translate-y-1 hover:shadow-glow"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                <Icon name="check" size={18} />
              </span>
              <div>
                <h3 className="font-bold text-heading">{p.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-text-muted">{p.body}</p>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
