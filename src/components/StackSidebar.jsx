import { categoryChipClass } from "../lib/categoryStyles";

export default function StackSidebar({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="lg:sticky lg:top-24 h-fit border border-slate-200 rounded-2xl p-5 bg-white">
      <h3 className="font-bold text-lg">Your Stack</h3>
      <p className="text-sm text-slate-500 mt-0.5">
        {stack.length} Technology Selected
      </p>

      {stack.length === 0 ? (
        <p className="mt-6 text-sm text-slate-400 text-center py-6">
          Your stack is empty. Add technologies from the list to build it.
        </p>
      ) : (
        <div className="mt-5 flex flex-col gap-3 max-h-[420px] overflow-y-auto stack-scrollbar pr-1">
          {stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center gap-3 border border-slate-100 rounded-xl p-3"
            >
              <img src={tech.icon} alt="" className="w-7 h-7 shrink-0" />
              <div className="min-w-0">
                <p className="font-semibold text-sm truncate">{tech.name}</p>
                <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${categoryChipClass(tech.category)}`}>
                  {tech.category}
                </span>
              </div>
              <button
                type="button"
                aria-label={`Remove ${tech.name} from stack`}
                onClick={() => onRemove(tech)}
                className="ml-auto text-slate-400 hover:text-rose-500 text-lg leading-none"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {stack.length > 0 && (
        <button
          type="button"
          onClick={onRemoveAll}
          className="mt-5 w-full py-2.5 rounded-xl text-sm font-semibold border border-rose-200 text-rose-500 hover:bg-rose-50"
        >
          Remove All
        </button>
      )}
    </aside>
  );
}
