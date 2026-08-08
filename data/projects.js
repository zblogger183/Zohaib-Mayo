export const projects = [
  {
    slug: "organic-growth-campaign",
    title: "Organic Growth Campaign",
    category: "SEO",
    icon: "Search",
    summary:
      "A sample outline of how I'd take a content-and-technical SEO program from audit to a compounding organic channel.",
    approach:
      "I'd start with a full technical and content audit to find the ceiling on current performance, then rebuild information architecture and on-page structure around real search intent. From there, a content calendar targeting a mapped set of keyword clusters, published on a consistent cadence, with internal linking used deliberately to pass authority to priority pages. Every stage would be measured against organic traffic and qualified-lead growth, not raw keyword rankings.",
    scope: [
      "Technical SEO audit and indexation cleanup",
      "Keyword clustering and content calendar build",
      "On-page and internal linking restructure",
      "Monthly organic traffic and conversion reporting",
    ],
  },
  {
    slug: "paid-ads-launch",
    title: "Paid Ads Launch Playbook",
    category: "PPC",
    icon: "Megaphone",
    summary:
      "A sample outline for launching a new Google and Meta paid program from zero, structured to find profitable spend before scaling.",
    approach:
      "I'd launch with a tightly scoped test budget across Google Search and Meta, structured around two or three audience/offer hypotheses rather than one broad campaign. Landing pages would be built per hypothesis so results are attributable, not blended. After an initial learning window, spend would consolidate around what's actually converting, with bid and budget adjustments made weekly rather than left on autopilot.",
    scope: [
      "Account structure and audience hypothesis setup",
      "Landing page build per campaign hypothesis",
      "Two-week test-and-learn spend phase",
      "Weekly bid and budget optimization post-launch",
    ],
  },
  {
    slug: "ecommerce-funnel-revamp",
    title: "E-commerce Funnel Revamp",
    category: "CRO",
    icon: "ShoppingCart",
    summary:
      "A sample outline for auditing and rebuilding an online store's funnel from landing page to checkout completion.",
    approach:
      "I'd map the existing funnel using analytics and session recordings to find the specific steps losing the most visitors, rather than redesigning everything at once. Fixes would be prioritized by expected impact — usually checkout field friction, mobile page speed, and unclear product-page value propositions first — and rolled out as structured A/B tests so each change is verified before the next one ships.",
    scope: [
      "Funnel audit with analytics and session recordings",
      "Checkout and form friction fixes",
      "Product and category page CRO test plan",
      "Before/after conversion rate reporting",
    ],
  },
  {
    slug: "real-estate-lead-engine",
    title: "Real Estate Lead Engine",
    category: "Real Estate",
    icon: "Building2",
    summary:
      "A sample outline for building a repeatable lead-generation system for a real estate agency across GCC or Pakistan markets.",
    approach:
      "I'd build location and project-specific landing pages matched to how buyers actually search by city and price band, paired with Google Search and Meta lead campaigns split by investor vs. end-user intent. WhatsApp and call tracking would be wired in from day one, since most inquiries in these markets convert through direct conversation rather than a web form.",
    scope: [
      "Location and project-specific landing page builds",
      "Investor vs. end-user paid campaign split",
      "WhatsApp and call-tracking integration",
      "Monthly lead volume and quality reporting",
    ],
  },
  {
    slug: "brand-social-relaunch",
    title: "Brand & Social Relaunch",
    category: "Social",
    icon: "Share2",
    summary:
      "A sample outline for relaunching a brand's social presence with a structured content system after a period of inconsistent posting.",
    approach:
      "I'd start with a content audit and a redefined content pillar structure, then build a monthly calendar that balances brand, product, and value content instead of ad hoc posting. Paid social would extend the best-performing organic content to a wider audience, and community management would move to a daily response schedule so engagement isn't left unanswered.",
    scope: [
      "Content pillar and brand voice definition",
      "Monthly content calendar build",
      "Paid social boost strategy for top content",
      "Daily community management handover",
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
