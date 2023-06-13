import React from 'react'
import Pawan from '../assests/img/Pawan_Edited.jpg'
import cv from '../assests/doc/resume-pawan-kumar-siwakoti.pdf'

const Hero = () => {
  return (
    <>
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
    </>
  )
}

export default Hero
