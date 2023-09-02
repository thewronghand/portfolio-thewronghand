import { useDarkMode } from "../../utils/hooks/useDarkMode";
import DarkModeButton from "./DarkModeButton";

export default function Header() {
  const darkMode = useDarkMode();

  return (
    <section
      className={`${
        darkMode ? "text-white" : " text-gray-700"
      } fixed top-0 left-0 flex justify-between items-center w-full h-16 p-15`}
    >
      <section className="w-40 flex justify-center items-center">
        <section>로고위치</section>
      </section>
      <section className="flex w-40 justify-around items-center p-5">
        <DarkModeButton />
        <section>메뉴</section>
        <section>언어</section>
      </section>
    </section>
  );
}
