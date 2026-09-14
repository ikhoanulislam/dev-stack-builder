export const CATEGORY_STYLES = {
  Frontend: "bg-sky-50 text-sky-700",
  Backend: "bg-emerald-50 text-emerald-700",
  Database: "bg-indigo-50 text-indigo-700",
  Language: "bg-amber-50 text-amber-700",
  Styling: "bg-pink-50 text-pink-700",
  DevOps: "bg-cyan-50 text-cyan-700",
  Tools: "bg-slate-100 text-slate-700",
};

export const BADGE_STYLES = {
  Popular: "bg-fuchsia-50 text-fuchsia-600",
  Fast: "bg-orange-50 text-orange-600",
  Standard: "bg-emerald-50 text-emerald-600",
  Cache: "bg-rose-50 text-rose-600",
  Ubiquitous: "bg-amber-50 text-amber-600",
  Essential: "bg-blue-50 text-blue-600",
  Robust: "bg-slate-100 text-slate-600",
  Modern: "bg-teal-50 text-teal-600",
  Containers: "bg-sky-50 text-sky-600",
  Versatile: "bg-green-50 text-green-600",
  "Top SQL": "bg-indigo-50 text-indigo-600",
};

export function categoryChipClass(category) {
  return CATEGORY_STYLES[category] || "bg-slate-100 text-slate-600";
}

export function badgeChipClass(badge) {
  return BADGE_STYLES[badge] || "bg-slate-100 text-slate-600";
}
