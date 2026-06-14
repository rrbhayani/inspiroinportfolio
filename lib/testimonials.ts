// Client testimonials — add only verified quotes with client permission.
// Each entry should include company name and link to a real project where possible.

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
  region: string;
  category: "Shopify" | "Custom Web" | "Both";
};

export const testimonials: Testimonial[] = [];
