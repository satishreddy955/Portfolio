import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Mekala Satish Kumar Reddy</span>
            </h1>
            <p className="hero-tagline">
              MERN Stack Web Developer
            </p>
            <p className="hero-description">
              I create beautiful, responsive, and user-friendly web applications 
              using modern technologies and best practices.
            </p>
            <div className="hero-buttons">
              {/* <a href="#projects" className="btn btn-primary">View My Work</a> */}
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-placeholder">
              <div className="profile-icon">
                <img src="/assets/satish.jpg" alt="Profile" className="avatar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;