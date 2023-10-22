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
      <ul className={style.skillItemList}>
        {selectedCategory?.data.map((skill: Skill) => (
          <li
            key={skill.title}
            onClick={() => {
              onItemClick(skill);
            }}
            style={{ background: skill.bgColorCode }}
            className={`${style.skillItem} ${
              selectedSkill &&
              selectedSkill.title === skill.title &&
              style.skillItemSelected
            }
            `}
          >
            {skill.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
