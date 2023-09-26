import { Project } from "../../types";
import { useState } from "react";
import ProjectListItem from "./ProjectListItem";
import ProjectListImgSection from "./ProjectListImgSection";
import MobileImgSection from "./MobileImgSection";
import { motion } from "framer-motion";

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
          <motion.section
            className="cursor-default mx-6 flex items-center justify-between"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5, delay: 0 }}
          >
            <section className=" text-5xl pb-4">Projects</section>
            <section className="mr-4 text-3xl">{data.length} projects</section>
          </motion.section>

          <motion.div
            className="flex flex-col w-full overflow-y-auto px-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <ul>
              {data.map((item: Project) => (
                <ProjectListItem
                  key={item.title}
                  item={item}
                  onHover={setHoveredItem}
                />
              ))}
            </ul>
          </motion.div>
        </section>
      </section>
    </main>
  );
}

const containerVariants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      staggerChildren: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};
