import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Food Delivery Web Application',
      description: 'A full-stack e-commerce solution with user authentication, order cart, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/satishreddy955/Food-Del',
      demo: 'https://food-del-front-three.vercel.app/'
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'A responsive weather application that provides current conditions and forecasts with beautiful data visualizations.',
      technologies: ['React', 'Material UI', 'Weather API', 'JavaScript'],
      github: 'https://github.com/satishreddy955/Weather-App',
      demo: 'https://weather-app-seven-theta-77.vercel.app/'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with modern web technologies, featuring smooth animations and optimized performance.',
      technologies: ['React', 'CSS3', 'Responsive Design'],
      github: 'https://github.com',
      demo: 'https://example.com'
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid grid grid-2">
          {projects.map(project => (
            <div key={project.id} className="project-card card">
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              
              <p className="project-description">
                {project.description}
              </p>
              
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.github} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                  <span className="icon">⚡</span> GitHub
                </a>
                <a href={project.demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  <span className="icon">🚀</span> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;