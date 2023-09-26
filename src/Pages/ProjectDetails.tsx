import { useParams } from "react-router-dom";
import useFetchDocument from "../utils/hooks/useFetchDocument";
import { Project } from "../types";
import { useCacheProjectImages } from "../utils/hooks/useCacheSkillImages";
import { useDarkMode } from "../utils/hooks/useDarkMode";

export default function ProjectDetails() {
  const darkMode = useDarkMode();
  const { id } = useParams();
  const { data, error, loading } = useFetchDocument<Project>(
    "/projects",
    `${id}`
  );
  useCacheProjectImages(data);

  return (
    <main
      className={` transition-all duration-300 ease-in-out ${
        darkMode ? "text-white bg-slate-500" : "text-gray-700"
      }`}
    >
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <>
          <>{data.title}</>
          <>{data.type}</>
          <div
            className="flex justify-center items-center w-48 aspect-square"
            style={{ backgroundColor: `${data.thumbnailBgColor}` }}
          >
            <img src={data.thumbnailLogo} alt={data.id} />
          </div>
          <>{data.description}</>
          <>
            {data.stacks.map((item) => (
              <div>{item}</div>
            ))}
          </>
          <div>
            <div>문서주소</div>
            {data.docsUrls.map((item) => (
              <a href={item.url} target="_blank">
                {item.title}
              </a>
            ))}
          </div>

          <div>
            <a href={data.deployUrl} target="_blank">
              배포링크
            </a>
          </div>

          <div>
            <a href={data.gitHubUrl} target="_blank">
              깃허브 링크
            </a>
          </div>

          <>
            {data.imgs.map((url, index) => (
              <img src={url} alt={`${index}`} />
            ))}
          </>
        </>
      )}
    </main>
  );
}
