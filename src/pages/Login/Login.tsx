import React from 'react';
import './Login.css';
import { Header } from '../../components/layout/Header/Header';
import { Footer } from '../../components/layout/Footer/Footer';
import { Link } from 'react-router-dom';

export const Login: React.FC = () => {
  return (
    <div className="login-page">
      <Header />
      <main className="login-main">
        <div className="login-card">
          <h1 className="auth-title">Login</h1>
          <form className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="fresh-tropical@email.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Password" required />
            </div>
            <div className="form-options">
              <Link to="#" className="forgot-link">Forgot password?</Link>
            </div>
            <button type="submit" className="auth-submit-btn">Login</button>
          </form>
          <div className="auth-divider">
            <span>New to fresh tropical?</span>
          </div>
          <Link to="/register" className="auth-secondary-btn">Register</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};
