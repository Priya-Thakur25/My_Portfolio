import NavBar from "./components/FirstSection/NavBar";
import Main from "./components/FirstSection/Main";
import About from "./components/SecondSection/About";
import Skills from "./components/SecondSection/Skills";
import Projects from "./components/SecondSection/Projects";
import ContactMe from "./components/ThirdSection/ContactMe";
import HireMe from "./components/HireMe";

function App(){
  return <div className="overflow-x-hidden">
    {/* <NavBar/>
    <hr></hr>
    <Main/> 
    <About/>
    <Skills/>
    <hr></hr>
    <Projects/>
    <hr></hr>
    <ContactMe/> */}
    <HireMe/>
  </div>
}

export default App;