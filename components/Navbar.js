"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { PillButton } from "@/components/Buttons";
import Icon from "@/components/Icon";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar({ logoSrc }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          {logoSrc ? (
            <span className="relative h-9 w-9 shrink-0">
              <Image src={logoSrc} alt={`${site.brand} logo`} fill className="object-contain" sizes="36px" />
            </span>
          ) : (
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime font-heading text-base font-extrabold text-[#06090a]">
              Z
            </span>
          )}
          <span className="font-heading text-sm font-bold tracking-wide text-white">{site.brand}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-lime"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <PillButton href="/contact" icon="Phone">
            Get In Touch
          </PillButton>
        </div>

        <button
          type="button"
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "X" : "Menu"} size={20} />
        </button>
      </div>

      {open ? (
        <nav
          className="lg:hidden border-t border-white/5 bg-bg px-6 py-6"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-muted hover:text-lime"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <PillButton href="/contact" icon="Phone" className="mt-2 w-full">
              Get In Touch
            </PillButton>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
