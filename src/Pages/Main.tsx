import Nav from "../Components/Nav";

export default function Main() {
  return (
    <div className="w-screen h-screen flex flex-col sm:flex-row justify-center items-center">
      <div className="flex justify-center items-center w-full h-1/5 sm:w-2/5 text-xl sm:text-2xl md:text-3xl lg:4xl xl:text-4xl">
        프론트엔드 개발자 이의현
        <br />
        그른손thewronghand의 포트폴리오입니다.
      </div>
      <div className="w-full h-1/5 sm:w-1/5 flex justify-center items-center">
        <Nav />
      </div>
    </div>
  );
}
