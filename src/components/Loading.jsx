export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-slate-400 gap-3">
      <div className="w-8 h-8 rounded-full border-2 border-slate-200 border-t-pink-500 animate-spin" />
      <p className="text-sm font-medium">Loading technologies…</p>
    </div>
  );
}
