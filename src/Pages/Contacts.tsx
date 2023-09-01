import { Link } from "react-router-dom";
import { useDarkMode } from "../utils/hooks/useDarkMode";

export default function Contacts() {
  const darkMode = useDarkMode();

  return (
    <section
      className={`${
        darkMode ? "text-white bg-slate-500" : "text-gray-700"
      } transition-all duration-300 ease-in-out`}
    >
      <section className="w-screen h-screen flex flex-col justify-center items-center text-lg sm:text-xl md:text-2xl lg:3xl xl:text-4xl">
        <section className="w-6/10 h-1/5 flex justify-center items-center flex-col space-y-2">
          <a
            href="https://github.com/thewronghand"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:animate-pulse"
          >
            Github
          </a>
          <section className="flex items-center space-x-2">
            <span>TEL :</span>
            <a href="tel:010-6559-5224" className="hover:animate-pulse">
              010-6559-5224
            </a>
          </section>
          <section className="flex items-center space-x-2">
            <span>E-mail :</span>
            <a
              href="mailto:penfreak77@gmail.com"
              className="hover:animate-pulse"
            >
              penfreak77@gmail.com
            </a>
          </section>
        </section>
        <Link
          to="/"
          className={`${
            darkMode ? "text-blue-300" : "text-blue-500"
          } mt-10 inline-block`}
        >
          return to main
        </Link>
      </section>
    </section>
  );
}
