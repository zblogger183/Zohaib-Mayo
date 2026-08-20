import Link from "next/link";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { PillButton } from "@/components/Buttons";
import SocialIcon from "@/components/SocialIcons";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";

const chips = ["SEO", "Paid Advertising", "Content & Email", "Web Development"];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { key: "facebook", href: site.social.facebook, label: "Facebook" },
  { key: "linkedin", href: site.social.linkedin, label: "LinkedIn" },
  { key: "instagram", href: site.social.instagram, label: "Instagram" },
  { key: "threads", href: site.social.threads, label: "Threads" },
  { key: "youtube", href: site.social.youtube, label: "YouTube" },
  { key: "x", href: site.social.x, label: "X (Twitter)" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-bg">
      <div className="panel-section">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="card-surface rounded-3xl px-6 py-10 sm:px-12 sm:py-14 flex flex-col items-center gap-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-2xl">
              Let&rsquo;s Build a Marketing System That{" "}
              <span className="text-amber">Actually Converts.</span>
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-body"
                >
                  <Icon name="Check" size={14} className="text-lime" />
                  {chip}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <PillButton href="/contact" icon="Send">
                Start a Project
              </PillButton>
              <PillButton href={`mailto:${site.email}`} variant="secondary" icon="Mail">
                Email Me
              </PillButton>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-muted leading-relaxed">{site.tagline}</p>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.key}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-lime text-[#06090a] transition-colors hover:bg-lime-hover"
                >
                  <SocialIcon name={social.key} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-lime transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-3">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-muted hover:text-lime transition-colors"
                  >
                    {s.shortName}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm text-lime hover:text-lime-hover transition-colors">
                  View all services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="text-lime shrink-0" />
                {site.phone}
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} className="text-lime shrink-0" />
                {site.email}
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} className="text-lime shrink-0" />
                {site.address.line1}, {site.address.line2}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-faint sm:flex-row">
          <p>
            Copyright &copy; {year} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-lime transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-lime transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
