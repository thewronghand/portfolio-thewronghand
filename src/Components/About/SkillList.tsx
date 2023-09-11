import { Skill, SkillSet } from "../../types";

interface SkillListProps {
  data: SkillSet[];
  onItemClick: (skill: Skill) => void;
  selectedSkill: Skill | null;
}

export default function SkillList({
  data,
  onItemClick,
  selectedSkill,
}: SkillListProps) {
  return (
    <ul>
      {data.map((skillSet: SkillSet) => (
        <li key={skillSet.title}>
          <section>{skillSet.title}</section>
          <ul>
            {skillSet.data.map((skill: Skill) => (
              <li
                key={skill.title}
                onClick={() => onItemClick(skill)}
                className={`cursor-pointer ${
                  selectedSkill && selectedSkill.title === skill.title
                    ? "font-bold cursor-default"
                    : ""
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
