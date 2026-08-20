import { services } from "@/data/services";
import { industries } from "@/data/industries";

const defaultStats = [
  { value: String(services.length), label: "Core Services Offered" },
  { value: String(industries.length), label: "Industries Served" },
  { value: "1", label: "Solo Full-Stack Operator" },
  { value: "2", label: "Regions Covered — PK & GCC" },
];

export default function StatsRow({ stats = defaultStats }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="card-surface rounded-xl p-5 text-center">
          <div className="font-heading text-3xl font-bold text-lime">{stat.value}</div>
          <div className="mt-1 text-xs text-muted">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
