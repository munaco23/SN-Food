import React from 'react';
import './FeatureStrip.css';
import BgImg from '../../../Images/hero2.jpg';

export const FeatureStrip: React.FC = () => {
  return (
    <section className="fs" aria-label="Company highlight" style={{ ['--fs-bg' as any]: `url(${BgImg})` }}>
      <div className="fs-hero">
        <div className="fs-hero-overlay" />

        <div className="fs-hero-inner">
          <div className="fs-hero-left">
            <h2 className="fs-title">We Bring You Taste of Home</h2>
            <p className="fs-text">
              Fresh Tropical srl by Jawad is a reference company for the import of ethnic food products into the national
              territory, and is expanding rapidly to the continental market. Every day, we distribute the best products
              from all over the world to stores, wholesalers and retailers, with a 24-hour delivery service.
            </p>

            <div className="fs-actions">
              <button className="fs-btn fs-btn--primary" type="button">
                Company
              </button>
              <button className="fs-btn fs-btn--ghost" type="button">
                Our History
              </button>
            </div>
          </div>

          <aside className="fs-hero-right" aria-label="Brand highlight">
            <div className="fs-brand">ApnaBaba</div>

            <div className="fs-right-text">
              Exclusive distributors of the Alibaba brand, a line of products that guarantee quality.
            </div>

            <div className="fs-divider" />

            <div className="fs-right-title">Leader in Italy for ethnic products</div>
            <div className="fs-right-text">
              Warehouse management with ultra hi-tech vehicles and latest generation vehicles. Products always available
              and delivery throughout Italy, including the islands.
            </div>

            <div className="fs-right-actions">
              <button className="fs-pill" type="button">
                <span className="fs-pill-icon" aria-hidden="true">
                  <i className="fa-solid fa-play" />
                </span>
                Watch the video
              </button>
              <button className="fs-link" type="button">
                Find out more
              </button>
            </div>
          </aside>
        </div>
      </div>

      <div className="fs-stats" aria-label="Company stats">
        <div className="fs-stats-inner">
          <article className="fs-stat">
            <div className="fs-stat-icon" aria-hidden="true">
              <i className="fa-solid fa-warehouse" />
            </div>
            <div className="fs-stat-title">6 locations in Italy</div>
            <div className="fs-stat-text">
              6 locations in Italy, 1 warehouse in the Netherlands, and partnerships with major European transport
              companies.
            </div>
          </article>

          <article className="fs-stat">
            <div className="fs-stat-icon" aria-hidden="true">
              <i className="fa-solid fa-truck" />
            </div>
            <div className="fs-stat-title">180 vehicles</div>
            <div className="fs-stat-text">A fleet of 180 vehicles used daily for precise and timely delivery service.</div>
          </article>

          <article className="fs-stat">
            <div className="fs-stat-icon" aria-hidden="true">
              <i className="fa-solid fa-clock" />
            </div>
            <div className="fs-stat-title">24 hours</div>
            <div className="fs-stat-text">All orders are processed within 24 hours, for shops, wholesalers, retailers, and suppliers.</div>
          </article>

          <article className="fs-stat">
            <div className="fs-stat-icon" aria-hidden="true">
              <i className="fa-solid fa-globe" />
            </div>
            <div className="fs-stat-title">70 countries</div>
            <div className="fs-stat-text">We import fresh, dry, frozen, beauty, and cookware products from 70 countries around the world.</div>
          </article>
        </div>
      </div>
    </section>
  );
};
