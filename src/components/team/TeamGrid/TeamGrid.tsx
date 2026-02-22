import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './TeamGrid.css';
import hero1 from '../../../Images/hero1.jpg';

type TeamMember = {
  id: number;
  name: string;
  role: string;
  email: string;
  image: string;
};

const DEPARTMENTS = ['direction', 'sales', 'purchasing', 'logistics', 'accounting'] as const;

const teamData: Record<(typeof DEPARTMENTS)[number], TeamMember[]> = {
  direction: [
    { id: 1, name: 'SN MANAGEMENT', role: 'director', email: 'contact@snfood.fr', image: hero1 },
  ],
  sales: [],
  purchasing: [],
  logistics: [],
  accounting: [],
};

export const TeamGrid: React.FC = () => {
  const { t } = useTranslation();
  const [activeDept, setActiveDept] = useState<(typeof DEPARTMENTS)[number]>('direction');

  const currentMembers = teamData[activeDept] || [];

  return (
    <section className="team-grid-sec">
      <div className="team-grid-inner">
        <h2 className="team-grid-main-title">{t('team.grid.title')}</h2>
        
        <div className="team-tabs">
          {DEPARTMENTS.map((dept) => (
            <button
              key={dept}
              className={`team-tab ${activeDept === dept ? 'active' : ''}`}
              onClick={() => setActiveDept(dept)}
            >
              {t(`team.departments.${dept}`)}
            </button>
          ))}
        </div>

        <div className="team-grid">
          {currentMembers.length > 0 ? (
            currentMembers.map((m) => (
              <div key={m.id} className="team-card">
                <div className="team-card-circle">
                  <img src={m.image} alt={m.name} />
                </div>
                <h3 className="team-card-name">{m.name}</h3>
                <p className="team-card-role">{t(`team.roles.${m.role}`)}</p>
                <a href={`mailto:${m.email}`} className="team-card-email">{m.email}</a>
              </div>
            ))
          ) : (
            <p className="team-empty">{t('team.grid.empty')}</p>
          )}
        </div>
      </div>
    </section>
  );
};
