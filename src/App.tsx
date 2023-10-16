import "./index.css";
import { Route, Routes } from "react-router-dom";

import Main from "./Pages/Main";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Header from "./Components/Header/Header";
import { AnimatePresence } from "framer-motion";
import Nav from "./Components/Header/Nav";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import ProjectDetails from "./Pages/ProjectDetails";
import Blog from "./Pages/Blog";
import AppSettingsWrapper from "./utils/AppSettingsWrapper";
import DarkModeGrainCanvas from "./Components/Global/DarkModeGrainCanvas";

function App() {
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <div className="w-full h-full">
      <AppSettingsWrapper>
        <DarkModeGrainCanvas />

        <AnimatePresence>{isOpen && <Nav key="nav" />}</AnimatePresence>

        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </AppSettingsWrapper>
    </div>
  );
}

export default App;
