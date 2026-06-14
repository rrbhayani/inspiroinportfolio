// Central site config + content.

export const site = {
  name: "INSPIROIN",
  legalName: "INSPIROIN",
  url: "https://inspiroin.com",
  tagline: "Shopify stores & custom platforms — built to sell, built to scale",
  description:
    "INSPIROIN builds high-performing Shopify stores and fully custom websites with your own admin panel, backend, and AI automation — designed, launched, and supported by a dedicated team in Bengaluru.",
  email: "support@inspiroin.com",
  hours: "Monday to Saturday, 10AM – 7PM IST",
  location: "Bengaluru, Karnataka, India",
  address: "Bengaluru, Karnataka, India",
  social: {
    linkedin: "https://www.linkedin.com/company/inspiroin",
    twitter: "https://x.com/inspiroin",
    github: "https://github.com/inspiroin",
  },
};

/** Homepage hero — drives `HeroAuth` section. */
export const hero = {
  eyebrow: "Shopify · Custom Web · AI Automation",
  headline: [
    "Shopify stores & custom web,",
    "designed to convert —",
    { text: "built to scale.", highlight: true },
  ],
  description:
    "We design, build, and manage high-performing Shopify stores — plus fully custom websites with your own admin panel, backend, and AI automation. One team from strategy to launch and beyond.",
  primaryCta: { label: "Start Your Project", href: "/contact" },
  secondaryCta: { label: "View Live Projects", href: "/work" },
  image: "/images/hero-inspiroin.png",
  imageAlt:
    "Modern devices showing ecommerce analytics and custom admin dashboards — INSPIROIN web development",
  floatingCard: {
    title: "6+ live client sites",
    subtitle: "4 Shopify · 2 custom · Global",
  },
  clientLabel: "Recent clients",
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Real client names from portfolio — add logos when available. */
export const clients = [
  "Ink9 Shop",
  "Skinwise",
  "ONDO",
  "zweineunneun",
  "Rentel",
  "Vibrant Machinery",
];

export const tools = [
  "Shopify",
  "Liquid",
  "Hydrogen",
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "AWS",
  "OpenAI",
  "Stripe",
  "Figma",
  "GitHub",
];

export const stats = [
  { label: "Live client projects", value: 6, suffix: "+" },
  { label: "Shopify storefronts", value: 4, suffix: "" },
  { label: "Custom web platforms", value: 2, suffix: "" },
  { label: "Countries served", value: 4, suffix: "+" },
];

export const whyChoose = [
  "Deep Shopify expertise — themes, apps, Plus, and store management",
  "Fully custom websites with your own admin panel and backend",
  "One team for commerce, custom web, and long-term support",
  "Solutions shaped to your workflow — not forced templates",
  "Transparent communication from scope to launch and beyond",
  "AI automation woven into Shopify and custom admin workflows",
];

export const solutions = [
  {
    slug: "shopify-solutions",
    eyebrow: "Shopify",
    title: "Shopify Solutions",
    value: "Stores, apps, and platform work — built, customized, and managed.",
    body: "Custom themes, private and public apps, Shopify Plus builds, migrations, checkout extensions, multi-store management, and every custom requirement on the Shopify platform.",
    tint: "tint-lavender",
    icon: "bag" as const,
  },
  {
    slug: "custom-web-solutions",
    eyebrow: "Custom Web",
    title: "Custom Website Solutions",
    value: "Your own website, your own admin — not Shopify, fully yours.",
    body: "Fully bespoke websites and web applications with custom admin panels, user management, dashboards, APIs, and backends. We design, build, deploy, and support the entire platform you own.",
    tint: "tint-sky",
    icon: "code" as const,
  },
];

export type Industry = {
  name: string;
  image: string;
  alt: string;
};

export const industries: Industry[] = [
  {
    name: "E-Commerce & Retail",
    image: "/images/industries/ecommerce.jpg",
    alt: "Modern e-commerce packaging and online retail fulfillment",
  },
  {
    name: "Fashion & Apparel",
    image: "/images/industries/fashion.jpg",
    alt: "Contemporary fashion retail and apparel merchandising",
  },
  {
    name: "Startups & SaaS",
    image: "/images/industries/startups.jpg",
    alt: "Startup team in a modern office planning a SaaS product",
  },
  {
    name: "B2B & Wholesale",
    image: "/images/industries/b2b-wholesale.jpg",
    alt: "Large-scale warehouse and wholesale distribution center",
  },
  {
    name: "Health & Wellness",
    image: "/images/industries/health-wellness.jpg",
    alt: "Health and wellness lifestyle with yoga and fitness",
  },
  {
    name: "Professional Services",
    image: "/images/industries/professional-services.jpg",
    alt: "Bright modern workspace for professional services teams",
  },
  {
    name: "Food & Beverage",
    image: "/images/industries/food-beverage.jpg",
    alt: "Gourmet food presentation in a restaurant setting",
  },
  {
    name: "Technology & Platforms",
    image: "/images/industries/technology.jpg",
    alt: "Technology hardware and digital platform innovation",
  },
];

export const aiAutomation = {
  title: "AI automation for faster productivity",
  body:
    "We integrate AI into Shopify stores and custom admin panels — automating repetitive work, speeding up operations, and helping your team ship more with less manual effort.",
  example: {
    body:
      "For catalogue-heavy Shopify stores like Ink9 Shop, we structure workflows for bulk tagging, collection updates, and merchandising — reducing manual admin on large SKU catalogs.",
    projectLabel: "See Ink9 Shop project",
    projectHref: "/work/ink9-shop",
  },
  highlights: [
    "Workflow automation across catalog, orders, and support",
    "AI assistants inside custom admin panels and portals",
    "Smart integrations — not generic chatbots bolted on",
  ],
  capabilities: [
    {
      title: "Store & catalog automation",
      body: "Bulk updates, tagging, descriptions, and merchandising flows powered by AI where it saves real hours.",
      icon: "bag" as const,
    },
    {
      title: "Admin panel intelligence",
      body: "Search, summaries, and action shortcuts inside your custom dashboard so staff move faster.",
      icon: "gauge" as const,
    },
    {
      title: "Support & ops bots",
      body: "Automated replies, ticket routing, and internal alerts wired to your Shopify or custom stack.",
      icon: "support" as const,
    },
    {
      title: "Custom AI workflows",
      body: "Bespoke automations — approvals, reporting, data sync — scoped to how your business actually runs.",
      icon: "rocket" as const,
    },
  ],
};
