import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import ProductGrid from '../components/ProductGrid';
import Hero2 from '../components/50+hero'; 
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <ProductGrid />
      <Hero2 /> 
      <Footer/>
    </div>
  );
}