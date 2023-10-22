import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
}

export default function AnimatedText({ text }: AnimatedTextProps) {
  const characters = Array.from(text);

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      {characters.map((char: string, index) => (
        <motion.span variants={childVariants} className="h-10" key={index}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 1.1 },
  },
};

const childVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0,
      ease: "linear",
    },
  },
  hidden: {
    opacity: 0,
    x: -10,
  },
};
