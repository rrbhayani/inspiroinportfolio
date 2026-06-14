import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { legal } from "@/lib/legal";

export const metadata: Metadata = {
  title: legal.privacy.title,
  description: "How INSPIROIN collects and uses information from inspiroin.com and contact inquiries.",
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
            {privacy.sections.map((s) => (
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
