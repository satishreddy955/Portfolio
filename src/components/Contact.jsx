// src/components/Contact.jsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Send form data using EmailJS
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,   // Service ID from .env
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // Template ID from .env
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY    // Public Key from .env
    )
    .then(() => {
      alert('✅ Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    })
    .catch((error) => {
      console.error(error);
      alert('❌ Failed to send message. Please try again later.');
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Work Together</h3>
            <p>
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, I'll try my 
              best to get back to you!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>mekalasatishkumarreddy@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="icon">📱</span>
                <div>
                  <h4>Phone</h4>
                  <p>+91 9550577628</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Ongole, Andhra Pradesh</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                <a href="https://github.com/satishreddy95" target="_blank" rel="noopener noreferrer">
                  <span className="icon">⚡</span> GitHub
                </a>
                <a href="https://www.linkedin.com/in/mekala-satish-kumar-reddy-ba08a7290/" target="_blank" rel="noopener noreferrer">
                  <span className="icon">💼</span> LinkedIn
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <span className="icon">🐦</span> Twitter
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
