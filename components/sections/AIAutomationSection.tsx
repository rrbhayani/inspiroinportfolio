import Link from "next/link";
import { Reveal, RevealItem } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { aiAutomation } from "@/lib/site";

export function AIAutomationSection() {
  return (
    <section className="bg-surface py-24 md:py-32" aria-label="AI automation">
      <div className="mx-auto max-w-content px-[var(--gutter)]">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-6">
            <span className="eyebrow">AI Automation</span>
            <h2 className="text-h2 font-extrabold">{aiAutomation.title}</h2>
            <p className="text-lg leading-relaxed text-text-muted">{aiAutomation.body}</p>
            <ul className="flex flex-col gap-3">
              {aiAutomation.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-text">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                    <Icon name="spark" size={14} />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed text-text-muted">
              {aiAutomation.example.body}{" "}
              <Link href={aiAutomation.example.projectHref} className="font-medium text-accent hover:underline">
                {aiAutomation.example.projectLabel}
              </Link>
              .
            </p>
            <div>
              <Button href="/contact" withArrow>
                Automate with us
              </Button>
            </div>
          </Reveal>

          <Reveal stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aiAutomation.capabilities.map((c) => (
              <RevealItem
                key={c.title}
                className="rounded-card border border-border bg-bg p-6 shadow-card transition-all duration-[400ms] ease-signature hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-tint-lavender text-accent">
                  <Icon name={c.icon} size={20} />
                </span>
                <h3 className="mt-4 font-bold text-heading">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{c.body}</p>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
