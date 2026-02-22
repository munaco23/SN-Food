import React from 'react';
import { useTranslation } from 'react-i18next';
import './AccountSidebar.css';

type Tab = 'dashboard' | 'orders' | 'profile' | 'addresses';

interface AccountSidebarProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export const AccountSidebar: React.FC<AccountSidebarProps> = ({ activeTab, onTabChange }) => {
  const { t } = useTranslation();

  return (
    <aside className="account-sidebar">
      <nav className="account-nav">
        <button 
          className={activeTab === 'dashboard' ? 'active' : ''} 
          onClick={() => onTabChange('dashboard')}
        >
          <i className="fa-solid fa-gauge-high"></i> {t('account_page.sidebar.dashboard')}
        </button>
        <button 
          className={activeTab === 'orders' ? 'active' : ''} 
          onClick={() => onTabChange('orders')}
        >
          <i className="fa-solid fa-cart-arrow-down"></i> {t('account_page.sidebar.orders')}
        </button>
        <button 
          className={activeTab === 'addresses' ? 'active' : ''} 
          onClick={() => onTabChange('addresses')}
        >
          <i className="fa-solid fa-location-dot"></i> {t('account_page.sidebar.addresses')}
        </button>
        <button 
          className={activeTab === 'profile' ? 'active' : ''} 
          onClick={() => onTabChange('profile')}
        >
          <i className="fa-solid fa-user"></i> {t('account_page.sidebar.details')}
        </button>
        <button className="logout-link">
          <i className="fa-solid fa-right-from-bracket"></i> {t('account_page.sidebar.logout')}
        </button>
      </nav>
    </aside>
  );
};
