import React from 'react'

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
                 <li><a href="https://www.linkedin.com/in/pawansiwakoti" target='_blank'
         rel='noreferrer noopener'>Linkedin</a></li>
                 <li><a href="https://github.com/pawan13"target='_blank'
         rel='noreferrer noopener'>Github</a></li>
                 <li> <a href="https://www.youtube.com/@pawanshiwakoti5164"target='_blank'
         rel='noreferrer noopener'>Youtube</a></li>
                 <li><a href="https://twitter.com/Pawankshiwakoti"target='_blank'
         rel='noreferrer noopener'>Twitter</a></li>
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
