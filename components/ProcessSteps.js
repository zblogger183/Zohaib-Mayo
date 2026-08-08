export default function ProcessSteps({ steps }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {steps.map((step) => (
        <div
          key={step.number}
          className="card-surface flex items-start gap-4 rounded-2xl p-5 sm:p-6"
        >
          <span className="font-heading text-2xl font-bold text-lime/70">{step.number}</span>
          <div>
            <h3 className="text-base font-semibold text-white">{step.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">{step.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
