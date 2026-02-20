import React from 'react';
import './RecommendedProducts.css';
import Logo from '../../../Images/Logo.jpeg';

const recommendations = [
  { id: 'r1', name: 'INST.GK GINGER LEMON DRINK 20\'S 360G BAG', code: '5248', category: 'Tea/Herbal teas', image: Logo },
  { id: 'r2', name: 'INST.GK GINGER DRINK 10\'S 180G', code: '7492', category: 'Tea/Herbal teas', image: Logo },
  { id: 'r3', name: 'INST.GK GREEN TEA MATCHA 10\'S 250G', code: '7493', category: 'Tea/Herbal teas', image: Logo },
  { id: 'r4', name: 'INST.GK GINGER LEMON DRINK 10\'S 180G', code: '7495', category: 'Tea/Herbal teas', image: Logo },
  { id: 'r5', name: 'INST.GK GINGER DRINK 20\'S 12X360G BAG', code: '7498', category: 'Tea/Herbal teas', image: Logo },
];

const weeklyProducts = [
  { id: 'w1', name: 'DOUX CHICKEN BURGER 100g 10x1kg', code: '6360', brand: 'Doux', category: 'Frozen', image: Logo },
  { id: 'w2', name: 'GK GINGER CANDY PASSION 24X85G', code: '12141', brand: 'Gold Kili', category: 'Tea/Herbal teas', image: Logo },
  { id: 'w3', name: 'GK GINGER CANDY ORANGE 24X85G', code: '12140', brand: 'Gold Kili', category: 'Tea/Herbal teas', image: Logo },
  { id: 'w4', name: 'GK GINGER CANDY MANGO 24X85G', code: '12139', brand: 'Gold Kili', category: 'Tea/Herbal teas', image: Logo },
  { id: 'w5', name: 'FAIRTOUCH SHOWER GEL BUTTER & SAFRON 1L', code: '12192', brand: 'FAIRTOUCH', category: 'Cosmetics', image: Logo },
];

export const RecommendedProducts: React.FC = () => {
  return (
    <section className="rp-sec">
      <div className="rp-inner">
        <div className="rp-group">
          <h2 className="rp-main-title">Recommended for you</h2>
          <div className="rp-grid">
            {recommendations.map(p => (
              <div key={p.id} className="rp-card">
                <div className="rp-card-top">
                  <i className="fa-regular fa-heart rp-wish" />
                  <button className="rp-add"><i className="fa-solid fa-plus" /></button>
                  <img src={p.image} alt={p.name} />
                </div>
                <div className="rp-card-info">
                  <h3 className="rp-name">{p.name}</h3>
                  <p className="rp-code">cod. {p.code}</p>
                  <span className="rp-tag">{p.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rp-group weekly">
          <h2 className="rp-main-title">Products of the week</h2>
          <div className="rp-grid">
            {weeklyProducts.map(p => (
              <div key={p.id} className="rp-card">
                <div className="rp-card-top">
                  <i className="fa-regular fa-heart rp-wish" />
                  <button className="rp-add"><i className="fa-solid fa-plus" /></button>
                  <img src={p.image} alt={p.name} />
                </div>
                <div className="rp-card-info">
                  <h3 className="rp-name">{p.name}</h3>
                  <p className="rp-code">cod. {p.code}</p>
                  <p className="rp-brand">{p.brand}</p>
                  <span className="rp-tag">{p.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
