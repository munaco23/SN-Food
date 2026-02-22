import React, { useMemo, useRef, useState } from 'react';
import './ProductsOfWeek.css';
import ProductImg1 from '../../../Images/hero1.jpg';
import ProductImg2 from '../../../Images/hero2.jpg';

type Product = {
  id: string;
  name: string;
  variant: string;
  code: string;
  brand: string;
  tag: string;
  imageSrc: string;
};

export const ProductsOfWeek: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollerRef.current) return;
    isDragging.current = true;
    scrollerRef.current.classList.add('dragging');
    startX.current = e.pageX - scrollerRef.current.offsetLeft;
    scrollLeftStart.current = scrollerRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollerRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollerRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    scrollerRef.current?.classList.remove('dragging');
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    scrollerRef.current?.classList.remove('dragging');
  };

  const products: Product[] = useMemo(
    () => [
      {
        id: 'p1',
        name: 'GK GINGER CANDY',
        variant: 'PASSION 24X85G',
        code: 'cod. 12141',
        brand: 'Gold Kili',
        tag: 'Tea/Herbal teas',
        imageSrc: ProductImg1,
      },
      {
        id: 'p2',
        name: 'GK GINGER CANDY',
        variant: 'ORANGE 24X85G',
        code: 'cod. 12140',
        brand: 'Gold Kili',
        tag: 'Tea/Herbal teas',
        imageSrc: ProductImg2,
      },
      {
        id: 'p3',
        name: 'GK GINGER CANDY',
        variant: 'MANGO 24X85G',
        code: 'cod. 12139',
        brand: 'Gold Kili',
        tag: 'Tea/Herbal teas',
        imageSrc: ProductImg1,
      },
      {
        id: 'p4',
        name: 'LATTE RAYBY RAMANDAN',
        variant: '8X1LT',
        code: 'cod. 9669',
        brand: 'Luxlait',
        tag: 'Dairy',
        imageSrc: ProductImg2,
      },
      {
        id: 'p5',
        name: 'FARINA DAWAT WHOLE',
        variant: 'WHEAT 2X10KG',
        code: 'cod. 12170',
        brand: 'Dawat',
        tag: 'Flours',
        imageSrc: ProductImg1,
      },
      {
        id: 'p6',
        name: 'GK GINGER CANDY',
        variant: 'PASSION 24X85G',
        code: 'cod. 12141',
        brand: 'Gold Kili',
        tag: 'Tea/Herbal teas',
        imageSrc: ProductImg1,
      },
      {
        id: 'p7',
        name: 'GK GINGER CANDY',
        variant: 'ORANGE 24X85G',
        code: 'cod. 12140',
        brand: 'Gold Kili',
        tag: 'Tea/Herbal teas',
        imageSrc: ProductImg2,
      },
      {
        id: 'p8',
        name: 'GK GINGER CANDY',
        variant: 'MANGO 24X85G',
        code: 'cod. 12139',
        brand: 'Gold Kili',
        tag: 'Tea/Herbal teas',
        imageSrc: ProductImg1,
      },
      {
        id: 'p9',
        name: 'LATTE RAYBY RAMANDAN',
        variant: '8X1LT',
        code: 'cod. 9669',
        brand: 'Luxlait',
        tag: 'Dairy',
        imageSrc: ProductImg2,
      },
      {
        id: 'p10',
        name: 'FARINA DAWAT WHOLE',
        variant: 'WHEAT 2X10KG',
        code: 'cod. 12170',
        brand: 'Dawat',
        tag: 'Flours',
        imageSrc: ProductImg1,
      },
    ],
    []
  );

  const scrollByCards = (direction: 'left' | 'right') => {
    const el = scrollerRef.current;
    if (!el) return;

    // Scroll exactly one card at a time (300px includes card width + gap)
    const cardWidth = 300;
    el.scrollBy({ left: direction === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' });
  };

  return (
    <section className="pow" aria-label="Products of the week">
      <div className="pow-header">
        <h2 className="pow-title">Products of the week</h2>
        <div className="pow-nav-buttons">
          <button className="pow-nav-btn" type="button" aria-label="Previous" onClick={() => scrollByCards('left')}>
            <i className="fa-solid fa-chevron-left" />
          </button>
          <button className="pow-nav-btn" type="button" aria-label="Next" onClick={() => scrollByCards('right')}>
            <i className="fa-solid fa-chevron-right" />
          </button>
        </div>
      </div>

      <div 
        className="pow-scroller" 
        ref={scrollerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {products.map((p) => (
          <article key={p.id} className="pow-card">
            <div className="pow-imageWrap">
              <img className="pow-image" src={p.imageSrc} alt={p.name} draggable="false" />
              
              <div className="pow-actions-sidebar">
                <button className="pow-action-btn" aria-label="Add to wishlist">
                  <i className="fa-regular fa-heart" />
                </button>
                <button className="pow-action-btn" aria-label="Add to cart">
                  <i className="fa-solid fa-bag-shopping" />
                </button>
                <button className="pow-action-btn" aria-label="Compare">
                  <i className="fa-solid fa-right-left" />
                </button>
                <button className="pow-action-btn" aria-label="Quick view">
                  <i className="fa-solid fa-magnifying-glass" />
                </button>
              </div>
            </div>

            <div className="pow-body">
              <div className="pow-name">{p.name}</div>
              <div className="pow-variant">{p.variant}</div>
              <div className="pow-code">{p.code}</div>
              <div className="pow-brand">{p.brand}</div>
              <div className="pow-tag">{p.tag}</div>
            </div>
          </article>
        ))}
      </div>

      <div className="pow-dots" aria-hidden="true">
        <span className="pow-dot pow-dot--active" />
        <span className="pow-dot" />
        <span className="pow-dot" />
      </div>
    </section>
  );
};
