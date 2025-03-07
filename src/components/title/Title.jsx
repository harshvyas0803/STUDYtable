import React from "react";
import { motion } from "framer-motion";
import "./Title.css";

const Title = () => {
  return (
    <div className="title-container">
      <motion.h1
        className="title"
        initial={{ scale: 0, rotate: -15, opacity: 0 }}
        animate={{ scale: 1.2, rotate: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }} // Slower entrance animation
        whileHover={{ scale: 1.2, rotate: 2, transition: { duration: 0.5 } }} // Smooth hover
      >
        <motion.span
          className="study"
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
        >
          STUDY
        </motion.span>
        <motion.span
          className="table"
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 2, ease: "easeOut" }}
        >
          table
        </motion.span>
      </motion.h1>
    </div>
  );
};

export default Title;