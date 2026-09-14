export default function Hero() {
  return (
    <section id="top" className="max-w-6xl mx-auto px-5 pt-16 pb-20 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-[1.05] tracking-tight">
          Build Your Ideal
          <br />
          <span className="text-gradient-brand">Development Stack</span>
        </h1>
        <p className="mt-6 text-slate-600 text-lg max-w-md">
          Explore frontend, backend, database, and tooling options, compare them side by
          side, and put together the stack that fits your next project.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#technologies"
            className="bg-gradient-brand text-white font-semibold px-6 py-3 rounded-full"
          >
            Explore Technologies
          </a>
          <a
            href="#about"
            className="border border-slate-300 font-semibold px-6 py-3 rounded-full text-ink"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative w-72 h-72 sm:w-96 sm:h-96">
          <div className="absolute inset-6 rounded-[2rem] bg-gradient-brand opacity-20 blur-3xl" />
          <img
            src="/banner-stack.png"
            alt="Isometric illustration of a layered development stack"
            className="relative w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
