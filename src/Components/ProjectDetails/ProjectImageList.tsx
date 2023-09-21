interface ProjectImageListProps {
  imgs: string[];
}

export default function ProjectImageList({ imgs }: ProjectImageListProps) {
  return (
    <ul>
      {imgs.map((item: string, index) => (
        <li key={index}>
          <img src={item} alt={String(index)} />
        </li>
      ))}
    </ul>
  );
}
