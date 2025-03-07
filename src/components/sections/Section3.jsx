import React from 'react'
import "./Section3.css"
import v3 from "../../assets/v3.svg"

const Section3 = () => {
  return (
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
  )
}

export default Section3