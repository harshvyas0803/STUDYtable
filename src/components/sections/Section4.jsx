import React from "react";
import { motion } from "framer-motion";
import "./Section4.css";
import v4 from "../../assets/v4.svg";

const Section4 = () => {
  return (
    <section className="section4">
      {/* Left Section - Text comes from Bottom Left */}
      <motion.div
        className="left-of-section4"
        initial={{ x: -100, y: 100, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="section4-title">Managing Students' Academic Life</h2>
        <p className="section4-description">
          There is more to studying than just practicing and giving tests.
          To meet the requirements of exams, students need to carefully 
          revise, realign their study plans, and understand their own 
          learning curves. This needs to be done alongside school tests 
          and other scholarship exams. We manage it all for you, so you 
          can focus on learning without any worries.
        </p>
      </motion.div>

      {/* Right Section - Image comes from Bottom Right */}
      <motion.div
        className="right-of-section4"
        initial={{ x: 100, y: 100, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <img src={v4} alt="illustration" className="section4-img" />
      </motion.div>
    </section>
  );
};

export default Section4;
