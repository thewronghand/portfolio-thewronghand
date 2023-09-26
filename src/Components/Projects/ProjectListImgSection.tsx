import { AnimatePresence } from "framer-motion";
import { ProjectListImgSectionProps } from "../../types";
import { motion } from "framer-motion";

export default function ProjectListImgSection({
  hoveredItem,
}: ProjectListImgSectionProps) {
  return (
    <section className="hidden md:w-1/2 md:flex md:mt-none">
      <AnimatePresence>
        {hoveredItem && (
          <motion.section
            style={{ background: `${hoveredItem.thumbnailBgColor}` }}
            className={`mx-8 flex justify-center items-center md:self-end md:h-4/5 md:mx-0 md:rounded-tr-3xl md:mr-10 lg:w-full shadow-2xl`}
            initial="hidden"
            animate={hoveredItem ? "show" : "exit"}
            variants={containerVariants}
            exit="exit"
          >
            <motion.img
              key={hoveredItem.title}
              src={hoveredItem.thumbnailLogo}
              alt={hoveredItem.title}
              className="w-4/5 3xl:w-3/5"
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
