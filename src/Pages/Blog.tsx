import { motion } from "framer-motion";
import BlogIntro from "../Components/Blog/BlogIntro";
import { useDarkMode } from "../utils/hooks/useDarkMode";
import { useEffect } from "react";
import { COLORS } from "../utils/constant";

export default function Blog() {
  const darkMode = useDarkMode();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main
      className={`min-h-screen pt-20 flex flex-col justify-center items-center transition-all duration-300 ease-in-out ${
        darkMode
          ? `${COLORS.DARK_MODE_BG} ${COLORS.DARK_MODE_TEXT}`
          : `${COLORS.LIGHT_MODE_BG} ${COLORS.LIGHT_MODE_TEXT}`
      }`}
    >
      <BlogIntro />
      <motion.div
        className={`flex justify-center m-10 w-full h-[1000px] md:h-[650px] ${
          darkMode ? "bg-gray-500" : "bg-gray-100"
        }`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <iframe
          src="https://www.naver.com"
          className="w-full max-w-[1000px] h-full"
        ></iframe>
      </motion.div>
    </main>
  );
}
