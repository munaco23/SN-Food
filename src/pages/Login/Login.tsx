import React from 'react';
import './Login.css';
import { Header } from '../../components/layout/Header/Header';
import { Footer } from '../../components/layout/Footer/Footer';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Login: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="login-page">
      <Header />
      <main className="login-main">
        <div className="login-card">
          <h1 className="auth-title">{t('auth.login')}</h1>
          <form className="auth-form">
            <div className="form-group">
              <label htmlFor="email">{t('auth.email')}</label>
              <input type="email" id="email" placeholder="fresh-tropical@email.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">{t('auth.password')}</label>
              <input type="password" id="password" placeholder={t('auth.password')} required />
            </div>
            <div className="form-options">
              <Link to="#" className="forgot-link">{t('auth.forgot_password')}</Link>
            </div>
            <button type="submit" className="auth-submit-btn">{t('auth.login')}</button>
          </form>
          <div className="auth-divider">
            <span>{t('auth.new_to')}</span>
          </div>
          <Link to="/register" className="auth-secondary-btn">{t('auth.register')}</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};
