import VitriolLogo from "../Components/Blog/VitriolLogo";

interface AnchorProp {
  children: string;
  href: string;
}

const Anchor = ({ children, href }: AnchorProp) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className=" text-purple-400 hover:text-purple-500"
    >
      {children}
    </a>
  );
};

export default function Blog() {
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center">
      <section className="mx-16">
        <section className="text-6xl flex items-center">
          <VitriolLogo />
          <span className="ml-1 cursor-default">Vitriol</span>
        </section>
        <p className="mt-6">
          Vitriol은 <Anchor href="https://obsidian.md/">Obsidian</Anchor>의
          Digital Garden 플러그인을 기반으로 한 개인 블로그입니다. 그래프와
          관련된 UI 상호작용을 원활히 관리하기 위해 React로 구성하였습니다.
          <Anchor href="https://d3js.org/"> d3.js</Anchor> 라이브러리를 활용해
          문서 간의 링크 관계를 시각화하고,
          <Anchor href="https://github.com/remarkjs/react-markdown">
            {" "}
            react-markdown
          </Anchor>{" "}
          라이브러리로 마크다운 문법을 파싱합니다.
          <br />
          빌드 시 Node.js의 파일 검색 기능을 활용하여 전체 디렉토리를 자동으로
          탐색하고, 각 문서 간의 링크 관계를 추출하여 그래프 정보로 변환됩니다.
          옵시디언의 고유 문법인{" "}
          <Anchor href="https://help.obsidian.md/Linking+notes+and+files/Internal+links">
            문서 링크
          </Anchor>
          는 Vitriol에서 react-router-dom의 Link 컴포넌트로 변환하도록
          구현했습니다. 이외에도{" "}
          <Anchor href="https://help.obsidian.md/Editing+and+formatting/Obsidian+Flavored+Markdown">
            {" "}
            더 많은 옵시디언 고유 문법
          </Anchor>
          을 추가할 예정입니다.
        </p>
      </section>
      <iframe
        src="https://www.naver.com"
        className="m-10 w-full h-3/5"
      ></iframe>
    </main>
  );
}
