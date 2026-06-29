// INSPIROIN Shopify apps — helpdesk content and app metadata.

export type ShopifyAppFaq = {
  question: string;
  answer: string;
};

export type ShopifyApp = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  appStoreUrl?: string;
  privacyPolicyPath: string;
  helpTopics: { title: string; body: string }[];
  faqs: ShopifyAppFaq[];
};

export const shopifyApps: ShopifyApp[] = [
  {
    slug: "try-it-on",
    name: "Try It On",
    tagline: "Virtual try-on for fashion and accessories",
    description:
      "Try It On lets shoppers preview products on themselves using product images from your catalog — helping reduce returns and increase confidence before purchase.",
    privacyPolicyPath: "/privacy/shopify-apps",
    helpTopics: [
      {
        title: "Install the app",
        body: "From the Shopify App Store, click Add app and approve the requested permissions. After install, open Try It On from your Shopify admin to complete setup.",
      },
      {
        title: "Enable on your theme",
        body: "In the Shopify theme editor, add the Try It On app block or embed to product pages where virtual try-on should appear. Save and preview on a product with a suitable hero image.",
      },
      {
        title: "Prepare product images",
        body: "Use clear, front-facing product photos on a neutral background for best results. Assign images to variants you want available for try-on.",
      },
      {
        title: "Test the shopper experience",
        body: "Visit a product page on your storefront, open Try It On, and confirm the preview loads correctly on desktop and mobile before publishing theme changes.",
      },
    ],
    faqs: [
      {
        question: "Which Shopify plans are supported?",
        answer:
          "Try It On works on Shopify plans that support app embeds and theme app extensions. If you are unsure about your plan, contact us and we will confirm compatibility.",
      },
      {
        question: "Do you store customer photos?",
        answer:
          "Try It On processes try-on sessions to deliver the preview experience. We do not use customer images for marketing. See our Apps for Shopify Privacy Policy for full details on data handling and retention.",
      },
      {
        question: "Can I remove Try It On from specific products?",
        answer:
          "Yes. Control where the widget appears through theme placement and product templates. You can limit try-on to selected collections or product types.",
      },
      {
        question: "How do I uninstall the app?",
        answer:
          "Remove the app block from your theme, then uninstall Try It On from Shopify admin → Settings → Apps. Store and session data tied to the app is deleted according to our privacy policy.",
      },
      {
        question: "How do I get support?",
        answer:
          "Email support@inspiroin.com with your store URL, a brief description of the issue, and screenshots if helpful. We respond Monday to Saturday, 10AM – 7PM IST.",
      },
    ],
  },
];

export function getShopifyApp(slug: string): ShopifyApp | undefined {
  return shopifyApps.find((app) => app.slug === slug);
}
