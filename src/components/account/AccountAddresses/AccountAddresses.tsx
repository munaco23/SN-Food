import React from 'react';
import { useTranslation } from 'react-i18next';
import './AccountAddresses.css';

export const AccountAddresses: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="account-panel">
      <h2 className="panel-title">{t('account_page.addresses.title')}</h2>
      <p className="panel-desc">{t('account_page.addresses.desc')}</p>
      <div className="address-grid">
        <div className="address-card">
          <div className="address-head">
            <h3>{t('account_page.addresses.billing')}</h3>
            <button className="edit-link">{t('account_page.addresses.edit')}</button>
          </div>
          <div className="address-body">
            <p><strong>SN Food Distribution</strong></p>
            <p>262 rue des Bouleaux</p>
            <p>Bloc 5 & 6</p>
            <p>59860 Bruay-sur-l’Escaut</p>
            <p>France</p>
          </div>
        </div>
        <div className="address-card">
          <div className="address-head">
            <h3>{t('account_page.addresses.shipping')}</h3>
            <button className="edit-link">{t('account_page.addresses.edit')}</button>
          </div>
          <div className="address-body">
            <p className="placeholder-text">{t('account_page.addresses.placeholder')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
