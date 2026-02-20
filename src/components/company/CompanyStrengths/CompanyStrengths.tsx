import React from 'react';
import './CompanyStrengths.css';
import Img1 from '../../../Images/hero1.jpg';
import Img2 from '../../../Images/hero2.jpg';
import Img3 from '../../../Images/hero1.jpg';

export const CompanyStrengths: React.FC = () => {
  return (
    <section className="comp-strengths" aria-label="Our strengths">
      <div className="comp-strengths-inner">
        <div className="comp-strengths-head">
          <div className="comp-strengths-headLeft">
            <h2 className="comp-strengths-title">Our strengths</h2>
            <div className="comp-strengths-sub">Quality is the foundation of everything</div>
          </div>

          <button className="comp-strengths-cta" type="button">Request catalog</button>
        </div>

        <p className="comp-strengths-text">
          We have equipped our warehouses with the best equipment for storing goods, from refrigerated cells with varying temperatures as per CEE
          standards to a range of machinery and equipment for large internal movements. We also guarantee same-day order fulfillment thanks to our
          dedicated teams who handle the registration of orders in real-time. For Fresh Tropical, the quality of service and product is the
          foundation of everything.
        </p>

        <div className="comp-strengths-grid">
          <article className="comp-strengths-card">
            <img className="comp-strengths-img" src={Img1} alt="Shipping" />
            <p className="comp-strengths-cardText">
              Non-stop trade for 12 months a year, with 24-hour shipping throughout Italy
            </p>
          </article>

          <article className="comp-strengths-card">
            <img className="comp-strengths-img" src={Img2} alt="Marketing" />
            <p className="comp-strengths-cardText">
              Marketing services for shops and suppliers for proposing competitive prices
            </p>
          </article>

          <article className="comp-strengths-card">
            <img className="comp-strengths-img" src={Img3} alt="Exclusive products" />
            <p className="comp-strengths-cardText">Many products sold exclusively nationwide</p>
          </article>
        </div>
      </div>
    </section>
  );
};
