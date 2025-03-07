import React from 'react'
import "./Section1.css"
import ApplyButton from "../apply-button/ApplyButton"
import SignInLink from "../signin/SignInLink"
import hero_img from "../../assets/Hero-img.svg"


const Section1 = () => {
  return (
       
             <section className="hero-container">
               <div className="left-of-hero">
                 <div className="hero-content">
                   <h2 className="hero-title">
                     <span className="optimize">Optimize</span> Your <br />{" "}
                     Performance For <br />
                     <span className="jee"> JEE,</span>{" "}
                     <span className="neet">NEET,</span> and{" "}
                     <span className="boards">Boards</span>
                   </h2>
                   <p className="hero-description">
                     Your personal AI-Tutor for all academic needs. Whether it's
                     school exam,
                     <br />
                     boards or competitive exams we plan, manage, and help you clear
                     your <br />
                     doubts instantly. For students of class 10th, 11th and 12th
                     (CBSE) and <br />
                     preparing for all medical or engineering entrance exams.
                   </p>
                   <div className="hero-buttons">
                     <ApplyButton />
                     <SignInLink />
                   </div>
                 </div>
               </div>
               <div className="right-of-hero">
                 <div className="hero-image">
                   <img
                     src={hero_img}
                     alt="Hero illustration"
                     className="hero-img"
                   />
                 </div>
               </div>
             </section>
  )
}

export default Section1