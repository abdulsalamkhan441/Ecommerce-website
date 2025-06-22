import React from "react";
import Navbar from "../components/Navbar";
import Hero3 from "../components/hero2";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import Back3 from "../assets/Back3.png";
import CartPage from "../components/CartPage";

export default function Cart() {
  return (
    <div>
      <Hero3
        backgroundImage={Back3}
        title="Cart"
        breadcrumbs={[{ path: "/", label: "Home" }, { label: "Cart" }]}
      />
      <CartPage/>
      <FeatureSection />
      <Footer />
    </div>
  );
}
