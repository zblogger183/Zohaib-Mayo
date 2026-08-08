// TODO: have a lawyer review before publishing.

import { site } from "@/data/site";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${site.domain} — the terms governing use of this site and engagement with ${site.name}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  const updated = "August 2026";

  return (
    <>
      <PageHero title="Terms of Service" crumbs={[{ label: "Terms of Service" }]} />
      <section className="bg-bg">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-sm text-faint">Last updated: {updated}</p>

          <div className="mt-8 flex flex-col gap-8 text-sm leading-relaxed text-muted">
            <p>
              These Terms of Service govern your use of {site.domain} and any services described on
              it. By using this site or engaging {site.name} for services, you agree to these terms.
            </p>

            <div>
              <h2 className="text-lg font-semibold text-white">Use of This Site</h2>
              <p className="mt-2">
                This site is provided for informational purposes about the services offered by{" "}
                {site.name}. Content on this site may not be copied or reused without permission.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white">Services & Engagements</h2>
              <p className="mt-2">
                Pricing shown on this site reflects starting prices only. Actual scope, timelines, and
                fees for any engagement are defined in a separate written agreement or proposal before
                work begins.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white">No Guaranteed Results</h2>
              <p className="mt-2">
                Digital marketing outcomes depend on many factors outside direct control, including
                market conditions, competition, and platform algorithm changes. No specific ranking,
                traffic, or revenue outcome is guaranteed by using this site or engaging these
                services.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white">Limitation of Liability</h2>
              <p className="mt-2">
                {site.name} is not liable for any indirect, incidental, or consequential damages
                arising from use of this site or the services described on it.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white">Changes to These Terms</h2>
              <p className="mt-2">
                These terms may be updated from time to time. Continued use of this site after changes
                are posted constitutes acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white">Contact</h2>
              <p className="mt-2">Questions about these terms can be sent to {site.email}.</p>
            </div>

            <p className="rounded-xl border border-amber/30 bg-amber/5 p-4 text-xs text-faint">
              This is placeholder boilerplate text and has not been reviewed by a lawyer. Have these
              terms reviewed by legal counsel before this site goes live.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
