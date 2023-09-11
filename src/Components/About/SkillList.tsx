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
    <ul className="w-[320px] md:w-full rounded-md p-3 shadow-2xl">
      {data.map((skillSet: SkillSet) => (
        <li key={skillSet.title}>
          <section className="cursor-default m-2 text-lg">
            {skillSet.title}
          </section>
          <ul className="flex flex-row md:flex-col flex-wrap">
            {skillSet.data.map((skill: Skill) => (
              <li
                key={skill.title}
                onClick={() => onItemClick(skill)}
                className={`mx-1 cursor-pointer p-[1px] text-gray-700 bg-slate-100 px-2 rounded-md md:py-[1px] md:my-[2px] hover:bg-blue-100  ${
                  selectedSkill && selectedSkill.title === skill.title
                    ? `text-white bg-blue-400 cursor-default hover:text-white hover:bg-blue-400 hover:cursor-default`
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
