import { motion } from "framer-motion";
import NavItem from "./NavItem";
import { useDarkMode } from "../../utils/hooks/useDarkMode";

export default function Nav() {
  const darkMode = useDarkMode();

  return (
    <motion.div
      className={`${
        darkMode ? "text-white bg-slate-500" : " text-gray-700 bg-white"
      } flex justify-center items-center flex-col space-y-4  text-5xl w-screen h-screen z-5 fixed transition-all duration-300 ease-in-out`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div>
        <NavItem number="01" path="/" title="Home" />
        <NavItem number="02" path="/about" title="About" />
        <NavItem number="03" path="/projects" title="Projects" />
        <NavItem number="04" path="/contacts" title="Contacts" />
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
