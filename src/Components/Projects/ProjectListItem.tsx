import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Project } from "../../types";
import { useState } from "react";

interface ProjectListItemProp {
  item: Project;
  onHover: (item: Project | null) => void;
}

const arrowVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

const textVariants = {
  hidden: { x: 0 },
  visible: { x: 20 },
};

export default function ProjectListItem({
  item,
  onHover,
}: ProjectListItemProp) {
  const [isHovered, setHovered] = useState(false);

  return (
    <motion.li
      className="w-full border-t-[1px] last:border-b-[1px] border-current py-4 px-4 lg:py-5 relative"
      variants={itemVariants}
    >
      <Link to={item.id}>
        <section
          className="flex justify-between"
          onMouseOver={() => {
            onHover(item);
            setHovered(true);
          }}
          onMouseOut={() => {
            onHover(null);
            setHovered(false);
          }}
        >
          <motion.div
            initial="hidden"
            animate={isHovered ? "visible" : "hidden"}
            variants={textVariants}
            transition={{
              type: "spring",
              stiffness: 700,
              damping: 30,
            }}
            className="flex items-center"
          >
            <motion.span
              variants={arrowVariants}
              className="absolute left-[-1.5rem] text-xl"
            >
              ➔
            </motion.span>
            <span className="text-lg lg:text-xl">{item.title}</span>
          </motion.div>
          <span className="lg:text-lg">{item.type}</span>
        </section>
      </Link>
    </motion.li>
  );
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.5,
    },
  },
};
