import React, { useState, useEffect, useRef } from "react";

export default function SkillBox() {
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
      style={{
        width: expanded ? 150 : 50,
        height: expanded ? 150 : 50,
      }}
      className="bg-blue-500 rounded-md transition-all duration-300 ease-in-out"
      onClick={handleToggle}
    >
      {expanded ? (
        <p className="text-white">여기에 텍스트를 적어주세요</p>
      ) : (
        <div>접힌 상태</div>
      )}
    </div>
  );
}
