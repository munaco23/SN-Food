import React from 'react';
import './ContactHero.css';

export const ContactHero: React.FC = () => {
  return (
    <section className="contact-hero">
      <div className="contact-hero-overlay" />
      <div className="contact-hero-content">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Get in touch with our team of enthusiasts.</p>
      </div>
    </section>
  );
};
