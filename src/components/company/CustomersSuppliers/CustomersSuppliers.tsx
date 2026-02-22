import React from 'react';
import { useTranslation } from 'react-i18next';
import './CustomersSuppliers.css';
import CustImg from '../../../Images/hero2.jpg';
import SuppImg from '../../../Images/hero1.jpg';

export const CustomersSuppliers: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="cust-supp">
      <div className="cust-supp-inner">
        <div className="cust-supp-grid">
          {/* Customers Card */}
          <div className="cust-supp-card">
            <div className="cs-img-wrap">
              <img src={CustImg} alt="Customers" />
            </div>
            <div className="cs-info">
              <h2 className="cs-title">{t('company.customers_suppliers.customers_title')}</h2>
              <p className="cs-text">
                {t('company.customers_suppliers.customers_text')}
              </p>
              <button className="cs-link-btn" type="button">{t('company.customers_suppliers.learn_more')}</button>
            </div>
          </div>

          {/* Suppliers Card */}
          <div className="cust-supp-card">
            <div className="cs-img-wrap">
              <img src={SuppImg} alt="Suppliers" />
            </div>
            <div className="cs-info">
              <h2 className="cs-title">{t('company.customers_suppliers.suppliers_title')}</h2>
              <p className="cs-text">
                {t('company.customers_suppliers.suppliers_text')}
              </p>
              <button className="cs-link-btn" type="button">{t('company.customers_suppliers.learn_more')}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
