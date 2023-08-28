import "./index.css";
import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contacts from "./Pages/Contacts";
import { useGrain } from "./utils/hooks/useGrain";

function App() {
  const canvasRef = useGrain();
  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-10 opacity-5 pointer-events-none"
      />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
