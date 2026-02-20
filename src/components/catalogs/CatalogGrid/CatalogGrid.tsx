import React from 'react';
import './CatalogGrid.css';
import hero1 from '../../../Images/hero1.jpg';
import hero2 from '../../../Images/hero2.jpg';

type CatalogItem = {
  id: number;
  title: string;
  icon: string;
  image: string;
};

const catalogs: CatalogItem[] = [
  { id: 1, title: 'Complete catalog', icon: 'leaf', image: hero1 },
  { id: 2, title: 'Fresh', icon: 'carrot', image: hero2 },
  { id: 3, title: 'Meat', icon: 'drumstick-bite', image: hero1 },
  { id: 4, title: 'Drinks', icon: 'bottle-water', image: hero2 },
  { id: 5, title: 'Tea', icon: 'mug-hot', image: hero1 },
  { id: 6, title: 'Dairy', icon: 'cow', image: hero2 },
  { id: 7, title: 'Ghee', icon: 'butter', image: hero1 },
  { id: 8, title: 'Noodles', icon: 'bowl-food', image: hero2 },
];

export const CatalogGrid: React.FC = () => {
  return (
    <section className="catalog-grid-sec">
      <div className="catalog-grid-inner">
        <h2 className="catalog-main-title">Product catalogues</h2>
        
        <div className="catalog-grid">
          {catalogs.map((cat) => (
            <div key={cat.id} className="catalog-card">
              <div className="catalog-card-book">
                <img src={cat.image} alt={cat.title} className="catalog-card-img" />
                <div className="catalog-card-label">
                   {/* Simplified representation of the vertical label in image */}
                </div>
              </div>
              <div className="catalog-card-footer">
                <i className={`fa-solid fa-${cat.icon}`} />
                <span>{cat.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
