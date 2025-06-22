import React from "react";
import Navbar from "../components/Navbar";
import Hero3 from "../components/hero2";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import Back3 from "../assets/Back3.png";
import CheckoutPage from "../components/Checkoutpage";

export default function Checkout() {
  return (
    <div>
      <Hero3
        backgroundImage={Back3}
        title="Checkout"
        breadcrumbs={[{ path: "/", label: "Home" }, { label: "Checkout" }]}
      />
      <CheckoutPage/>
      <FeatureSection />
      <Footer />
    </div>
  );
}
