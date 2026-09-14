import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TechGrid from "./components/TechGrid.jsx";
import StackSidebar from "./components/StackSidebar.jsx";
import Loading from "./components/Loading.jsx";
import Footer from "./components/Footer.jsx";
import technologiesData from "./data/technologies.json";

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState([]);

  // Simulates fetching the JSON data (it's a local import, so this resolves
  // almost instantly — but the loading state still exists and is exercised).
  useEffect(() => {
    const timer = setTimeout(() => {
      setTechnologies(technologiesData);
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const stackIds = useMemo(() => new Set(stack.map((t) => t.id)), [stack]);

  function handleAdd(tech) {
    if (stackIds.has(tech.id)) {
      toast.warn(`${tech.name} is already in your stack.`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack.`);
  }

  function handleRemove(tech) {
    setStack((prev) => prev.filter((t) => t.id !== tech.id));
    toast.info(`${tech.name} removed from your stack.`);
  }

  function handleRemoveAll() {
    setStack([]);
    toast.info("Stack cleared.");
  }

  return (
    <div className="min-h-screen bg-white text-ink">
      <Navbar />
      <Hero />

      <section id="technologies" className="max-w-6xl mx-auto px-5 pb-24">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Explore the <span className="text-gradient-brand">Technologies</span>
          </h2>
          <p className="mt-2 text-slate-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {loading ? (
          <Loading />
        ) : (
          <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-start">
            <TechGrid technologies={technologies} stackIds={stackIds} onAdd={handleAdd} />
            <StackSidebar stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
