import { useDarkMode } from "../../utils/hooks/useDarkMode";
import DarkModeButton from "./DarkModeButton";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../redux/slices/menuSlice";
import { RootState } from "../../redux/store";
import NavButton from "./NavButton";
import Logo from "../Main/Logo";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useColorScheme } from "../../utils/hooks/useColorScheme";
import ColorButton from "./ColorButton";

export default function Header() {
  const location = useLocation();
  const path = location.pathname;
  const isSpecialPage = path === "/about" || /^\/projects\/\w+/.test(path);
  const dispatch = useDispatch();
  const darkMode = useDarkMode();
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);
  const colorScheme = useColorScheme();

  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };
  return (
    <motion.section
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      style={{
        color: darkMode ? colorScheme.DARK.TEXT : colorScheme.LIGHT.TEXT,
      }}
      className={`fixed top-0 left-0 flex justify-between items-center w-full h-16 p-15 z-10 ${
        isSpecialPage && "mix-blend-difference"
      }`}
    >
      <section className="w-40 flex justify-center items-center">
        <section className="flex items-center ml-5">
          <Link to="/">
            <Logo width="30" height="30" />
          </Link>
        </section>
      </section>
      <section className="flex w-44 justify-around items-center p-5">
        <ColorButton />
        <DarkModeButton />
        <NavButton
          toggle={() => handleMenuClick()}
          isOpen={isOpen}
          darkMode={darkMode}
        />
      </section>
    </motion.section>
  );
}

const headerVariants = {
  hidden: {
    opacity: 0,
    y: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 8,
      stiffness: 100,
    },
  },
};
