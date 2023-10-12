import { motion } from "framer-motion";
import BlogIntro from "../Components/Blog/BlogIntro";
import { useDarkMode } from "../utils/hooks/useDarkMode";
import { useEffect } from "react";
import { useColorScheme } from "../utils/hooks/useColorScheme";

export default function Blog() {
  const darkMode = useDarkMode();
  const colorScheme = useColorScheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main
      style={{
        color: darkMode ? colorScheme.DARK.TEXT : colorScheme.LIGHT.TEXT,
        background: darkMode ? colorScheme.DARK.BG : colorScheme.LIGHT.BG,
      }}
      className={`min-h-screen pt-20 flex flex-col justify-center items-center transition-all duration-300 ease-in-out`}
    >
      <BlogIntro />
      <motion.div
        style={{ background: colorScheme.LIGHT.BG }}
        className={`flex justify-center m-10 w-full h-[1000px] md:h-[650px]`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <iframe
          src="https://vitriol-345e3.web.app/"
          className="w-full max-w-[1000px] h-full"
        ></iframe>
      </motion.div>
    </main>
  );
}
