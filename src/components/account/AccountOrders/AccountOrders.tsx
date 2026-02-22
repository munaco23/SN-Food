import React from 'react';
import { useTranslation } from 'react-i18next';
import './AccountOrders.css';

export const AccountOrders: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="account-panel">
      <h2 className="panel-title">{t('account_page.orders.title')}</h2>
      <div className="empty-state">
        <i className="fa-solid fa-cart-shopping"></i>
        <p>{t('account_page.orders.empty')}</p>
        <button className="browse-btn">{t('account_page.orders.browse')}</button>
      </div>
    </div>
  );
};
