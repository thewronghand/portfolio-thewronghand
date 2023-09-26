import { AnimatePresence } from "framer-motion";
import { ProjectListImgSectionProps } from "../../types";
import { motion } from "framer-motion";

export default function MobileImgSection({
  hoveredItem,
}: ProjectListImgSectionProps) {
  return (
    <section className="h-[440px] mt-16 md:hidden">
      <AnimatePresence>
        {hoveredItem && (
          <motion.section
            style={{ background: `${hoveredItem.thumbnailBgColor}` }}
            className="mx-8 rounded-xl flex justify-center items-center shadow-lg"
            initial="hidden"
            animate={hoveredItem ? "show" : "exit"}
            variants={containerVariants}
            key={hoveredItem.title}
            exit="exit"
          >
            <motion.img
              key={hoveredItem.title}
              src={hoveredItem.thumbnailLogo}
              alt={hoveredItem.title}
              className="w-4/5 sm:w-3/5"
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
  hidden: { y: "-50%", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 14,
      stiffness: 100,
    },
  },
  exit: { y: "-160%", opacity: 0 },
};

const imageVariants = {
  hidden: { y: "-20%", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
      type: "spring",
      damping: 11,
      stiffness: 100,
    },
  },
};
