import React from 'react';
import './Register.css';
import { Header } from '../../components/layout/Header/Header';
import { Footer } from '../../components/layout/Footer/Footer';
import { Link } from 'react-router-dom';

export const Register: React.FC = () => {
  return (
    <div className="register-page">
      <Header />
      <main className="register-main">
        <div className="register-card">
          <h1 className="auth-title">Register</h1>
          
          <form className="auth-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nome">First Name</label>
                <input type="text" id="nome" required />
              </div>
              <div className="form-group">
                <label htmlFor="cognome">Last Name</label>
                <input type="text" id="cognome" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="azienda">Company Name</label>
                <input type="text" id="azienda" required />
              </div>
              <div className="form-group">
                <label htmlFor="piva">VAT Number</label>
                <input type="text" id="piva" defaultValue="IT74564940059" required />
              </div>
            </div>

            <h2 className="section-subtitle">Billing Address</h2>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="indirizzo">Address</label>
                <input type="text" id="indirizzo" required />
              </div>
              <div className="form-group">
                <label htmlFor="citta">City</label>
                <input type="text" id="citta" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nazione">Country</label>
                <input type="text" id="nazione" required />
              </div>
              <div className="form-group">
                <label htmlFor="cap">Postal Code</label>
                <input type="text" id="cap" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="codice">SDI or PEC Code</label>
                <input type="text" id="codice" required />
              </div>
              <div className="form-group">
                <label htmlFor="telefono">Phone Number</label>
                <input type="tel" id="telefono" required />
              </div>
            </div>

            <h2 className="section-subtitle">Account</h2>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="fresh-tropical@email.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Password" required />
            </div>

            <button type="submit" className="auth-submit-btn">Register</button>
          </form>

          <div className="auth-divider">
            <span>Already have an account?</span>
          </div>
          <Link to="/login" className="auth-secondary-btn">Login</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};
