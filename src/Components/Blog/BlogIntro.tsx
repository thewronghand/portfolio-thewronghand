import VitriolLogo from "./VitriolLogo";
import Anchor from "../../utils/Anchor";
import { motion } from "framer-motion";

export default function BlogIntro() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="mx-16"
    >
      <motion.section
        variants={itemVariants}
        className="text-6xl flex items-center"
      >
        <VitriolLogo />
        <span className="ml-1 cursor-default">Vitriol</span>
      </motion.section>
      <motion.p variants={itemVariants} className="mt-6">
        Vitriol은 <Anchor href="https://obsidian.md/">Obsidian</Anchor>의
        Digital Garden 플러그인을 기반으로 한 개인 블로그입니다. 그래프와 관련된
        UI 상호작용을 원활히 관리하기 위해 React로 구성하였습니다.
        <Anchor href="https://d3js.org/"> d3.js</Anchor> 라이브러리를 활용해
        문서 간의 링크 관계를 시각화하고,{" "}
        <Anchor href="https://github.com/remarkjs/react-markdown">
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
          더 많은 옵시디언 고유 문법
        </Anchor>
        을 추가할 예정입니다.
        <br />
        아래의 화면에서, 여러분은 제가 무엇을 공부했고 무엇을 알고 있는지, 어떤
        인사이트를 가지고 있는지 확인하실 수 있습니다.
      </motion.p>
    </motion.section>
  );
}

const containerVariants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.5,
    },
  },
};
