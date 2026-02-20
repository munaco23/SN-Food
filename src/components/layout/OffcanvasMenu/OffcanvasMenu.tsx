import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './OffcanvasMenu.css';

type OffcanvasMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  onCartClick: () => void;
};

const MENU_ITEMS = [
  { label: 'Home', path: '/' },
  { 
    label: 'Pages', 
    path: '#',
    children: [
      { label: 'Company', path: '/company' },
      { label: 'Team', path: '/team' },
      { label: 'Customers', path: '/customers' },
      { label: 'Vendors', path: '/vendors' },
    ]
  },
  { label: 'Catalogs', path: '/catalogs' },
  { label: 'Brands', path: '/brands' },
  { label: 'Events', path: '/events' },
  { label: 'New arrivals', path: '/new-arrivals' },
  { label: 'Contact', path: '/contact' },
];

export const OffcanvasMenu: React.FC<OffcanvasMenuProps> = ({ isOpen, onClose, onCartClick }) => {
  const [isPagesOpen, setIsPagesOpen] = useState(false);

  const togglePages = () => setIsPagesOpen(!isPagesOpen);

  useEffect(() => {
    if (!isOpen) {
      setIsPagesOpen(false);
      return;
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  return (
    <div className={`offcanvas${isOpen ? ' offcanvas--open' : ''}`}>
      <button className="offcanvas-overlay" onClick={onClose} aria-label="Close menu" />

      <aside className="offcanvas-panel" aria-hidden={!isOpen}>
        <div className="offcanvas-rail" aria-hidden="true">
          <button className="rail-close" onClick={onClose} aria-label="Close">
            <i className="fa-solid fa-xmark" />
          </button>

          <div className="rail-icons">
            <button 
              className="rail-icon" 
              aria-label="Cart"
              onClick={() => {
                onClose();
                onCartClick();
              }}
            >
              <i className="fa-solid fa-cart-shopping" />
              <span className="rail-badge">2</span>
            </button>
            <button className="rail-icon" aria-label="Swap">
              <i className="fa-solid fa-right-left" />
              <span className="rail-badge">0</span>
            </button>
            <Link 
              to="/wishlist" 
              className="rail-icon" 
              aria-label="Wishlist"
              onClick={onClose}
              style={{ textDecoration: 'none' }}
            >
              <i className="fa-regular fa-heart" />
              <span className="rail-badge">2</span>
            </Link>
          </div>

          <div className="rail-bottom">
            <button className="rail-social" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f" />
            </button>
            <button className="rail-social" aria-label="Instagram">
              <i className="fa-brands fa-instagram" />
            </button>
            <button className="rail-social" aria-label="TikTok">
              <i className="fa-brands fa-tiktok" />
            </button>
          </div>
        </div>

        <div className="offcanvas-content">
          <div className="offcanvas-top">
            <div className="offcanvas-search">
              <input className="offcanvas-search-input" placeholder="Type Your Products ..." />
              <button className="offcanvas-search-btn" aria-label="Search">
                <i className="fa-solid fa-magnifying-glass" />
              </button>
            </div>
          </div>

          <nav className="offcanvas-nav" aria-label="Menu">
            {MENU_ITEMS.map((item) => (
              <div key={item.label} className="offcanvas-nav-group">
                <div className="offcanvas-nav-row">
                  {item.path === '#' ? (
                    <button 
                      className="offcanvas-nav-item" 
                      onClick={item.label === 'Pages' ? togglePages : undefined}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link 
                      to={item.path} 
                      className="offcanvas-nav-item" 
                      onClick={onClose}
                      style={{ textDecoration: 'none' }}
                    >
                      {item.label}
                    </Link>
                  )}
                  {item.label === 'Pages' && (
                    <button 
                      className={`offcanvas-nav-toggle ${isPagesOpen ? 'offcanvas-nav-toggle--open' : ''}`}
                      onClick={togglePages}
                      aria-label={`${isPagesOpen ? 'Collapse' : 'Expand'} ${item.label}`}
                    >
                      <i className={`fa-solid ${isPagesOpen ? 'fa-minus' : 'fa-plus'}`} />
                    </button>
                  )}
                </div>
                {item.label === 'Pages' && item.children && (
                  <div className={`offcanvas-submenu ${isPagesOpen ? 'offcanvas-submenu--open' : ''}`}>
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path}
                        className="offcanvas-submenu-item"
                        onClick={onClose}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="offcanvas-footer">
            <div className="offcanvas-footer-line">19.02.2026</div>
            <div className="offcanvas-footer-line">23/A Mark Street Road, Newyork City</div>
            <div className="offcanvas-footer-line">info@zillystore.com</div>
            <div className="offcanvas-footer-line">+9888-256-666</div>
          </div>
        </div>
      </aside>
    </div>
  );
};
