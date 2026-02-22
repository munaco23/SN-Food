import React from 'react';
import { useTranslation } from 'react-i18next';
import './CompanyStrengths.css';
import Img1 from '../../../Images/hero1.jpg';
import Img2 from '../../../Images/hero2.jpg';
import Img3 from '../../../Images/hero1.jpg';

export const CompanyStrengths: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="comp-strengths" aria-label={t('company.strengths.aria')}>
      <div className="comp-strengths-inner">
        <div className="comp-strengths-head">
          <div className="comp-strengths-headLeft">
            <h2 className="comp-strengths-title">{t('company.strengths.title')}</h2>
            <div className="comp-strengths-sub">{t('company.strengths.sub')}</div>
          </div>

          <button className="comp-strengths-cta" type="button">{t('company.strengths.cta')}</button>
        </div>

        <p className="comp-strengths-text">
          {t('company.strengths.text')}
        </p>

        <div className="comp-strengths-grid">
          <article className="comp-strengths-card">
            <img className="comp-strengths-img" src={Img1} alt="Shipping" />
            <p className="comp-strengths-cardText">
              {t('company.strengths.card1')}
            </p>
          </article>

          <article className="comp-strengths-card">
            <img className="comp-strengths-img" src={Img2} alt="Marketing" />
            <p className="comp-strengths-cardText">
              {t('company.strengths.card2')}
            </p>
          </article>

          <article className="comp-strengths-card">
            <img className="comp-strengths-img" src={Img3} alt="Exclusive products" />
            <p className="comp-strengths-cardText">{t('company.strengths.card3')}</p>
          </article>
        </div>
      </div>
    </section>
  );
};
