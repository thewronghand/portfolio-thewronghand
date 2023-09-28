import { motion } from "framer-motion";

export default function ProjectThumbnail({
  bgColor,
  image,
}: ProjectThumbnailProps) {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className=""
    >
      <section
        style={{ background: bgColor }}
        className="shadow-lg rounded-2xl aspect-auto flex justify-center items-center p-10"
      >
        <motion.img
          src={image}
          alt="thumbnail"
          initial="hidden"
          animate="visible"
          variants={imgVariants}
          className="sm:w-3/5 lg:w-2/5"
        />
      </section>
    </motion.section>
  );
}

interface ProjectThumbnailProps {
  bgColor: string;
  image: string;
}

const containerVariants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.7,
      duration: 0.5,
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
};

const imgVariants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.5,
      type: "spring",
      damping: 9,
      stiffness: 100,
    },
  },
};
