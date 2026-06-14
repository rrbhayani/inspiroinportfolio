// Client projects — drives /work and /work/[slug] pages.
// Add new live projects to this array as you deliver more work.

export type Project = {
  slug: string;
  featured: boolean;
  client: string;
  title: string;
  summary: string;
  /** Live site URL — shown to clients as a reference. */
  url: string;
  category: "Shopify" | "Custom Web" | "Both";
  /** What INSPIROIN did — be accurate: built only vs ongoing management. */
  engagement: "Built" | "Built & managed";
  industry: string;
  region: string;
  services: string[];
  results: { label: string; value: string }[];
  challenge: string;
  solution: string;
  deliverables: string[];
  tint: string;
};

export const projects: Project[] = [
  {
    slug: "ink9-shop",
    featured: true,
    client: "Ink9 Shop",
    title: "Shopify store for premium toner & shipping supplies",
    summary:
      "E-commerce store for compatible and genuine OEM ink, toner, drum units, and shipping labels — catalog by brand and category with Canada-wide delivery.",
    url: "https://ink9shop.com/",
    category: "Shopify",
    engagement: "Built & managed",
    industry: "Office Supplies & Print",
    region: "Canada",
    services: ["Shopify Store", "Catalog Setup", "Collections", "Store Management"],
    results: [
      { label: "Catalog", value: "OEM + compatible SKUs" },
      { label: "Market", value: "Canada" },
      { label: "Engagement", value: "Built & managed" },
    ],
    challenge:
      "A large SKU catalog across toner, ink, drums, label tape, and printer parts needed clear navigation by category and brand — with OEM and compatible product lines.",
    solution:
      "Built and structured the Shopify store with collection-based merchandising, brand filters, best-seller sections, and shipping-supply categories for a smooth B2B and B2C buying experience.",
    deliverables: ["Shopify storefront", "Category architecture", "Brand collections", "Product catalog"],
    tint: "tint-lavender",
  },
  {
    slug: "getskinwise",
    featured: true,
    client: "Skinwise",
    title: "Shopify skincare brand with kit-based routines",
    summary:
      "DTC skincare store with Glow Logic and Clear Logic kits, skin-type guidance, and formulation-led product pages for the Indian market.",
    url: "https://getskinwise.com/",
    category: "Shopify",
    engagement: "Built",
    industry: "Beauty & Skincare",
    region: "India",
    services: ["Shopify Store", "Theme & UX", "Product Kits", "Conversion UX"],
    results: [
      { label: "Product model", value: "Kit-based routines" },
      { label: "Market", value: "India DTC" },
      { label: "Engagement", value: "Built" },
    ],
    challenge:
      "The brand needed a store that sells complete skincare systems — not single products — with clear guidance for oily vs dry skin and trust-focused product storytelling.",
    solution:
      "Shopify storefront with kit-based merchandising, skin-type selectors, featured video content, and policy pages structured for a growing DTC skincare label.",
    deliverables: ["Shopify theme", "Kit product pages", "Skin-type flows", "Store policies"],
    tint: "tint-mint",
  },
  {
    slug: "ondoroma",
    featured: true,
    client: "ONDO",
    title: "Shopify jewelry store with custom necklace builder",
    summary:
      "Italian jewelry brand — customizable charms and necklaces, handcrafted positioning, multilingual storefront, and premium checkout experience.",
    url: "https://ondoroma.it/",
    category: "Shopify",
    engagement: "Built",
    industry: "Jewelry & Fashion",
    region: "Italy",
    services: ["Shopify Store", "Custom UX", "Product Configurator", "International Markets"],
    results: [
      { label: "Customizer", value: "Create ONDO flow" },
      { label: "Markets", value: "International" },
      { label: "Engagement", value: "Built" },
    ],
    challenge:
      "ONDO sells personal, combinable jewelry — the site had to feel premium, support customization flows, and serve international shoppers with localized checkout.",
    solution:
      "Shopify build with collection-led navigation, a create-your-own journey, brand storytelling, and markets-ready setup for a luxury-accessible jewelry line.",
    deliverables: ["Shopify storefront", "Jewelry collections", "Customizer flow", "Brand pages"],
    tint: "tint-pink",
  },
  {
    slug: "zweineunneun",
    featured: true,
    client: "zweineunneun",
    title: "Shopify fashion & tea brand — Season 25 collection",
    summary:
      "German lifestyle brand store for premium teas and hoodies — seasonal drops, multi-currency markets, and physical retail integration.",
    url: "https://www.zweineunneun.com/en",
    category: "Shopify",
    engagement: "Built",
    industry: "Fashion & Beverage",
    region: "Germany",
    services: ["Shopify Store", "Seasonal Collections", "Markets", "Brand Experience"],
    results: [
      { label: "Merchandising", value: "Season 25 drops" },
      { label: "Markets", value: "EU + global" },
      { label: "Engagement", value: "Built" },
    ],
    challenge:
      "A niche brand selling both apparel and tea needed a cohesive Shopify experience with seasonal collections, promotional mechanics, and international selling.",
    solution:
      "Shopify storefront with season-based merchandising, product storytelling, newsletter capture, and market configuration for EU and global buyers.",
    deliverables: ["Shopify storefront", "Season collections", "International setup", "Retail integration"],
    tint: "tint-sky",
  },
  {
    slug: "rentel-marketplace",
    featured: true,
    client: "Rentel",
    title: "Rental marketplace platform — rent & lend in India",
    summary:
      "Smart rental marketplace for listing and renting items across categories — electronics, vehicles, fashion, tools, furniture, and more.",
    url: "https://www.rentel.in/",
    category: "Custom Web",
    engagement: "Built",
    industry: "Marketplace & Rentals",
    region: "India",
    services: ["Custom Platform", "Marketplace UX", "Listings", "Mobile-ready Web"],
    results: [
      { label: "Platform", value: "Rental marketplace" },
      { label: "Scope", value: "Web platform" },
      { label: "Engagement", value: "Built" },
    ],
    challenge:
      "Rentel needed a platform where users can list unused items, browse local rentals by category, and connect with owners — replacing buy-with-rent for occasional-use products.",
    solution:
      "Custom web platform with category browsing, listing flows, testimonials, FAQ, and app download paths — built as a full rental marketplace experience.",
    deliverables: ["Marketplace website", "Listing flows", "Category system", "User onboarding"],
    tint: "tint-lavender",
  },
  {
    slug: "vibrant-machinery",
    featured: true,
    client: "Vibrant Machinery",
    title: "Industrial machinery company website",
    summary:
      "Corporate web presence for machinery and industrial equipment — brand showcase and inquiry-focused experience for B2B buyers in India.",
    url: "https://www.vibrantmachinery.in/",
    category: "Custom Web",
    engagement: "Built",
    industry: "Industrial & Machinery",
    region: "India",
    services: ["Custom Website", "B2B Showcase", "Brand Presence", "Lead Generation"],
    results: [
      { label: "Focus", value: "B2B lead generation" },
      { label: "Market", value: "India" },
      { label: "Engagement", value: "Built" },
    ],
    challenge:
      "An industrial machinery business needed a professional site to present capabilities, build trust with B2B buyers, and support inquiries from the Indian market.",
    solution:
      "Custom website focused on clear industrial positioning, product/service presentation, and contact paths suited to machinery sales and partnerships.",
    deliverables: ["Corporate website", "Service pages", "Contact flows", "Mobile-ready layout"],
    tint: "tint-sky",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const featuredProjects = projects.filter((p) => p.featured);
