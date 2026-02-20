import React, { useState } from 'react';
import './TeamGrid.css';
import hero1 from '../../../Images/hero1.jpg';

type TeamMember = {
  id: number;
  name: string;
  role: string;
  email: string;
  image: string;
};

const DEPARTMENTS = [
  'MANAGEMENT',
  'PURCHASING AND DEVELOPMENT',
  'PURCHASE',
  'EUROPE SALES',
  'SALES - MILANO',
  'SALES - BRESCIA',
  'SALES - BOLOGNA',
  'SALES - NAPOLI',
  'CONTABILITA - ACCOUNTS',
];

const teamData: Record<string, TeamMember[]> = {
  'MANAGEMENT': [
    { id: 1, name: 'JAWAD SARWAR CHEEMA', role: 'CEO', email: 'jawad@freshtropical.it', image: hero1 },
    { id: 2, name: 'GHULAM SARWAR CHEEMA', role: 'PRESIDENT', email: 'ghulam@freshtropical.it', image: hero1 },
    { id: 3, name: 'SHAHZAD SARWAR CHEEMA', role: 'CFO', email: 'commercial@freshtropical.it', image: hero1 },
  ],
  'PURCHASING AND DEVELOPMENT': [],
  'PURCHASE': [],
  'EUROPE SALES': [],
  'SALES - MILANO': [],
  'SALES - BRESCIA': [],
  'SALES - BOLOGNA': [],
  'SALES - NAPOLI': [],
  'CONTABILITA - ACCOUNTS': [],
};

export const TeamGrid: React.FC = () => {
  const [activeDept, setActiveDept] = useState('MANAGEMENT');

  const currentMembers = teamData[activeDept] || [];

  return (
    <section className="team-grid-sec">
      <div className="team-grid-inner">
        <h2 className="team-grid-main-title">Meet the team.</h2>
        
        <div className="team-tabs">
          {DEPARTMENTS.map((dept) => (
            <button
              key={dept}
              className={`team-tab ${activeDept === dept ? 'active' : ''}`}
              onClick={() => setActiveDept(dept)}
            >
              {dept}
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
                <p className="team-card-role">{m.role}</p>
                <a href={`mailto:${m.email}`} className="team-card-email">{m.email}</a>
              </div>
            ))
          ) : (
            <p className="team-empty">No members found for this department.</p>
          )}
        </div>
      </div>
    </section>
  );
};
