import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../redux/slices/menuSlice";
import { navItemStyle } from "./headerComponents.css";

interface NavItemProps {
  number: string;
  path: string;
  title: string;
}

export default function NavItem({ number, path, title }: NavItemProps) {
  const dispatch = useDispatch();

  const handleItemClick = () => {
    dispatch(toggleMenu());
  };
  return (
    <motion.div variants={itemVariants} className={navItemStyle.container}>
      <div className={navItemStyle.number}>{number}</div>
      <Link to={path} onClick={handleItemClick} className={navItemStyle.link}>
        <span className={navItemStyle.shadowTitle}>{title}</span>
        <span className={navItemStyle.title}>{title}</span>
      </Link>
    </motion.div>
  );
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.5,
    },
  },
};
