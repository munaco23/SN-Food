import React from 'react';
import './VendorWhyChooseUs.css';

const features = [
  {
    icon: 'house',
    title: 'Dedicated warehouses',
    desc: '47,000 sqm total storage area for both fresh and preserved products'
  },
  {
    icon: 'box',
    title: 'Guaranteed stock',
    desc: 'Warehouses located between northern and southern Italy, with locations in Milan, Brescia, Bologna, and Naples'
  },
  {
    icon: 'truck-ramp-box',
    title: 'High-tech logistics',
    desc: 'Modern equipment, forklifts, and pallet trucks for proper warehouse management'
  },
  {
    icon: 'truck-fast',
    title: 'Transport fleet',
    desc: 'Vans and refrigerated cells with varying and controlled temperatures throughout the delivery process'
  },
  {
    icon: 'certificate',
    title: 'Certifications',
    desc: 'Guarantee certifications and extensive knowledge of HACCP procedures and Halal products'
  },
  {
    icon: 'truck-pickup',
    title: 'Guaranteed deliveries',
    desc: 'Orders fulfilled within 24 hours in Italy. Shipping with refrigerated vehicles within 48 hours of order receipt'
  }
];

export const VendorWhyChooseUs: React.FC = () => {
  return (
    <section className="v-why">
      <div className="v-why-inner">
        <header className="v-why-head">
          <div className="v-why-head-left">
            <h2 className="v-why-title">Why choose us</h2>
            <h3 className="v-why-sub">A reference company for the importation of ethnic food products nationwide</h3>
            <p className="v-why-desc">
              Fresh Tropical establishes itself as the largest importer of ethnic food products in Italy and a reference point for the foreign market. We are committed to delivering every order within 24 hours, and thanks to an efficient and highly organized logistics system, we guarantee the quality and freshness of all our catalog products.
            </p>
          </div>
          <div className="v-why-head-right">
            <button className="v-why-cta" type="button">Request catalog</button>
          </div>
        </header>

        <div className="v-why-grid">
          {features.map((f, i) => (
            <div key={i} className="v-why-card">
              <div className="v-why-icon-box">
                <i className={`fa-solid fa-${f.icon}`} />
              </div>
              <div className="v-why-card-content">
                <h4 className="v-why-card-title">{f.title}</h4>
                <p className="v-why-card-desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
