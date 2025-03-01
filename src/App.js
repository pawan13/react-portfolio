import "./App.css";
import "./style.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <input type="checkbox" id="darkmode" className="dark-mode-checkbox" />

      <div className="wrapper">
        {/* <!-- header  --> */}
        <Header />
        {/* <!-- hero component --> */}
        <Hero />
        {/* <!-- skills component --> */}
        <Skills />
        {/* <!-- projects Component--> */}
        <Projects />
        Coming soon ...
        {/* <!-- About Component  --> */}
        <About />
        {/* <!-- get in touch section  --> */}
        <Contact />
        {/* <!-- footer  --> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
