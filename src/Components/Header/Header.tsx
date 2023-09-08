import { useDarkMode } from "../../utils/hooks/useDarkMode";
import DarkModeButton from "./DarkModeButton";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../redux/slices/menuSlice";
import { RootState } from "../../redux/store";
import NavButton from "./NavButton";

export default function Header() {
  const dispatch = useDispatch();
  const darkMode = useDarkMode();
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);

  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };
  return (
    <section
      className={`${
        darkMode ? "text-white" : " text-gray-700"
      } fixed top-0 left-0 flex justify-between items-center w-full h-16 p-15`}
    >
      <section className="w-40 flex justify-center items-center">
        <section>로고위치</section>
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
