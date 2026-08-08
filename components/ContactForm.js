"use client";

import { useState } from "react";
import { services } from "@/data/services";
import { PillButton } from "@/components/Buttons";

const inputClasses =
  "w-full rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white placeholder:text-faint outline-none transition-colors focus:border-lime";

const textareaClasses =
  "w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white placeholder:text-faint outline-none transition-colors focus:border-lime";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  // TODO: wire this up to a real form-handling service (email API, form backend) before launch.
  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card-surface rounded-2xl p-8 text-center">
        <h3 className="text-xl font-semibold text-white">Message received.</h3>
        <p className="mt-2 text-sm text-muted">
          Thanks for reaching out — I&rsquo;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className={inputClasses}
          aria-label="Full Name"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className={inputClasses}
          aria-label="Email Address"
        />
      </div>
      <select name="service" defaultValue="" className={inputClasses} aria-label="Select Service">
        <option value="" disabled>
          Select Service
        </option>
        {services.map((service) => (
          <option key={service.slug} value={service.slug}>
            {service.name}
          </option>
        ))}
      </select>
      <input type="text" name="subject" placeholder="Subject" className={inputClasses} aria-label="Subject" />
      <textarea
        name="message"
        placeholder="Write Your Message"
        rows={5}
        required
        className={textareaClasses}
        aria-label="Write Your Message"
      />
      <PillButton type="submit" icon="Send" className="self-start">
        Send Message
      </PillButton>
    </form>
  );
}
