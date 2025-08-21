import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Mekala Satish Kumar Reddy</h3>
            <p>MERN Stack Web Developer</p>
          </div>

          <nav className="footer-nav">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              {/* <li><a href="#experience">Experience</a></li> */}
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="https://github.com/satishreddy955" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/mekala-satish-kumar-reddy-ba08a7290/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </a> */}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Mekala Satish Kumar Reddy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;