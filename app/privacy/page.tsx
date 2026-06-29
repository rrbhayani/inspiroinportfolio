import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { LegalSections } from "@/components/LegalSections";
import { legal } from "@/lib/legal";

export const metadata: Metadata = {
  title: legal.privacy.title,
  description: "How INSPIROIN collects and uses information from inspiroin.com, contact inquiries, and Shopify apps.",
};

export default function PrivacyPage() {
  const { privacy } = legal;

  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title={privacy.title}
        lede={`Last updated: ${privacy.updated}`}
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-content px-[var(--gutter)]">
          <Reveal className="mx-auto flex max-w-3xl flex-col gap-10">
            <p className="text-sm leading-relaxed text-text-muted">{privacy.intro}</p>

            <div>
              <h2 className="text-xl font-bold text-heading">Platform-specific policies</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {privacy.platformPolicies.map((policy) => (
                  <li key={policy.href}>
                    <Link
                      href={policy.href}
                      className="group block rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/30"
                    >
                      <span className="font-semibold text-heading group-hover:text-accent">
                        {policy.label}
                      </span>
                      <p className="mt-1 text-sm text-text-muted">{policy.description}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-heading">For website visitors</h2>
              <div className="mt-6 flex flex-col gap-10">
                <LegalSections sections={privacy.sections} />
              </div>
            </div>

            <p className="text-sm text-text-muted">
              Questions?{" "}
              <Link href="/contact" className="font-medium text-accent hover:underline">
                Contact us
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
