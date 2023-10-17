import { useEffect, useState } from "react";
import { Skill, SkillListProps, SkillSet } from "../../../types";
import { mobileSkillListStyle as style } from "./skillComponents.css";

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
    <section className={style.container}>
      <ul className={style.skillSetList}>
        {data.map((skillSet: SkillSet) => (
          <li
            key={skillSet.title}
            onClick={() => {
              handleCategoryClick(skillSet);
            }}
            className={`${
              selectedCategory &&
              selectedCategory.title === skillSet.title &&
              style.skillSetItemSelected
            }  ${style.skillSetItem}`}
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
