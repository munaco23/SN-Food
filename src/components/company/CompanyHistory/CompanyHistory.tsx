import React from 'react';
import './CompanyHistory.css';
import HistoryImg from '../../../Images/hero1.jpg';

export const CompanyHistory: React.FC = () => {
  return (
    <section className="comp-history">
      <div className="comp-history-inner">
        <div className="comp-history-left">
          <h2 className="comp-history-title">Exotic since 2007</h2>
          <p className="comp-history-sub">A history of success in ethnic food</p>
          <div className="comp-history-text">
            <p>
              The history of Fresh Tropical Ltd. by Jawad officially begins in 2007. In
              previous years, it was present on the market as an ethnic food store,
              family-run and staffed with ten qualified people.
            </p>
            <p>
              Having actively started importing products with a solid organization,
              the small store soon acquired a warehouse for stocking goods in
              Seveso.
            </p>
            <p>
              From here, the company's expansion began with first one and then
              three stands at the Milan fruit and vegetable market, acquiring more
              locations over the years, becoming an increasingly important
              reference for distribution in Milan and the surrounding area for ethnic
              products, progressively increasing the quality of services and the
              numbers and types of catalog offerings.
            </p>
          </div>
        </div>
        <div className="comp-history-right">
          <img src={HistoryImg} alt="Fresh Tropical Team" className="comp-history-img" />
        </div>
      </div>
    </section>
  );
};
