import "./index.css";
import { Route, Routes } from "react-router-dom";
import { useGrain } from "./utils/hooks/useGrain";
import { useDarkMode } from "./utils/hooks/useDarkMode";

import Main from "./Pages/Main";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contacts from "./Pages/Contacts";
import Skills from "./Pages/Skills";
import DarkModeWrapper from "./utils/DarkModeWrapper";
import Header from "./Components/Header/Header";

function App() {
  const darkMode = useDarkMode();
  const canvasRef = useGrain(darkMode);

  return (
    <DarkModeWrapper>
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-10 opacity-5 pointer-events-none"
      />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </DarkModeWrapper>
  );
}

export default App;
