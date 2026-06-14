// Product catalog — empty while INSPIROIN focuses on services.

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

export const products: Product[] = [];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
