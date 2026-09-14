const LINK_GROUPS = [
  { title: "Product", links: ["Home", "Technologies", "Projects"] },
  { title: "Company", links: ["About", "Contact", "Careers"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 mt-24">
      <div className="max-w-6xl mx-auto px-5 py-14 grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <a href="#top" className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-brand text-white grid place-items-center text-xs font-bold">
              DS
            </span>
            <span className="font-extrabold text-lg">
              Dev <span className="text-gradient-brand">Stack</span>
            </span>
          </a>
          <p className="mt-4 text-sm text-slate-500 max-w-xs">
            Curated tools, technologies, and resources for developers building modern
            software.
          </p>
          <div className="mt-4 flex gap-4 text-sm font-medium text-slate-600">
            <a href="#github">GitHub</a>
            <a href="#twitter">Twitter</a>
            <a href="#linkedin">LinkedIn</a>
          </div>
        </div>

        {LINK_GROUPS.map((group) => (
          <div key={group.title}>
            <p className="text-xs font-bold tracking-wide text-slate-800">{group.title}</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-slate-500">
              {group.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
