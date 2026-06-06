// Upcoming products. Reference features BGV (Background Verification).

import type { IconName } from "@/components/Icon";

export type Product = {
  slug: string;
  badge: string;
  name: string;
  tagline: string;
  solving: string;
  impact: string;
  icon: IconName;
  features: string[];
  status: "Coming soon" | "Live";
};

export const products: Product[] = [
  {
    slug: "bgv",
    badge: "Introducing",
    name: "BGV",
    tagline: "Automated background verification, built for modern teams.",
    solving:
      "One dashboard to add candidates, run checks, and complete verifications seamlessly.",
    impact: "Faster hiring, fewer resources, and significant operational savings.",
    icon: "shield",
    features: [
      "Add candidates and trigger checks in one place",
      "Automated, status-tracked verification workflows",
      "Audit-ready records and exports",
      "Faster turnaround with less manual effort",
    ],
    status: "Coming soon",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
