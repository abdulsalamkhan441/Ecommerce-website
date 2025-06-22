import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductPage from './pages/ProductPage';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ProductComparison from './components/Checkoutpage';
import Compare from './pages/Compare';
import Contect from './pages/Contect';

export default function App() {
  const [isCartOpen, setCartOpen] = useState(false);

  const toggleCartSidebar = () => setCartOpen(!isCartOpen);

  return (
    <>
      <Navbar onCartClick={toggleCartSidebar} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Pdetails" element={<ProductPage />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Compare" element={<Compare />} />
        <Route path="/Contect" element={<Contect />} />
      </Routes>
      <CartDrawer isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
