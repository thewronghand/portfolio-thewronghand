import { motion } from "framer-motion";
import { projectThumbnailStyle as style } from "./projectDetailsComponents.css";

export default function ProjectThumbnail({
  bgColor,
  image,
}: ProjectThumbnailProps) {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <section style={{ background: bgColor }} className={style.container}>
        <motion.img
          src={image}
          alt="thumbnail"
          initial="hidden"
          animate="visible"
          variants={imgVariants}
          className={style.logo}
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
