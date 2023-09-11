import { Skill } from "../../types";
import { motion, useMotionValue, useTransform } from "framer-motion";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [30, -30]);

  const variant = {
    default: {
      translateX: 0,
      rotateZ: 0,
    },
  };
  return (
    <motion.section className="relative text-gray-700 bg-white flex flex-col max-w-[320px] min-w-[320px] h-[512px] rounded-xl overflow-hidden shadow-xl">
      <section style={{ background: `${skill.bgColorCode}` }}>
        <motion.img
          src={skill.imgUrl}
          alt={skill.title}
          className="w-full pointer-events-none"
          style={{ x, y, rotateX, rotateY, z: 1000 }}
          variants={variant}
        />
      </section>
      <section className="p-2 mt-2 h-1/3">
        <section className="pl-2 font-bold">{skill.title}</section>
        <ul className=" list-disc p-3 pl-10 h-32 overflow-y-scroll">
          {skill.description.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </section>
    </motion.section>
  );
}
