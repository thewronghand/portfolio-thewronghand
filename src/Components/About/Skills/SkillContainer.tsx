import { useEffect, useState } from "react";
import SkillList from "./SkillList";
import SkillCard from "./SkillCard";
import { Skill, SkillSet } from "../../../types";
import { AnimatePresence } from "framer-motion";
import MobileSkillList from "./MobileSkillList";

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
    <section className="flex flex-col items-center">
      <section className="text-5xl w-full mb-10 border-b-2 border-b-current pb-5 cursor-default">
        Skills
      </section>
      <section className="w-full flex flex-col sm:flex-row 2xl:flex-col 5xl:flex-row">
        <MobileSkillList
          data={data}
          onItemClick={(skill: Skill) => setSelectedSkill(skill)}
          selectedSkill={selectedSkill}
        />
        <section className="w-full min-w-[325px] flex justify-center">
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
        <section className="w-full flex justify-center mt-10">
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
