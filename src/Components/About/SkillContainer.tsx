import { useEffect, useState } from "react";
import SkillList from "./SkillList";
import SkillCard from "./SkillCard";
import { Skill, SkillSet } from "../../types";
import { AnimatePresence } from "framer-motion";
import useCacheSkillImages from "../../utils/hooks/useCacheSkillImages";

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

  useCacheSkillImages(data);

  return (
    <section className="flex flex-col items-center">
      <section className="text-5xl w-full mb-10 border-b-2 pb-5">
        Skills
      </section>
      <section className="w-full xl:w-1/2 flex flex-col md:flex-row">
        <section className="w-full md:w-1/2 flex justify-center relative">
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
        <section className="w-full flex justify-center mt-10 md:w-1/2">
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
