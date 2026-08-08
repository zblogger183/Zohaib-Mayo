import { site } from "@/data/site";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Zohaib Mayo to discuss a digital marketing project — SEO, paid advertising, content, or web development, across Pakistan, the GCC, or remote.",
  alternates: { canonical: "/contact" },
};

const valueItems = [
  "Smart planning for measurable results",
  "Deep evaluation of your current channels",
  "Direct answers, no agency runaround",
  "Ongoing support after launch",
];

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" crumbs={[{ label: "Contact" }]} />

      <section className="panel-section">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-20 lg:grid-cols-2">
          <div className="card-surface rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white">
              Connect With <span className="text-amber">Us.</span>
            </h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div>
            <SectionHeader
              align="left"
              eyebrow="Contact Us"
              heading="Get In Touch"
              highlight="With Me."
              description="Have a project or question? Feel free to reach out anytime here directly."
            />
            <p className="mt-6 text-sm font-semibold text-white">The Value of a Free Consultation</p>
            <ul className="mt-4 flex flex-col gap-3">
              {valueItems.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-body">
                  <Icon name="Check" size={16} className="text-lime" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="card-surface rounded-xl p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lime/15 text-lime">
                  <Icon name="MapPin" size={18} />
                </span>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-faint">Our Address</p>
                <p className="mt-1 text-sm text-body">
                  {site.address.line1}, {site.address.line2}
                </p>
              </div>
              <div className="card-surface rounded-xl p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lime/15 text-lime">
                  <Icon name="Phone" size={18} />
                </span>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-faint">
                  Connect With Me
                </p>
                <p className="mt-1 text-sm text-body">{site.email}</p>
                <p className="text-sm text-body">{site.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg">
        <div className="h-[420px] w-full">
          <iframe
            title="Map centered on Lahore, Pakistan"
            src="https://www.google.com/maps?q=Lahore,Pakistan&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
