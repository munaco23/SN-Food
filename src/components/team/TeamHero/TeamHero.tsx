import React from 'react';
import { useTranslation } from 'react-i18next';
import './TeamHero.css';
import hero1 from '../../../Images/hero1.jpg';
import hero2 from '../../../Images/hero2.jpg';

export const TeamHero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="team-hero">
      <div className="team-hero-inner">
        <h1 className="team-hero-title">{t('team.hero.title')}</h1>
        <div className="team-hero-grid">
          <div className="team-hero-item main">
            <img src={hero1} alt="Team member" />
          </div>
          <div className="team-hero-item">
            <img src={hero2} alt="Team meeting" />
          </div>
          <div className="team-hero-item">
            <img src={hero1} alt="Reception area" />
          </div>
        </div>
      </div>
    </section>
  );
};
