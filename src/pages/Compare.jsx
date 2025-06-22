import React from "react";
import Navbar from "../components/Navbar";
import Hero3 from "../components/hero2";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import Back3 from "../assets/Back3.png";
import ProductComparison from "../components/ProductComparison";

export default function Compare() {
  return (
    <div>
      <Hero3
        backgroundImage={Back3}
        title="Compare"
        breadcrumbs={[{ path: "/", label: "Home" }, { label: "Compare" }]}
      />
      <ProductComparison/>
      <FeatureSection />
      <Footer />
    </div>
  );
}
