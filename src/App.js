import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./container/home";
import About from "./container/about";
import Resume from "./container/resume";
import Contact from "./container/contact";
import Portfolio from "./container/portfolio";
import Skills from "./container/skills";
import NavBar from "./components/navBar";
import partArray from "./helper/utils.js/particles";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function App() {
  const location = useLocation();

  const renderParticlesInHomePages = location.pathname === "/";
  const handleInit = async (main) => {
    await loadFull(main);
    console.log(main);
  };
  return (
    <div className="App">
      {/* {particles} */}
      {renderParticlesInHomePages && (
        <Particles id="particles" options={partArray} init={handleInit} />
      )}

      {/* {NavBar} */}
      <NavBar />

      {/* {main-page-content} */}
      <div className="App-main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
