import Link from "next/link";
import { Logo } from "./Logo";
import { Icon, type IconName } from "./Icon";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

const companyLinks = [
  { label: "Projects", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Helpdesk", href: "/helpdesk" },
  { label: "Get In Touch", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
];

const socials: { name: IconName; href: string; label: string }[] = [
  { name: "linkedin", href: site.social.linkedin, label: "LinkedIn" },
  { name: "twitter", href: site.social.twitter, label: "Twitter / X" },
  { name: "github", href: site.social.github, label: "GitHub" },
];

export function Footer() {
  const year = 2026;
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-content px-[var(--gutter)] py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-12">
          {/* Blurb */}
          <div className="col-span-2 flex flex-col gap-5 md:col-span-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-text-muted">
              Shopify stores and custom websites with admin panels — built, managed, and supported
              end to end.
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
                >
                  <Icon name={s.name} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="md:col-span-2 md:col-start-7">
            <h3 className="eyebrow mb-4">Company</h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-text-muted transition-colors hover:text-heading"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h3 className="eyebrow mb-4">Services</h3>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-text-muted transition-colors hover:text-heading"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="eyebrow mb-4">Contact</h3>
            <ul className="flex flex-col gap-3 text-sm text-text-muted">
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-heading">
                  {site.email}
                </a>
              </li>
              <li>{site.hours}</li>
              <li>{site.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-text-muted md:flex-row md:items-center">
          <div className="flex flex-col gap-2">
            <p>
              © {year} {site.legalName}. All rights reserved.
            </p>
            <p>{site.address}</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="transition-colors hover:text-heading">
                {l.label}
              </Link>
            ))}
            <p className="font-mono uppercase tracking-widest">
              Shopify · Custom Web · Support
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
