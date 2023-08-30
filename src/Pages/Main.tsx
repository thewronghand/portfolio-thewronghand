import DarkModeButton from "../Components/Header/DarkModeButton";
import Nav from "../Components/Nav";
import { useDarkMode } from "../utils/hooks/useDarkMode";

export default function Main() {
  const darkMode = useDarkMode();

  return (
    <div className="w-screen h-screen flex flex-col sm:flex-row justify-center items-center">
      <div className="flex justify-center items-center w-full h-1/5 sm:w-2/5 text-xl sm:text-2xl md:text-3xl lg:4xl xl:text-4xl">
        프론트엔드 개발자 이의현
        <br />
        그른손thewronghand의 포트폴리오입니다.
        <div
          className={`${darkMode ? "text-white bg-gray-500" : "text-black"}`}
        >
          {darkMode ? "다크모드 켜짐" : "다크모드 꺼짐"}
        </div>
      </div>
      <div className="w-full h-1/5 sm:w-1/5 flex justify-center items-center ">
        <Nav />
      </div>
      <DarkModeButton />
    </div>
  );
}
