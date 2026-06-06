import { Reveal, RevealItem } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";

const points = [
  { title: "Access to talent", body: "The right people in place, ready to perform across roles and locations." },
  { title: "Workforce readiness", body: "Continuous skill development that scales with business needs." },
  { title: "Performance-ready teams", body: "Built, enabled, and sustained for high performance." },
];

export function WorkforceSection() {
  return (
    <section className="py-24 md:py-32" aria-label="Workforce solutions">
      <div className="mx-auto grid max-w-content items-center gap-14 px-[var(--gutter)] lg:grid-cols-2">
        <Reveal className="flex flex-col gap-6">
          <span className="eyebrow">Workforce Solutions</span>
          <h2 className="text-h2 font-extrabold">People capability, built end to end</h2>
          <p className="text-lg leading-relaxed text-text-muted">
            We help organizations build, enable, and sustain high-performing teams by combining
            workforce readiness with continuous skill development designed to scale with business
            needs.
          </p>
          <div>
            <Button href="/solutions" withArrow>
              Learn more
            </Button>
          </div>
        </Reveal>

        <Reveal stagger className="flex flex-col gap-4">
          <RevealItem className="rounded-card border border-border bg-tint-sky p-6">
            <span className="eyebrow text-text-muted">Talent Solutions at Scale</span>
            <p className="mt-3 text-base font-semibold text-heading">
              Ensuring the right people are in place, ready to perform.
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
