import Background from "../Components/Global/Background";
import Logo from "../Components/Main/Logo";
import { motion } from "framer-motion";
import { mainStyle } from "./pages.css";

export default function Main() {
  return (
    <Background>
      <div className={mainStyle.container}>
        <Logo
          width="125"
          height="175"
          strokeWidth="270"
          animated={true}
          vertical={true}
        />
        <motion.p
          className={mainStyle.intro}
          initial="hidden"
          animate="visible"
          variants={introTextVariants}
        >
          프론트엔드 개발자 이의현
          <br />
          그른손<span className={mainStyle.usernameSpan}>thewronghand</span>의
          포트폴리오 사이트입니다.
        </motion.p>
      </div>
    </Background>
  );
}

const introTextVariants = {
  hidden: {
    y: 3,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 2,
    },
  },
};
