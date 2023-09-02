import { Link } from "react-router-dom";
import DarkModeButton from "../Components/Header/DarkModeButton";
import { useDarkMode } from "../utils/hooks/useDarkMode";
import SkillBox from "../Components/Skills/SkillBox";

export default function Skills() {
  const darkMode = useDarkMode();

  return (
    <div
      className={`${
        darkMode ? "text-white bg-slate-500" : "text-gray-700"
      } transition-all duration-300 ease-in-out`}
    >
      <section className="w-screen h-screen flex flex-col justify-center items-center">
        this is skills page
        <SkillBox />
        <Link
          to="/"
          className={`${
            darkMode ? "text-blue-300" : "text-blue-500"
          } mt-10 inline-block`}
        >
          return to main
        </Link>
        <DarkModeButton />
      </section>
    </div>
  );
}
