import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { LegalSections } from "@/components/LegalSections";
import { legal } from "@/lib/legal";

export const metadata: Metadata = {
  title: legal.terms.title,
  description: "Terms of use for inspiroin.com and INSPIROIN services information.",
};

export default function TermsPage() {
  const { terms } = legal;

  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title={terms.title}
        lede={`Last updated: ${terms.updated}`}
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-content px-[var(--gutter)]">
          <Reveal className="mx-auto flex max-w-3xl flex-col gap-10">
            <LegalSections sections={terms.sections} />
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
