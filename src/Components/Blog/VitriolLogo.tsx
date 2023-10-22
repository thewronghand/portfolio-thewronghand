import { motion } from "framer-motion";
import { useColorScheme } from "../../utils/hooks/useColorScheme";

export default function VitriolLogo() {
  const colorScheme = useColorScheme();
  return (
    <motion.svg
      width="50"
      height="50"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ rotate: 360 }}
      stroke={colorScheme.LIGHT.ACCENT}
      transition={{
        delay: 1.35,
        duration: 2,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      <motion.g variants={containerVariants} initial="hidden" animate="visible">
        <motion.path
          d="M 25 5 A 20 20 0 0 1 25 45 A 20 20 0 0 1 25 5"
          fill="none"
          strokeWidth="7"
          variants={circleVariant}
        />
        <motion.line
          x1="25"
          y1="5"
          x2="25"
          y2="45"
          strokeWidth="7"
          variants={verticalLineVariant}
        />
        <motion.line
          x1="25"
          y1="25"
          x2="45"
          y2="25"
          strokeWidth="7"
          variants={horizontalLineVariant}
        />
      </motion.g>
    </motion.svg>
  );
}

const circleVariant = {
  hidden: {
    pathLength: 0,
    strokeLinecap: "butt" as const,
    strokeDashoffset: 0.5,
    strokeDasharray: 2,
  },
  visible: {
    pathLength: 1,
    strokeLinecap: "round" as const,
    strokeDashoffset: 0,
    transition: { duration: 0.9 },
  },
};

const verticalLineVariant = {
  hidden: { pathLength: 0, strokeLinecap: "butt" as const },
  visible: {
    pathLength: 1,
    strokeLinecap: "round" as const,
    transition: { delay: 0.5, duration: 0.5 },
  },
};

const horizontalLineVariant = {
  hidden: { pathLength: 0, strokeLinecap: "butt" as const },
  visible: {
    pathLength: 1,
    strokeLinecap: "round" as const,
    transition: { delay: 0.8, duration: 0.5 },
  },
};
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 1 } },
};
