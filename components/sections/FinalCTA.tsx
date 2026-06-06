import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

export function FinalCTA() {
  return (
    <section className="py-20 md:py-28" aria-label="Get in touch">
      <div className="mx-auto max-w-content px-[var(--gutter)]">
        <Reveal className="relative overflow-hidden rounded-card border border-border bg-surface p-10 text-center shadow-card md:p-20">
          {/* gradient glow backdrop */}
          <div
            aria-hidden="true"
            className="mesh-gradient pointer-events-none absolute inset-0 -z-10 opacity-50"
          />
          <span className="eyebrow">Let&apos;s build</span>
          <h2 className="mx-auto mt-5 max-w-3xl text-h1 font-extrabold">
            Let&apos;s build what your workforce needs next
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-text-muted">
            Whether you&apos;re scaling teams, improving processes, or exploring better
            systems — we&apos;re here to help you move forward with clarity.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/contact" magnetic withArrow>
              Get In Touch
            </Button>
            <Button href="/contact" variant="ghost">
              Company Deck
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
