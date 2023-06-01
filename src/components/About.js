import React from 'react'
import Pawan from '../assests/img/Pawan_Edited.jpg'

const About = () => {
  return (
    <section className="section5 flex" id="about">
    <h2 className="title">About me</h2>
    <div className="about-container flex">
        <div className="left">
            <img src={Pawan} alt="profile-pic"/>
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
  )
}

export default About
