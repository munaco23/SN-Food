import React from 'react';
import './RequestInformation.css';

export const RequestInformation: React.FC = () => {
  return (
    <section className="ri" aria-label="Request information">
      <div className="ri-inner">
        <div className="ri-left">
          <h2 className="ri-title">Request information</h2>
          <p className="ri-text">
            Fresh Tropical is at your disposal for any need: contact us and we will respond as soon as possible.
          </p>
        </div>

        <div className="ri-right">
          <button className="ri-btn" type="button">CONTACT US</button>
        </div>
      </div>
    </section>
  );
};
