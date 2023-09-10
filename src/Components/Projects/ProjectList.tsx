import { Link } from "react-router-dom";
import { Project } from "../../types";

interface ProjectListProps {
  data: Project[];
}

export default function ProjectList({ data }: ProjectListProps) {
  return (
    <>
      {data.map((item: Project) => (
        <Link to={`${item.id}`}>{item.title}</Link>
      ))}
    </>
  );
}
