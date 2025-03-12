import NavBar from "./components/FirstSection/NavBar";
import Main from "./components/FirstSection/Main";
import About from "./components/SecondSection/About";
import Skills from "./components/SecondSection/Skills";
import Projects from "./components/SecondSection/Projects";
import ContactMe from "./components/ThirdSection/ContactMe";

function App() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <hr />
      <div id="main"><Main /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <hr />
      <div id="projects"><Projects /></div>
      <hr />
      <div id="contact"><ContactMe /></div>
    </div>
  );
}

export default App;
