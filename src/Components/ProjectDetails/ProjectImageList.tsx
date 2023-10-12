interface ProjectImageListProps {
  imgs: string[];
}

export default function ProjectImageList({ imgs }: ProjectImageListProps) {
  return (
    <section className="pb-32">
      <section className="text-3xl pt-4 pb-2 border-b-2 border-current border-solid mb-4">
        Sample Images
      </section>
      <ul className="px-6">
        {imgs.map((item: string, index) => (
          <li key={index} className="my-4 shadow-md rounded-xl overflow-hidden">
            <img src={item} alt={String(index)} />
          </li>
        ))}
      </ul>
    </section>
  );
}
