import React from 'react';
import { useTranslation } from 'react-i18next';
import './AccountDetails.css';

export const AccountDetails: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="account-panel">
      <h2 className="panel-title">{t('account_page.details.title')}</h2>
      <form className="account-form">
        <div className="form-row">
          <div className="form-group">
            <label>{t('account_page.details.first_name')} *</label>
            <input type="text" defaultValue="SN" />
          </div>
          <div className="form-group">
            <label>{t('account_page.details.last_name')} *</label>
            <input type="text" defaultValue="Member" />
          </div>
        </div>
        <div className="form-group">
          <label>{t('account_page.details.display_name')} *</label>
          <input type="text" defaultValue="SN Member" />
          <small>{t('account_page.details.display_hint')}</small>
        </div>
        <div className="form-group">
          <label>{t('account_page.details.email')} *</label>
          <input type="email" defaultValue="contact@snfood.fr" />
        </div>
        <fieldset className="password-fieldset">
          <legend>{t('account_page.details.password_change')}</legend>
          <div className="form-group">
            <label>{t('account_page.details.current_password')}</label>
            <input type="password" />
          </div>
          <div className="form-group">
            <label>{t('account_page.details.new_password')}</label>
            <input type="password" />
          </div>
          <div className="form-group">
            <label>{t('account_page.details.confirm_new_password')}</label>
            <input type="password" />
          </div>
        </fieldset>
        <button type="submit" className="save-btn">{t('account_page.details.save_changes')}</button>
      </form>
    </div>
  );
};
