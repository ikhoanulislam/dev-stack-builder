import { categoryChipClass, badgeChipClass } from "../lib/categoryStyles";

export default function TechCard({ tech, isAdded, onAdd }) {
  return (
    <div className="border border-slate-200 rounded-2xl p-5 flex flex-col bg-white">
      <div className="flex items-center justify-between mb-4">
        <img src={tech.icon} alt={`${tech.name} logo`} className="w-9 h-9" loading="lazy" />
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeChipClass(tech.badge)}`}>
          {tech.badge}
        </span>
      </div>

      <h3 className="font-bold text-lg">{tech.name}</h3>
      <p className="mt-1.5 text-sm text-slate-500 leading-relaxed flex-1">{tech.description}</p>

      <div className="mt-4 flex items-center gap-2 text-xs flex-wrap">
        <span className={`px-2.5 py-1 rounded-full font-medium ${categoryChipClass(tech.category)}`}>
          {tech.category}
        </span>
        <span className="text-slate-500">{tech.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 font-semibold text-slate-700">
          <span className="text-amber-400">★</span>
          {tech.rating}
        </span>
      </div>

      <button
        type="button"
        disabled={isAdded}
        onClick={() => onAdd(tech)}
        className={`mt-4 w-full py-2.5 rounded-xl text-sm font-semibold transition-colors ${
          isAdded
            ? "bg-slate-100 text-slate-400 cursor-not-allowed"
            : "bg-ink text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
