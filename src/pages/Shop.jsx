import React from "react";
import ShopGrid from "../components/Shopgrid";
import Hero3 from "../components/hero2";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import Back2 from "../assets/Back2.png"


export default function Shop() {
  return (
    <div>
      <Hero3
        backgroundImage={Back2}
        title="Shop"
        breadcrumbs={[{ path: "/", label: "Home" }, { label: "Shop" }]}
      />
      <ShopGrid />
      <FeatureSection />
      <Footer />
    </div>
  );
}
