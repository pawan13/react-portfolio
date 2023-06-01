import React from 'react'
import ec from '../assests/img/ec.avif'

const Projects = () => {
  return (
    <div>
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
    </div>
  )
}

export default Projects
