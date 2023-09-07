import { useState, useEffect, useRef } from "react";
import { Skill } from "../../types";

interface SkillBoxProps {
  item: Skill;
}

export default function SkillBox({ item }: SkillBoxProps) {
  const [expanded, setExpanded] = useState(false);
  const skillBoxRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      skillBoxRef.current &&
      !skillBoxRef.current.contains(event.target as Node)
    ) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    // 이벤트 리스너를 문서에 추가
    document.addEventListener("mousedown", handleClickOutside);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // 빈 의존성 배열을 사용하여 마운트/언마운트 시에만 실행

  return (
    <div
      ref={skillBoxRef}
      className={`${
        expanded ? "w-44 cursor-default" : "w-14 cursor-pointer"
      } shadow-lg rounded-md transition-all duration-300 ease-in-out aspect-square flex justify-center items-center p-1`}
      onClick={handleToggle}
    >
      <section className="flex flex-col items-center">
        <img
          src={item.icon}
          alt={item.title}
          className={`${expanded ? "w-14" : "w-full"} aspect-square`}
        />
        {expanded && (
          <section className="flex flex-col items-center">
            <div>{item.title}</div>
            <div>{item.description}</div>
          </section>
        )}
      </section>
    </div>
  );
}
