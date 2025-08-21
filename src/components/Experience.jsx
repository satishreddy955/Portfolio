import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      duration: '2023 - Present',
      description: 'Lead development of responsive web applications using React and modern JavaScript. Mentor junior developers and collaborate with design teams to deliver exceptional user experiences.',
      achievements: [
        'Improved application performance by 40%',
        'Led a team of 4 developers',
        'Implemented new testing strategies'
      ]
    },
    {
      id: 2,
      position: 'Full Stack Developer',
      company: 'Digital Agency Pro',
      duration: '2021 - 2023',
      description: 'Developed and maintained full-stack web applications using React, Node.js, and various databases. Worked closely with clients to understand requirements and deliver custom solutions.',
      achievements: [
        'Built 15+ client websites',
        'Reduced load times by 50%',
        'Implemented automated deployment'
      ]
    },
    {
      id: 3,
      position: 'Junior Web Developer',
      company: 'StartUp Innovations',
      duration: '2020 - 2021',
      description: 'Started my professional journey building responsive websites and learning modern web development practices. Contributed to various projects and gained experience with multiple technologies.',
      achievements: [
        'Completed 20+ projects',
        'Learned 5+ new technologies',
        'Received excellent performance reviews'
      ]
    }
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <h3>{exp.position}</h3>
                  <div className="company-duration">
                    <span className="company">{exp.company}</span>
                    <span className="duration">{exp.duration}</span>
                  </div>
                </div>
                
                <p className="experience-description">
                  {exp.description}
                </p>
                
                <div className="achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;