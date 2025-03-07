import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";

import insta from "../../assets/insta.png";
import wht from "../../assets/whatsapp.png";
import noticeboard from "../../assets/noticeboard.svg";

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="footer-container">
        {/* Left Section */}
        <motion.div
          className="footer-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3>Studytable</h3>
          <p className="copyright">© Copyright 2025 Studytable</p>
        </motion.div>

        {/* Center Section */}
        <motion.div
          className="footer-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <img src={noticeboard} alt="Noticeboard" />
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="footer-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="socials">
            <h4>SOCIALS</h4>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={insta} alt="Instagram" className="social-icon" /> Instagram
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
              <img src={wht} alt="WhatsApp" className="social-icon" /> WhatsApp
            </a>
          </div>
          <div className="blogs">
            <h4>BLOGS</h4>
            <a href="/how-we-plan-learning-session">How we plan learning session?</a>
            <a href="/how-we-plan-assessment-session">How we plan assessment session?</a>
            <a href="/how-we-manage-student-life">How we manage student life?</a>
            <a href="/the-effective-student">The effective student</a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
