import React from "react";
import "./Home.css";
import ApplyButton from "./components/apply-button/ApplyButton";
import SignInLink from "./components/signin/SignInLink";
import hero_img from "./assets/hero-img.svg";
import v2 from "./assets/v2.svg"

const Home = () => {
  return (
    <>
     <h1 className="title">    <span className="study">STUDY</span><span className="table">table</span>    </h1>


      <div className="parent-container">

        <section className="hero-container">
          <div className="left-of-hero">
            <div className="hero-content">
              <h2 className="hero-title">
             <span className="optimize" >Optimize</span> Your <br /> Performance For <br /><span className="jee"> JEE,</span> <span className="neet">NEET,</span> and <span className="boards">Boards</span>
              </h2>
              <p className="hero-description">
                Your personal AI-Tutor for all academic needs. Whether it's school exam,<br /> 
                boards or competitive exams we plan, manage, and help you clear your <br />
                doubts instantly. For students of class 10th, 11th and 12th (CBSE) and <br />
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
              <img src={hero_img} alt="Hero illustration" className="hero-img" />
            </div>
          </div>
        </section>

        <section className="practice-section">
  <div className="left-of-section">
    <h2 className="section-title">Unlimited Practice session</h2>
    <p className="section-description">
      For topics and subjects you go through in your school and coaching every day, we create instant practice session specially made for your days need. Our innovative AI algorithm crafts batches of 20 questions, each accompanied by instant feedback and solutions – it's like having a Home tutor 24x7.
    </p>
  </div>
  <div className="right-of-section">
    <img src={v2} alt="illustration" className="section-img" />
  </div>


</section>
        <div className="section3">


            <div className="left-of-section3"></div>
            <div className="right-of-section3"></div>


        </div>
        <div className="section3"></div>
        <div className="section4"></div>
        <div className="section5"></div>

        <footer></footer>
      </div>
    </>
  );
};

export default Home;