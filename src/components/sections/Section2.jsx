import React from 'react'
import "./Section2.css"
import v2 from "../../assets/v2.svg"

const Section2 = () => {
  return (
     
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
  )
}

export default Section2