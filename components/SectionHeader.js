function Rule() {
  return <span className="h-px w-8 bg-amber/50" aria-hidden="true" />;
}

export default function SectionHeader({
  eyebrow,
  heading,
  highlight,
  description,
  align = "center",
  as: Heading = "h2",
}) {
  const alignment =
    align === "center"
      ? "items-center text-center mx-auto"
      : "items-center text-center mx-auto sm:items-start sm:text-left sm:mx-0";

  return (
    <div className={`flex flex-col gap-4 ${alignment} max-w-2xl`}>
      {eyebrow ? (
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber">
          <Rule />
          <span>{eyebrow}</span>
          <Rule />
        </div>
      ) : null}
      <Heading className="text-3xl sm:text-4xl font-bold leading-tight text-white">
        {heading} {highlight ? <span className="text-amber">{highlight}</span> : null}
      </Heading>
      {description ? <p className="text-muted text-base leading-relaxed">{description}</p> : null}
    </div>
  );
}
