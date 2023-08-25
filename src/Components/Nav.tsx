import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="flex justify-center items-center flex-col">
      <Link to="/about">about</Link>
      <Link to="/projects">projects</Link>
      <Link to="/contacts">contacts</Link>
    </div>
  );
}
