import React from 'react';
import './CatalogHero.css';
import hero2 from '../../../Images/hero2.jpg';

export const CatalogHero: React.FC = () => {
  return (
    <section className="cat-hero">
      <div className="cat-hero-bg">
        <img src={hero2} alt="Ethnic food background" />
        <div className="cat-hero-overlay" />
      </div>
      <div className="cat-hero-inner">
        <h1 className="cat-hero-title">The many colors of ethnic food</h1>
        <p className="cat-hero-text">
          Fresh Tropical srl by Jawad is a highly qualified company for the conservation and distribution of any ethnic food specialty
        </p>
      </div>
    </section>
  );
};
