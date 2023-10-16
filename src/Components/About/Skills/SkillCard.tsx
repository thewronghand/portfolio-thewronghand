import { Skill } from "../../../types";
import { motion } from "framer-motion";
import { skillCardStyle as style } from "./skillComponents.css";

interface SkillCardProps {
  skill: Skill;
  isSelected: boolean;
}

export default function SkillCard({ skill, isSelected }: SkillCardProps) {
  return (
    <motion.li
      className={style.container}
      variants={containerVariants}
      initial="hidden"
      animate={isSelected ? "show" : "exit"}
    >
      <section
        style={{ background: `${skill.bgColorCode}` }}
        className={style.imgSection}
      >
        <motion.img
          src={skill.imgUrl}
          alt={skill.title}
          className={style.img}
          variants={imageVariants}
        />
      </section>
      <section className={style.descriptionSection}>
        <section className={style.title}>{skill.title}</section>
        <ul className={style.list}>
          {skill.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </motion.li>
  );
}

const containerVariants = {
  hidden: { x: "-50%", opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 14,
      stiffness: 100,
    },
  },
  exit: { x: "-160%" },
};

const imageVariants = {
  hidden: { y: "-10%", opacity: 0 },
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
