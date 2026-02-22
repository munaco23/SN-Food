import React from 'react';
import './FeatureHighlights.css';

const FEATURES = [
  {
    icon: 'fa-solid fa-truck-fast',
    title: 'Free Shipping',
    desc: 'On orders over €150'
  },
  {
    icon: 'fa-solid fa-hand-holding-dollar',
    title: 'Save Money',
    desc: 'Wholesale prices'
  },
  {
    icon: 'fa-solid fa-circle-check',
    title: 'Quality Assured',
    desc: '100% Premium Products'
  },
  {
    icon: 'fa-solid fa-tags',
    title: 'Best Deal Offer',
    desc: 'Exclusive B2B discounts'
  },
  {
    icon: 'fa-solid fa-headset',
    title: 'Support 24/7',
    desc: 'Expert assistance'
  }
];

export const FeatureHighlights: React.FC = () => {
  return (
    <section className="feature-highlights">
      <div className="features-container">
        {FEATURES.map((item, index) => (
          <div key={index} className="feature-item">
            <div className="feature-icon-wrapper">
              <i className={item.icon} aria-hidden="true" />
            </div>
            <div className="feature-content">
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
