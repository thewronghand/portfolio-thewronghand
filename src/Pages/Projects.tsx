import { Link } from "react-router-dom";
import { useDarkMode } from "../utils/hooks/useDarkMode";
import useFetchCollection from "../utils/hooks/useFetchCollection";
import { Project } from "../types";
import ProjectList from "../Components/Projects/ProjectList";

export default function Projects() {
  const darkMode = useDarkMode();
  const { data, loading, error } = useFetchCollection<Project>("/projects");

  return (
    <div
      className={`${
        darkMode ? "text-white bg-slate-500" : "text-gray-700"
      } transition-all duration-300 ease-in-out`}
    >
      <section className="w-screen h-screen flex flex-col justify-center items-center">
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {data && <ProjectList data={data} />}
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
