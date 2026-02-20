import React from 'react';
import './BrandsHero.css';
import hero2 from '../../../Images/hero2.jpg';

export const BrandsHero: React.FC = () => {
  return (
    <section className="brands-hero">
      <div className="brands-hero-bg">
        <img src={hero2} alt="Fresh produce background" />
        <div className="brands-hero-overlay" />
      </div>
      <div className="brands-hero-inner">
        <h1 className="brands-hero-title">All our brands</h1>
        <p className="brands-hero-text">
          Fresh Tropical deals with dozens of brands internationally, from the most well-known to local and typical brands of a particular country. With us, you will find everything you want!
        </p>
      </div>
    </section>
  );
};
