import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Section6.css";

const text = "Crafted for all your academic needs";

const Section6 = () => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && index < text.length) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100); // Typing speed
    } else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      }, 50); // Deleting speed
    } else if (!isDeleting && index === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
    } else if (isDeleting && index === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <motion.section
      className="section6"
      animate={{ scale: [1, 1.02, 1] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Typing Effect */}
      <motion.h4 className="section6-heading">
        {displayText}
        <motion.span
          className="cursor"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          |
        </motion.span>
      </motion.h4>

      {/* Button Animation */}
      <motion.button
        className="apply-button"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        Get Your Entry
      </motion.button>
    </motion.section>
  );
};

export default Section6;
