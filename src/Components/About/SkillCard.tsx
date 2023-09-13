import { Skill } from "../../types";
import { motion } from "framer-motion";

interface SkillCardProps {
  skill: Skill;
  isSelected: boolean;
}

export default function SkillCard({ skill, isSelected }: SkillCardProps) {
  return (
    <motion.li
      className={`mt-10 last:shadow-xl text-gray-700 bg-white flex flex-col max-w-[320px] min-w-[320px] h-[512px] rounded-xl overflow-hidden ${
        isSelected && "shadow-xl"
      }`}
      variants={containerVariants}
      initial="hidden"
      animate={isSelected ? "show" : "exit"}
    >
      <section style={{ background: `${skill.bgColorCode}` }} className="h-2/3">
        <motion.img
          src={skill.imgUrl}
          alt={skill.title}
          className="w-full pointer-events-none"
          variants={imageVariants}
        />
      </section>
      <section className="p-2 mt-2 h-1/3">
        <section className="pl-2 font-bold">{skill.title}</section>
        <ul className=" list-disc p-3 pl-10 h-32 overflow-y-scroll">
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
