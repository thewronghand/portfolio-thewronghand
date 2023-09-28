import Logo from "../Components/Main/Logo";
import { COLORS } from "../utils/constant";
import { useDarkMode } from "../utils/hooks/useDarkMode";

export default function Main() {
  const darkMode = useDarkMode();

  return (
    <div
      className={`${
        darkMode
          ? `${COLORS.DARK_MODE_BG} ${COLORS.DARK_MODE_TEXT}`
          : `${COLORS.LIGHT_MODE_BG} ${COLORS.LIGHT_MODE_TEXT}`
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
