import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Studytable</h3>
          <p className="copyright">© Copyright 2025 Studytable</p>
        </div>
        <div className="footer-center">
          <a href="#">NOTICE BOARD</a>
        </div>
        <div className="footer-right">
          <div className="socials">
            <h4>SOCIALS</h4>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i> What's App
            </a>
          </div>
          <div className="blogs">
            <h4>BLOGS</h4>
            <a href="/how-we-plan-learning-session">How we plan learning session?</a>
            <a href="/how-we-plan-assessment-session">How we plan assessment session?</a>
            <a href="/how-we-manage-student-life">How we manage student life?</a>
            <a href="/the-effective-student">The effective student</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer