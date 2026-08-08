const keywords = [
  "SEO",
  "Paid Advertising",
  "Social Media",
  "Content Marketing",
  "Email Automation",
  "Web Development",
  "Conversion Optimization",
  "Analytics & Reporting",
];

export default function Marquee() {
  const items = [...keywords, ...keywords];

  return (
    <div className="overflow-hidden border-y border-white/5 bg-bg py-6">
      <div className="flex w-max marquee-track">
        {items.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="mx-5 flex items-center gap-5 text-2xl sm:text-3xl font-heading font-semibold text-lime"
          >
            {word}
            <span className="text-amber" aria-hidden="true">
              •
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
