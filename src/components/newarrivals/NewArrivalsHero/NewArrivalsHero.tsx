import React from 'react';
import './NewArrivalsHero.css';
import hero2 from '../../../Images/hero2.jpg';

export const NewArrivalsHero: React.FC = () => {
  return (
    <section className="na-hero">
      <div className="na-hero-bg">
        <img src={hero2} alt="New ethnic products" />
        <div className="na-hero-overlay" />
      </div>
      <div className="na-hero-inner">
        <h1 className="na-hero-title">New Arrivals</h1>
        <p className="na-hero-text">
          Fresh Tropical srl by Jawad is a company constantly looking for new products and ethnic gastronomic experiences. Here you will find our new arrivals in the catalog
        </p>
      </div>
    </section>
  );
};
