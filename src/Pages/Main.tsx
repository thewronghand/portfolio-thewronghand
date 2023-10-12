import Logo from "../Components/Main/Logo";
import { COLORS } from "../utils/constant";
import { useColorScheme } from "../utils/hooks/useColorScheme";
import { useDarkMode } from "../utils/hooks/useDarkMode";
import { motion } from "framer-motion";

export default function Main() {
  const darkMode = useDarkMode();
  const colorScheme = useColorScheme();
  return (
    <div
      style={{
        color: darkMode ? colorScheme.DARK.TEXT : colorScheme.LIGHT.TEXT,
        background: darkMode ? colorScheme.DARK.BG : colorScheme.LIGHT.BG,
      }}
      className={`w-screen h-screen flex flex-col justify-center items-center transition-all duration-300 ease-in-out`}
    >
      <Logo
        width="125"
        height="175"
        strokeWidth="270"
        animated={true}
        vertical={true}
      />
      <motion.p
        className="w-3/5 text-center"
        initial="hidden"
        animate="visible"
        variants={introTextVariants}
      >
        프론트엔드 개발자 이의현
        <br />
        그른손<span className="font-young-serif text-xs">thewronghand</span>의
        포트폴리오 사이트입니다.
      </motion.p>
    </div>
  );
}

const introTextVariants = {
  hidden: {
    y: 3,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 2,
    },
  },
};
