import { Link } from "react-router-dom";
import { Project } from "../../types";
import { useColorScheme } from "../../utils/hooks/useColorScheme";
import { useDarkMode } from "../../utils/hooks/useDarkMode";
import { projectInfoContainerStyle as style } from "./projectDetailsComponents.css";

export default function ProjectInfoContainer({
  data,
}: ProjectInfoContainerProps) {
  const colorScheme = useColorScheme();
  const darkMode = useDarkMode();

  return (
    <section className="">
      <section className={style.info.title}>{data.title}</section>
      <section className={style.info.type}>{data.type}</section>
      <section className={style.info.description}>{data.description}</section>
      <ul className={style.info.stackList}>
        {data.stacks.map((item) => (
          <li
            style={{
              background: darkMode
                ? colorScheme.DARK.PRIMARY
                : colorScheme.LIGHT.PRIMARY,
            }}
            className={style.info.stackListItem}
          >
            {item}
          </li>
        ))}
      </ul>
      <div>
        {data && data.docsUrls && (
          <div className={style.docs.container}>
            <span className={style.docs.title}>Docs</span>
            <ul className={style.docs.list}>
              {data.docsUrls.map((item) => (
                <li key={item.title} className={style.docs.listItem}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <section className={style.links.container}>
        <span className={style.links.title}>Links</span>
        <ul className={style.links.list}>
          <li
            style={{
              background: darkMode
                ? colorScheme.DARK.ACCENT
                : colorScheme.LIGHT.ACCENT,
            }}
            className={style.links.listItem}
          >
            <a href={data.deployUrl} target="_blank" rel="noopener noreferrer">
              배포링크
            </a>
          </li>
          <li
            style={{
              background: darkMode
                ? colorScheme.DARK.SECONDARY
                : colorScheme.LIGHT.SECONDARY,
            }}
            className={style.links.listItem}
          >
            <a href={data.gitHubUrl} target="_blank" rel="noopener noreferrer">
              깃허브 링크
            </a>
          </li>
        </ul>
      </section>
      <section className={style.links.nextProject.container}>
        <span className={style.links.nextProject.title}>Next Project</span>
        <Link
          to={`/projects/${data.nextProject.path}`}
          className={style.links.nextProject.link}
        >
          {data.nextProject.title}
        </Link>
      </section>
    </section>
  );
}

interface ProjectInfoContainerProps {
  data: Project;
}
