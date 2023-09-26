import BlogIntro from "../Components/Blog/BlogIntro";
import { useDarkMode } from "../utils/hooks/useDarkMode";

export default function Blog() {
  const darkMode = useDarkMode();
  return (
    <main
      className={`w-screen h-screen flex flex-col justify-center items-center transition-all duration-300 ease-in-out ${
        darkMode ? "text-white bg-slate-500" : "text-gray-700"
      }`}
    >
      <BlogIntro />
      <iframe
        src="https://www.naver.com"
        className="m-10 w-full h-3/5"
      ></iframe>
    </main>
  );
}
