import { useParams } from "react-router-dom";
import useFetchDocument from "../utils/hooks/useFetchDocument";
import { Project } from "../types";

export default function ProjectDetails() {
  const { id } = useParams();
  const { data, error, loading } = useFetchDocument<Project>(
    "/projects",
    `${id}`
  );
  console.log(data);
  console.log(error);
  console.log(loading);

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <>
          <>{data.title}</>
          <>{data.type}</>
          <div style={{ backgroundColor: `${data.thumbnailBgColor}` }}>
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
              {" "}
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
    </>
  );
}
