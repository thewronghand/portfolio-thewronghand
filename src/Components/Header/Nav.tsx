import { motion } from "framer-motion";
import NavItem from "./NavItem";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../redux/store";

export default function Nav() {
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);
  return (
    <motion.div
      className="flex justify-center items-center flex-col space-y-4 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl bg-white w-screen h-screen z-5 fixed"
      variants={containerVariants}
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      exit="exit"
    >
      <div>
        <NavItem number="01" path="/" title="Home" />
        <NavItem number="02" path="/about" title="About" />
        <NavItem number="03" path="/skills" title="Skills" />
        <NavItem number="04" path="/projects" title="Projects" />
        <NavItem number="05" path="/contacts" title="Contacts" />
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
