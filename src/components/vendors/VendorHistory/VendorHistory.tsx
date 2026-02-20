import React from 'react';
import './VendorHistory.css';
import hero1 from '../../../Images/hero1.jpg';
import hero2 from '../../../Images/hero2.jpg';

export const VendorHistory: React.FC = () => {
  return (
    <section className="v-hist">
      <div className="v-hist-top">
        <div className="v-hist-inner">
          <div className="v-hist-content">
            <h2 className="v-hist-title">A reference point since 2007</h2>
            <h3 className="v-hist-sub">Distribution of ethnic food products</h3>
            <div className="v-hist-text">
              <p>
                Fresh Tropical Ltd. by Jawad is a highly qualified company for the preservation and distribution of any ethnic specialty. Active since 2007 in the trade of products from all over the world, we have the tools and know-how necessary for the distribution of any product.
              </p>
              <p>
                We have large warehouses for storage, equipped with a large fleet of forklifts and pallet trucks for internal movement of goods on site, and refrigerated cells with varying temperatures depending on the products, compliant with CEE law, as well as temperature-controlled vehicles for safe transport.
              </p>
              <p>
                We also have all the necessary expertise for the application of HACCP regulations as well as for handling Halal products, and we can equally handle fresh, dry, and frozen products.
              </p>
            </div>
          </div>
          <div className="v-hist-image">
            <img src={hero1} alt="Warehouse exterior" />
          </div>
        </div>
      </div>

      <div className="v-hist-mid">
        <div className="v-hist-inner">
          <div className="v-hist-grid-2">
            <div className="v-hist-img-card">
              <img src={hero2} alt="Warehouse interior 1" />
            </div>
            <div className="v-hist-img-card">
              <img src={hero1} alt="Warehouse interior 2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
