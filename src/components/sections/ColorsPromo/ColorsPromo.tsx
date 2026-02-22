import React from 'react';
import './ColorsPromo.css';
import FoodImg from '../../../Images/hero2.jpg';
import BgImg from '../../../Images/hero1.jpg';

export const ColorsPromo: React.FC = () => {
  return (
    <section className="cp-modern" aria-label="Wholesale Solutions">
      <div className="cp-modern-hero" style={{ backgroundImage: `url(${BgImg})` }}>
        <div className="cp-modern-overlay" />
        <div className="cp-modern-container">
          <div className="cp-modern-grid">
            <div className="cp-modern-content">
              <div className="cp-modern-badge">Wholesale Excellence</div>
              <h2 className="cp-modern-title">Premium Food Solutions</h2>
              <p className="cp-modern-text">
                Partner with SN Food Distribution for exclusive ethnic products, 
                scalable logistics, and competitive wholesale pricing.
              </p>
              
              <div className="cp-modern-features">
                <div className="cp-feature-item">
                  <span className="cp-feature-icon"><i className="fa-solid fa-truck-ramp-box" /></span>
                  <div className="cp-feature-info">
                    <h4>Smart Logistics</h4>
                  </div>
                </div>
                <div className="cp-feature-item">
                  <span className="cp-feature-icon"><i className="fa-solid fa-tags" /></span>
                  <div className="cp-feature-info">
                    <h4>Competitive Rates</h4>
                  </div>
                </div>
              </div>

              <div className="cp-modern-actions">
                <button className="cp-btn-primary" type="button">Become a Partner</button>
                <button className="cp-btn-secondary" type="button">Catalog</button>
              </div>
            </div>

            <div className="cp-modern-visual">
              <div className="cp-circle-wrap">
                <img className="cp-circle-img" src={FoodImg} alt="Premium Products" />
                <div className="cp-floating-badge">
                  <span className="cp-badge-val">15+</span>
                  <span className="cp-badge-lab">YEARS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cp-newsletter-v2">
        <div className="cp-newsletter-v2-container">
          <div className="cp-newsletter-v2-content">
            <div className="cp-newsletter-v2-left">
              <h3>Want some offers?</h3>
              <p>Sign up for our newsletter for free!</p>
            </div>
            <div className="cp-newsletter-v2-right">
              <form className="cp-newsletter-v2-form">
                <div className="cp-v2-input-row">
                  <input type="email" placeholder="Your email" aria-label="Your email" />
                  <button type="button">SIGN UP</button>
                </div>
                <label className="cp-v2-checkbox">
                  <input type="checkbox" />
                  <span>I have read and accept the <u>Terms and Conditions</u> and the <u>Privacy Policy</u></span>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
