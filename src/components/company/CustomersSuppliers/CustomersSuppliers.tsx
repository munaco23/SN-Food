import React from 'react';
import './CustomersSuppliers.css';
import CustImg from '../../../Images/hero2.jpg';
import SuppImg from '../../../Images/hero1.jpg';

export const CustomersSuppliers: React.FC = () => {
  return (
    <section className="cust-supp">
      <div className="cust-supp-inner">
        <div className="cust-supp-grid">
          {/* Customers Card */}
          <div className="cust-supp-card">
            <div className="cs-img-wrap">
              <img src={CustImg} alt="Customers" />
            </div>
            <div className="cs-info">
              <h2 className="cs-title">Customers</h2>
              <p className="cs-text">
                Fresh Tropical Ltd. by Jawad has been a reference point for years in the distribution of food products to ethnic shops. We have a rich and constantly expanding catalog, with fresh products, dry products, frozen products, and some specialties distributed exclusively in the Italian territory, but also cookware; we can therefore supply you with all the product categories you need with a single order and provide you with marketing consultancy for the sale of products at competitive prices.
              </p>
              <button className="cs-link-btn" type="button">Learn more</button>
            </div>
          </div>

          {/* Suppliers Card */}
          <div className="cust-supp-card">
            <div className="cs-img-wrap">
              <img src={SuppImg} alt="Suppliers" />
            </div>
            <div className="cs-info">
              <h2 className="cs-title">Suppliers</h2>
              <p className="cs-text">
                Fresh Tropical Ltd. by Jawad is a highly qualified company for the preservation and distribution of any ethnic specialty. Active since 2007 in the trade of products from all over the world, we have the tools and know-how necessary for the distribution of any product. In fact, we have large warehouses for storage, equipped with a large fleet of forklifts, pallet trucks for internal movement of goods on site, and refrigerated cells with varying temperatures.
              </p>
              <button className="cs-link-btn" type="button">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
