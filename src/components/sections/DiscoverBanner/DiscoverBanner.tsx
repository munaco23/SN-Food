import React from 'react';
import './DiscoverBanner.css';
import BannerImage from '../../../Images/hero2.jpg';

export const DiscoverBanner: React.FC = () => {
  return (
    <section className="discover" aria-label="Discover products">
      <div className="discover-bg" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="discover-overlay" />
        <div className="discover-inner">
          <h2 className="discover-title">
            Discover products from Africa
          </h2>
          <p className="discover-subtitle">
            Fresh Tropical srl by Jawad is a reference company for the import of ethnic food products from the
            territories of Africa. Discover our typical products
          </p>
          <button className="discover-cta" type="button">PRODUCTS</button>
        </div>
      </div>
    </section>
  );
};
