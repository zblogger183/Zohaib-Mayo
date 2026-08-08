const tools = [
  "Google Analytics 4",
  "Google Tag Manager",
  "Google Ads",
  "Meta Ads Manager",
  "SEMrush",
  "Ahrefs",
  "Looker Studio",
];

export default function ToolsStrip() {
  return (
    <div className="card-surface rounded-2xl px-6 py-8 sm:px-10">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-faint">
        Tools & Platforms I Work In
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
        {tools.map((tool) => (
          <span key={tool} className="text-sm sm:text-base font-semibold text-muted">
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
