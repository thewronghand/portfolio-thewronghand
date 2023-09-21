import { Link } from "react-router-dom";
import { Project } from "../../types";
import { useState } from "react";

interface ProjectListProps {
  data: Project[];
}

export default function ProjectList({ data }: ProjectListProps) {
  const [hoveredItem, setHoveredItem] = useState<Project | null>(null);

  return (
    <main>
      <section className="hidden sm:block fixed bottom-0 left-0">
        {hoveredItem && (
          <section style={{ background: `${hoveredItem.thumbnailBgColor}` }}>
            <img
              key={hoveredItem.title}
              src={hoveredItem.thumbnailLogo}
              alt={hoveredItem.title}
            />
          </section>
        )}
      </section>
      <ul className="flex flex-col">
        {data.map((item: Project) => (
          <Link
            to={`${item.id}`}
            onMouseOver={() => {
              setHoveredItem(item);
              console.log("asdf");
            }}
            onMouseOut={() => setHoveredItem(null)}
          >
            {item.title}
          </Link>
        ))}
      </ul>
    </main>
  );
}
