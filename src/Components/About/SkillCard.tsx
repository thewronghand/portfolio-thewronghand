import { Skill } from "../../types";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <li className=" text-gray-700 bg-white flex flex-col max-w-[320px] min-w-[320px] h-[512px] rounded-xl overflow-hidden shadow-xl">
      <section style={{ background: `${skill.bgColorCode}` }}>
        <img src={skill.imgUrl} alt={skill.title} className="w-full" />
      </section>
      <section className="p-2 mt-2 h-1/3">
        <section className="pl-2 font-bold">{skill.title}</section>
        <ul className=" list-disc p-3 pl-10 h-32 overflow-y-scroll">
          {skill.description.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </section>
    </li>
  );
}
