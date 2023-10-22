import { useParams } from "react-router-dom";
import useFetchDocument from "../utils/hooks/useFetchDocument";
import { Project } from "../types";
import { useCacheProjectImages } from "../utils/hooks/useCacheSkillImages";
import ProjectImageList from "../Components/ProjectDetails/ProjectImageList";
import ProjectThumbnail from "../Components/ProjectDetails/ProjectThumbnail";
import ProjectInfoContainer from "../Components/ProjectDetails/ProjectInfoContainer";
import Background from "../Components/Global/Background";
import { projectDetailsStyle as style } from "./pages.css";

export default function ProjectDetails() {
  const { id } = useParams();
  const { data, error, loading } = useFetchDocument<Project>(
    "/projects",
    `${id}`
  );
  useCacheProjectImages(data);

  return (
    <Background>
      <main className={style.container}>
        {error && <div>Error: {error.message}</div>}
        {!loading && !error && data && (
          <section className={style.main}>
            <section className={style.thumbnailSection}>
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
    </Background>
  );
}
