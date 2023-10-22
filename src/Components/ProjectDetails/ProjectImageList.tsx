import { projectImageListStyle as style } from "./projectDetailsComponents.css";

interface ProjectImageListProps {
  imgs: string[];
}

export default function ProjectImageList({ imgs }: ProjectImageListProps) {
  return (
    <section className={style.container}>
      <section className={style.title}>Sample Images</section>
      <ul className={style.imageList}>
        {imgs.map((item: string, index) => (
          <li key={index} className={style.imageListItem}>
            <img src={item} alt={String(index)} className={style.image} />
          </li>
        ))}
      </ul>
    </section>
  );
}
