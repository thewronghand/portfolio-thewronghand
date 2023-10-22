import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Project } from "../../types";
import { useState } from "react";
import { projectListItemStyle as style } from "./projectsComponents.css";

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
    <motion.li className={style.container} variants={itemVariants}>
      <Link to={item.id}>
        <section
          className={style.listItemSection}
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
            className={style.motionWrapper}
          >
            <motion.span variants={arrowVariants} className={style.arrow}>
              ➔
            </motion.span>
            <span className={style.title}>{item.title}</span>
          </motion.div>
          <span className={style.type}>{item.type}</span>
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
