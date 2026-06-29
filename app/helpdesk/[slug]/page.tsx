import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { getShopifyApp, shopifyApps } from "@/lib/apps";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return shopifyApps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const app = getShopifyApp(slug);
  if (!app) return { title: "Helpdesk" };

  return {
    title: `${app.name} — Helpdesk`,
    description: `Support and FAQs for ${app.name}, an INSPIROIN Shopify app.`,
  };
}

export default async function AppHelpdeskPage({ params }: Props) {
  const { slug } = await params;
  const app = getShopifyApp(slug);
  if (!app) notFound();

  return (
    <>
      <PageHeader
        eyebrow="Helpdesk"
        title={app.name}
        lede={app.tagline}
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-content px-[var(--gutter)]">
          <Reveal className="mx-auto flex max-w-3xl flex-col gap-12">
            <p className="text-sm leading-relaxed text-text-muted">{app.description}</p>

            <div>
              <h2 className="text-xl font-bold text-heading">Getting started</h2>
              <ol className="mt-4 flex flex-col gap-4">
                {app.helpTopics.map((topic, index) => (
                  <li
                    key={topic.title}
                    className="rounded-2xl border border-border bg-surface p-5"
                  >
                    <p className="font-mono text-xs uppercase tracking-widest text-accent">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-2 font-semibold text-heading">{topic.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">{topic.body}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="text-xl font-bold text-heading">Frequently asked questions</h2>
              <dl className="mt-4 flex flex-col gap-4">
                {app.faqs.map((faq) => (
                  <div key={faq.question} className="rounded-2xl border border-border bg-surface p-5">
                    <dt className="font-semibold text-heading">{faq.question}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-text-muted">{faq.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="text-base font-semibold text-heading">Contact support</h2>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                Email{" "}
                <a href={`mailto:${site.email}`} className="font-medium text-accent hover:underline">
                  {site.email}
                </a>{" "}
                with your store URL and issue details. {site.hours}.
              </p>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                <Link href="/helpdesk" className="font-medium text-accent hover:underline">
                  All apps helpdesk
                </Link>
                <Link href="/privacy/shopify-apps" className="font-medium text-accent hover:underline">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
