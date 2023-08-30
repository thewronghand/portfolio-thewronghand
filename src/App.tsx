import "./index.css";
import { Route, Routes } from "react-router-dom";
import { useGrain } from "./utils/hooks/useGrain";
import { useDarkModeWithStorage } from "./utils/hooks/useDarkModeWithStorage";

import Main from "./Pages/Main";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contacts from "./Pages/Contacts";
import Skills from "./Pages/Skills";
function App() {
  const canvasRef = useGrain();
  useDarkModeWithStorage();

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-10 opacity-5 pointer-events-none"
      />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
