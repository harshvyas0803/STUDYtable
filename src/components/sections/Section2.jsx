import React from "react";
import { motion } from "framer-motion";
import "./Section2.css";
import v2 from "../../assets/v2.svg";

const Section2 = () => {
  return (
    <section className="practice-section">
      {/* Left Section - Comes from Top Right */}
      <motion.div
        className="left-of-section"
        initial={{ x: 100, y: -100, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }} // Adjusts when animation starts
      >
        <h2 className="section-title">Unlimited Practice session</h2>
        <p className="section-description">
          For topics and subjects you go through in your school and coaching
          every day, we create instant practice session specially made for
          your day's need. Our innovative AI algorithm crafts batches of 20
          questions, each accompanied by instant feedback and solutions – it's
          like having a Home tutor 24x7.
        </p>
      </motion.div>

      {/* Right Section - Comes from Top Left */}
      <motion.div
        className="right-of-section"
        initial={{ x: -100, y: -100, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }} // Adjusts when animation starts
      >
        <img src={v2} alt="illustration" className="section-img" />
      </motion.div>
    </section>
  );
};

export default Section2;
