import "./index.css";
import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import About from "./Pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
