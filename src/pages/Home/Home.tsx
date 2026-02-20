import React from 'react';
import { Header } from '../../components/layout/Header/Header';
import { HeroSlider } from '../../components/sections/HeroSlider/HeroSlider';
import { ProductsOfWeek } from '../../components/sections/ProductsOfWeek/ProductsOfWeek';
import { DiscoverBanner } from '../../components/sections/DiscoverBanner/DiscoverBanner';
import { CategoriesSection } from '../../components/sections/CategoriesSection/CategoriesSection';
import { CatalogShowcase } from '../../components/sections/CatalogShowcase/CatalogShowcase';
import { FeatureStrip } from '../../components/sections/FeatureStrip/FeatureStrip';
import { ValuesSection } from '../../components/sections/ValuesSection/ValuesSection';
import { EventsSection } from '../../components/sections/EventsSection/EventsSection';
import { ColorsPromo } from '../../components/sections/ColorsPromo/ColorsPromo';
import { BrandsGrid } from '../../components/sections/BrandsGrid/BrandsGrid';
import { ExportEurope } from '../../components/sections/ExportEurope/ExportEurope';
import { Footer } from '../../components/layout/Footer/Footer';

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSlider />
      <ProductsOfWeek />
      <DiscoverBanner />
      <CategoriesSection />
      <CatalogShowcase />
      <FeatureStrip />
      <ValuesSection />
      <EventsSection />
      <ColorsPromo />
      <BrandsGrid />
      <ExportEurope />
      <Footer />
    </>
  );
};
