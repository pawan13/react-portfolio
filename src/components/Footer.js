import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
     {/* <!-- scroll to top button --> */}
     <div className="to-top flex">
    <div>
     <a href="#home"> 
         <i className="fa-solid fa-arrow-up fa-bounce"></i>
     </a>
    </div>
    </div>
    <footer>
     <div className="footer-container flex">
         <div className="links flex">
             <h3>Links</h3>
             <ul>
                 <li>
                    
                     < Link to="/">Home</Link>
                 </li>
                 <li>
                     <Link to="/skills">Skills</Link>
                 </li>
                 <li>
                     <Link to="/projects">Projects</Link>
                 </li>
                 <li>
                     <Link to="/about">About</Link>
                 </li>
                 <li>
                     <Link to="/contact">Contact</Link>
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
    </>
  )
}

export default Footer
