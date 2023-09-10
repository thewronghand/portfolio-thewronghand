import { Skill, SkillSet } from "../../types";

interface SkillListProps {
  data: SkillSet[];
  onItemClick: (skill: Skill) => void;
}

export default function SkillList({ data, onItemClick }: SkillListProps) {
  return (
    <ul>
      {data.map((skillSet: SkillSet) => (
        <li>
          <section>{skillSet.title}</section>
          <ul>
            {skillSet.data.map((skill: Skill) => (
              <li onClick={() => onItemClick(skill)}>{skill.title}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
