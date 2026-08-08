// TODO: have a lawyer review before publishing.

import { site } from "@/data/site";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${site.domain} — how ${site.name} collects, uses, and protects visitor information.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const updated = "August 2026";

  return (
    <>
      <PageHero title="Privacy Policy" crumbs={[{ label: "Privacy Policy" }]} />
      <section className="bg-bg">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-sm text-faint">Last updated: {updated}</p>

          <div className="mt-8 flex flex-col gap-8 text-sm leading-relaxed text-muted">
            <p>
              This Privacy Policy explains how {site.name} (&ldquo;I&rdquo;, &ldquo;me&rdquo;, or
              &ldquo;my&rdquo;) collects, uses, and protects information when you visit {site.domain}
              or get in touch through the contact form, email, or phone.
            </p>

            <div>
              <h2 className="text-lg font-semibold text-white">Information I Collect</h2>
              <p className="mt-2">
                When you submit the contact form, I collect the information you provide directly —
                name, email address, and message content. I may also collect standard analytics data
                such as pages visited, device type, and general location, via tools like Google
                Analytics.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white">How I Use Information</h2>
              <p className="mt-2">
                Information submitted through the contact form is used solely to respond to your
                inquiry. Analytics data is used to understand site usage and improve the site. I do
                not sell personal information to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white">Cookies & Tracking</h2>
              <p className="mt-2">
                This site may use cookies and similar technologies through analytics and advertising
                tools (such as Google Analytics, Google Ads, and Meta Pixel) to understand traffic and
                measure campaign performance.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white">Third-Party Services</h2>
              <p className="mt-2">
                This site may use third-party services for analytics, hosting, and form handling.
                These providers have their own privacy policies governing the use of your information.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white">Your Rights</h2>
              <p className="mt-2">
                You may request access to, correction of, or deletion of your personal information by
                contacting {site.email}.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white">Contact</h2>
              <p className="mt-2">
                Questions about this policy can be sent to {site.email}.
              </p>
            </div>

            <p className="rounded-xl border border-amber/30 bg-amber/5 p-4 text-xs text-faint">
              This is placeholder boilerplate text and has not been reviewed by a lawyer. Have this
              policy reviewed by legal counsel before this site goes live.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
