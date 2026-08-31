# Image guide

This site loads real photos automatically from `public/images/` — no code
changes needed. Every image is `.webp` only. If a file isn't there, the
site falls back to its current icon/gradient placeholder design, so the
layout never breaks.

| Rename your photo to | Dimensions (W x H) | Controls |
|-----------------------|---------------------|----------|
| brand/logo.webp | 512 x 512 px, square, transparent background | Navbar & footer logo mark (replaces the lime "Z" badge) |
| hero/portrait.webp | 900 x 1100 px | Homepage hero photo of you |
| about/photo-1.webp | 1000 x 750 px | About page — main team/office photo |
| about/photo-2.webp | 480 x 600 px | About page — small overlapping inset photo |
| services/seo.webp | 1200 x 900 px | SEO card + detail page hero |
| services/ppc-advertising.webp | 1200 x 900 px | PPC card + detail page hero |
| services/social-media-marketing.webp | 1200 x 900 px | Social Media card + detail page hero |
| services/content-marketing.webp | 1200 x 900 px | Content Marketing card + detail page hero |
| services/email-marketing.webp | 1200 x 900 px | Email Marketing card + detail page hero |
| services/web-development.webp | 1200 x 900 px | Web Development card + detail page hero |
| services/conversion-rate-optimization.webp | 1200 x 900 px | CRO card + detail page hero |
| services/analytics-reporting.webp | 1200 x 900 px | Analytics card + detail page hero |
| services/crm-business-automation.webp | 1200 x 900 px | CRM & Business Automation card + detail page hero |
| services/custom-software-development.webp | 1200 x 900 px | Custom Software & Web Applications card + detail page hero |
| industries/real-estate.webp | 1200 x 900 px | Real Estate card + detail page hero |
| industries/ecommerce.webp | 1200 x 900 px | E-commerce card + detail page hero |
| industries/hospitality-travel.webp | 1200 x 900 px | Hospitality & Travel card + detail page hero |
| industries/healthcare.webp | 1200 x 900 px | Healthcare card + detail page hero |
| industries/saas-startups.webp | 1200 x 900 px | SaaS & Startups card + detail page hero |
| industries/local-home-services.webp | 1200 x 900 px | Local & Home Services card + detail page hero |
| projects/organic-growth-campaign.webp | 1200 x 800 px | "Organic Growth Campaign" project card + detail |
| projects/paid-ads-launch.webp | 1200 x 800 px | "Paid Ads Launch Playbook" project card + detail |
| projects/ecommerce-funnel-revamp.webp | 1200 x 800 px | "E-commerce Funnel Revamp" project card + detail |
| projects/real-estate-lead-engine.webp | 1200 x 800 px | "Real Estate Lead Engine" project card + detail |
| projects/brand-social-relaunch.webp | 1200 x 800 px | "Brand & Social Relaunch" project card + detail |
| insights/real-estate-lead-generation-pakistan-gcc.webp | 1200 x 900 px | "How Real Estate Agencies Generate Leads..." article card + detail hero |
| insights/whatsapp-crm-lead-automation-real-estate.webp | 1200 x 900 px | "WhatsApp CRM & Lead Automation..." article card + detail hero |

**To add a photo:** resize/export it to the exact dimensions listed, save
it in `.webp` format with the exact filename shown, and place it in the
matching folder under `public/images/`. It appears automatically — no
restart needed in dev mode (a rebuild is needed in production).

**To remove a photo:** delete the file. The site automatically falls back
to its current icon/gradient design.

**To change a photo:** overwrite the file using the same filename — the
new image replaces the old one instantly.
