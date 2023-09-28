import { useDarkMode } from "../utils/hooks/useDarkMode";
import useFetchCollection from "../utils/hooks/useFetchCollection";
import { Project } from "../types";
import ProjectList from "../Components/Projects/ProjectList";
import { useCacheProjectThumbnails } from "../utils/hooks/useCacheSkillImages";
import { COLORS } from "../utils/constant";

export default function Projects() {
  const darkMode = useDarkMode();
  const { data, loading, error } = useFetchCollection<Project>("/projects");
  useCacheProjectThumbnails(data);

  return (
    <div
      className={`${
        darkMode
          ? `${COLORS.DARK_MODE_BG} ${COLORS.DARK_MODE_TEXT}`
          : `${COLORS.LIGHT_MODE_BG} ${COLORS.LIGHT_MODE_TEXT}`
      } transition-all duration-300 ease-in-out`}
    >
      <section className="w-screen h-screen flex flex-col justify-center items-center">
        {error && <div>Error: {error.message}</div>}
        {!loading && data && <ProjectList data={data} />}
      </section>
    </div>
  );
}
