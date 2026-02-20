import React from 'react';
import './ContactInfo.css';

export const ContactInfo: React.FC = () => {
  return (
    <div className="contact-info-grid">
      <div className="contact-info-card">
        <div className="contact-info-icon">
          <i className="fa-solid fa-location-dot" />
        </div>
        <h3>Our Location</h3>
        <p>23/A Mark Street Road, Newyork City, USA</p>
      </div>
      
      <div className="contact-info-card">
        <div className="contact-info-icon">
          <i className="fa-solid fa-phone" />
        </div>
        <h3>Phone Number</h3>
        <p>+9888-256-666</p>
        <p>+9888-256-777</p>
      </div>
      
      <div className="contact-info-card">
        <div className="contact-info-icon">
          <i className="fa-solid fa-envelope" />
        </div>
        <h3>Email Address</h3>
        <p>info@zillystore.com</p>
        <p>support@zillystore.com</p>
      </div>
      
      <div className="contact-info-card">
        <div className="contact-info-icon">
          <i className="fa-solid fa-clock" />
        </div>
        <h3>Working Hours</h3>
        <p>Mon - Sat: 09:00 - 20:00</p>
        <p>Sunday: Closed</p>
      </div>
    </div>
  );
};
