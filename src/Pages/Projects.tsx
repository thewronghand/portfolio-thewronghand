import useFetchCollection from "../utils/hooks/useFetchCollection";
import { Project } from "../types";
import ProjectList from "../Components/Projects/ProjectList";
import { useCacheProjectThumbnails } from "../utils/hooks/useCacheSkillImages";
import Background from "../Components/Global/Background";
import { projectsStyle as style } from "./pages.css";

export default function Projects() {
  const { data, loading, error } = useFetchCollection<Project>("/projects");
  useCacheProjectThumbnails(data);

  return (
    <div className={style.container}>
      <Background>
        <section className={style.main}>
          {error && <div>Error: {error.message}</div>}
          {!loading && data && <ProjectList data={data} />}
        </section>
      </Background>
    </div>
  );
}
