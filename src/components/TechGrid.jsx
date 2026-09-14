import TechCard from "./TechCard.jsx";

export default function TechGrid({ technologies, stackIds, onAdd }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {technologies.map((tech) => (
        <TechCard
          key={tech.id}
          tech={tech}
          isAdded={stackIds.has(tech.id)}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}
