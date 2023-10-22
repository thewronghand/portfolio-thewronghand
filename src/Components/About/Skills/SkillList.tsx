import { Skill, SkillSet, SkillListProps } from "../../../types";
import { skillListStyle as style } from "./skillComponents.css";

export default function SkillList({
  data,
  onItemClick,
  selectedSkill,
}: SkillListProps) {
  return (
    <ul className={style.container}>
      {data.map((skillSet: SkillSet) => (
        <li key={skillSet.title}>
          <section className={style.skillSetTitle}>{skillSet.title}</section>
          <ul className={style.list}>
            {skillSet.data.map((skill: Skill) => (
              <li
                key={skill.title}
                onClick={() => onItemClick(skill)}
                className={`${style.item} ${
                  selectedSkill && selectedSkill.title === skill.title
                    ? style.itemSelected
                    : undefined
                }`}
              >
                {skill.title}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
