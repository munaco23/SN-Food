import React from 'react';
import LogoImage from '../../../Images/Logo.jpeg';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

type MainHeaderProps = {
  onMenuClick: () => void;
  onCartClick: () => void;
};

export const MainHeader: React.FC<MainHeaderProps> = ({ onMenuClick, onCartClick }) => {
  const { t } = useTranslation();

  return (
    <div className="main-header">
      <Link to="/" className="main-header-left" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="logo-image-wrapper">
          <img src={LogoImage} alt="SN Food logo" className="logo-image" />
        </div>
        <div className="logo-text-block">
          <div className="logo-title">SN FOOD</div>
          <div className="logo-subtitle">{t('header.logo_subtitle')}</div>
        </div>
      </Link>

      <div className="main-header-center">
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            placeholder={t('header.search_placeholder')}
          />
          <button className="search-button">{t('header.search_button')}</button>
        </div>
      </div>

      <div className="main-header-right">
        <div className="header-actions">
          <Link to="/account" className="account-action" style={{ textDecoration: 'none', color: 'inherit' }}>
            <button className="icon-button icon-button--bordered" aria-label={t('header.accounts')}>
              <i className="fa-regular fa-user icon-svg" />
            </button>
            <span className="account-label">{t('header.accounts')}</span>
          </Link>

          <span className="actions-divider" aria-hidden="true" />

          <button className="icon-button" aria-label="Switch">
            <i className="fa-solid fa-right-left icon-svg" />
            <span className="icon-badge">0</span>
          </button>

          <Link to="/wishlist" className="icon-button" aria-label="Wishlist" style={{ textDecoration: 'none' }}>
            <i className="fa-regular fa-heart icon-svg" />
            <span className="icon-badge">2</span>
          </Link>

          <button className="icon-button" aria-label="Cart" onClick={onCartClick}>
            <i className="fa-solid fa-bag-shopping icon-svg" />
            <span className="icon-badge">2</span>
          </button>

          <button className="menu-button" aria-label="Menu" onClick={onMenuClick}>
            <i className="fa-solid fa-bars menu-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};
