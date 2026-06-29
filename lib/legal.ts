// Privacy Policy & Terms — update registered entity details here when available.

export type LegalSection = {
  heading: string;
  body: string;
  subsections?: { heading: string; body: string }[];
};

export const legal = {
  privacy: {
    title: "Privacy Policy",
    updated: "June 2026",
    intro:
      "INSPIROIN operates inspiroin.com, Shopify apps, and related services. This page covers our website. If you use one of our Shopify apps (such as Try It On), please read the Apps for Shopify Privacy Policy linked below — it describes the data our apps access and how we handle it.",
    platformPolicies: [
      {
        label: "Apps for Shopify Privacy Policy",
        href: "/privacy/shopify-apps",
        description: "Required for merchants and shoppers using INSPIROIN Shopify apps.",
      },
    ],
    sections: [
      {
        heading: "Who we are",
        body:
          "INSPIROIN (“we”, “us”) operates inspiroin.com and provides Shopify development, custom web development, and related services. Contact: support@inspiroin.com · Bengaluru, Karnataka, India.",
      },
      {
        heading: "Information we collect",
        body:
          "When you use our contact form, we collect the details you submit — name, email, company (optional), project type, budget range, and message. We may also collect standard technical data (browser type, pages visited) through hosting and analytics if enabled on the live site.",
      },
      {
        heading: "How we use your information",
        body:
          "We use contact form submissions to respond to inquiries, scope projects, and communicate about our services. We do not sell your personal information to third parties.",
      },
      {
        heading: "Email delivery",
        body:
          "Contact form messages are delivered to our team inbox via a secure email provider (SMTP). Your email address is used as the reply-to address so we can respond directly to you.",
      },
      {
        heading: "Data retention",
        body:
          "We retain inquiry emails for as long as needed to manage client relationships and business records, unless you ask us to delete your information sooner.",
      },
      {
        heading: "Your rights",
        body:
          "You may request access, correction, or deletion of your personal data by emailing support@inspiroin.com. We will respond within a reasonable timeframe.",
      },
      {
        heading: "Cookies",
        body:
          "This site may use essential cookies for functionality. If analytics or marketing cookies are added in the future, this policy will be updated accordingly.",
      },
      {
        heading: "Changes",
        body:
          "We may update this policy from time to time. The “last updated” date at the top of this page will reflect the latest version.",
      },
      {
        heading: "Applicable law and jurisdiction",
        body:
          "This Privacy Policy is governed by the laws of the Republic of India. Disputes relating to this policy shall be subject to the courts in Bengaluru, Karnataka, India.",
      },
    ],
  },
  shopifyAppsPrivacy: {
    title: "Apps for Shopify Privacy Policy",
    updated: "June 2026",
    intro:
      "This Privacy Policy explains how INSPIROIN (“we”, “us”) collects, uses, and protects information when you install or use our Shopify apps — including Try It On — or when shoppers interact with a store that uses our apps. By installing or using our apps, you agree to this policy. If you do not agree, please uninstall the app and discontinue use.",
    sections: [
      {
        heading: "Who this policy applies to",
        body:
          "This policy applies to merchants who install INSPIROIN Shopify apps, their staff who access the app in Shopify admin, and end customers who use app features on a merchant’s storefront (for example, virtual try-on on a product page).",
      },
      {
        heading: "Information the app collects",
        body:
          "When you install an INSPIROIN Shopify app, we access only the Shopify data needed to provide the app’s functionality. The exact scopes depend on the app, but may include the categories below.",
        subsections: [
          {
            heading: "Store information",
            body:
              "We collect store details such as store name, store URL, contact email, and timezone. This lets us identify your shop, deliver app features, and provide support.",
          },
          {
            heading: "Products and collections",
            body:
              "We access product titles, IDs, types, vendors, collections, images, variants, pricing, tags, and inventory levels needed to power app features — for example, loading the correct product image for a virtual try-on preview.",
          },
          {
            heading: "Theme and storefront configuration",
            body:
              "We read theme and app embed settings so the app can render correctly on your storefront. We do not modify your theme without actions you take in the app or theme editor.",
          },
          {
            heading: "Try-on session data",
            body:
              "When shoppers use Try It On, we may process images or camera input they provide solely to generate the try-on preview. We use this data to operate the feature and improve reliability. We do not use shopper try-on images for unrelated marketing.",
          },
          {
            heading: "Orders (when applicable)",
            body:
              "If an app feature requires order context — such as post-purchase workflows — we may access order IDs, line items, and fulfillment status limited to what the feature needs. Try It On does not require order data for core try-on functionality unless explicitly enabled for a future feature.",
          },
        ],
      },
      {
        heading: "How we use your information",
        body:
          "We use collected information to operate and improve our apps, provide merchant support, troubleshoot issues, send service-related communications, and comply with legal obligations. With your permission, we may email you about product updates or new INSPIROIN services. We do not sell personal information.",
      },
      {
        heading: "Sharing your personal information",
        body:
          "We do not share, sell, rent, or disclose personal information to other companies for their own marketing. We may share information with service providers who help us host infrastructure, send email, or analyze app performance — only as needed to operate the app and under confidentiality obligations. We may also disclose information if required by law or to protect INSPIROIN, merchants, or the public.",
      },
      {
        heading: "Third-party services",
        body:
          "Our apps may rely on Shopify APIs and trusted infrastructure providers. Those providers process data only to deliver services on our behalf. Payment and checkout data on your store remain governed by Shopify and your payment providers.",
      },
      {
        heading: "Data retention",
        body:
          "We retain merchant account and app configuration data while the app is installed. When you uninstall an INSPIROIN Shopify app, associated app data is deleted within 72 hours unless we must retain it for legal, security, or backup purposes. You may request earlier deletion by emailing support@inspiroin.com.",
      },
      {
        heading: "Security",
        body:
          "We use encryption in transit (HTTPS/TLS) and apply application-level security controls to protect data. No method of transmission or storage is completely secure; use of our apps is at your own risk. If we become aware of a breach affecting personal data, we will notify affected parties as required by applicable law.",
      },
      {
        heading: "Your rights",
        body:
          "Merchants and individuals may request access, correction, or deletion of personal data by contacting support@inspiroin.com. We will respond within a reasonable timeframe.",
      },
      {
        heading: "Changes to this policy",
        body:
          "We may update this policy from time to time. Material changes will be reflected by updating the “last updated” date on this page. Continued use of our apps after changes means you accept the updated policy.",
      },
      {
        heading: "Applicable law and jurisdiction",
        body:
          "This Privacy Policy is governed by the laws of the Republic of India. Disputes relating to this policy shall be subject to the courts in Bengaluru, Karnataka, India.",
      },
      {
        heading: "Contact us",
        body:
          "Questions about this policy or our privacy practices: support@inspiroin.com · Bengaluru, Karnataka, India.",
      },
    ] satisfies LegalSection[],
  },
  terms: {
    title: "Terms of Use",
    updated: "June 2026",
    sections: [
      {
        heading: "Acceptance",
        body:
          "By accessing inspiroin.com, you agree to these Terms of Use. If you do not agree, please do not use the site.",
      },
      {
        heading: "About the site",
        body:
          "This website presents INSPIROIN’s services, portfolio, and contact information. Project descriptions reflect work we have contributed to; live client sites are owned and operated by the respective clients.",
      },
      {
        heading: "No professional advice",
        body:
          "Content on this site is for general information only. It does not constitute legal, financial, or technical advice. Specific project terms are agreed in writing between INSPIROIN and the client.",
      },
      {
        heading: "Intellectual property",
        body:
          "Site design, copy, and branding are owned by INSPIROIN unless otherwise noted. Client logos and live site content belong to their respective owners. Do not reproduce site materials without permission.",
      },
      {
        heading: "External links",
        body:
          "Links to client websites and third-party platforms are provided for reference. We are not responsible for the content or policies of external sites.",
      },
      {
        heading: "Limitation of liability",
        body:
          "The site is provided “as is”. INSPIROIN is not liable for any damages arising from use of the site or reliance on its content, to the fullest extent permitted by applicable law.",
      },
      {
        heading: "Contact",
        body:
          "Questions about these terms: support@inspiroin.com · Bengaluru, Karnataka, India.",
      },
    ],
  },
};
