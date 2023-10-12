import { Link } from "react-router-dom";
import { Project } from "../../types";
import { useColorScheme } from "../../utils/hooks/useColorScheme";
import { useDarkMode } from "../../utils/hooks/useDarkMode";

export default function ProjectInfoContainer({
  data,
}: ProjectInfoContainerProps) {
  const colorScheme = useColorScheme();
  const darkMode = useDarkMode();

  return (
    <section className="">
      <section className="text-3xl pt-6 pb-4 border-solid border-b-2 border-current mb-4 cursor-default">
        {data.title}
      </section>
      <section className="text-xl text-right mb-2 pr-2 cursor-default">
        {data.type}
      </section>
      <section className="pb-2">{data.description}</section>
      <ul className="flex flex-wrap content-start mb-2">
        {data.stacks.map((item) => (
          <li
            style={{
              background: darkMode
                ? colorScheme.DARK.PRIMARY
                : colorScheme.LIGHT.PRIMARY,
            }}
            className={`mt-2 text-white py-1 px-3 mr-1 rounded-2xl cursor-default`}
          >
            {item}
          </li>
        ))}
      </ul>
      <div>
        {data && data.docsUrls && (
          <div className="flex">
            <span className="cursor-default mr-2 text-lg">Docs</span>
            <ul className="pt-[2px] ml-6 list-disc">
              {data.docsUrls.map((item) => (
                <li
                  key={item.title}
                  className="hover:text-blue-300 transition-all ease-in-out duration-300s"
                >
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <section className="flex items-center mt-1">
        <span className="cursor-default mr-2 text-lg">Links</span>
        <ul className="flex px-2">
          <li
            style={{
              background: darkMode
                ? colorScheme.DARK.ACCENT
                : colorScheme.LIGHT.ACCENT,
            }}
            className="px-3 py-1 rounded-2xl text-white hover:bg-blue-200 transition-all duration-300 ease-in-out mr-1"
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
            className="px-3 py-1 rounded-2xl text-white hover:bg-blue-200 transition-all duration-300 ease-in-out"
          >
            <a href={data.gitHubUrl} target="_blank" rel="noopener noreferrer">
              깃허브 링크
            </a>
          </li>
        </ul>
      </section>
      <section className=" flex justify-end items-center mt-6">
        <span className="text-2xl mr-4">Next Project</span>
        <Link
          to={`/projects/${data.nextProject.path}`}
          className="mt-1 text-lg hover:text-blue-300 transition-all ease-in-out duration-300"
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
