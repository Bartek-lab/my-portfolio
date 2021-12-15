import "./App.scss";
import LandingPage from "./components/LandingPage/LandingPage";
import AboutMe from "./components//AboutMe/AboutMe";
import SkillsAndTools from "./components/SkillsAndTools/SkillsAndTools";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe.js";
import CooperateInfoBox from "./components/CooperateInfoBox/CooperateInfoBox";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <LandingPage />
      <AboutMe />
      <SkillsAndTools />
      <Projects />
      <CooperateInfoBox />
      <ContactMe />
    </div>
  );
}

export default App;
