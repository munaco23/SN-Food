import React from 'react';
import './Footer.css';
import Logo from '../../../Images/Logo.jpeg';

import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-col footer-brand-col">
            <Link to="/">
              <img src={Logo} alt="Fresh Tropical" className="footer-logo" />
            </Link>
            <p className="footer-brand-text">
              Reference company for the import of ethnic food products into the national territory, 
              and is expanding rapidly to the continental market.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/company">Company</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/catalogs">Catalogues</Link></li>
              <li><Link to="/events">Events</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-col">
            <h3 className="footer-title">Categories</h3>
            <ul className="footer-links">
              <li><Link to="/new-arrivals">New Arrivals</Link></li>
              <li><Link to="/brands">Brands</Link></li>
              <li><Link to="/vendors">Vendors</Link></li>
              <li><Link to="/customers">Customers</Link></li>
              <li><Link to="/login">Account</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col footer-contact-col">
            <h3 className="footer-title">Contact Us</h3>
            <div className="footer-contact-item">
              <i className="fa-solid fa-location-dot"></i>
              <span>Via some address, Italy</span>
            </div>
            <div className="footer-contact-item">
              <i className="fa-solid fa-phone"></i>
              <span>+39 123 456 789</span>
            </div>
            <div className="footer-contact-item">
              <i className="fa-solid fa-envelope"></i>
              <span>info@freshtropical.it</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Fresh Tropical srl by Jawad. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
