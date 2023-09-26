import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../redux/slices/menuSlice";

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
    <motion.div variants={itemVariants} className="flex items-center">
      <div className="mr-2 text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg">
        {number}
      </div>
      <Link
        to={path}
        onClick={handleItemClick}
        className="text-[60px] sm:text-[80px] md:text-[90px] lg:[100px] relative group pb-2"
      >
        {title}
        <div className="absolute bottom-0 left-0 h-[2px] bg-current w-0 group-hover:w-full transition-all duration-300"></div>
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
