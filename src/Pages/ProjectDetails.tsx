import { useParams } from "react-router-dom";
import useFetchDocument from "../utils/hooks/useFetchDocument";
import { Project } from "../types";
import { useCacheProjectImages } from "../utils/hooks/useCacheSkillImages";
import { useDarkMode } from "../utils/hooks/useDarkMode";
import ProjectImageList from "../Components/ProjectDetails/ProjectImageList";
import ProjectThumbnail from "../Components/ProjectDetails/ProjectThumbnail";
import ProjectInfoContainer from "../Components/ProjectDetails/ProjectInfoContainer";
import { useColorScheme } from "../utils/hooks/useColorScheme";

export default function ProjectDetails() {
  const darkMode = useDarkMode();
  const colorScheme = useColorScheme();
  const { id } = useParams();
  const { data, error, loading } = useFetchDocument<Project>(
    "/projects",
    `${id}`
  );
  useCacheProjectImages(data);

  return (
    <main
      style={{
        color: darkMode ? colorScheme.DARK.TEXT : colorScheme.LIGHT.TEXT,
        background: darkMode ? colorScheme.DARK.BG : colorScheme.LIGHT.BG,
      }}
      className={` pt-16 transition-all duration-300 ease-in-out h-full `}
    >
      {error && <div>Error: {error.message}</div>}
      {!loading && !error && data && (
        <section className="px-14 md:px-28 lg:px-36 xl:px-48 2xl:px-56 3xl:px-64 ">
          <section className="min-h-[400px] md:min-h-[360px] md:-mt-20">
            <ProjectThumbnail
              bgColor={data.thumbnailBgColor}
              image={data.thumbnailLogo}
            />
          </section>
          <ProjectInfoContainer data={data} />
          <ProjectImageList imgs={data.imgs} />
        </section>
      )}
    </main>
  );
}
