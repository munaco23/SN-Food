import React from 'react';
import './ContactHero.css';

export const ContactHero: React.FC = () => {
  return (
    <section className="contact-hero">
      <div className="contact-hero-overlay" />
      <div className="contact-hero-content">
        <h1>Contact Us</h1>
        <p>African & Asian food wholesaler based in Bruay-sur-l’Escaut. Get in touch with our team today.</p>
      </div>
    </section>
  );
};
