import React from 'react';
import './VendorHero.css';
import hero2 from '../../../Images/hero2.jpg';

export const VendorHero: React.FC = () => {
  return (
    <section className="vendor-hero">
      <div className="vendor-hero-bg">
        <img src={hero2} alt="Logistics background" />
        <div className="vendor-hero-overlay" />
      </div>
      <div className="vendor-hero-inner">
        <h1 className="vendor-hero-title">Logistics and innovation</h1>
        <p className="vendor-hero-text">
          Fresh Tropical Ltd. by Jawad is a highly qualified company for the preservation and distribution of any ethnic specialty
        </p>
        <button className="vendor-hero-cta" type="button">THE CATALOG</button>
      </div>
    </section>
  );
};
