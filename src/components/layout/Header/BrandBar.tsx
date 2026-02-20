import React from 'react';
import { Link } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Company', path: '/company' },
  { label: 'Team', path: '/team' },
  { label: 'Vendors', path: '/vendors' },
  { label: 'Customers', path: '/customers' },
  { label: 'Events', path: '/events' },
  { label: 'Catalogs', path: '/catalogs' },
  { label: 'Brands', path: '/brands' },
  { label: 'New arrivals', path: '/new-arrivals' },
  { label: 'Contact', path: '/contact' },
  { label: 'Branches', path: '#' },
];

export const BrandBar: React.FC = () => {
  return (
    <div className="brand-bar">
      <div className="brand-bar-left">
        {NAV_ITEMS.map((item) => (
          item.path === '#' ? (
            <button key={item.label} className="brand-bar-item">
              {item.label}
            </button>
          ) : (
            <Link key={item.label} to={item.path} className="brand-bar-item" style={{ textDecoration: 'none' }}>
              {item.label}
            </Link>
          )
        ))}
      </div>
      <div className="brand-bar-right">
        <button className="language-switcher">
          <span className="language-flag" aria-hidden="true" />
          <span className="language-label">English</span>
        </button>
        <Link to="/login" className="brand-login-button" style={{ textDecoration: 'none' }}>
          <span className="brand-login-icon" aria-hidden="true">
            <i className="fa-regular fa-user" />
          </span>
          <span className="brand-login-label">Login/Register</span>
        </Link>
      </div>
    </div>
  );
};
