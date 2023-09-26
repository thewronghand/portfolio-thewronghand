import { Project } from "../../types";
import { useState } from "react";
import ProjectListItem from "./ProjectListItem";
import ProjectListImgSection from "./ProjectListImgSection";
import MobileImgSection from "./MobileImgSection";

interface ProjectListProps {
  data: Project[];
}

export default function ProjectList({ data }: ProjectListProps) {
  const [hoveredItem, setHoveredItem] = useState<Project | null>(null);

  return (
    <main className="w-full h-full flex flex-col md:flex-row">
      <MobileImgSection hoveredItem={hoveredItem} />
      <ProjectListImgSection hoveredItem={hoveredItem} />
      <section className="md:w-1/2 md:flex md:items-center lg:mr-10">
        <section className="w-full 3xl:w-10/12">
          <section className="mx-6 flex items-center justify-between">
            <section className=" text-5xl pb-4">Projects</section>
            <section className="mr-4 text-3xl">{data.length} projects</section>
          </section>

          <ul className="flex flex-col w-full overflow-y-auto px-6">
            {data.map((item: Project) => (
              <ProjectListItem
                key={item.title}
                item={item}
                onHover={setHoveredItem}
              />
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}
