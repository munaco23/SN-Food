import React, { useMemo, useRef, useState } from 'react';
import './CatalogShowcase.css';
import ImgA from '../../../Images/hero1.jpg';
import ImgB from '../../../Images/hero2.jpg';

type Slide = {
  id: string;
  title: string;
  imageSrc: string;
};

type MiniItem = {
  id: string;
  imageSrc: string;
  label: string;
};

export const CatalogShowcase: React.FC = () => {
  const leftSlides = useMemo<Slide[]>(
    () => [
      { id: 'l1', title: 'Legumi/Cereali', imageSrc: ImgA },
      { id: 'l2', title: 'Assorted Snack', imageSrc: ImgB },
      { id: 'l3', title: 'Organic Products', imageSrc: ImgA },
    ],
    []
  );

  const topSlides = useMemo<Slide[]>(
    () => [
      { id: 't1', title: 'JASMINE ROYAL UMBRELLA 18KG RISO', imageSrc: ImgB },
      { id: 't2', title: 'GK GINGER CANDY ORANGE 24X85G', imageSrc: ImgA },
      { id: 't3', title: 'LATTE RAYBY RAMANDAN 8X1LT', imageSrc: ImgB },
    ],
    []
  );

  const leftThumbs = useMemo<MiniItem[]>(
    () => [
      { id: 'lt1', imageSrc: ImgA, label: 'Beans' },
      { id: 'lt2', imageSrc: ImgB, label: 'Lentils' },
      { id: 'lt3', imageSrc: ImgA, label: 'Cereals' },
    ],
    []
  );

  const topThumbs = useMemo<MiniItem[]>(
    () => [
      { id: 'tt1', imageSrc: ImgB, label: 'Rice' },
      { id: 'tt2', imageSrc: ImgA, label: 'Candy' },
      { id: 'tt3', imageSrc: ImgB, label: 'Milk' },
    ],
    []
  );

  const [leftActive, setLeftActive] = useState(0);
  const [topActive, setTopActive] = useState(0);

  const leftMiniRef = useRef<HTMLDivElement | null>(null);
  const topMiniRef = useRef<HTMLDivElement | null>(null);

  const scrollMini = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: direction === 'left' ? -220 : 220, behavior: 'smooth' });
  };

  const prev = (index: number, total: number) => (index - 1 + total) % total;
  const next = (index: number, total: number) => (index + 1) % total;

  return (
    <section className="showcase" aria-label="Catalog showcase">
      <div className="showcase-inner">
        <div className="showcase-head">
          <h2 className="showcase-title">A wide catalog dedicated to food professionals</h2>
          <p className="showcase-subtitle">
            Discover our most viewed categories and top products, with premium logistics and temperature-controlled
            delivery.
          </p>
        </div>

        <div className="showcase-colsHead" aria-hidden="true">
          <div className="colHead">Most Viewed Categories</div>
          <div className="colHead">Top Products</div>
          <div className="colHead">Delivery within 24 hours</div>
        </div>

        <div className="showcase-grid">
          <article className="showcard">
            <div className="showcard-top">
              <div className="showcard-pill" aria-label={leftSlides[leftActive].title}>
                <i className="fa-regular fa-lemon" aria-hidden="true" />
                <span>{leftSlides[leftActive].title}</span>
              </div>
            </div>

            <div className="showcard-media showcard-media--tall">
              <img className="showcard-img" src={leftSlides[leftActive].imageSrc} alt={leftSlides[leftActive].title} />

              <button
                className="showcard-nav showcard-nav--left"
                type="button"
                aria-label="Previous"
                onClick={() => setLeftActive((v) => prev(v, leftSlides.length))}
              >
                <i className="fa-solid fa-chevron-left" />
              </button>
              <button
                className="showcard-nav showcard-nav--right"
                type="button"
                aria-label="Next"
                onClick={() => setLeftActive((v) => next(v, leftSlides.length))}
              >
                <i className="fa-solid fa-chevron-right" />
              </button>
            </div>

            <div className="showcard-mini" ref={leftMiniRef}>
              {leftThumbs.map((t) => (
                <button key={t.id} className="mini" type="button" aria-label={t.label}>
                  <img className="mini-img" src={t.imageSrc} alt={t.label} />
                </button>
              ))}
            </div>

            <div className="showcard-dots" aria-hidden="true">
              {leftSlides.map((s, i) => (
                <span key={s.id} className={`showdot${i === leftActive ? ' showdot--active' : ''}`} />
              ))}
            </div>
          </article>

          <article className="showcard">
            <div className="showcard-top">
              <div className="showcard-pill showcard-pill--soft">Fresh to Frozen</div>
            </div>

            <div className="showcard-media showcard-media--center">
              <img className="showcard-img" src={topSlides[topActive].imageSrc} alt={topSlides[topActive].title} />

              <button
                className="showcard-nav showcard-nav--left"
                type="button"
                aria-label="Previous"
                onClick={() => setTopActive((v) => prev(v, topSlides.length))}
              >
                <i className="fa-solid fa-chevron-left" />
              </button>
              <button
                className="showcard-nav showcard-nav--right"
                type="button"
                aria-label="Next"
                onClick={() => setTopActive((v) => next(v, topSlides.length))}
              >
                <i className="fa-solid fa-chevron-right" />
              </button>
            </div>

            <div className="showcard-title">{topSlides[topActive].title}</div>
            <div className="showcard-code">cod. 9300</div>

            <div className="showcard-miniWrap">
              <button className="mini-nav" type="button" aria-label="Scroll left" onClick={() => scrollMini(topMiniRef, 'left')}>
                <i className="fa-solid fa-chevron-left" />
              </button>
              <div className="showcard-mini" ref={topMiniRef}>
                {topThumbs.map((t) => (
                  <button key={t.id} className="mini" type="button" aria-label={t.label}>
                    <img className="mini-img" src={t.imageSrc} alt={t.label} />
                  </button>
                ))}
              </div>
              <button className="mini-nav" type="button" aria-label="Scroll right" onClick={() => scrollMini(topMiniRef, 'right')}>
                <i className="fa-solid fa-chevron-right" />
              </button>
            </div>

            <div className="showcard-dots" aria-hidden="true">
              {topSlides.map((s, i) => (
                <span key={s.id} className={`showdot${i === topActive ? ' showdot--active' : ''}`} />
              ))}
            </div>
          </article>

          <div className="show-right">
            <article className="promo" aria-label="Delivery promo">
              <div className="promo-bg" style={{ backgroundImage: `url(${ImgB})` }}>
                <div className="promo-overlay" />
                <div className="promo-content">
                  <div className="promo-title">180+ vehicles temperature controlled</div>
                  <div className="promo-text">
                    Temperature-monitored cold chain deliveries aligned with best practices and quality standards.
                  </div>
                  <button className="promo-link" type="button">Discover More</button>
                </div>
              </div>
            </article>

            <article className="suggest" aria-label="Suggested category">
              <div className="suggest-kicker">Today we suggest...</div>
              <div className="suggest-card">
                <div className="suggest-media" style={{ backgroundImage: `url(${ImgA})` }} />
                <div className="suggest-body">
                  <div className="suggest-title">Fresh</div>
                  <button className="suggest-link" type="button">Go to Category</button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
