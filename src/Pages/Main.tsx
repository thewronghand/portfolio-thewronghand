import Logo from "../Components/Main/Logo";
import { useDarkMode } from "../utils/hooks/useDarkMode";

export default function Main() {
  const darkMode = useDarkMode();

  return (
    <div
      className={`${
        darkMode ? "text-white bg-slate-500" : "text-gray-700"
      } w-screen h-screen flex flex-col justify-center items-center transition-all duration-300 ease-in-out`}
    >
      <Logo
        width="125"
        height="175"
        strokeWidth="270"
        animated={true}
        vertical={true}
      />
    </div>
  );
}
