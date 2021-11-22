import "./App.scss";
import LandingPage from "./components/LandingPage.js";
import AboutMe from "./components/AboutMe";
import SkillsAndTools from "./components/SkillsAndTools";
import Projects from "./components/Projects.js";
import ContactMe from "./components/ContactMe.js";
import CooperateInfoBox from "./components/CooperateInfoBox";
import Nav from "./components/Nav";
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
