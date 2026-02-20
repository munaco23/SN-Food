import React from 'react';
import './LogisticsArea.css';
import Bg from '../../../Images/hero2.jpg';

export const LogisticsArea: React.FC = () => {
  return (
    <section className="comp-log" aria-label="Commercial and logistics area" style={{ backgroundImage: `url(${Bg})` }}>
      <div className="comp-log-overlay" />
      <div className="comp-log-inner">
        <h2 className="comp-log-title">Commercial and<br />logistics area</h2>
        <div className="comp-log-text">
          <p>
            To date, the company employs 250 people and has six locations in Italy: Bologna, Brescia, Naples, Milan, Seveso, and Corbetta, the
            latter being the main one, with a total storage area of 47,000 sqm.
          </p>
          <p>
            It also has a fleet of 80 vehicles, and thanks to agreements with a support warehouse in the Netherlands and some of the largest
            European transport companies, Fresh Tropical establishes itself as the largest importer of ethnic food products in Italy and a
            reference point for the foreign market.
          </p>
          <p>
            We are committed to delivering every order within 24 hours, and thanks to an efficient and highly organized logistics system, we
            guarantee the quality and freshness of all our catalog products.
          </p>
        </div>
      </div>
    </section>
  );
};
