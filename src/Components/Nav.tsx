import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="flex justify-center flex-col space-y-4 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
      <div className="flex items-center">
        <div className="mr-2 text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg">
          01
        </div>
        <Link
          to="/about"
          className=" text-lg sm:text-xl md:text-2xl lg:3xl xl:text-4xl relative group pb-1"
        >
          About
          <div className="absolute bottom-0 left-0 h-[2px] bg-current w-0 group-hover:w-full transition-all duration-300"></div>
        </Link>
      </div>

      <div className="flex items-center">
        <div className="mr-2 text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg">
          02
        </div>
        <Link
          to="/projects"
          className="text-lg sm:text-xl md:text-2xl lg:3xl xl:text-4xl relative group pb-1"
        >
          Projects
          <div className="absolute bottom-0 left-0 h-[2px] bg-current w-0 group-hover:w-full transition-all duration-300"></div>
        </Link>
      </div>

      <div className="flex items-center">
        <div className="mr-2 text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg">
          03
        </div>
        <Link
          to="/contacts"
          className="text-lg sm:text-xl md:text-2xl lg:3xl xl:text-4xl relative group pb-1"
        >
          Contacts
          <div className="absolute bottom-0 left-0 h-[2px] bg-current w-0 group-hover:w-full transition-all duration-300"></div>
        </Link>
      </div>
    </div>
  );
}
