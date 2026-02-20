import React, { useRef } from 'react';
import './ColorsPromo.css';
import FoodImg from '../../../Images/hero2.jpg';
import BrandLogo from '../../../Images/Logo.jpeg';

export const ColorsPromo: React.FC = () => {
  return (
    <section className="cp" aria-label="All the colors of food">
      <div className="cp-hero">
        <div className="cp-heroInner">
          <div className="cp-left">
            <div className="cp-brand" aria-label="Fresh Tropical">
              <img className="cp-brandLogo" src={BrandLogo} alt="" aria-hidden="true" />
              <span className="cp-brandText">SN Foods</span>
              <span className="cp-brandSub">by SN</span>
            </div>

            <h2 className="cp-title">All the colors of food</h2>
            <p className="cp-text">
              Every day, we distribute the best products from all over the world to stores, wholesalers and retailers,
              with a 24-hour delivery service. We are at your disposal for any need: contact us and we will reply as soon
              as possible
            </p>

            <div className="cp-actions">
              <button className="cp-btn cp-btn--primary" type="button">Company</button>
              <button className="cp-btn cp-btn--ghost" type="button">Discover the catalogues</button>
            </div>
          </div>

          <div className="cp-right" aria-hidden="true">
            <div className="cp-circle">
              <img className="cp-circleImg" src={FoodImg} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="cp-news" aria-label="Newsletter">
        <div className="cp-newsInner">
          <div className="cp-newsLeft">
            <div className="cp-newsTitle">Want some offers?</div>
            <div className="cp-newsSub">Sign up for our newsletter for free!</div>
          </div>

          <form className="cp-newsForm">
            <div className="cp-newsRow">
              <input className="cp-input" type="email" placeholder="Your email" aria-label="Your email" />
              <button className="cp-sign" type="button">Sign up</button>
            </div>

            <label className="cp-check">
              <input type="checkbox" />
              <span>
                I have read and accept the <button className="cp-inlineLink" type="button">Terms and Conditions</button>
                {' '}and the <button className="cp-inlineLink" type="button">Privacy Policy</button>
              </span>
            </label>
          </form>
        </div>
      </div>
    </section>
  );
};
