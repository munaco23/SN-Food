import React from 'react';
import './ValuesSection.css';
import TeamImg from '../../../Images/hero1.jpg';

export const ValuesSection: React.FC = () => {
  return (
    <section className="vals" aria-label="Company values">
      <div className="vals-inner">
        <div className="vals-left">
          <h2 className="vals-title">The values that have guided us for 20 years</h2>
          <div className="vals-sub">Leader in Italy for ethnic food</div>
          <p className="vals-text">
            Fresh Tropical srl by Jawad is a highly qualified company for the preservation and distribution of any ethnic
            specialty. We care about the well-being and success of each person who works with us. We guarantee high
            standards and a safe and person-friendly work environment. We pursue excellence in everything we do. We
            include and give voice to every opinion. We respect and listen to our people. We give our employees the
            opportunity to make decisions that improve their work and that benefit our customers and our company.
          </p>
          <button className="vals-link" type="button">Discover our team</button>
        </div>

        <div className="vals-right" aria-hidden="true">
          <img className="vals-img" src={TeamImg} alt="" />
        </div>
      </div>
    </section>
  );
};
