import React from 'react'
import "./Section4.css"
import v4 from "../../assets/v4.svg"

const Section4 = () => {
  return (
    <section className="section4">
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
  </section>
  )
}

export default Section4