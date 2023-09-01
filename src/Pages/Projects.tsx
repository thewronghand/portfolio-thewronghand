import { Link } from "react-router-dom";
import { useDarkMode } from "../utils/hooks/useDarkMode";

export default function Projects() {
  const darkMode = useDarkMode();

  return (
    <div
      className={`${darkMode ? "text-white bg-slate-500" : "text-gray-700"}`}
    >
      <section className="w-screen h-screen flex flex-col justify-center items-center">
        this is projects page
        <Link
          to="/"
          className={`${
            darkMode ? "text-blue-300" : "text-blue-500"
          } mt-10 inline-block`}
        >
          return to main
        </Link>
      </section>
    </div>
  );
}
