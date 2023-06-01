import './App.css';
import './style.css'
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <input type="checkbox" id="darkmode" className="dark-mode-checkbox"/>
    
    <div className="wrapper">
    <Routes>
      <Route path="/" element={<Hero/>} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
 </div>
    </div>
  );
}

export default App;

//1. npm i react-router-dom
//2. wrap entire app with BrowserRouter in index.js or App.js
//3. use Routes components to warp all pages
//4. Define individual page by using Route comp.
