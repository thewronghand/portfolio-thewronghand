import { AnimatePresence } from "framer-motion";
import { ProjectListImgSectionProps } from "../../types";
import { motion } from "framer-motion";
import { projectListImgSectionStyle as style } from "./projectsComponents.css";

export default function ProjectListImgSection({
  hoveredItem,
}: ProjectListImgSectionProps) {
  return (
    <section className={style.container}>
      <AnimatePresence>
        {hoveredItem && (
          <motion.section
            style={{ background: `${hoveredItem.thumbnailBgColor}` }}
            className={style.imgBackground}
            initial="hidden"
            animate={hoveredItem ? "show" : "exit"}
            variants={containerVariants}
            exit="exit"
          >
            <motion.img
              key={hoveredItem.title}
              src={hoveredItem.thumbnailLogo}
              alt={hoveredItem.title}
              className={style.imgLogo}
              initial="hidden"
              animate={hoveredItem ? "show" : "exit"}
              variants={imageVariants}
            />
          </motion.section>
        )}
      </AnimatePresence>
    </section>
  );
}

const containerVariants = {
  hidden: { x: "-20%", opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  exit: {
    x: "-30%",
    opacity: 0,
    transition: { ease: "easeInOut", duration: 0.3 },
  },
};

const imageVariants = {
  hidden: { y: "-15%", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
};
