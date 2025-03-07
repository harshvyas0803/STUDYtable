import React from "react";
import { motion } from "framer-motion";
import "./Section5.css";

const Section5 = () => {
  return (
    <section className="section5">
      {/* Heading - Drops from top when in view */}
      <motion.h2
        className="section5-heading"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        How We Came to This?
      </motion.h2>

      {/* Description - Slides in from left when in view */}
      <motion.p
        className="section5-description"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        We observed and researched for three years across various students.
        The best students need more attention to excel, while struggling 
        students need support to improve their abilities. Every student 
        requires personal attention. Based on this principle, we built our 
        algorithm and AI tutor to cater to each student uniquely.
      </motion.p>

      {/* Link - Pops in smoothly when in view */}
      <motion.a
        href="#"
        className="section5-link"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Read the full story →
      </motion.a>
    </section>
  );
};

export default Section5;
