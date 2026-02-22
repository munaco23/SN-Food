import React, { useState } from 'react';
import './ProductView.css';
import Logo from '../../../Images/Logo.jpeg';

export const ProductView: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="pv-container">
      <div className="pv-inner">
        <nav className="pv-breadcrumbs">
          <span>Homepage</span> &gt; <span>Tea/Herbal teas</span> &gt; <span className="active">GK GINGER CANDY ORANGE 24X85G</span>
        </nav>

        <div className="pv-main-content">
          <div className="pv-left-col">
            <div className="pv-image-box">
              <img src={Logo} alt="GK GINGER CANDY" />
            </div>
          </div>

          <div className="pv-center-col">
            <h1 className="pv-title">GK GINGER CANDY ORANGE 24X85G</h1>
            <p className="pv-cod">cod. 12140</p>

            <table className="pv-info-table">
              <tbody>
                <tr>
                  <td>Brand</td>
                  <td className="pv-link">Gold Kili</td>
                </tr>
                <tr>
                  <td>Category</td>
                  <td className="pv-link">Tea/Herbal teas</td>
                </tr>
                <tr>
                  <td>Geographic area</td>
                  <td className="pv-link">Oriental</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="pv-right-col">
            <div className="pv-status">
              <i className="fa-regular fa-heart pv-wish-icon" />
              <span className="pv-available">
                <span className="dot" /> Product available
              </span>
            </div>

            <div className="pv-cart-box">
              <div className="pv-field">
                <label>Quantity</label>
                <select className="pv-select">
                  <option>Box</option>
                </select>
              </div>

              <div className="pv-qty-row">
                <div className="pv-qty-control">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>

              <button className="pv-add-btn">ADD TO CART</button>
            </div>

            <div className="pv-meta">
              <p>EAN: 18888296013770</p>
              <div className="pv-barcode">
                <i className="fa-solid fa-barcode" />
                <span>|||| || ||||| ||| |||</span>
              </div>
              <p className="pv-brand-owner">A product Gold Kili</p>
              <div className="pv-brand-logo-small">
                <img src={Logo} alt="Gold Kili" />
              </div>
            </div>

            <div className="pv-delivery">
              <i className="fa-solid fa-truck-fast" />
              <span>Fulfillment and delivery within 24 hours</span>
            </div>

            <div className="pv-origin">
              <p>Shipped from SN Food</p>
              <div className="pv-ft-logo">
                <img src={Logo} alt="SN Food" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
