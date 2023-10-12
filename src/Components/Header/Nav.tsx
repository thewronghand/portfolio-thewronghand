import { motion } from "framer-motion";
import NavItem from "./NavItem";
import { useDarkMode } from "../../utils/hooks/useDarkMode";
import { useColorScheme } from "../../utils/hooks/useColorScheme";

export default function Nav() {
  const darkMode = useDarkMode();
  const colorScheme = useColorScheme();

  return (
    <motion.div
      style={{
        color: darkMode ? colorScheme.DARK.TEXT : colorScheme.LIGHT.TEXT,
        background: darkMode ? colorScheme.DARK.BG : colorScheme.LIGHT.BG,
      }}
      className={` flex justify-center items-center flex-col space-y-4  text-5xl w-screen h-screen z-10 fixed transition-all duration-300 ease-in-out`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className=" font-moric font-bold">
        <NavItem number="01" path="/" title="HoME" />
        <NavItem number="02" path="/about" title="ABoUT" />
        <NavItem number="03" path="/projects" title="PRoJECTS" />
        <NavItem number="04" path="/blog" title="VITRIoL" />
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
