const defaultSkills = [
  { label: "SEO", value: 92 },
  { label: "Paid Advertising (PPC)", value: 88 },
  { label: "Content & Copywriting", value: 90 },
  { label: "Web Development", value: 85 },
  { label: "Email Automation", value: 80 },
  { label: "Analytics & Tracking", value: 87 },
];

export default function SkillBars({ skills = defaultSkills }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {skills.map((skill) => (
        <div key={skill.label} className="card-surface rounded-xl p-5">
          <div className="flex items-center justify-between text-sm font-semibold text-white">
            <span>{skill.label}</span>
            <span className="text-lime">{skill.value}%</span>
          </div>
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-lime to-lime-hover"
              style={{ width: `${skill.value}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
