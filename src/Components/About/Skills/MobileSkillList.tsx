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
    <section className=" sm:hidden 2xl:block 5xl:hidden">
      <ul>
        {data.map((skillSet: SkillSet) => (
          <li
            onClick={() => {
              handleCategoryClick(skillSet);
            }}
            className={`${
              selectedCategory &&
              selectedCategory.title === skillSet.title &&
              "text-white bg-blue-300 cursor-default"
            }`}
          >
            {skillSet.title}
          </li>
        ))}
      </ul>
      <ul className="flex">
        {selectedCategory?.data.map((skill: Skill) => (
          <li
            onClick={() => {
              onItemClick(skill);
            }}
            className={`${
              selectedSkill &&
              selectedSkill.title === skill.title &&
              "text-white bg-blue-300 cursor-default"
            }`}
          >
            {skill.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
