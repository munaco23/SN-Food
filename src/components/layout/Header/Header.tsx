import React, { useCallback, useState } from 'react';
import { TopNoticeBar } from './TopNoticeBar';
import { MainHeader } from './MainHeader';
import { CategoryBar } from './CategoryBar';
import { OffcanvasMenu } from '../OffcanvasMenu/OffcanvasMenu';
import { CartSlider } from '../../CartSlider/CartSlider';
import './Header.css';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openMenu = useCallback(() => setIsMenuOpen(true), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  
  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  return (
    <header className="header-root">
      <TopNoticeBar />
      <MainHeader onMenuClick={openMenu} onCartClick={openCart} />
      <CategoryBar />
      <OffcanvasMenu isOpen={isMenuOpen} onClose={closeMenu} onCartClick={openCart} />
      <CartSlider isOpen={isCartOpen} onClose={closeCart} />
    </header>
  );
};
