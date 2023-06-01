import React from 'react'

const Contact = () => {
  return (
    <section className="section6 flex" id="contact">
     <h2 className="ttile">Get in Touch</h2>
 
     <div className="socials flex">
         <a href="https://www.linkedin.com/in/pawansiwakoti" target='_blank'
         rel='noreferrer noopener'>
             <i className="fa-brands fa-linkedin"></i>
         </a>
         <a href="https://github.com/pawan13"target='_blank'
         rel='noreferrer noopener'>
             <i className="fa-brands fa-square-github"></i>
         </a>
         <a href="https://twitter.com/Pawankshiwakoti"target='_blank'
         rel='noreferrer noopener'>
             <i className="fa-brands fa-square-twitter"></i>
         </a>
         <a href="https://www.youtube.com/@pawanshiwakoti5164"target='_blank'
         rel='noreferrer noopener'>
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
  )
}

export default Contact
