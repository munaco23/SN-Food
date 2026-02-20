import React from 'react';
import './CartSlider.css';
import Logo from '../../Images/Logo.jpeg';

type CartSliderProps = {
  isOpen: boolean;
  onClose: () => void;
};

const DUMMY_CART_ITEMS = [
  {
    id: '1',
    name: 'GK GINGER CANDY ORANGE 24X85G',
    code: '12140',
    price: '€ 12.50',
    quantity: 1,
    image: Logo
  },
  {
    id: '2',
    name: 'DOUX CHICKEN BURGER 100g 10x1kg',
    code: '6360',
    price: '€ 45.00',
    quantity: 2,
    image: Logo
  }
];

export const CartSlider: React.FC<CartSliderProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <div className={`cart-slider ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <div className="cart-header-left">
            <button className="empty-cart-btn">
              <i className="fa-regular fa-trash-can" />
              <span>Empty</span>
            </button>
          </div>
          <div className="cart-header-center">
            <h2 className="cart-title">Your products</h2>
          </div>
          <div className="cart-header-right">
            <button className="close-cart-btn" onClick={onClose}>
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
        </div>

        <div className="cart-content">
          {DUMMY_CART_ITEMS.length > 0 ? (
            <div className="cart-items-list">
              {DUMMY_CART_ITEMS.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-img">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-details">
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-code">cod. {item.code}</p>
                    <div className="item-meta">
                      <span className="item-qty">Qty: {item.quantity}</span>
                      <span className="item-price">{item.price}</span>
                    </div>
                  </div>
                  <button className="remove-item-btn">
                    <i className="fa-solid fa-xmark" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-cart-message">
              Your cart is empty
            </div>
          )}
        </div>

        <div className="cart-footer">
          <div className="cart-total-row">
            <span className="total-label">Total:</span>
            <span className="total-value">€ 102.50</span>
          </div>
          <button className="proceed-btn">
            PROCEED TO ORDER
          </button>
        </div>
      </div>
    </>
  );
};
