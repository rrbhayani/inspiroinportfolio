import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealItem } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { about } from "@/lib/about";
import { site, stats, whyChoose } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About INSPIROIN — Shopify development, custom websites with admin panels, and long-term support from Bengaluru, India.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About INSPIROIN"
        title="Shopify expertise and custom web — one team, two strengths"
        lede={about.mission}
      >
        <div className="mt-2">
          <Button href="/contact" magnetic withArrow>
            Get In Touch
          </Button>
        </div>
      </PageHeader>

      <section className="pb-16">
        <div className="mx-auto max-w-content px-[var(--gutter)]">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">Our story</span>
            <p className="mt-4 text-lg leading-relaxed text-text">{about.story}</p>
            <p className="mt-4 text-base leading-relaxed text-text-muted">{about.team}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-content px-[var(--gutter)]">
          <Reveal className="mb-10">
            <span className="eyebrow">What we stand for</span>
            <h2 className="mt-3 text-h2 font-extrabold">How we work with clients</h2>
          </Reveal>
          <Reveal stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {about.values.map((v) => (
              <RevealItem
                key={v.title}
                className="rounded-card border border-border bg-bg p-7 shadow-card"
              >
                <h3 className="text-lg font-bold text-heading">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{v.body}</p>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-content px-[var(--gutter)]">
          <div className="grid gap-14 lg:grid-cols-2">
            <Reveal>
              <span className="eyebrow">At a glance</span>
              <div className="mt-6 flex flex-col gap-4">
                {about.milestones.map((m) => (
                  <div
                    key={m.year}
                    className="flex items-center gap-4 rounded-card border border-border bg-surface p-5"
                  >
                    <span className="font-mono text-sm text-accent">{m.year}</span>
                    <span className="text-sm font-medium text-heading">{m.label}</span>
                  </div>
                ))}
              </div>
              <ul className="mt-8 flex flex-col gap-3 text-sm text-text-muted">
                <li className="flex items-center gap-2">
                  <Icon name="building" size={16} className="text-accent" />
                  {site.address}
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="support" size={16} className="text-accent" />
                  {site.hours}
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="spark" size={16} className="text-accent" />
                  {site.email}
                </li>
              </ul>
            </Reveal>

            <Reveal stagger className="grid gap-4 sm:grid-cols-2">
              {stats.map((s) => (
                <RevealItem
                  key={s.label}
                  className="rounded-card border border-border bg-tint-sky p-6 text-center"
                >
                  <p className="font-display text-3xl font-extrabold text-heading">
                    {s.value}
                    {s.suffix}
                  </p>
                  <p className="mt-2 text-xs font-medium text-text-muted">{s.label}</p>
                </RevealItem>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-content px-[var(--gutter)]">
          <Reveal className="mb-10">
            <span className="eyebrow">Why INSPIROIN</span>
            <h2 className="mt-3 text-h2 font-extrabold">What clients get from us</h2>
          </Reveal>
          <Reveal stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
      </section>

    </>
  );
}
