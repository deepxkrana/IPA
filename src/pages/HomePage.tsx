import React from 'react';
import Hero from '../components/Home/Hero';
import Features from '../components/Home/Features';
import GuidePreview from '../components/Home/GuidePreview';
import Testimonials from '../components/Home/Testimonials';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Features />
      <GuidePreview />
      <Testimonials />
    </div>
  );
};

export default HomePage;