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
import { headerStyle } from "./headerComponents.css";

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
      className={`${headerStyle.container} ${
        isSpecialPage && !isOpen && headerStyle.mixBlend
      }`}
    >
      <section className={headerStyle.logoContainer}>
        <Link to="/">
          <Logo width="30" height="30" />
        </Link>
      </section>
      <section className={headerStyle.buttonContainer}>
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
