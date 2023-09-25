import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
}

export default function AnimatedText({ text }: AnimatedTextProps) {
  const characters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 * i + 1 },
    }),
  };

  const childVariants = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="overflow-hidden flex"
    >
      {characters.map((char: string, index) => (
        <motion.span variants={childVariants} className="" key={index}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}
