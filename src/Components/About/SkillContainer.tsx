import { useEffect, useState } from "react";
import SkillList from "./SkillList";
import SkillCard from "./SkillCard";
import { Skill, SkillSet } from "../../types";

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
    <section>
      <section>Skills</section>
      {selectedSkill && (
        <SkillCard key={selectedSkill.title} skill={selectedSkill} />
      )}

      <SkillList
        data={data}
        onItemClick={(skill: Skill) => setSelectedSkill(skill)}
        selectedSkill={selectedSkill}
      />
    </section>
  );
}
