import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { LegalSections } from "@/components/LegalSections";
import { legal } from "@/lib/legal";

export const metadata: Metadata = {
  title: legal.shopifyAppsPrivacy.title,
  description:
    "Privacy policy for INSPIROIN Shopify apps including Try It On — how we collect, use, and protect merchant and shopper data.",
};

export default function ShopifyAppsPrivacyPage() {
  const { shopifyAppsPrivacy } = legal;

  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title={shopifyAppsPrivacy.title}
        lede={`Last updated: ${shopifyAppsPrivacy.updated}`}
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-content px-[var(--gutter)]">
          <Reveal className="mx-auto flex max-w-3xl flex-col gap-10">
            <p className="text-sm leading-relaxed text-text-muted">{shopifyAppsPrivacy.intro}</p>
            <LegalSections sections={shopifyAppsPrivacy.sections} />
            <p className="text-sm text-text-muted">
              Back to{" "}
              <Link href="/privacy" className="font-medium text-accent hover:underline">
                main Privacy Policy
              </Link>{" "}
              ·{" "}
              <Link href="/helpdesk/try-it-on" className="font-medium text-accent hover:underline">
                Try It On helpdesk
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
