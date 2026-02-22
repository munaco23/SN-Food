import React from 'react';
import { useTranslation } from 'react-i18next';
import './AccountDashboard.css';

interface AccountDashboardProps {
  onTabChange: (tab: 'orders' | 'addresses' | 'profile') => void;
}

export const AccountDashboard: React.FC<AccountDashboardProps> = ({ onTabChange }) => {
  const { t } = useTranslation();

  return (
    <div className="account-panel">
      <h2 className="panel-title">{t('account_page.dashboard.title')}</h2>
      <p className="panel-welcome">{t('account_page.dashboard.hello')} <strong>{t('account_page.dashboard.member')}</strong>!</p>
      <p className="panel-desc">
        {t('account_page.dashboard.desc')}
      </p>
      <div className="dashboard-cards">
        <div className="dash-card" onClick={() => onTabChange('orders')}>
          <i className="fa-solid fa-box-open"></i>
          <span>{t('account_page.orders.title')}</span>
        </div>
        <div className="dash-card" onClick={() => onTabChange('addresses')}>
          <i className="fa-solid fa-location-dot"></i>
          <span>{t('account_page.addresses.title')}</span>
        </div>
        <div className="dash-card" onClick={() => onTabChange('profile')}>
          <i className="fa-solid fa-user-gear"></i>
          <span>{t('account_page.details.title')}</span>
        </div>
      </div>
    </div>
  );
};
