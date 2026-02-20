import React from 'react';
import './CustomerWhyChooseUs.css';

const features = [
  {
    icon: 'boxes-stacked',
    title: 'Selected products',
    desc: '18 merchandise categories, fresh, dry, frozen products, and cookware'
  },
  {
    icon: 'file-lines',
    title: 'Extensive catalog',
    desc: 'Extensive catalogs with exclusive specialties for Italy and Europe, with many offers'
  },
  {
    icon: 'award',
    title: 'Exclusive brands',
    desc: 'High-quality suppliers and brands, exclusive distributors for Italy and Europe of the Alibabà brand'
  },
  {
    icon: 'shield-check',
    title: 'Quality standards',
    desc: 'Maximum safety in food storage, preservation, and refrigerated transport'
  },
  {
    icon: 'comments',
    title: 'Consulting',
    desc: 'Marketing consulting for product sales and post-sales management'
  },
  {
    icon: 'location-dot',
    title: 'Guaranteed deliveries',
    desc: 'Orders fulfilled within 24 hours in Italy. Shipping with refrigerated vehicles within 48 hours of order receipt'
  }
];

export const CustomerWhyChooseUs: React.FC = () => {
  return (
    <section className="c-why">
      <div className="c-why-inner">
        <header className="c-why-head">
          <div className="c-why-head-left">
            <h2 className="c-why-title">Why choose us</h2>
            <h3 className="c-why-sub">A reference company for the importation of ethnic food products nationwide</h3>
            <p className="c-why-desc">
              Fresh Tropical establishes itself as the largest importer of ethnic food products in Italy and a reference point for the foreign market. We are committed to delivering every order within 24 hours, and thanks to an efficient and highly organized logistics system, we guarantee the quality and freshness of all our catalog products.
            </p>
          </div>
          <div className="c-why-head-right">
            <button className="c-why-cta" type="button">Request catalog</button>
          </div>
        </header>

        <div className="c-why-grid">
          {features.map((f, i) => (
            <div key={i} className="c-why-card">
              <div className="c-why-icon-box">
                <i className={`fa-solid fa-${f.icon}`} />
              </div>
              <div className="c-why-card-content">
                <h4 className="c-why-card-title">{f.title}</h4>
                <p className="c-why-card-desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
