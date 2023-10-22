import { profileBoxStyle as style } from "./aboutComponents.css";

interface ProfileBoxProps {
  description: string;
}

export default function ProfileBox({ description }: ProfileBoxProps) {
  return (
    <section className={style.container}>
      <section className={style.title}>About</section>
      <section className={style.description}>{description}</section>
    </section>
  );
}
