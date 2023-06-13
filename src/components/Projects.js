import React from 'react'
import cl from '../assests/img/contact-list.png'
import ga from '../assests/img/groceryApp.png'
import inv from '../assests/img/invoicer.png'
import mc from '../assests/img/movie-collection.png'
import ntdl from '../assests/img/not-to-do-list.png'
import pc from '../assests/img/prank-calculator.png'

const Projects = () => {
  return (
    <div>
       <section className="section4 flex" id="projects">
     <h2 className="title">My Recent Work</h2>
     <div className="projects-container grid">
         <div className="project-card flex">
            <a href="https://movie-collection-beige.vercel.app/" target='_blank' rel='noreferrer noopener'>
             <div className="top">
                 <img src={mc} alt=""/>
             </div>
             <div className="bottom">
                 <p>Movie-collection App build with react calling Api</p>
                 <p>21/05/2023</p>
             </div>
             </a>
         </div>
         <div className="project-card flex">
            <a href="https://invoicer-tau.vercel.app/" target='_blank' rel='noreferrer noopener'>
             <div className="top">
                 <img src={inv} alt=""/>
             </div>
             <div className="bottom">
                 <p>Invoice App for small business App</p>
                 <p>3/01/2023</p>
             </div>
             </a>
         </div>
         <div className="project-card flex">
            <a href="https://react-contact-list-chi.vercel.app/" target='_blank' rel='noreferrer noopener'>
             <div className="top">
                 <img src={cl} alt=""/>
             </div>
             <div className="bottom">
                 <p>Contact list App generated from random userlist build with react</p>
                 <p>04/05/2023</p>
             </div>
             </a>
         </div>
         <div className="project-card flex">
            <a href="https://react-not-to-do-list-eight.vercel.app/" target='_blank'rel='noreferrer noopener'>
             <div className="top">
                 <img src={ntdl} alt=""/>
             </div>
             <div className="bottom">
                 <p>Not to do list developed using reactjs</p>
                 <p>21/04/2023</p>
             </div>
             </a>
         </div>
         <div className="project-card flex">
            <a href="https://react-prank-calculator-pi.vercel.app/" target='_blank' rel='noreferrer noopener'>
             <div className="top">
                 <img src={pc} alt=""/>
             </div>
             <div className="bottom">
                 <p>Prank Calculator developed using reactjs</p>
                 <p>20/04/2023</p>
             </div>
             </a>
         </div>
         <div className="project-card flex">
         <a href="https://grocery-app-six.vercel.app/"target='_blank'
         rel='noreferrer noopener'>
             <div className="top">
                 <img src={ga} alt=""/>
             </div>
             <div className="bottom">
                 <p>Grocery App developed using reactjs</p>
                 <p>o4/10/2022</p>
             </div>
             </a>
         </div>
     </div>
    </section>
    </div>
  )
}

export default Projects
