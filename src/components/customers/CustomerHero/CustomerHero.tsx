import React from 'react';
import './CustomerHero.css';
import hero2 from '../../../Images/hero2.jpg';

export const CustomerHero: React.FC = () => {
  return (
    <section className="cust-hero">
      <div className="cust-hero-bg">
        <img src={hero2} alt="Fresh produce background" />
        <div className="cust-hero-overlay" />
      </div>
      <div className="cust-hero-inner">
        <h1 className="cust-hero-title">A wide range</h1>
        <p className="cust-hero-text">
          Fresh Tropical Ltd. by Jawad has been a reference point for years in the distribution of food products to ethnic shops in Italy and much of Europe.
        </p>
        <button className="cust-hero-cta" type="button">THE CATALOG</button>
      </div>
    </section>
  );
};
