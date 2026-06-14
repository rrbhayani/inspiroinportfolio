import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
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
            {terms.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-xl font-bold text-heading">{s.heading}</h2>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{s.body}</p>
              </div>
            ))}
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
