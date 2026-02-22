import React from 'react';
import { useTranslation } from 'react-i18next';
import './NewArrivalsGrid.css';
import Logo from '../../../Images/Logo.jpeg';
import { Link } from 'react-router-dom';

type Product = {
  id: string;
  name: string;
  code: string;
  brand: string;
  category: string;
  image: string;
};

const CATEGORIES = [
  { key: 'fresh', name: 'Fresh Products', color: '#f4a414', icon: 'carrot' },
  { key: 'flours', name: 'Assorted Flours', color: '#008b74', icon: 'wheat-awn' },
  { key: 'dairy', name: 'Dairy', color: '#c49a6c', icon: 'cow' },
  { key: 'condiments', name: 'Condiments', color: '#a66e4e', icon: 'bottle-droplet' },
  { key: 'noodles', name: 'Instant Noodles', color: '#1a1a1a', icon: 'bowl-food' },
];

const products: Product[] = [
  // Fresh
  { id: '1', name: 'GARLIC NORMAL WHITE 55/60 9.5KG BOX', code: '677', brand: 'Fresco Generale', category: 'Fresh Products', image: Logo },
  { id: '2', name: 'GREEN LIME 4KG', code: '1006', brand: 'Fresco Generale', category: 'Fresh Products', image: Logo },
  { id: '3', name: 'CORIANDER 10PZ ITALY', code: '1011', brand: 'Fresco Generale', category: 'Fresh Products', image: Logo },
  { id: '4', name: 'CHAYOTE COSTA RICA 8.5KG', code: '1034', brand: 'Fresco Generale', category: 'Fresh Products', image: Logo },
  { id: '5', name: 'MANGO BRAZIL 4KG', code: '1185', brand: 'Fresco Generale', category: 'Fresh Products', image: Logo },
  { id: '6', name: 'PAPAYA YELLOW BRAZIL 4,5KG', code: '1249', brand: 'Fresco Generale', category: 'Fresh Products', image: Logo },
  // Flours
  { id: '7', name: 'RICE FLOUR GRANULOM 20x1KG', code: '4216', brand: 'Pronto', category: 'Assorted Flours', image: Logo },
  { id: '8', name: 'TERRINHA CHEESE BREAD 12X250G', code: '10636', brand: 'Da Terrinha', category: 'Assorted Flours', image: Logo },
  // Dairy
  { id: '9', name: 'PEAK MILK POWDER 12X900G', code: '4368', brand: 'Peak', category: 'Dairy', image: Logo },
  // Noodles
  { id: '10', name: 'NOODLES INDOMIE VEGETABLE 40x75GR', code: '3964', brand: 'Indomie', category: 'Instant Noodles', image: Logo },
  { id: '11', name: 'NOODLES INDOMIE MI GORENG BBQ 40x82GR', code: '8670', brand: 'Indomie', category: 'Instant Noodles', image: Logo },
];

export const NewArrivalsGrid: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="na-grid-sec">
      <div className="na-grid-inner">
        {CATEGORIES.map((cat) => {
          const catProducts = products.filter(p => p.category === cat.name);
          if (catProducts.length === 0) return null;

          const catLabel = t(`new_arrivals_page.categories.${cat.key}`);

          return (
            <div key={cat.name} className="na-cat-section">
              <header className="na-cat-header" style={{ backgroundColor: cat.color }}>
                <div className="na-cat-header-inner">
                  <i className={`fa-solid fa-${cat.icon}`} />
                  <h2 className="na-cat-title">{catLabel}</h2>
                </div>
              </header>

              <div className="na-grid">
                {catProducts.map((prod) => (
                  <Link to={`/product/${prod.id}`} key={prod.id} className="na-card" style={{ textDecoration: 'none' }}>
                    <div className="na-card-top">
                      <button className="na-card-wish" aria-label={t('new_arrivals_page.add_to_wishlist')} onClick={(e) => { e.preventDefault(); /* handle wish */ }}>
                        <i className="fa-regular fa-heart" />
                      </button>
                      <button className="na-card-add" aria-label={t('new_arrivals_page.add_to_cart')} onClick={(e) => { e.preventDefault(); /* handle add */ }}>
                        <i className="fa-solid fa-plus" />
                      </button>
                      <div className="na-card-img">
                        <img src={prod.image} alt={prod.name} />
                      </div>
                    </div>
                    <div className="na-card-info">
                      <h3 className="na-card-name">{prod.name}</h3>
                      <p className="na-card-code">{t('new_arrivals_page.code_prefix')} {prod.code}</p>
                      <p className="na-card-brand">{prod.brand}</p>
                      <span className="na-card-tag">{catLabel}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
