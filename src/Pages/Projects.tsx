import { useDarkMode } from "../utils/hooks/useDarkMode";
import useFetchCollection from "../utils/hooks/useFetchCollection";
import { Project } from "../types";
import ProjectList from "../Components/Projects/ProjectList";
import { useCacheProjectThumbnails } from "../utils/hooks/useCacheSkillImages";
import { useColorScheme } from "../utils/hooks/useColorScheme";

export default function Projects() {
  const darkMode = useDarkMode();
  const colorScheme = useColorScheme();
  const { data, loading, error } = useFetchCollection<Project>("/projects");
  useCacheProjectThumbnails(data);

  return (
    <div
      style={{
        color: darkMode ? colorScheme.DARK.TEXT : colorScheme.LIGHT.TEXT,
        background: darkMode ? colorScheme.DARK.BG : colorScheme.LIGHT.BG,
      }}
      className={` transition-all duration-300 ease-in-out`}
    >
      <section className="w-screen h-screen flex flex-col justify-center items-center">
        {error && <div>Error: {error.message}</div>}
        {!loading && data && <ProjectList data={data} />}
      </section>
    </div>
  );
}
