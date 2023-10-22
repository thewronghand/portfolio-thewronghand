import { Project } from "../../types";
import { useState } from "react";
import ProjectListItem from "./ProjectListItem";
import ProjectListImgSection from "./ProjectListImgSection";
import MobileImgSection from "./MobileImgSection";
import { motion } from "framer-motion";
import { projectListStyle as style } from "./projectsComponents.css";

interface ProjectListProps {
  data: Project[];
}

export default function ProjectList({ data }: ProjectListProps) {
  const [hoveredItem, setHoveredItem] = useState<Project | null>(null);

  return (
    <main className={style.container}>
      <MobileImgSection hoveredItem={hoveredItem} />
      <ProjectListImgSection hoveredItem={hoveredItem} />
      <section className={style.listSectionWrapper}>
        <section className={style.listSection}>
          <motion.section
            className={style.titleSection}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5, delay: 0 }}
          >
            <section className={style.title}>Projects</section>
            <section className={style.projectCounter}>
              {data.length} projects
            </section>
          </motion.section>

          <motion.div
            className={style.listWrapper}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <ul className={style.list}>
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
