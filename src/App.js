import "./App.css";
import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

function App() {
  return (
    <div className="App overflow-x-hidden ">
      <div className=" min-h-[100vh]  ">
        <Navbar />
        <About />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

export default App;
