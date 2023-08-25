import Nav from "../Components/Nav";

export default function Main() {
  return (
    <div className="w-screen h-screen flex flex-col sm:flex-row justify-center items-center">
      <div className="flex justify-center items-center w-full h-1/5 sm:w-2/5">
        this is main page
      </div>
      <div className="w-full h-1/5 sm:w-1/5 flex justify-center items-center">
        <Nav />
      </div>
    </div>
  );
}
