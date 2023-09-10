import { Skill } from "../../types";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <li className="flex flex-col">
      <section style={{ background: `${skill.bgColorCode}` }}>
        <img src={skill.imgUrl} alt={skill.title} className="w-full" />
      </section>
      <section>
        <section>{skill.title}</section>
        <ul>
          {skill.description.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </section>
    </li>
  );
}
