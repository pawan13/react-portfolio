import React from 'react'

const Header = () => {
  return (
    <>
           <label for="darkmode">
     <i className="fa-solid fa-circle-half-stroke dark-mode-toggler">
     </i>
 </label>
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
     </>
  )
}

export default Header
