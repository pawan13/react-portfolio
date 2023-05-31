import './App.css';
import './style.css'
import ec from './assests/img/ec.avif'
import Pawan from './assests/img/Pawan_Edited.jpg'
import cv from './assests/doc/Resume-Pawan-Kumar-Siwakoti.pdf'

function App() {
  return (
    <div className="App">
        <input type="checkbox" id="darkmode" className="dark-mode-checkbox"/>
    
    <div className="wrapper">
    <label for="darkmode">
     <i className="fa-solid fa-circle-half-stroke dark-mode-toggler">
     </i>
 </label>
    {/* <!-- header  --> */}
     <header className="primary-header flex">
         <div className="logo flex">
             <div>
                 <h1>Pawan</h1>
             </div>
             <div>
                 <h1 className="line">Web Developer</h1>
             </div>
         </div>
         <div className="right">
             <input type="checkbox" id="check"/>
             <label className="menu-icon" for="check"><i className="fa-solid fa-bars "></i></label>
             <ul className="navigation flex">
                 <li><a href="#home">Home</a></li>
                 <li><a href="#skills">Skills</a></li>
                 <li><a href="#projects">Projects</a></li>
                 <li><a href="#about">About</a></li>
                 <li><a href="#contact">Contact</a></li>
             </ul>
         </div>
     </header>
    {/* <!-- hero section  --> */}
    <section className="section1 " id="home">
     <div className="hero grid">
     <div className="left flex">
         <img src={Pawan} alt="profile-pic"/>
     </div>
     <div className="right flex">
         <div className="flex">
             <div className="name">Pawan </div>
         <div className="tag">Web Developer</div>
         </div>
       <button>
         <a href={cv} download>Download CV<i className="fa-solid fa-download"></i></a>
       </button>
     </div>
 </div>
 </section>
 
    {/* <!-- banner  --> */}
 
    <section className="section2" >
     <div className="info-container flex">
         <div className="info-lists flex">
             <div className="info-content flex">
                 <div className="icon-container flex">
                     <i className="fa-solid fa-award"></i>
                 </div>
                 <span>
                     <h5>IT</h5>
                     <p>Graduate</p>
                 </span>
             </div>
             <div className="info-divider"></div>
                 <div className="info-content flex">
                     <div className="icon-container flex">
                         <i className="fa-solid fa-award"></i>
                     </div>
                     <span>
                         <h5>5 + Projects</h5>
                         <p>Completed</p>
                     </span>
                 </div>
             
 
             <div className="info-divider"></div>
                 <div className="info-content flex">
                     <div className="icon-container flex">
                         <i className="fa-solid fa-award"></i>
                     </div>
                     <span>
                         <h5>1 + year</h5>
                         <p>Job experience</p>
                     </span>
                 </div>
             
         </div>
     </div>
    </section>
 
    {/* <!-- skills section --> */}
  <section className="section3" id="skills">
     <div className="skills-container flex">
         <div className="flex">
             <i className="fa-brands fa-html5"></i>
             <span>HTML</span>
         </div>
         <div className="flex">
             <i className="fa-brands fa-css3-alt"></i>
             <span>CSS</span>
         </div>
         <div className="flex">
             <i className="fa-brands fa-square-js"></i>
             <span>JavaScript</span>
         </div>
         <div className="flex">
             <i className="fa-brands fa-react"></i>
             <span>React</span>
         </div>
         <div className="flex">
             <i className="fa-regular fa-folder-open"></i>
             <span>Firebase</span>
         </div>
     </div>
  </section>
 
    {/* <!-- projects --> */}
    <section className="section4 flex" id="projects">
     <h2 className="title">My Recent Work</h2>
     <div className="projects-container grid">
         <div className="project-card flex">
             <div className="top">
                 <img src={ec} alt=""/>
             </div>
             <div className="bottom">
                 <p>Full stack web App build react and Firebase</p>
                 <p>4/21/2023</p>
             </div>
         </div>
         <div className="project-card flex">
             <div className="top">
                 <img src={ec} alt=""/>
             </div>
             <div className="bottom">
                 <p>Full stack web App build react and Firebase</p>
                 <p>4/21/2023</p>
             </div>
         </div>
         <div className="project-card flex">
             <div className="top">
                 <img src={ec} alt=""/>
             </div>
             <div className="bottom">
                 <p>Full stack web App build react and Firebase</p>
                 <p>4/21/2023</p>
             </div>
         </div>
         <div className="project-card flex">
             <div className="top">
                 <img src={ec} alt=""/>
             </div>
             <div className="bottom">
                 <p>Full stack web App build react and Firebase</p>
                 <p>4/21/2023</p>
             </div>
         </div>
     </div>
    </section>
 
    {/* <!-- About section  --> */}
    <section className="section5 flex" id="about">
     <h2 className="title">About me</h2>
     <div className="about-container flex">
         <div className="left">
             <img src={Pawan} alt="image"/>
         </div>
         <div className="right flex">
             <h2>Pawan Siwakoti</h2>
              <p>Few years already in IT industry as a web developer. I completed Bachelor of Information Technology from Deakin University, with a specialization on web and application development. I have developed few web applications as a part of my internship and voluntary work. I am a mern full stack developer.
              I am currently practicing more in coding Full-stack(MERN) web-development bootcamp.</p>
              <p>Canberra ACT Australia</p>
              <div className="flex">
                 <div className="tag">Interests</div>
                  <div className="flex">
                     <span>Coding</span>
                     <span>Dancing</span>
                     <span>Cooking</span>
                  </div>
              </div>
         </div>
     </div>
    </section>
 
    {/* <!-- get in touch section  --> */}
    <section className="section6 flex" id="contact">
     <h2 className="ttile">Get in Touch</h2>
 
     <div className="socials flex">
         <a href="https://www.linkedin.com/in/pawansiwakoti">
             <i className="fa-brands fa-linkedin"></i>
         </a>
         <a href="https://github.com/pawan13">
             <i className="fa-brands fa-square-github"></i>
         </a>
         <a href="https://twitter.com/Pawankshiwakoti">
             <i className="fa-brands fa-square-twitter"></i>
         </a>
         <a href="https://www.youtube.com/@pawanshiwakoti5164">
             <i className="fa-brands fa-youtube"></i>
         </a>   
     </div>
     <h3 className="title">OR</h3>
 
     <div className="email-section flex">
         <div className="email flex">
             <a href="mailto:pawanshiwakoti13@gmail.com">example@gmail.com</a>
             <div className="send">
                 <i className="fa-solid fa-paper-plane"></i>
             </div>
         </div>
     </div>
      
    </section>
 
    {/* <!-- scroll to top button --> */}
    <div className="to-top flex">
    <div>
     <a href="#home"> 
         <i className="fa-solid fa-arrow-up fa-bounce"></i>
     </a>
    </div>
    </div>
 
    {/* <!-- footer  --> */}
    <footer>
     <div className="footer-container flex">
         <div className="links flex">
             <h3>Links</h3>
             <ul>
                 <li>
                     <a href="#home">Home</a>
                 </li>
                 <li>
                     <a href="#skills">Skills</a>
                 </li>
                 <li>
                     <a href="#projects">Projects</a>
                 </li>
                 <li>
                     <a href="#about">About</a>
                 </li>
                 <li>
                     <a href="#contact">Contact</a>
                 </li>
             </ul>
 
         </div>
         <div className="socials flex">
             <h3>Socials</h3>
             <ul className=" flex ">
                 <li>Linkedin</li>
                 <li>Github</li>
                 <li>Youtube</li>
             </ul>
         </div>
     </div>
     <div className="footer-bottom">
        &copy; All right reserved.
     </div>
    </footer>

    <div className="scroll-to-top">
      <a href='#' className="scroll-btn">
        <i className='fa-solid fa-chevron-up'></i>
      </a>
    </div>
 
 </div>
    </div>
  );
}

export default App;
