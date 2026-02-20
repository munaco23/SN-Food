import React from 'react';
import './TeamValues.css';
import hero2 from '../../../Images/hero2.jpg';

export const TeamValues: React.FC = () => {
  return (
    <section className="team-vals">
      <div className="team-vals-inner">
        <div className="team-vals-content">
          <h2 className="team-vals-title">The values that have guided us for 20 years</h2>
          <h3 className="team-vals-sub">Leader in Italy for ethnic food</h3>
          <div className="team-vals-text">
            <p>
              Fresh Tropical srl by Jawad is a highly qualified company for the conservation and distribution of any ethnic specialty. 
              We care about the well-being and success of every person who works with us. 
              We guarantee high standards and a safe and people-friendly working environment.
            </p>
            <p>
              We pursue excellence in everything we do. We include and give voice to every opinion. 
              We respect and listen to our people. We empower our employees to make decisions that improve their work and benefit our customers and our company.
            </p>
          </div>
        </div>
        <div className="team-vals-image">
          <img src={hero2} alt="Our values in action" />
        </div>
      </div>
    </section>
  );
};
