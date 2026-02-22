import React from 'react';
import './Register.css';
import { Header } from '../../components/layout/Header/Header';
import { Footer } from '../../components/layout/Footer/Footer';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Register: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="register-page">
      <Header />
      <main className="register-main">
        <div className="register-card">
          <h1 className="auth-title">{t('auth.register')}</h1>
          
          <form className="auth-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nome">{t('auth.first_name')}</label>
                <input type="text" id="nome" required />
              </div>
              <div className="form-group">
                <label htmlFor="cognome">{t('auth.last_name')}</label>
                <input type="text" id="cognome" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="azienda">{t('auth.company_name')}</label>
                <input type="text" id="azienda" required />
              </div>
              <div className="form-group">
                <label htmlFor="piva">{t('auth.vat_number')}</label>
                <input type="text" id="piva" defaultValue="IT74564940059" required />
              </div>
            </div>

            <h2 className="section-subtitle">{t('auth.billing_address')}</h2>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="indirizzo">{t('auth.address')}</label>
                <input type="text" id="indirizzo" required />
              </div>
              <div className="form-group">
                <label htmlFor="citta">{t('auth.city')}</label>
                <input type="text" id="citta" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nazione">{t('auth.country')}</label>
                <input type="text" id="nazione" required />
              </div>
              <div className="form-group">
                <label htmlFor="cap">{t('auth.postal_code')}</label>
                <input type="text" id="cap" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="codice">{t('auth.sdi_pec')}</label>
                <input type="text" id="codice" required />
              </div>
              <div className="form-group">
                <label htmlFor="telefono">{t('auth.phone')}</label>
                <input type="tel" id="telefono" required />
              </div>
            </div>

            <h2 className="section-subtitle">{t('auth.account')}</h2>

            <div className="form-group">
              <label htmlFor="email">{t('auth.email')}</label>
              <input type="email" id="email" placeholder="fresh-tropical@email.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="password">{t('auth.password')}</label>
              <input type="password" id="password" placeholder={t('auth.password')} required />
            </div>

            <button type="submit" className="auth-submit-btn">{t('auth.register')}</button>
          </form>

          <div className="auth-divider">
            <span>{t('auth.already_have')}</span>
          </div>
          <Link to="/login" className="auth-secondary-btn">{t('auth.login')}</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};
