import { useRef } from "react";
import "./App.scss";
import LandingPage from "./components/LandingPage.js";
import AboutMe from "./components/AboutMe";
import SkillsAndTools from "./components/SkillsAndTools";
import Projects from "./components/Projects.js";
import ContactMe from "./components/ContactMe.js";
import CooperateInfoBox from "./components/CooperateInfoBox";
import Nav from "./components/Nav";
import useElementOnScreen from "./Hooks/useElementOnScreen";
function App() {
  const targetRef = useRef(null);
  const isIntersecting = useElementOnScreen(
    {
      root: null,
      rootMargin: "-70px",
      threshold: 0,
    },
    targetRef
  );

  return (
    <div className="App">
      <Nav isVisible={isIntersecting} />
      <LandingPage />
      <AboutMe ref={targetRef} />
      <SkillsAndTools />
      <Projects />
      <CooperateInfoBox />
      <ContactMe />
    </div>
  );
}

export default App;
