import { Reveal, RevealItem } from "@/components/Reveal";
import { StatCounter } from "@/components/StatCounter";
import { Icon } from "@/components/Icon";
import { RevealText } from "@/components/anim/RevealText";
import { stats, whyChoose } from "@/lib/site";

export function PartnershipSection() {
  return (
    <section className="bg-surface py-24 md:py-32" aria-label="Why choose INSPIROIN">
      <div className="mx-auto max-w-content px-[var(--gutter)]">
        <div className="flex max-w-2xl flex-col gap-4">
          <Reveal>
            <span className="eyebrow">Your Shopify &amp; Web Partner</span>
          </Reveal>
          <RevealText
            as="h2"
            mode="words"
            text="Real work you can visit live"
            stagger={0.08}
            className="text-h2 font-extrabold"
          />
        </div>

        {/* Stats — count up on view */}
        <Reveal className="mt-14 grid grid-cols-2 gap-y-12 border-y border-border py-12 md:grid-cols-4">
          {stats.map((s) => (
            <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </Reveal>

        {/* Why choose */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <h3 className="text-2xl font-extrabold text-heading">Why choose INSPIROIN</h3>
          </Reveal>
          <Reveal stagger className="grid gap-4 sm:grid-cols-2">
            {whyChoose.map((w) => (
              <RevealItem
                key={w}
                className="flex items-start gap-3 rounded-card border border-border bg-bg p-5"
              >
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                  <Icon name="check" size={14} />
                </span>
                <span className="text-sm font-medium leading-relaxed text-text">{w}</span>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
