import { motion, useMotionValue, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface SkillCardWrapperProps {
  children: ReactNode;
}

export default function SkillCardWrapper({ children }: SkillCardWrapperProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [30, -30]);

  return (
    <motion.section
      style={{ x, y, rotateX, rotateY, z: 100 }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.16}
      whileTap={{ cursor: "grabbing" }}
    >
      {children}
    </motion.section>
  );
}
