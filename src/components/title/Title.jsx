import React from "react";
import { motion } from "framer-motion";
import "./Title.css";

const Title = () => {
  return (
    <div className="title-container">
      <motion.h1
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} // Ensures it runs when in view
      >
        {/* STUDY - Coming from the left */}
        <motion.span
          className="study"
          variants={{
            hidden: { x: -200, opacity: 0 },
            visible: {
              x: 0,
              opacity: 1,
              transition: { duration: 1, ease: "easeOut" },
            },
          }}
        >
          STUDY
        </motion.span>

        {/* TABLE - Coming from the right */}
        <motion.span
          className="table"
          variants={{
            hidden: { x: 200, opacity: 0 },
            visible: {
              x: 0,
              opacity: 1,
              transition: { duration: 1, ease: "easeOut" },
            },
          }}
        >
          table
        </motion.span>
      </motion.h1>
    </div>
  );
};

export default Title;
