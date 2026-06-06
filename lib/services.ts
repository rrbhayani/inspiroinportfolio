// Service catalog — drives /services grid, home deck, footer, and /services/[slug] detail pages.

import type { IconName } from "@/components/Icon";

export type Service = {
  slug: string;
  eyebrow: string;
  title: string;
  value: string; // one-line value statement for cards
  icon: IconName;
  tint: string; // pastel tint token
  summary: string; // detail-page intro
  outcomes: string[];
  capabilities: { title: string; body: string }[];
  deliverables: string[];
  /** Optional sub-service cards (used by Shopify). */
  subServices?: { title: string; body: string }[];
};

export const services: Service[] = [
  {
    slug: "software-development-services",
    eyebrow: "01 / Engineering",
    title: "Software Development Services",
    value: "Full-lifecycle engineering for products that need to scale.",
    icon: "code",
    tint: "tint-sky",
    summary:
      "End-to-end software engineering — from architecture to deployment. We embed senior engineers who own delivery and treat your codebase like it's our own.",
    outcomes: [
      "A production system that scales with your business",
      "Clean, documented, maintainable code",
      "A team that can keep shipping after we hand over",
    ],
    capabilities: [
      { title: "Architecture", body: "System design, data modeling, and infrastructure that won't box you in." },
      { title: "Delivery", body: "Iterative sprints with previews you can use from the first week." },
      { title: "Quality", body: "Automated tests, CI/CD, and observability built in from day one." },
      { title: "Handover", body: "Documentation and pairing so your team owns it with confidence." },
    ],
    deliverables: ["Technical roadmap", "Production application", "Test suite + CI/CD", "Handover docs"],
  },
  {
    slug: "custom-software-development",
    eyebrow: "02 / Bespoke",
    title: "Custom Software Development",
    value: "Software shaped to your workflow — not the other way around.",
    icon: "cube",
    tint: "tint-lavender",
    summary:
      "Off-the-shelf tools force compromises. We build bespoke platforms that map exactly to how your business actually works, then make them a joy to use.",
    outcomes: [
      "Tools that fit your process precisely",
      "Automation of the work eating your team's time",
      "A durable competitive advantage you own",
    ],
    capabilities: [
      { title: "Discovery", body: "We map your real workflows before proposing a single feature." },
      { title: "Bespoke UX", body: "Interfaces designed around your team's daily reality." },
      { title: "Integrations", body: "Connect the systems you already rely on into one source of truth." },
      { title: "Scale", body: "Built to grow with usage, data, and your roadmap." },
    ],
    deliverables: ["Workflow map", "Custom platform", "Integration layer", "Admin tooling"],
  },
  {
    slug: "saas-product-development",
    eyebrow: "03 / Product",
    title: "SaaS Product Development",
    value: "From idea to a multi-tenant product your users pay for.",
    icon: "saas",
    tint: "tint-mint",
    summary:
      "We help founders and teams take SaaS products from zero to revenue — multi-tenancy, billing, auth, and the polish that earns retention.",
    outcomes: [
      "A launch-ready SaaS with billing and auth",
      "Multi-tenant architecture that's secure by default",
      "A product loop instrumented for growth",
    ],
    capabilities: [
      { title: "Multi-tenancy", body: "Isolated, secure tenant data with sane defaults." },
      { title: "Billing", body: "Subscriptions, metering, and trials wired to Stripe." },
      { title: "Auth & roles", body: "SSO, RBAC, and audit trails your enterprise buyers expect." },
      { title: "Analytics", body: "Product metrics and funnels so you can act on real usage." },
    ],
    deliverables: ["MVP definition", "SaaS application", "Billing + auth", "Analytics dashboards"],
  },
  {
    slug: "mern-stack-development",
    eyebrow: "04 / MERN",
    title: "MERN Stack Development",
    value: "React, Node, and MongoDB — one stack, end to end.",
    icon: "stack",
    tint: "tint-pink",
    summary:
      "A single, modern JavaScript stack from database to interface. We build fast, real-time MERN applications that are simple to reason about and cheap to evolve.",
    outcomes: [
      "A cohesive end-to-end JavaScript codebase",
      "Real-time, responsive user experiences",
      "Lower cost to add features over time",
    ],
    capabilities: [
      { title: "React + Next.js", body: "Fast, accessible interfaces with server-rendering where it counts." },
      { title: "Node.js APIs", body: "Robust services, queues, and real-time channels." },
      { title: "MongoDB", body: "Flexible schemas modeled for how you actually query." },
      { title: "Realtime", body: "Live updates and collaboration via websockets." },
    ],
    deliverables: ["React/Next frontend", "Node.js API", "MongoDB schema", "Realtime layer"],
  },
  {
    slug: "ecommerce-website-development",
    eyebrow: "05 / Commerce",
    title: "E-Commerce Website Development",
    value: "Storefronts that load fast and convert better.",
    icon: "cart",
    tint: "tint-sky",
    summary:
      "High-performance commerce — headless storefronts, fast checkout, and conversion-focused design that turns traffic into revenue.",
    outcomes: [
      "A storefront with sub-second page loads",
      "A checkout tuned for conversion",
      "A catalog your team can manage without us",
    ],
    capabilities: [
      { title: "Headless", body: "Composable commerce that's fast and free of platform lock-in." },
      { title: "Checkout", body: "Frictionless, secure payment flows that reduce drop-off." },
      { title: "Catalog", body: "Merchandising tools your team controls directly." },
      { title: "Performance", body: "Core Web Vitals tuned for SEO and conversion." },
    ],
    deliverables: ["Headless storefront", "Checkout flow", "CMS / catalog", "Performance audit"],
  },
  {
    slug: "shopify",
    eyebrow: "06 / Shopify",
    title: "Shopify Development",
    value: "Themes, apps, and Plus builds — the full Shopify stack.",
    icon: "bag",
    tint: "tint-lavender",
    summary:
      "Design, build, migrate, and scale on Shopify — from custom themes and apps to headless Hydrogen storefronts and Shopify Plus. We cover the full platform, end to end.",
    outcomes: [
      "A fast, on-brand store built to convert",
      "Custom theme and app code you fully own",
      "A platform that scales from launch to Plus",
    ],
    capabilities: [
      { title: "Themes", body: "Custom, performant themes built on Online Store 2.0." },
      { title: "Apps", body: "Private and public apps that extend Shopify to your needs." },
      { title: "Headless", body: "React-based Hydrogen storefronts for ultimate speed." },
      { title: "Scale", body: "Shopify Plus, custom checkout, and enterprise integrations." },
    ],
    deliverables: ["Custom theme / app", "Migration plan", "Integrations", "CRO + support plan"],
    subServices: [
      {
        title: "Custom Shopify Theme Design & Development",
        body: "Bespoke, on-brand themes built from scratch on Online Store 2.0 — fast, accessible, and easy to merchandise.",
      },
      {
        title: "Theme Customization & Store Setup",
        body: "Tailor an existing theme, configure your catalog, and launch a polished store ready to sell.",
      },
      {
        title: "Custom Shopify App Development",
        body: "Private and public apps that extend Shopify — admin tooling, storefront features, and App Store submissions.",
      },
      {
        title: "Headless / Hydrogen Storefronts",
        body: "React-based Hydrogen + Oxygen storefronts for sub-second loads and total front-end control.",
      },
      {
        title: "Shopify Plus (Enterprise) Development",
        body: "High-volume, multi-store, B2B and wholesale builds on Shopify Plus with advanced automation.",
      },
      {
        title: "Store Migration to Shopify",
        body: "Move from WooCommerce, Magento, BigCommerce, and more — data, SEO, and design preserved.",
      },
      {
        title: "Third-Party & API Integrations",
        body: "Connect payments, shipping, ERP, CRM, and marketing tools into one reliable commerce flow.",
      },
      {
        title: "Speed & Conversion Rate Optimization",
        body: "Core Web Vitals, UX, and checkout tuning that measurably lifts conversion and revenue.",
      },
      {
        title: "Custom Checkout (Checkout Extensibility)",
        body: "Branded, high-converting checkouts using Shopify's Checkout Extensibility and UI extensions.",
      },
      {
        title: "Maintenance, Support & Ongoing Development",
        body: "Proactive monitoring, updates, and a roadmap of improvements that keep the store healthy.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
