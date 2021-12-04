import { useRef } from "react";
import "./App.scss";
import LandingPage from "./components/LandingPage/LandingPage";
import AboutMe from "./components//AboutMe/AboutMe";
import SkillsAndTools from "./components/SkillsAndTools/SkillsAndTools";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe.js";
import CooperateInfoBox from "./components/CooperateInfoBox/CooperateInfoBox";
import Nav from "./components/Nav/Nav";
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
