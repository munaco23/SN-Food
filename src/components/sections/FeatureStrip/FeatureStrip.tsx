import React from 'react';
import { useTranslation } from 'react-i18next';
import './FeatureStrip.css';
import BgImg from '../../../Images/hero2.jpg';

export const FeatureStrip: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="brand-story" aria-label="Brand Story & Vision">
      <div className="brand-story-parallax" style={{ backgroundImage: `url(${BgImg})` }}>
        <div className="brand-story-overlay" />
        <div className="brand-story-container">
          <div className="brand-story-grid">
            <div className="brand-story-content">
              <span className="brand-story-kicker">Our Heritage</span>
              <h2 className="brand-story-title">Bridging Continents Through Authentic Flavors</h2>
              <div className="brand-story-divider" />
              <p className="brand-story-text">
                Since our inception, SN Food Distribution has been dedicated to sourcing the finest 
                ethnic products from across Africa and Asia. Our mission is to empower professionals 
                with authentic ingredients that tell a story of tradition, quality, and passion.
              </p>
              <p className="brand-story-text">
                We believe that food is more than just sustenance; it is a universal language that 
                connects us all. Through reliable logistics and rigorous quality control.
              </p>
            </div>

            <div className="brand-story-cards">
              <div className="vision-card">
                <span className="vision-number">01</span>
                <h3 className="vision-card-title">Uncompromising Quality</h3>
                <p className="vision-card-desc">Sourcing only the premium grade products for our partners.</p>
              </div>
              <div className="vision-card">
                <span className="vision-number">02</span>
                <h3 className="vision-card-title">Global Connectivity</h3>
                <p className="vision-card-desc">Direct links to authentic producers across two continents.</p>
              </div>
              <div className="vision-card">
                <span className="vision-number">03</span>
                <h3 className="vision-card-title">Sustainable Sourcing</h3>
                <p className="vision-card-desc">Ethical practices that support local communities globally.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
