const isDev = process.env.NODE_ENV === "development";

// Static site (SSG) with no third-party scripts today, so nonce-based CSP
// isn't used here — nonces require dynamic rendering on every request,
// which would drop static generation/CDN caching for no real benefit on
// a site with no auth and no sensitive data. 'unsafe-inline' covers our
// own inline style attributes and Next's hydration scripts; frame-src
// allows the Google Maps embed on /contact. If GA4/GTM or any other
// third-party script is added later, its domain needs to be added to
// script-src (and connect-src for analytics beacons).
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""};
  style-src 'self' 'unsafe-inline';
  img-src 'self' data:;
  font-src 'self';
  connect-src 'self';
  frame-src 'self' https://www.google.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`
  .replace(/\s{2,}/g, " ")
  .trim();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Content-Security-Policy", value: cspHeader },
        ],
      },
    ];
  },
};

export default nextConfig;
