import React from 'react';
import { Header } from '../../components/layout/Header/Header';
import { Footer } from '../../components/layout/Footer/Footer';
import { ProductView } from '../../components/product/ProductView/ProductView';
import { RecommendedProducts } from '../../components/product/RecommendedProducts/RecommendedProducts';

export const ProductDetail: React.FC = () => {
  return (
    <div className="product-detail-page">
      <Header />
      <main>
        <ProductView />
        <RecommendedProducts />
      </main>
      <Footer />
    </div>
  );
};
