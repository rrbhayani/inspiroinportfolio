// Central site config + content. Swap freely (clearly-labeled placeholders where invented).

export const site = {
  name: "INSPIROIN",
  legalName: "INSPIROIN", // PLACEHOLDER — add legal entity suffix when known
  url: "https://inspiroin.com",
  tagline: "Skills, talent, and technology for the global workforce",
  description:
    "INSPIROIN helps organizations grow by strengthening their people through targeted learning programs, reliable staffing solutions, and products designed to improve how teams work every day.",
  email: "hello@inspiroin.com",
  hours: "Monday to Friday, 10AM – 7PM IST",
  location: "Bengaluru, India",
  social: {
    linkedin: "https://www.linkedin.com/company/inspiroin", // PLACEHOLDER
    twitter: "https://x.com/inspiroin", // PLACEHOLDER
    github: "https://github.com/inspiroin", // PLACEHOLDER
  },
};

export const nav = [
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Careers", href: "/careers" },
];

// Trusted-by / clients marquee — PLACEHOLDER wordmarks (swap for real logos).
export const clients = [
  "Northwind",
  "Acme Corp",
  "Lumen",
  "Vantage",
  "Cobalt",
  "Meridian",
  "Quanta",
  "Helio",
];

// Tools we use — pulled from the reference.
export const tools = [
  "OWASP",
  "Firebase",
  "Oracle",
  "GitHub",
  "Docker",
  "Kubernetes",
  "Dynamics",
  "Salesforce",
  "AWS",
  "Figma",
];

// Partnership stats. Reference shows "0+ / 0" placeholders — using realistic figures.
export const stats = [
  { label: "Organizations served", value: 120, suffix: "+" },
  { label: "Core industries", value: 8, suffix: "" },
  { label: "Workforce readiness", value: 95, suffix: "%" },
  { label: "Average time-to-hire cut", value: 40, suffix: "%" },
];

export const whyChoose = [
  "Solutions designed around people, not just features",
  "Strong focus on usability and adoption",
  "Flexible engagement models",
  "Long-term scalability in mind",
  "One partner across learning, staffing, and products",
];

// Top-level solution pillars (OUR SOLUTIONS section).
export const solutions = [
  {
    slug: "talent-solutions",
    eyebrow: "Talent",
    title: "Talent Solutions",
    value: "Workforce readiness, enabled at scale.",
    body: "We help organizations build performance-ready teams by improving access to talent and enabling workforce readiness across roles, locations, and changing business needs.",
    tint: "tint-sky",
    icon: "users" as const,
  },
  {
    slug: "digital-solutions",
    eyebrow: "Digital",
    title: "Digital Solutions",
    value: "Technology that connects people, processes, and performance.",
    body: "We design, build, and manage digital systems that help organizations operate efficiently today and adapt confidently for what's next.",
    tint: "tint-lavender",
    icon: "layers" as const,
  },
];

// Industries we serve.
export const industries = [
  "Technology & Digital Platforms",
  "Banking, Financial Services & Insurance",
  "Retail & Consumer",
  "Enterprise & Services",
  "Healthcare Services",
  "Industrial & Logistics",
  "Education & Learning",
  "Travel & Hospitality",
];
