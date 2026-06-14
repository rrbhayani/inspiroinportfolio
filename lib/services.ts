// Service catalog — drives /services grid, home deck, footer, and /services/[slug] detail pages.

import type { IconName } from "@/components/Icon";

export type Service = {
  slug: string;
  eyebrow: string;
  title: string;
  value: string;
  icon: IconName;
  tint: string;
  summary: string;
  outcomes: string[];
  capabilities: { title: string; body: string }[];
  deliverables: string[];
  subServices?: { title: string; body: string }[];
};

export const services: Service[] = [
  {
    slug: "shopify",
    eyebrow: "01 / Shopify",
    title: "Shopify Development",
    value: "Themes, apps, Plus builds — the full Shopify stack.",
    icon: "bag",
    tint: "tint-lavender",
    summary:
      "Design, build, migrate, and scale on Shopify — from custom themes and apps to headless Hydrogen storefronts and Shopify Plus. We handle every custom requirement on the platform.",
    outcomes: [
      "A fast, on-brand store built to convert",
      "Custom theme and app code you fully own",
      "A platform that scales from launch to Plus",
    ],
    capabilities: [
      { title: "Themes", body: "Custom, performant themes built on Online Store 2.0." },
      { title: "Apps", body: "Private and public apps that extend Shopify to your needs." },
      { title: "Headless", body: "React-based Hydrogen storefronts for ultimate speed." },
      { title: "Plus & Scale", body: "Shopify Plus, custom checkout, and enterprise integrations." },
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
  {
    slug: "custom-website-development",
    eyebrow: "02 / Custom Web",
    title: "Custom Website & Admin Panel Development",
    value: "Your own website and admin — fully custom, fully yours.",
    icon: "code",
    tint: "tint-sky",
    summary:
      "Not Shopify — fully bespoke websites and web applications with custom admin panels, dashboards, user roles, and backends. We build the public site and the control panel your team uses to manage everything.",
    outcomes: [
      "A complete website and admin panel built around your workflow",
      "Full ownership of code, data, and infrastructure choices",
      "A platform your team can operate without developer dependency",
    ],
    capabilities: [
      { title: "Custom Admin Panel", body: "Dashboards to manage content, users, orders, and business data." },
      { title: "Public Website", body: "Marketing sites, portals, and customer-facing experiences on modern stacks." },
      { title: "Backend & APIs", body: "Node.js services, databases, auth, and integrations you control." },
      { title: "Roles & Access", body: "Admin, staff, and customer roles with secure permissions." },
    ],
    deliverables: ["Custom admin panel", "Public website", "Backend + API", "Documentation & handover"],
    subServices: [
      {
        title: "Custom Admin Panel Development",
        body: "Bespoke dashboards to manage your content, products, users, orders, and business operations — built exactly how your team works.",
      },
      {
        title: "Business Portal & Internal Tools",
        body: "Staff portals, reporting dashboards, and workflow tools that replace spreadsheets and manual processes.",
      },
      {
        title: "Public Website & Frontend",
        body: "Brand websites, landing pages, and customer portals built with React, Next.js, and performance-first design.",
      },
      {
        title: "User Management & Access Control",
        body: "Login, roles, permissions, and audit trails — admin, staff, and end-user access done securely.",
      },
      {
        title: "Backend API Development",
        body: "REST and GraphQL APIs, databases, queues, and third-party integrations powering your platform.",
      },
      {
        title: "CMS & Content Management",
        body: "Editable pages, media libraries, and structured content your marketing team controls from the admin.",
      },
      {
        title: "E-Commerce (Non-Shopify)",
        body: "Custom cart, checkout, and catalog systems when you need a fully owned commerce stack outside Shopify.",
      },
      {
        title: "Deployment & Infrastructure",
        body: "Hosting setup, CI/CD, staging environments, and production hardening for reliable launches.",
      },
    ],
  },
  {
    slug: "shopify-store-management",
    eyebrow: "03 / Management",
    title: "Shopify Store Management",
    value: "One store or many — catalog, ops, and performance handled day to day.",
    icon: "gauge",
    tint: "tint-mint",
    summary:
      "We manage Shopify stores end to end — product updates, order flows, app health, performance checks, and reporting. Ideal for brands running multiple stores or teams that need a reliable operations partner.",
    outcomes: [
      "Stores that stay current, fast, and error-free",
      "Clear visibility across catalog, orders, and performance",
      "More time for your team to focus on growth",
    ],
    capabilities: [
      { title: "Catalog & Merchandising", body: "Products, collections, pricing, and promotions kept accurate." },
      { title: "Operations", body: "Order monitoring, fulfillment workflows, and app configuration." },
      { title: "Multi-store", body: "Consistent management across brands, regions, or wholesale channels." },
      { title: "Reporting", body: "Regular health checks, performance summaries, and actionable recommendations." },
    ],
    deliverables: ["Management playbook", "Weekly/monthly reports", "Issue resolution SLA", "Improvement roadmap"],
    subServices: [
      {
        title: "Product & Catalog Management",
        body: "Add, update, and organize products, variants, collections, and pricing across one or many stores.",
      },
      {
        title: "Order & Fulfillment Operations",
        body: "Monitor orders, troubleshoot fulfillment flows, and keep shipping and inventory settings accurate.",
      },
      {
        title: "App & Integration Health",
        body: "Review installed apps, fix conflicts, and keep third-party integrations running reliably.",
      },
      {
        title: "Multi-Store Management",
        body: "Consistent catalog, pricing, and operations across brands, regions, or wholesale channels.",
      },
      {
        title: "Performance & Speed Monitoring",
        body: "Regular Core Web Vitals checks, theme audits, and fixes that keep stores fast.",
      },
      {
        title: "Merchandising & Promotions",
        body: "Seasonal updates, sale setup, discount rules, and collection refreshes handled for you.",
      },
      {
        title: "Reporting & Store Health Reviews",
        body: "Clear summaries of sales trends, issues found, and recommended improvements each cycle.",
      },
      {
        title: "Dedicated Support & Issue Resolution",
        body: "A responsive team for day-to-day fixes, urgent bugs, and operational questions.",
      },
    ],
  },
  {
    slug: "custom-shopify-solutions",
    eyebrow: "04 / Shopify Custom",
    title: "Custom Shopify Solutions",
    value: "Any custom work on Shopify — scoped, built, and shipped.",
    icon: "cube",
    tint: "tint-pink",
    summary:
      "When off-the-shelf won't do on Shopify, we build it. Custom features, workflows, checkout experiences, B2B portals, subscription logic, and integrations tailored to how your business actually sells.",
    outcomes: [
      "Shopify extended to match your exact business model",
      "Clean, maintainable custom code you own",
      "Solutions that survive platform updates and scale",
    ],
    capabilities: [
      { title: "Custom Features", body: "Storefront and admin functionality built to your specification." },
      { title: "Workflows", body: "Automations, scripts, and flows that remove manual work." },
      { title: "B2B & Wholesale", body: "Custom portals, pricing rules, and volume ordering on Shopify." },
      { title: "Integrations", body: "ERP, CRM, inventory, and marketing tools wired into your store." },
    ],
    deliverables: ["Scope document", "Custom implementation", "Documentation", "Post-launch support"],
    subServices: [
      {
        title: "Custom Storefront Features",
        body: "Product configurators, bundles, dynamic pricing, and UX flows built into your Shopify theme or app.",
      },
      {
        title: "Checkout & UI Extensions",
        body: "Branded checkout fields, upsells, validations, and post-purchase experiences using Shopify extensibility.",
      },
      {
        title: "B2B & Wholesale Portals",
        body: "Volume pricing, customer-specific catalogs, net terms, and approval workflows for wholesale buyers.",
      },
      {
        title: "Subscription & Recurring Commerce",
        body: "Custom subscription logic, recharge flows, and membership models tailored to your product line.",
      },
      {
        title: "ERP, CRM & Inventory Integrations",
        body: "Sync orders, stock, customers, and finance data between Shopify and your back-office systems.",
      },
      {
        title: "Automation & Custom Scripts",
        body: "Shopify Flow, webhooks, and custom automation that removes repetitive manual store work.",
      },
      {
        title: "Marketplace & Multi-Vendor Logic",
        body: "Vendor onboarding, split payouts, and catalog rules when your store behaves like a marketplace.",
      },
      {
        title: "Legacy Feature Migration",
        body: "Rebuild custom functionality from old platforms into maintainable Shopify-native solutions.",
      },
    ],
  },
  {
    slug: "ecommerce-website-development",
    eyebrow: "05 / Commerce",
    title: "E-Commerce Website Development",
    value: "Commerce on Shopify or a fully custom stack — your choice.",
    icon: "cart",
    tint: "tint-lavender",
    summary:
      "High-performance commerce whether you sell on Shopify or need a fully owned e-commerce platform. Storefronts, checkout, catalog management, and conversion-focused design.",
    outcomes: [
      "A storefront with strong Core Web Vitals",
      "A checkout path designed for conversion",
      "A catalog your team can manage confidently",
    ],
    capabilities: [
      { title: "Shopify Commerce", body: "Full Shopify store builds, customization, and optimization." },
      { title: "Custom Commerce", body: "Standalone e-commerce with your own admin and checkout." },
      { title: "Catalog", body: "Product structures, variants, and merchandising your team controls." },
      { title: "Performance", body: "Speed and SEO tuned for discoverability and sales." },
    ],
    deliverables: ["Commerce storefront", "Checkout flow", "Catalog / admin setup", "Performance audit"],
    subServices: [
      {
        title: "Shopify Store Builds",
        body: "Full Shopify storefront setup — theme, catalog, checkout, and launch-ready merchandising.",
      },
      {
        title: "Custom E-Commerce Platforms",
        body: "Fully owned online stores with custom cart, checkout, and admin when Shopify is not the fit.",
      },
      {
        title: "Product Catalog Architecture",
        body: "Variants, collections, filters, and structured data designed for scale and easy management.",
      },
      {
        title: "Conversion-Focused UX",
        body: "Product pages, cart, and checkout flows optimized for clarity, trust, and higher conversion.",
      },
      {
        title: "Payment & Shipping Setup",
        body: "Gateways, tax rules, shipping zones, and fulfillment options configured correctly at launch.",
      },
      {
        title: "SEO & Performance for Commerce",
        body: "Fast loads, clean URLs, schema, and merchandising patterns that support discoverability and sales.",
      },
      {
        title: "Marketplace & Multi-Channel Selling",
        body: "Connect storefronts to marketplaces, social commerce, and additional sales channels.",
      },
      {
        title: "Launch & Growth Support",
        body: "Go-live checklists, analytics setup, and post-launch tuning for a stable commerce rollout.",
      },
    ],
  },
  {
    slug: "website-management-support",
    eyebrow: "06 / Support",
    title: "Website Management & Support",
    value: "Ongoing care for Shopify stores and custom websites alike.",
    icon: "support",
    tint: "tint-sky",
    summary:
      "Launch is just the start. We provide proactive monitoring, updates, security patches, content changes, and a dedicated team that keeps your Shopify store or custom website — including its admin panel — healthy month after month.",
    outcomes: [
      "Fewer outages and faster issue resolution",
      "Regular improvements without hiring in-house",
      "Peace of mind with a team that knows your stack",
    ],
    capabilities: [
      { title: "Monitoring", body: "Uptime, performance, and error tracking with fast response." },
      { title: "Updates", body: "Theme, app, dependency, and server updates applied safely." },
      { title: "Content & Admin", body: "Page updates, admin changes, and merchandising support." },
      { title: "Roadmap", body: "Prioritized improvements that compound over time." },
    ],
    deliverables: ["Support SLA", "Monthly health report", "Change log", "Improvement backlog"],
    subServices: [
      {
        title: "Shopify Store Maintenance",
        body: "Theme updates, app patches, bug fixes, and merchandising support for live Shopify stores.",
      },
      {
        title: "Custom Website & Admin Support",
        body: "Ongoing fixes, feature tweaks, and admin panel updates for bespoke web platforms.",
      },
      {
        title: "Security & Dependency Updates",
        body: "Safe updates to themes, apps, libraries, and server dependencies with regression checks.",
      },
      {
        title: "Uptime & Performance Monitoring",
        body: "Proactive checks for downtime, errors, and speed regressions with fast response when issues appear.",
      },
      {
        title: "Content & Page Updates",
        body: "Marketing page changes, landing pages, and CMS updates handled without slowing your team down.",
      },
      {
        title: "Backup & Recovery Planning",
        body: "Restore points, deployment safety, and recovery steps so changes never put the business at risk.",
      },
      {
        title: "Monthly Health Reports",
        body: "A clear summary of what was done, what was found, and what we recommend improving next.",
      },
      {
        title: "Feature Roadmap & Iteration",
        body: "Prioritized backlog of small wins and enhancements that compound month over month.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const subServiceIntros: Record<string, string> = {
  shopify:
    "Everything you need across the Shopify platform — pick a starting point or let us scope the full build.",
  "custom-website-development":
    "Fully custom web work outside Shopify — your own site, your own admin panel, and a backend you control.",
  "shopify-store-management":
    "Day-to-day store operations handled for you — catalog, orders, apps, and performance across one or many Shopify stores.",
  "custom-shopify-solutions":
    "When standard Shopify is not enough — custom features, workflows, B2B logic, and integrations built to your spec.",
  "ecommerce-website-development":
    "Commerce that converts — on Shopify or on a fully custom stack, with catalog, checkout, and performance covered.",
  "website-management-support":
    "Long-term care for Shopify stores and custom websites — monitoring, updates, fixes, and steady improvements.",
};
