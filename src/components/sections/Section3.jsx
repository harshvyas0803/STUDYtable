import React from "react";
import { motion } from "framer-motion";
import "./Section3.css";
import v3 from "../../assets/v3.svg";

const Section3 = () => {
  return (
    <section className="section3">
      {/* Left Section - Image comes from Bottom Left */}
      <motion.div
        className="left-of-section3"
        initial={{ x: -100, y: 100, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <img src={v3} alt="illustration" className="section3-img" />
      </motion.div>

      {/* Right Section - Text comes from Bottom Right */}
      <motion.div
        className="right-of-section3"
        initial={{ x: 100, y: 100, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="section3-title">Personalized Assessment</h2>
        <p className="section3-description">
          We measure your learning differently. Not just comparing you among
          your classmates and peers rather, how much you have learnt and how
          much have your skills in each subject have grown. We create tests
          based on your learning session and exam requirements to understand
          and modify your study plan. The tests are uniquely created for
          each student to improve and advance their respective knowledge.
        </p>
      </motion.div>
    </section>
  );
};

export default Section3;
