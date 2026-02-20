import React, { useRef, useState, useEffect } from 'react';

const CATEGORIES = [
  'Departments',
  'Accessories',
  'Bakery',
  'Drinks',
  'Biscuits',
  'Ghee',
  'Meat & Poultry',
  'Canned Foods',
  'Frozen Foods',
  'Fresh Fruits',
  'Vegetables',
  'Dairy & Eggs',
  'Snacks',
  'Spices & Herbs',
  'Rice & Grains',
  'Oil & Vinegar',
  'Breakfast',
  'Household',
  'Personal Care',
  'Daily Deals',
];

export const CategoryBar: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
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
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Scroll speed
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <nav className="category-bar">
      <div className="category-bar-inner">
        <button className="all-categories-pill" aria-label="All Categories">
          <span className="all-categories-icon" aria-hidden="true">
            <i className="fa-solid fa-bars" />
          </span>
          <span className="all-categories-text">All Categories</span>
          <span className="all-categories-caret" aria-hidden="true">
            <i className="fa-solid fa-chevron-down" />
          </span>
        </button>
        <div 
          className="category-scroll-container"
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {CATEGORIES.map((category) => {
            const isActive = category === 'Accessories';
            const isHighlight = category === 'Daily Deals';

            const className = [
              'category-pill',
              isActive ? 'category-pill--active' : '',
              isHighlight ? 'category-pill--highlight' : '',
            ]
              .filter(Boolean)
              .join(' ');

            return (
              <button key={category} className={className}>
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
