import { useEffect, useState } from "react";
import SkillList from "./SkillList";
import SkillCard from "./SkillCard";
import { Skill, SkillSet } from "../../../types";
import { AnimatePresence } from "framer-motion";
import MobileSkillList from "./MobileSkillList";
import { skillContainerStyle as style } from "./skillComponents.css";

interface SkillContainerProps {
  data: SkillSet[];
}

export default function SkillContainer({ data }: SkillContainerProps) {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  useEffect(() => {
    if (data.length > 0 && data[0].data.length > 0) {
      setSelectedSkill(data[0].data[0]);
    }
  }, [data]);

  return (
    <section className={style.container}>
      <section className={style.title}>Skills</section>
      <section className={style.cardAndListSection}>
        <MobileSkillList
          data={data}
          onItemClick={(skill: Skill) => setSelectedSkill(skill)}
          selectedSkill={selectedSkill}
        />
        <section className={style.cardSection}>
          <AnimatePresence>
            {selectedSkill && (
              <SkillCard
                key={selectedSkill.title}
                skill={selectedSkill}
                isSelected={true}
              />
            )}
          </AnimatePresence>
        </section>
        <section className={style.desktopSkillListSection}>
          <SkillList
            data={data}
            onItemClick={(skill: Skill) => setSelectedSkill(skill)}
            selectedSkill={selectedSkill}
          />
        </section>
      </section>
    </section>
  );
}
