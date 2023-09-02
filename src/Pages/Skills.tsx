import React from "react";
import { Link } from "react-router-dom";
import DarkModeButton from "../Components/Header/DarkModeButton";
import { useDarkMode } from "../utils/hooks/useDarkMode";
import useFetchCollection from "../utils/hooks/useFetchCollection"; // hook을 import합니다.
import SkillBox from "./SkillBox"; // SkillBox 컴포넌트를 import합니다.

interface Skill {
  title: string;
  icon: string;
  description: string;
}

export default function Skills() {
  const darkMode = useDarkMode();
  const { data: skills, loading, error } = useFetchCollection<Skill>("skills");

  return (
    <div
      className={`${
        darkMode ? "text-white bg-slate-500" : "text-gray-700"
      } transition-all duration-300 ease-in-out`}
    >
      <section className="w-screen h-screen flex flex-col justify-center items-center">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {skills &&
          skills.map((skill, index) => <SkillBox key={index} item={skill} />)}
        <Link
          to="/"
          className={`${
            darkMode ? "text-blue-300" : "text-blue-500"
          } mt-10 inline-block`}
        >
          return to main
        </Link>
        <DarkModeButton />
      </section>
    </div>
  );
}
