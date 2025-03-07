import React from "react";
import { motion } from "framer-motion";
import "./Section1.css";
import ApplyButton from "../apply-button/ApplyButton";
import SignInLink from "../signin/SignInLink";
import hero_img from "../../assets/Hero-img.svg";

const Section1 = () => {
  return (
    <section className="hero-container">
      {/* Left Content */}
      <motion.div
        className="left-of-hero"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div className="hero-content">
          <motion.h2
            className="hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            <motion.span
              className="optimize"
              whileHover={{ scale: 1.2, color: "#ffcc00" }}
            >
              Optimize
            </motion.span>{" "}
            Your <br /> Performance For <br />
            <motion.span
              className="jee"
              whileHover={{ scale: 1.2, color: "#ff3333" }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              JEE,
            </motion.span>{" "}
            <motion.span
              className="neet"
              whileHover={{ scale: 1.2, color: "#33ccff" }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              NEET,
            </motion.span>{" "}
            and{" "}
            <motion.span
              className="boards"
              whileHover={{ scale: 1.2, color: "#66ff99" }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              Boards
            </motion.span>
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7 }}
          >
            Your personal AI-Tutor for all academic needs. Whether it's school
            exams, <br />
            boards, or competitive exams, we plan, manage, and help you clear
            your <br />
            doubts instantly. For students of class 10th, 11th, and 12th (CBSE)
            and <br />
            preparing for all medical or engineering entrance exams.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div whileHover={{ scale: 1.0 }}>
              <ApplyButton />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <SignInLink />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="right-of-hero"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        whileHover={{ scale: 1.05, rotate: 2 }}
      >
        <motion.div
          className="hero-image"
          animate={{
            y: [0, -10, 0],
            transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <motion.img
            src={hero_img}
            alt="Hero illustration"
            className="hero-img"
            initial={{ scale: 0.8, rotate: -5 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Section1;
