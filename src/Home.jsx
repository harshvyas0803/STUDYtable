import React from "react";
import "./Home.css";
import ApplyButton from "./components/apply-button/ApplyButton";
import SignInLink from "./components/signin/SignInLink";
import hero_img from "./assets/hero-img.svg";
import v2 from "./assets/v2.svg";
import v3 from "./assets/v3.svg";
import v4 from "./assets/v4.svg";

const Home = () => {
  return (
    <>
      <h1 className="title">
        <span className="study">STUDY</span>
        <span className="table">table</span>
      </h1>

      <div className="parent-container">
        {/* SECTION-1 */}
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

        {/* SECTION-2 */}
        <section className="practice-section">
          <div className="left-of-section">
            <h2 className="section-title">Unlimited Practice session</h2>
            <p className="section-description">
              For topics and subjects you go through in your school and coaching
              every day, we create instant practice session specially made for
              your days need. Our innovative AI algorithm crafts batches of 20
              questions, each accompanied by instant feedback and solutions –
              it's like having a Home tutor 24x7.
            </p>
          </div>
          <div className="right-of-section">
            <img src={v2} alt="illustration" className="section-img" />
          </div>
        </section>

        {/* SECTION-3 */}
        <section className="section3">
          <div className="left-of-section3">
            <img src={v3} alt="illustration" className="section3-img" />
          </div>
          <div className="right-of-section3">
            <h2 className="section3-title">Personalized Assessment</h2>
            <p className="section3-description">
              We measure your learning differently. Not just comparing you among
              your classmates and peers rather, how much you have learnt and how
              much have your skills in each subject have grown. We crate test
              based on your learning session and exam requirement to understand
              and modify study plan for you. The test are unquietly created for
              each student improve and advance their respective knowledge.
            </p>
          </div>
        </section>

        {/* SECTION-4 */}
        <div className="section4">
          <div className="left-of-section4">
            <h2 className="section4-title">Managing students academic life</h2>
            <p className="section4-description">
              There is more to study than just practicing giving test. To meet
              the requirement of exam, we need to carefully do the revision,
              repeatedly align our study plan and to understand students own
              learning curve. This all needs to be done along with schools test
              and other scholarship exams. We manage it all for you. So that you
              focus on learning and worry no more.
            </p>
          </div>
          <div className="right-of-section4">
            <img src={v4} alt="illustration" className="section4-img" />
          </div>
        </div>

        {/* SECTION-5 */}
        <div className="section5">
          <h2 className="section5-heading">How we come to this?</h2>
          <p className="section5-description">
            We observed and researched for three years in a variety of student. Where
            The best needs more attention to do better and the student struggling
            needs more attention to improve their own abilities. All students need
            personal attention. Based on the notion of 'Personal attention' we have
            built our algorithm and Ai tutor to cater each children uniquely..
          </p>
          <a href="#" className="section5-link">
            Read the full story →
          </a>
        </div>

        {/* SECTION-6 */}
        <div className="section6">
          <h4>Crafted for your all academic needs</h4>
          <button className="apply-button">Get Your Entry</button>
        </div>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-left">
              <h3>Studytable</h3>
              <p className="copyright">© Copyright 2025 Studytable</p>
            </div>
            <div className="footer-center">
              <a href="#">NOTICE BOARD</a>
            </div>
            <div className="footer-right">
              <div className="socials">
                <h4>SOCIALS</h4>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp"></i> What's App
                </a>
              </div>
              <div className="blogs">
                <h4>BLOGS</h4>
                <a href="/how-we-plan-learning-session">How we plan learning session?</a>
                <a href="/how-we-plan-assessment-session">How we plan assessment session?</a>
                <a href="/how-we-manage-student-life">How we manage student life?</a>
                <a href="/the-effective-student">The effective student</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;