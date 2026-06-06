import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealItem } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { WorkforceSection } from "@/components/sections/WorkforceSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { solutions } from "@/lib/site";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Talent and digital solutions from INSPIROIN — workforce readiness at scale and technology that connects people, processes, and performance.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Solutions"
        title="Solutions designed around real workflows"
        lede="Our solutions support how teams learn, collaborate, and perform — without adding unnecessary complexity."
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
                      href={s.slug === "digital-solutions" ? "/services" : "/contact"}
                      variant="ghost"
                      withArrow
                    >
                      {s.slug === "digital-solutions" ? "Explore services" : "Talk to us"}
                    </Button>
                  </div>
                </div>
              </RevealItem>
            ))}
          </Reveal>

          {/* Digital service areas quick list */}
          <Reveal className="mt-10 rounded-card border border-border bg-surface p-8 shadow-card">
            <span className="eyebrow text-text-muted">Digital service areas</span>
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
      <IndustriesSection />
      <FinalCTA />
    </>
  );
}
