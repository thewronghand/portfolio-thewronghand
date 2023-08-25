import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="flex justify-center items-center flex-col space-y-4 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
      <div className="flex items-center">
        <div className="mr-2 text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg">
          01
        </div>
        <Link
          to="/about"
          className="w-24 text-lg sm:text-xl md:text-2xl lg:3xl xl:text-4xl"
        >
          About
        </Link>
      </div>
      <div className="flex items-center">
        <div className="mr-2 text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg">
          02
        </div>
        <Link
          to="/projects"
          className="w-24 text-lg sm:text-xl md:text-2xl lg:3xl xl:text-4xl"
        >
          Projects
        </Link>
      </div>
      <div className="flex items-center">
        <div className="mr-2 text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg">
          03
        </div>
        <Link
          to="/contacts"
          className="w-24 text-lg sm:text-xl md:text-2xl lg:3xl xl:text-4xl"
        >
          Contacts
        </Link>
      </div>
    </div>
  );
}
