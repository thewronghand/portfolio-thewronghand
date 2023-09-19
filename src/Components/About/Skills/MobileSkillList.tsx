import { useEffect, useState } from "react";
import { Skill, SkillListProps, SkillSet } from "../../../types";

export default function MobileSkillList({
  data,
  onItemClick,
  selectedSkill,
}: SkillListProps) {
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
    <section className="flex flex-row sm:hidden 2xl:inline-flex 5xl:hidden">
      <ul className="w-1/2">
        {data.map((skillSet: SkillSet) => (
          <li
            key={skillSet.title}
            onClick={() => {
              handleCategoryClick(skillSet);
            }}
            className={`${
              selectedCategory &&
              selectedCategory.title === skillSet.title &&
              "text-white bg-blue-300 cursor-default  hover:bg-blue-300 hover:cursor-default"
            } 
            cursor-pointer p-[1px] m-[1px]
            `}
          >
            {skillSet.title}
          </li>
        ))}
      </ul>
      <ul className="w-1/2">
        {selectedCategory?.data.map((skill: Skill) => (
          <li
            key={skill.title}
            onClick={() => {
              onItemClick(skill);
            }}
            className={`${
              selectedSkill &&
              selectedSkill.title === skill.title &&
              "text-white bg-blue-300 cursor-default  hover:bg-blue-300 hover:cursor-default"
            } cursor-pointer p-[1px] m-[1px]`}
          >
            {skill.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
