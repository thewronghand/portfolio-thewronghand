import { motion } from "framer-motion";
import NavItem from "./NavItem";
import { useDarkMode } from "../../utils/hooks/useDarkMode";
import { COLORS } from "../../utils/constant";

export default function Nav() {
  const darkMode = useDarkMode();

  return (
    <motion.div
      className={`${
        darkMode
          ? `${COLORS.DARK_MODE_BG} ${COLORS.DARK_MODE_TEXT}`
          : `${COLORS.LIGHT_MODE_BG_WHITE} ${COLORS.LIGHT_MODE_TEXT}`
      } flex justify-center items-center flex-col space-y-4  text-5xl w-screen h-screen z-10 fixed transition-all duration-300 ease-in-out`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className=" font-moric">
        <NavItem number="01" path="/" title="HOME" />
        <NavItem number="02" path="/about" title="ABOUT" />
        <NavItem number="03" path="/projects" title="PROJECTS" />
        <NavItem number="04" path="/blog" title="VITRIOL" />
      </div>
    </motion.div>
  );
}

const containerVariants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};
