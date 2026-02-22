import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ALL_CATEGORIES = [
  { label: 'Beverage', icon: 'fa-solid fa-mug-saucer' },
  { label: 'Desserts', icon: 'fa-solid fa-ice-cream' },
  { label: 'Drinks & Juice', icon: 'fa-solid fa-bottle-water' },
  { label: 'Fish & Meats', icon: 'fa-solid fa-fish-fins' },
  { label: 'Fresh Fruits', icon: 'fa-solid fa-apple-whole' },
  { label: 'Pets & Animals', icon: 'fa-solid fa-paw' },
  { label: 'Toys', icon: 'fa-solid fa-puzzle-piece' },
  { label: 'Vegetables', icon: 'fa-solid fa-carrot' },
];

const NAV_ITEMS = [
  { key: 'home', path: '/' },
  {
    key: 'pages',
    path: '#',
    children: [
      { key: 'company', path: '/company' },
      { key: 'team', path: '/team' },
      { key: 'customers', path: '/customers' },
      { key: 'vendors', path: '/vendors' },
    ],
  },
  { key: 'catalogs', path: '/catalogs' },
  { key: 'brands', path: '/brands' },
  { key: 'events', path: '/events' },
  { key: 'new_arrivals', path: '/new-arrivals' },
  { key: 'contact', path: '/contact' },
];

export const CategoryBar: React.FC = () => {
  const { t } = useTranslation();
  const navScrollRef = useRef<HTMLDivElement>(null);
  const allCatsRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAllCatsOpen, setIsAllCatsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (allCatsRef.current && !allCatsRef.current.contains(event.target as Node)) {
        setIsAllCatsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (navScrollRef.current?.offsetLeft || 0));
    setScrollLeft(navScrollRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (navScrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Scroll speed
    if (navScrollRef.current) {
      navScrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <nav className="category-bar" aria-label={t('nav.pages')}>
      <div className="category-bar-inner">
        <div
          className={`all-categories-dropdown${isAllCatsOpen ? ' all-categories-dropdown--open' : ''}`}
          ref={allCatsRef}
          onMouseEnter={() => setIsAllCatsOpen(true)}
          onMouseLeave={() => setIsAllCatsOpen(false)}
        >
          <button
            className="all-categories-pill"
            aria-label={t('categorybar.all_categories')}
            type="button"
            onClick={() => setIsAllCatsOpen((v) => !v)}
            aria-haspopup="menu"
          >
            <span className="all-categories-icon" aria-hidden="true">
              <i className="fa-solid fa-bars" />
            </span>
            <span className="all-categories-text">{t('categorybar.all_categories')}</span>
            <span className="all-categories-caret" aria-hidden="true">
              <i className="fa-solid fa-chevron-down" />
            </span>
          </button>

          <div className="all-categories-menu" role="menu" aria-label={t('categorybar.all_categories')}>
            {ALL_CATEGORIES.map((c) => (
              <button key={c.label} className="all-categories-item" type="button" role="menuitem">
                <i className={`all-categories-item-icon ${c.icon}`} aria-hidden="true" />
                <span className="all-categories-item-label">{c.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div
          className="category-nav"
          ref={navScrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {NAV_ITEMS.map((item) => {
            if (item.path === '#' && item.key === 'pages' && item.children) {
              return (
                <div key={item.key} className="category-nav-item category-nav-item--dropdown">
                  <button
                    className="category-nav-link"
                    type="button"
                    aria-label={t(`nav.${item.key}`)}
                    aria-haspopup="menu"
                  >
                    <span>{t(`nav.${item.key}`)}</span>
                    <i className="fa-solid fa-chevron-down category-nav-caret" aria-hidden="true" />
                  </button>

                  <div className="category-nav-menu" role="menu">
                    {item.children.map((child) => (
                      <Link
                        key={child.key}
                        to={child.path}
                        className="category-nav-menu-item"
                        role="menuitem"
                      >
                        {t(`nav.${child.key}`)}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.key}
                to={item.path}
                className="category-nav-item category-nav-link"
                style={{ textDecoration: 'none' }}
              >
                {t(`nav.${item.key}`)}
              </Link>
            );
          })}
        </div>

        <div className="category-promo" aria-label={t('categorybar.weekly_discount')}>
          <i className="fa-solid fa-tag category-promo-icon" aria-hidden="true" />
          <span className="category-promo-text">{t('categorybar.weekly_discount')}</span>
        </div>
      </div>
    </nav>
  );
};
