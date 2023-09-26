import { useDarkMode } from "../../utils/hooks/useDarkMode";
import DarkModeButton from "./DarkModeButton";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../redux/slices/menuSlice";
import { RootState } from "../../redux/store";
import NavButton from "./NavButton";
import Logo from "../Main/Logo";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const path = location.pathname;
  const isSpecialPage = path === "/about" || /^\/projects\/\w+/.test(path);
  const dispatch = useDispatch();
  const darkMode = useDarkMode();
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);

  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };
  return (
    <section
      className={`${
        darkMode ? "text-white" : "text-gray-700"
      } fixed top-0 left-0 flex justify-between items-center w-full h-16 p-15 z-10 ${
        isSpecialPage && "mix-blend-difference"
      }`}
    >
      <section className="w-40 flex justify-center items-center">
        <section className="flex items-center">
          <Link to="/">
            <Logo width="30" height="30" />
          </Link>
        </section>
      </section>
      <section className="flex w-32 justify-around items-center p-5">
        <DarkModeButton />
        <NavButton
          toggle={() => handleMenuClick()}
          isOpen={isOpen}
          darkMode={darkMode}
        />
      </section>
    </section>
  );
}
