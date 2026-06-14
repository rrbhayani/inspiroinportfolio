import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealItem } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { WorkforceSection } from "@/components/sections/WorkforceSection";
import { CustomWebSection } from "@/components/sections/CustomWebSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { solutions } from "@/lib/site";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Shopify solutions and custom website solutions from INSPIROIN — store development, store management, custom admin panels, and full web platform support.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Solutions"
        title="Shopify commerce and custom websites — two strengths, one team"
        lede="We build and manage Shopify stores, and we build fully custom websites with admin panels and backends. Choose the path that fits your business — or combine both."
      />

      <section className="pb-8">
        <div className="mx-auto max-w-content px-[var(--gutter)]">
          <Reveal stagger className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {solutions.map((s) => (
              <RevealItem key={s.slug} as="div">
                <div
                  id={s.slug}
                  className={`flex h-full scroll-mt-28 flex-col gap-5 rounded-card border border-border bg-${s.tint} p-9 shadow-card`}
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-surface p-3 text-accent shadow-soft">
                    <Icon name={s.icon} size={24} />
                  </span>
                  <h2 className="text-2xl font-extrabold text-heading">{s.title}</h2>
                  <p className="text-base font-semibold text-heading">{s.value}</p>
                  <p className="text-sm leading-relaxed text-text-muted">{s.body}</p>
                  <div className="mt-auto pt-2">
                    <Button
                      href={
                        s.slug === "shopify-solutions"
                          ? "/services/shopify"
                          : "/services/custom-website-development"
                      }
                      variant="ghost"
                      withArrow
                    >
                      {s.slug === "shopify-solutions"
                        ? "Explore Shopify services"
                        : "Explore custom web services"}
                    </Button>
                  </div>
                </div>
              </RevealItem>
            ))}
          </Reveal>

          <Reveal className="mt-10 rounded-card border border-border bg-surface p-8 shadow-card">
            <span className="eyebrow text-text-muted">All service areas</span>
            <div className="mt-5 flex flex-wrap gap-2">
              {services.map((s) => (
                <a
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="rounded-full border border-border bg-bg px-4 py-2 text-sm font-medium text-text transition-colors hover:border-accent/40 hover:text-accent"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <WorkforceSection />
      <CustomWebSection />
      <IndustriesSection />
    </>
  );
}
