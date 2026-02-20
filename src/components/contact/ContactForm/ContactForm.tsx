import React from 'react';
import './ContactForm.css';

export const ContactForm: React.FC = () => {
  return (
    <div className="contact-form-container">
      <div className="contact-form-header">
        <h2>Send Us a Message</h2>
        <p>Fill out the form below and we'll get back to you as soon as possible.</p>
      </div>
      
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group-row">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" placeholder="What is this about?" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows={6} placeholder="How can we help you?" required></textarea>
        </div>
        
        <button type="submit" className="contact-submit-btn">
          Send Message
          <i className="fa-solid fa-paper-plane" />
        </button>
      </form>
    </div>
  );
};
