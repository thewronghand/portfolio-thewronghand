import { Skill, SkillSet, SkillListProps } from "../../../types";

export default function SkillList({
  data,
  onItemClick,
  selectedSkill,
}: SkillListProps) {
  return (
    <ul className=" hidden sm:block 2xl:hidden 5xl:block md:mt-0 w-[320px] rounded-xl p-3 shadow-2xl 5xl:w-full">
      {data.map((skillSet: SkillSet) => (
        <li key={skillSet.title}>
          <section className="cursor-default m-2 text-lg">
            {skillSet.title}
          </section>
          <ul className="flex flex-col">
            {skillSet.data.map((skill: Skill) => (
              <li
                key={skill.title}
                onClick={() => onItemClick(skill)}
                className={`mx-1 cursor-pointer p-[1px] text-gray-700 bg-slate-100 px-2 rounded-md py-[1px] my-[2px] hover:bg-blue-100  ${
                  selectedSkill && selectedSkill.title === skill.title
                    ? `text-white bg-blue-300 cursor-default hover:bg-blue-300 hover:cursor-default`
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