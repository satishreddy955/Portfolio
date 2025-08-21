import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    'JavaScript', 'React', 'Node.js', 'HTML5', 'CSS3', 'Python',
    'Git', 'MongoDB', 'Express', 'REST APIs', 'Responsive Design'
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate MERN Stack Web Developer. I specialize in 
              modern JavaScript frameworks and enjoy turning complex problems into 
              simple, beautiful, and intuitive solutions.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or enjoying the great outdoors. 
              I believe in continuous learning and staying up-to-date with the 
              latest industry trends.
            </p>
            
            <div className="education">
              <h3>Education</h3>
              <div className="education-item">
                <h4>Bachelor of Computer Science</h4>
                <p>Rajiv Gandhi University of Knowledge Technologies, Ongole • 2022-2026</p>
              </div>
            </div>
          </div>

          <div className="skills">
            <h3>Skills & Technologies</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-tag">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;