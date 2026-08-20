export const caseStudies = [
  {
    slug: "aqualife-hot-tubs",
    client: "AquaLife Hot Tubs",
    url: "https://aqualifehottubs.com/",
    industry: "E-commerce — Hot Tubs & Spas (USA)",
    icon: "Waves",
    timeframe: "May 2025 – Present",
    role: "Led end-to-end: supervised site development and launch, then owned SEO strategy and execution plus social media content.",
    summary:
      "A premium US hot tub brand built and launched from the ground up, then grown in a competitive national market through hands-on SEO and content.",
    situation:
      "AquaLife needed a new website built for a competitive US hot tub and spa market with no existing organic footprint — a brand-new domain going up against established national retailers.",
    approach:
      "I supervised the site through development and launch, then took ownership of SEO from day one — technical foundation, on-page structure, and content — while also running the brand's social media content.",
    results:
      "Since launch, Google Search Console shows 5.9K total clicks and 134K total impressions at a 4.4% average CTR, with an average position of 18.1. Both clicks and impressions climbed steadily from a standing start to a sustained, still-growing trend as of mid-2026 — the account remains active and under ongoing management.",
    metrics: [
      { label: "Total clicks", value: "5.9K" },
      { label: "Total impressions", value: "134K" },
      { label: "Avg. CTR", value: "4.4%" },
      { label: "Avg. position", value: "18.1" },
    ],
    testimonial: null,
    logo: "aqualife-hot-tubs-logo",
    resultsImage: "aqualife-hot-tubs-results",
  },
  {
    slug: "saluspa",
    client: "SaluSpa",
    url: "https://saluspa.ca/",
    industry: "E-commerce — Hot Tubs & Spas (US brand, Canadian market)",
    icon: "Waves",
    timeframe: "May 2025 – May 2026",
    role: "Led SEO strategy end to end for the brand's Canadian market presence, including recovery from a Google core algorithm hit.",
    summary:
      "An established US hot tub brand's Canadian storefront, already underperforming in rankings, then hit hard by a Google core algorithm update a month into the engagement — brought back and improved past its original position over the following year.",
    situation:
      "SaluSpa was already struggling with rankings for its Canadian market when I took over SEO in May 2025. A month in, a Google core algorithm update hit the site hard, compounding an already difficult starting position.",
    approach:
      "I led the SEO recovery from there — diagnosing what the update had penalized and rebuilding the site's SEO foundation around it, tracking rankings and traffic month over month through to May 2026.",
    results:
      "Over the year I led the account, Google Search Console shows 32.9K total clicks and 593K total impressions at a 5.5% average CTR, with an average position of 10.4. Traffic continued to dip through the second half of 2025 as the algorithm hit worked through, then recovered steadily from early 2026, accelerating sharply in the final months of the engagement — ending well above where the site started.",
    metrics: [
      { label: "Total clicks", value: "32.9K" },
      { label: "Total impressions", value: "593K" },
      { label: "Avg. CTR", value: "5.5%" },
      { label: "Avg. position", value: "10.4" },
    ],
    testimonial: null,
    logo: "saluspa-logo",
    resultsImage: "saluspa-results",
  },
  {
    slug: "upper-lines-pharmacy",
    client: "Upper Lines Pharmacy",
    url: "https://upperlines.com.pk/",
    industry: "Healthcare — Online Pharmacy (Lahore, Pakistan)",
    icon: "Pill",
    timeframe: "2026 – Present",
    role: "Led end-to-end: migrated the platform from Shopify to Next.js, then owned SEO, local search, and broader digital marketing.",
    summary:
      "A Lahore-based pharmacy's first year selling online — migrated off Shopify onto a custom Next.js build, then grown through local SEO and digital marketing targeting Lahore's pharmacy search market.",
    situation:
      "Upper Lines Pharmacy launched online sales in 2026, starting on Shopify. The brand needed a platform that could support its growth plans, plus a local SEO strategy to compete for high-intent searches like 'online pharmacy in Lahore.'",
    approach:
      "I led the migration off Shopify onto a custom Next.js build, then took ownership of SEO — technical foundation and local search — alongside the brand's Google Business Profile and broader digital marketing.",
    results:
      "Since the local SEO and Google Business Profile work began, the profile has logged 547 business interactions — calls, chat clicks, direction requests, and website clicks combined — while competing for high-intent local searches like 'online pharmacy in Lahore.' The account is still early-stage and under active, ongoing management.",
    metrics: [
      { label: "GBP interactions", value: "547" },
      { label: "Platform", value: "Shopify → Next.js" },
    ],
    testimonial: null,
    logo: "upper-lines-pharmacy-logo",
    resultsImage: "upper-lines-pharmacy-results",
    screenshot: "upper-lines-pharmacy-site",
  },
];

export function getCaseStudyBySlug(slug) {
  return caseStudies.find((study) => study.slug === slug);
}
