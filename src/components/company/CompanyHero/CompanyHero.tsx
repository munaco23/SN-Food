import React from 'react';
import './CompanyHero.css';

export const CompanyHero: React.FC = () => {
  return (
    <section className="company-hero">
      <div className="company-hero-content">
        <h1 className="company-hero-title">
          Supplier of exotic<br />
          and ethnic products
        </h1>
        <p className="company-hero-text">
          We distribute the best products from around the world to shops, wholesalers, and
          retailers every day, with a 24-hour delivery service.
        </p>
        <button className="company-hero-btn" type="button">
          THE CATALOG
        </button>
      </div>
      <div className="company-hero-image-clip">
        {/* In a real app, use the actual image from src/Images/hero_purple.jpg or similar */}
        <div className="company-hero-img-placeholder" />
      </div>
    </section>
  );
};
