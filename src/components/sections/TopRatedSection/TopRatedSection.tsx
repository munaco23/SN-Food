import React, { useMemo } from 'react';
import './TopRatedSection.css';
import Img1 from '../../../Images/hero1.jpg';
import Img2 from '../../../Images/hero2.jpg';

type Product = {
  id: string;
  name: string;
  variant: string;
  code: string;
  tag: string;
  imageSrc: string;
  price: string;
  oldPrice?: string;
  discount?: string;
};

export const TopRatedSection: React.FC = () => {
  const topRatedProducts: Product[] = useMemo(() => [
    { id: 'tr1', name: 'GK GINGER CANDY PASSION', variant: '24X85G', code: 'cod. 12141', tag: 'Beverage', imageSrc: Img1, price: '6.00€ - 12.00$', discount: '-33%' },
    { id: 'tr2', name: 'Delicious Lay\'s Potato Chips', variant: 'CLASSIC', code: 'cod. 12140', tag: 'Beverage', imageSrc: Img2, price: '12.00$', oldPrice: '21.00$' },
    { id: 'tr3', name: 'SunChips Minis, Garden Salsa', variant: 'MINIS', code: 'cod. 12139', tag: 'Beverage', imageSrc: Img1, price: '22.00$' },
    { id: 'tr4', name: 'Gatorade G Zero Sugar Thirst', variant: 'VARIETY PACK', code: 'cod. 9669', tag: 'Beverage', imageSrc: Img2, price: '6.00$ - 12.00$' },
    { id: 'tr5', name: 'Green Tostitos Bite', variant: 'SIZE CHIPS', code: 'cod. 12170', tag: 'Beverage', imageSrc: Img1, price: '14.00$', oldPrice: '24.00$' },
    { id: 'tr6', name: 'Simply Lemonade', variant: '1.5L', code: 'cod. 12171', tag: 'Beverage', imageSrc: Img2, price: '15.00$', oldPrice: '26.00$' },
    { id: 'tr7', name: 'Mirinda Orange No', variant: '330ML', code: 'cod. 12172', tag: 'Beverage', imageSrc: Img1, price: '14.00$', oldPrice: '26.00$' },
    { id: 'tr8', name: 'Fresh Fruits Assorted', variant: 'MIXED', code: 'cod. 12173', tag: 'Beverage', imageSrc: Img2, price: '18.00$' },
  ], []);

  const bestSellingProducts: Product[] = useMemo(() => [
    { id: 'bs1', name: 'Garden Fresh Juicy...', variant: '', code: '', tag: '', imageSrc: Img1, price: '54.00$' },
    { id: 'bs2', name: 'Great Value Wild Ca', variant: '', code: '', tag: '', imageSrc: Img2, price: '34.00$' },
    { id: 'bs3', name: 'Oui by Yoplait Mocha...', variant: '', code: '', tag: '', imageSrc: Img1, price: '12.00$', oldPrice: '14.00$' },
    { id: 'bs4', name: 'Nutrition Grilled Steak...', variant: '', code: '', tag: '', imageSrc: Img2, price: '56.00$', oldPrice: '78.00$' },
  ], []);

  return (
    <section className="top-rated-section">
      <div className="top-rated-container">
        <div className="top-rated-left">
          <div className="section-header">
            <h2 className="section-title">Top Products</h2>
            <button className="see-more-btn">See More &gt;</button>
          </div>
          <div className="products-grid">
            {topRatedProducts.map((p) => (
              <article key={p.id} className="tr-card">
                <div className="tr-image-wrap">
                  <div className="tr-tag">{p.tag}</div>
                  <img src={p.imageSrc} alt={p.name} className="tr-image" />
                  <div className="tr-actions-sidebar">
                    <button className="tr-action-btn" aria-label="Add to wishlist"><i className="fa-regular fa-heart" /></button>
                    <button className="tr-action-btn" aria-label="Add to cart"><i className="fa-solid fa-bag-shopping" /></button>
                    <button className="tr-action-btn" aria-label="Compare"><i className="fa-solid fa-right-left" /></button>
                    <button className="tr-action-btn" aria-label="Quick view"><i className="fa-solid fa-magnifying-glass" /></button>
                  </div>
                </div>
                <div className="tr-body">
                  <div className="tr-price-row">
                    <span className="tr-current-price">{p.price}</span>
                    {p.oldPrice && <span className="tr-old-price">{p.oldPrice}</span>}
                    {p.discount && <span className="tr-discount-badge">{p.discount}</span>}
                  </div>
                  <h3 className="tr-name">{p.name}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="top-rated-right">
          <div className="sidebar-header">
            <h2 className="sidebar-title">Best Selling</h2>
          </div>
          <div className="best-selling-list">
            {bestSellingProducts.map((p) => (
              <div key={p.id} className="bs-item">
                <div className="bs-image-wrap">
                  <img src={p.imageSrc} alt={p.name} className="bs-image" />
                </div>
                <div className="bs-content">
                  <h4 className="bs-name">{p.name}</h4>
                  <div className="bs-price-row">
                    <span className="bs-current-price">{p.price}</span>
                    {p.oldPrice && <span className="bs-old-price">{p.oldPrice}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
};
