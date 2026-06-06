import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealItem } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join INSPIROIN. Help build the technology, talent, and learning solutions that power the global workforce.",
};

// PLACEHOLDER roles — swap for your real openings or wire to an ATS.
const roles = [
  { title: "Senior Full-Stack Engineer", team: "Engineering", type: "Full-time", location: "Bengaluru / Remote" },
  { title: "Product Designer", team: "Design", type: "Full-time", location: "Bengaluru / Remote" },
  { title: "Talent Solutions Lead", team: "Talent", type: "Full-time", location: "Bengaluru" },
  { title: "Cloud / DevOps Engineer", team: "Infrastructure", type: "Full-time", location: "Remote" },
];

const perks = [
  { title: "Work that matters", body: "Build products and programs that shape how organizations grow their people.", icon: "spark" as const },
  { title: "Senior, flexible teams", body: "Small teams, real ownership, and flexible engagement models.", icon: "users" as const },
  { title: "Learn continuously", body: "We invest in skills — yours included. Growth is part of the job.", icon: "rocket" as const },
  { title: "Built to last", body: "A focus on quality, usability, and long-term scalability in everything.", icon: "shield" as const },
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Build what powers the global workforce"
        lede="We're a team of engineers, designers, and talent specialists building thoughtful technology, talent, and learning solutions. Come help us do it well."
      >
        <div className="mt-2">
          <Button href="#openings" withArrow>
            See open roles
          </Button>
        </div>
      </PageHeader>

      {/* Perks */}
      <section className="pb-20">
        <div className="mx-auto max-w-content px-[var(--gutter)]">
          <Reveal stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p) => (
              <RevealItem
                key={p.title}
                className="rounded-card border border-border bg-surface p-6 shadow-card"
              >
                <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Icon name={p.icon} size={20} />
                </span>
                <h3 className="mb-2 font-bold text-heading">{p.title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">{p.body}</p>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Openings */}
      <section id="openings" className="scroll-mt-28 bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-content px-[var(--gutter)]">
          <Reveal className="mb-10">
            <span className="eyebrow">Open Roles</span>
            <h2 className="mt-3 text-h2 font-extrabold">Current openings</h2>
          </Reveal>

          <Reveal stagger className="flex flex-col gap-3">
            {roles.map((r) => (
              <RevealItem key={r.title}>
                <a
                  href="/contact"
                  className="group flex flex-col gap-3 rounded-card border border-border bg-bg p-6 transition-all duration-[400ms] ease-signature hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h3 className="text-lg font-bold text-heading">{r.title}</h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-widest text-text-muted">
                      {r.team} · {r.type} · {r.location}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Apply
                    <Icon
                      name="arrow"
                      size={16}
                      className="transition-transform duration-[400ms] ease-signature group-hover:translate-x-1"
                    />
                  </span>
                </a>
              </RevealItem>
            ))}
          </Reveal>

          <Reveal className="mt-8">
            <p className="text-sm text-text-muted">
              Don&apos;t see your role?{" "}
              <a href="/contact" className="font-semibold text-accent hover:underline">
                Tell us how you&apos;d contribute
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
