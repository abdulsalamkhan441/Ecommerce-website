import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "../components/CartContext";
import Logo from "../assets/Logo.png";

export default function Navbar({ onCartClick }) {
  const { cartItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const navLinks = ["Home", "Shop", "About", "Contect"];

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white shadow-sm sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <div>
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-10 w-auto" />
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, i) => {
            const path = link === "Home" ? "/" : `/${link}`;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, color: "#D97706" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to={path} className="text-gray-700 hover:text-yellow-600">
                  {link}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        <div className="flex items-center space-x-4">
          {icons.map((Icon, index) => {
            const isCart = index === 3;
            return (
              <motion.button
                key={index}
                onClick={isCart ? onCartClick : undefined}
                whileHover={{ scale: 1.2 }}
                className="relative text-gray-700 hover:text-yellow-600"
              >
                <Icon />
                {isCart && cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5">
                    {cartItems.length}
                  </span>
                )}
              </motion.button>
            );
          })}

          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white px-6 pb-4"
          >
            {navLinks.map((link, i) => {
              const path = link === "Home" ? "/" : `/${link}`;
              return (
                <Link
                  key={i}
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-gray-700 text-lg hover:text-yellow-600"
                >
                  {link}
                </Link>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

const icons = [
  () => (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  () => (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  () => (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  () => (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.3 2.3a1 1 0 00.7 1.7H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
];
