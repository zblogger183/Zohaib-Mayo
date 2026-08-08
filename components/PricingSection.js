import Icon from "@/components/Icon";
import { PillButton } from "@/components/Buttons";

export default function PricingSection({ plans }) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`flex flex-col gap-6 rounded-2xl p-8 ${
            plan.highlighted
              ? "border-2 border-lime bg-gradient-to-b from-lime/10 to-transparent"
              : "card-surface"
          }`}
        >
          <div>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lime/15 text-lime">
              <Icon name={plan.icon} size={18} />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-white">{plan.name}</h3>
            <p className="mt-2 text-sm text-muted">{plan.description}</p>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-white">{plan.price}</span>
            <span className="text-sm text-faint">{plan.period}</span>
          </div>
          <p className="text-xs uppercase tracking-wide text-faint">Starting price — customizable to scope</p>
          <ul className="flex flex-col gap-3">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-body">
                <Icon name="Check" size={16} className="mt-0.5 shrink-0 text-lime" />
                {feature}
              </li>
            ))}
          </ul>
          <PillButton
            href="/contact"
            variant={plan.highlighted ? "primary" : "secondary"}
            className="mt-auto w-full"
          >
            Get Started
          </PillButton>
        </div>
      ))}
    </div>
  );
}
