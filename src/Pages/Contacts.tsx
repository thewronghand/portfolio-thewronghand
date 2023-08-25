import { Link } from "react-router-dom";

export default function Contacts() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-lg sm:text-xl md:text-2xl lg:3xl xl:text-4xl">
      <div className="w-6/10 h-1/5 flex justify-center items-center flex-col space-y-2">
        <a
          href="https://github.com/thewronghand"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:animate-pulse"
        >
          Github
        </a>
        <div className="flex items-center space-x-2">
          <span>TEL :</span>
          <a href="tel:010-6559-5224" className="hover:animate-pulse">
            010-6559-5224
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <span>E-mail :</span>
          <a href="mailto:penfreak77@gmail.com" className="hover:animate-pulse">
            penfreak77@gmail.com
          </a>
        </div>
      </div>
      <Link to="/" className="text-blue-500">
        return to main
      </Link>
    </div>
  );
}
