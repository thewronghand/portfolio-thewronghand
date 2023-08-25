import { Link } from "react-router-dom";

export default function Contacts() {
  return (
    <>
      <div className="w-100% flex justify-center items-center flex-col">
        <div>Github</div>
        <div>TEL : 010-6559-5224</div>
        <div>E-mail : penfreak77@gmail.com</div>
      </div>
      <Link to="/">return to main</Link>
    </>
  );
}
