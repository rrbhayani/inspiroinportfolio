import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { Icon, type IconName } from "@/components/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get In Touch",
  description:
    "Contact INSPIROIN about Shopify development, store management, custom websites with admin panels, or ongoing web support.",
};

const contactItems: { icon: IconName; label: string; value: string; href?: string }[] = [
  { icon: "spark", label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: "support", label: "Hours", value: site.hours },
  { icon: "building", label: "Location", value: site.address },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Shopify project or custom website — let's talk"
        lede="Tell us about your Shopify store, custom website with admin panel, multi-store management needs, or ongoing support. Not sure where to start? Many projects blend Shopify and custom web — describe your goals and we'll recommend the right scope. We'll reply within one business day."
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto grid max-w-content gap-14 px-[var(--gutter)] lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              {contactItems.map((c) => {
                const inner = (
                  <>
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
                      <Icon name={c.icon} size={20} />
                    </span>
                    <span>
                      <span className="font-mono text-[0.65rem] uppercase tracking-widest text-text-muted">
                        {c.label}
                      </span>
                      <p className="text-sm font-semibold text-heading">{c.value}</p>
                    </span>
                  </>
                );
                const cls =
                  "group flex items-center gap-4 rounded-card border border-border bg-surface p-5 shadow-card transition-all duration-[400ms] ease-signature hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow";
                return c.href ? (
                  <a key={c.label} href={c.href} className={cls}>
                    {inner}
                  </a>
                ) : (
                  <div key={c.label} className={cls}>
                    {inner}
                  </div>
                );
              })}
            </div>

            <div className="rounded-card border border-border bg-tint-sky p-6">
              <span className="eyebrow text-text-muted">What happens next</span>
              <ol className="mt-4 flex flex-col gap-4">
                {[
                  "We read your message and reply within a business day.",
                  "A short call to understand your Shopify or custom web requirements.",
                  "A clear scope, timeline, and honest next steps.",
                ].map((s, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-text">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-surface font-mono text-xs text-accent">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-card border border-border bg-surface p-7 shadow-card md:p-10">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
