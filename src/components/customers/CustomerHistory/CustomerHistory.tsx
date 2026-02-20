import React from 'react';
import './CustomerHistory.css';
import hero1 from '../../../Images/hero1.jpg';
import hero2 from '../../../Images/hero2.jpg';

export const CustomerHistory: React.FC = () => {
  return (
    <section className="c-hist">
      <div className="c-hist-top">
        <div className="c-hist-inner">
          <div className="c-hist-content">
            <h2 className="c-hist-title">A reference point since 2007</h2>
            <h3 className="c-hist-sub">Distribution of ethnic food products</h3>
            <div className="c-hist-text">
              <p>
                Fresh Tropical Ltd. by Jawad has been a reference point for years in the distribution of food products to ethnic shops. We have a rich and constantly expanding catalog, with fresh products, dry products, frozen products, and some specialties distributed exclusively in the Italian territory, but also cookware; we can therefore supply you with all the product categories you need with a single order and provide you with marketing consultancy for the sale of products at competitive prices.
              </p>
              <p>
                The quality of our work and our goods is guaranteed by our storage capabilities, with large, well-equipped warehouses, and our knowledge of the products, but also by the quality of our suppliers and our brands, among which Alibabà stands out, a guarantee of excellence that we own. Finally, thanks to our fast transport, we fulfill every order in 24 hours.
              </p>
            </div>
          </div>
          <div className="c-hist-image">
            <img src={hero1} alt="Logistics facility" />
          </div>
        </div>
      </div>

      <div className="c-hist-mid">
        <div className="c-hist-inner">
          <div className="c-hist-grid-2">
            <div className="c-hist-img-card">
              <img src={hero2} alt="Operations" />
            </div>
            <div className="c-hist-img-card">
              <img src={hero1} alt="Warehouse management" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
