import React from 'react';
import { useTranslation } from 'react-i18next';
import './Wishlist.css';
import { Header } from '../../components/layout/Header/Header';
import { Footer } from '../../components/layout/Footer/Footer';
import Logo from '../../Images/Logo.jpeg';
import { Link } from 'react-router-dom';

const DUMMY_WISHLIST_ITEMS = [
  {
    id: '1',
    name: 'GK GINGER CANDY ORANGE 24X85G',
    code: '12140',
    price: '€ 12.50',
    brand: 'Gold Kili',
    category: 'Tea/Herbal teas',
    image: Logo
  },
  {
    id: '2',
    name: 'DOUX CHICKEN BURGER 100g 10x1kg',
    code: '6360',
    price: '€ 45.00',
    brand: 'Doux',
    category: 'Frozen',
    image: Logo
  }
];

export const Wishlist: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="wishlist-page">
      <Header />
      <main className="wishlist-main">
        <div className="wishlist-container">
          <div className="wishlist-header">
            <h1 className="wishlist-title">{t('wishlist_page.title')}</h1>
            <p className="wishlist-count">{t('wishlist_page.item_count', { count: DUMMY_WISHLIST_ITEMS.length })}</p>
          </div>

          {DUMMY_WISHLIST_ITEMS.length > 0 ? (
            <div className="wishlist-grid">
              {DUMMY_WISHLIST_ITEMS.map((item) => (
                <div key={item.id} className="wishlist-card">
                  <div className="wishlist-card-img">
                    <img src={item.image} alt={item.name} />
                    <button
                      className="remove-wishlist-btn"
                      title={t('wishlist_page.remove')}
                      aria-label={t('wishlist_page.remove')}
                    >
                      <i className="fa-solid fa-xmark" />
                    </button>
                  </div>
                  <div className="wishlist-card-info">
                    <span className="item-category">{item.category}</span>
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-code">{t('wishlist_page.code_prefix')} {item.code}</p>
                    <div className="item-footer">
                      <span className="item-price">{item.price}</span>
                      <button className="wishlist-add-cart">
                        <i className="fa-solid fa-bag-shopping" />
                        {t('wishlist_page.add_to_cart')}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-wishlist">
              <i className="fa-regular fa-heart empty-icon" />
              <h2>{t('wishlist_page.empty.title')}</h2>
              <p>{t('wishlist_page.empty.text')}</p>
              <Link to="/new-arrivals" className="shop-now-btn">{t('wishlist_page.empty.cta')}</Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};
