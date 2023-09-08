import { useParams } from "react-router-dom";
import useFetchDocument from "../utils/hooks/useFetchDocument";

export default function ProjectDetails() {
  const { id } = useParams();
  const { data, error, loading } = useFetchDocument("/projects", `${id}`);
  console.log(data);
  console.log(error);
  console.log(loading);

  return <></>;
}
