import { Reveal, RevealItem } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";

const points = [
  {
    title: "Custom admin panel",
    body: "Dashboards to manage content, users, products, and business data — built around how your team actually works.",
  },
  {
    title: "Public website + backend",
    body: "The customer-facing site and the APIs, database, and auth layer behind it — one cohesive platform.",
  },
  {
    title: "Full ownership",
    body: "Your code, your data, your hosting choices. Not locked into Shopify or any single platform.",
  },
];

export function CustomWebSection() {
  return (
    <section className="py-24 md:py-32" aria-label="Custom website solutions">
      <div className="mx-auto grid max-w-content items-center gap-14 px-[var(--gutter)] lg:grid-cols-2">
        <Reveal className="flex flex-col gap-6">
          <span className="eyebrow">Custom Websites</span>
          <h2 className="text-h2 font-extrabold">Your website, your admin, your rules</h2>
          <p className="text-lg leading-relaxed text-text-muted">
            When you need more than Shopify — we build fully custom websites with bespoke admin panels,
            user management, dashboards, and backends. The whole platform is yours to own and grow.
          </p>
          <div>
            <Button href="/services/custom-website-development" withArrow>
              Explore custom web
            </Button>
          </div>
        </Reveal>

        <Reveal stagger className="flex flex-col gap-4">
          <RevealItem className="rounded-card border border-border bg-tint-sky p-6">
            <span className="eyebrow text-text-muted">Not Shopify — fully custom</span>
            <p className="mt-3 text-base font-semibold text-heading">
              Own your stack: public site, admin panel, APIs, and database — designed for your business.
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
