import { Link } from "react-router-dom";
import DarkModeButton from "../Components/Header/DarkModeButton";
import { useDarkMode } from "../utils/hooks/useDarkMode";

export default function Skills() {
  const darkMode = useDarkMode();

  return (
    <div
      className={`${darkMode ? "text-white bg-slate-500" : "text-gray-700"}`}
    >
      <section className="w-screen h-screen flex flex-col justify-center items-center">
        this is skills page
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
