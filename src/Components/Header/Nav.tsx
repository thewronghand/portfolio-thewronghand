import { motion } from "framer-motion";
import NavItem from "./NavItem";

export default function Nav() {
  return (
    <motion.div
      className="flex justify-center flex-col space-y-4 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <NavItem number="01" path="/" title="Home" />
      <NavItem number="02" path="/about" title="About" />
      <NavItem number="03" path="/skills" title="Skills" />
      <NavItem number="04" path="/projects" title="Projects" />
      <NavItem number="05" path="/contacts" title="Contacts" />
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
