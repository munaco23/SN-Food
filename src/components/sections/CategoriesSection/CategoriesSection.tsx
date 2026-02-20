import React, { useMemo } from 'react';
import './CategoriesSection.css';

type Category = {
  id: string;
  label: string;
  iconClass: string;
  color: 'blue' | 'red' | 'orange' | 'green' | 'yellow' | 'lime';
};

export const CategoriesSection: React.FC = () => {
  const categories = useMemo<Category[]>(
    () => [
      { id: 'c1', label: 'Dairy & Eggs', iconClass: 'fa-solid fa-bottle-droplet', color: 'blue' },
      { id: 'c2', label: 'Meat & Seafood', iconClass: 'fa-solid fa-fish-fins', color: 'red' },
      { id: 'c3', label: 'Bakery', iconClass: 'fa-solid fa-cookie-bite', color: 'orange' },
      { id: 'c4', label: 'Organic Products', iconClass: 'fa-solid fa-leaf', color: 'green' },
      { id: 'c5', label: 'Fresh Eggs', iconClass: 'fa-solid fa-egg', color: 'yellow' },
      { id: 'c6', label: 'Salads & Ready Meals', iconClass: 'fa-solid fa-bowl-food', color: 'lime' },
      { id: 'c7', label: 'Dairy & Eggs', iconClass: 'fa-solid fa-bottle-droplet', color: 'blue' },
      { id: 'c8', label: 'Meat & Seafood', iconClass: 'fa-solid fa-fish-fins', color: 'red' },
      { id: 'c9', label: 'Bakery', iconClass: 'fa-solid fa-cookie-bite', color: 'orange' },
      { id: 'c10', label: 'Organic Products', iconClass: 'fa-solid fa-leaf', color: 'green' },
      { id: 'c11', label: 'Fresh Eggs', iconClass: 'fa-solid fa-egg', color: 'yellow' },
      { id: 'c12', label: 'Salads & Ready Meals', iconClass: 'fa-solid fa-bowl-food', color: 'lime' },
      { id: 'c13', label: 'Dairy & Eggs', iconClass: 'fa-solid fa-bottle-droplet', color: 'blue' },
      { id: 'c14', label: 'Meat & Seafood', iconClass: 'fa-solid fa-fish-fins', color: 'red' },
      { id: 'c15', label: 'Bakery', iconClass: 'fa-solid fa-cookie-bite', color: 'orange' },
      { id: 'c16', label: 'Organic Products', iconClass: 'fa-solid fa-leaf', color: 'green' },
      { id: 'c17', label: 'Fresh Eggs', iconClass: 'fa-solid fa-egg', color: 'yellow' },
      { id: 'c18', label: 'Salads & Ready Meals', iconClass: 'fa-solid fa-bowl-food', color: 'lime' },
    ],
    []
  );

  return (
    <section className="cats" aria-label="Categories">
      <div className="cats-inner">
        <div className="cats-head">
          <h2 className="cats-title">Colors and flavors from around the world</h2>
          <p className="cats-subtitle">
            Thousands of products from all over the world on your table. A single company with every product category:
            Fresh, Dry, Frozen and Cosmetics
          </p>
        </div>

        <div className="cats-grid">
          {categories.map((c) => (
            <button key={c.id} className="cat-card" type="button" aria-label={c.label}>
              <span className="cat-iconWrap" data-color={c.color} aria-hidden="true">
                <i className={c.iconClass} />
              </span>
              <span className="cat-label">{c.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
