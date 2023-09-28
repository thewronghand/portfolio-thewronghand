import { useEffect, useState } from "react";
import { Skill, SkillListProps, SkillSet } from "../../../types";
import { useDarkMode } from "../../../utils/hooks/useDarkMode";

export default function MobileSkillList({
  data,
  onItemClick,
  selectedSkill,
}: SkillListProps) {
  const darkMode = useDarkMode();
  const [selectedCategory, setSelectedCategory] = useState<SkillSet | null>(
    null
  );

  useEffect(() => {
    if (data.length > 0 && data[0].data.length > 0) {
      setSelectedCategory(data[0]);
    }
  }, [data]);

  const handleCategoryClick = (skillSet: SkillSet) => {
    setSelectedCategory(skillSet);
  };

  return (
    <section className="flex mx-4 flex-row sm:hidden 2xl:inline-flex 5xl:hidden rounded-xl shadow-md p-2">
      <ul className="w-1/2 mr-2">
        {data.map((skillSet: SkillSet) => (
          <li
            key={skillSet.title}
            onClick={() => {
              handleCategoryClick(skillSet);
            }}
            className={`${
              selectedCategory &&
              selectedCategory.title === skillSet.title &&
              "text-white hover:border-blue-400 border-blue-400 bg-blue-400 cursor-default  hover:bg-blue-400 hover:cursor-default"
            } 
            hover:border-blue-300 hover:bg-blue-300
            cursor-pointer p-[2px] m-[1px]
            px-2 rounded-lg border-[1px] ${
              darkMode ? "border-gray-500" : "border-gray-50"
            }
            transition-all duration-300 ease-in-out
            `}
          >
            {skillSet.title}
          </li>
        ))}
      </ul>
      <ul className="w-1/2 flex flex-wrap items-start content-start">
        {selectedCategory?.data.map((skill: Skill) => (
          <li
            key={skill.title}
            onClick={() => {
              onItemClick(skill);
            }}
            style={{ background: skill.bgColorCode }}
            className={`${
              selectedSkill &&
              selectedSkill.title === skill.title &&
              "cursor-default hover:cursor-default filter brightness-[115%] saturate-[150%]"
            } cursor-pointer p-1 px-3 m-[1px] mb-1 mr-1 shadow-md rounded-2xl h-8 text-white hover:filter hover:brightness-[110%]
            transition-all duration-300 ease-in-out
            `}
          >
            {skill.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
