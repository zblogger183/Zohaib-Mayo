export default function MonogramPortrait({ className = "" }) {
  return (
    <div
      className={`relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-3xl border border-white/10 ${className}`}
      style={{
        background:
          "radial-gradient(circle at 30% 20%, rgba(163,230,53,0.25), transparent 55%), radial-gradient(circle at 80% 90%, rgba(242,169,59,0.2), transparent 50%), linear-gradient(160deg, #0e160f, #06090a)",
      }}
    >
      <span className="font-heading text-7xl sm:text-8xl font-extrabold text-white/90">ZM</span>
      <span className="absolute bottom-4 left-1/2 w-[85%] -translate-x-1/2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-center text-[11px] text-faint backdrop-blur">
        Placeholder portrait — swap for a real headshot
      </span>
    </div>
  );
}
