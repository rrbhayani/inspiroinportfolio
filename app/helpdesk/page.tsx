import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { shopifyApps } from "@/lib/apps";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Helpdesk",
  description: "Support and documentation for INSPIROIN Shopify apps.",
};

export default function HelpdeskPage() {
  return (
    <>
      <PageHeader
        eyebrow="Support"
        title="Helpdesk"
        lede="Guides and answers for INSPIROIN Shopify apps. Select an app below or email us for direct support."
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-content px-[var(--gutter)]">
          <Reveal className="mx-auto flex max-w-3xl flex-col gap-10">
            <div className="grid gap-4">
              {shopifyApps.map((app) => (
                <Link
                  key={app.slug}
                  href={`/helpdesk/${app.slug}`}
                  className="group flex items-start justify-between gap-4 rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-accent/30"
                >
                  <div>
                    <h2 className="text-lg font-bold text-heading group-hover:text-accent">
                      {app.name}
                    </h2>
                    <p className="mt-1 text-sm text-text-muted">{app.tagline}</p>
                    <p className="mt-3 text-sm leading-relaxed text-text-muted">{app.description}</p>
                  </div>
                  <Icon
                    name="arrow"
                    size={20}
                    className="mt-1 shrink-0 text-text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </Link>
              ))}
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="text-base font-semibold text-heading">Need more help?</h2>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                Email{" "}
                <a href={`mailto:${site.email}`} className="font-medium text-accent hover:underline">
                  {site.email}
                </a>{" "}
                with your store URL and a short description of the issue. {site.hours}.
              </p>
              <p className="mt-3 text-sm text-text-muted">
                <Link href="/privacy/shopify-apps" className="font-medium text-accent hover:underline">
                  Apps for Shopify Privacy Policy
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
