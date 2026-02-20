import React, { useMemo } from 'react';
import './BrandsGrid.css';
import Logo from '../../../Images/Logo.jpeg';

type Brand = {
  id: string;
  name: string;
  imageSrc: string;
};

export const BrandsGrid: React.FC = () => {
  const brands = useMemo<Brand[]>(
    () =>
      Array.from({ length: 16 }).map((_, i) => ({
        id: `b${i + 1}`,
        name: `Brand ${i + 1}`,
        imageSrc: Logo,
      })),
    []
  );

  return (
    <section className="bg" aria-label="All our brands">
      <div className="bg-inner">
        <header className="bg-head">
          <h2 className="bg-title">All our brands</h2>
          <button className="bg-see" type="button">See all</button>
        </header>

        <p className="bg-sub">
          Fresh Tropical deals with dozens of international brands, from the most well-known to the local and typical
          ones of a particular country. With us you can find everything you want!
        </p>

        <div className="bg-grid">
          {brands.map((b) => (
            <button key={b.id} className="bg-card" type="button" aria-label={b.name}>
              <img className="bg-logo" src={b.imageSrc} alt={b.name} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
