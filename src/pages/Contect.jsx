import React from "react";
import Navbar from "../components/Navbar";
import Hero3 from "../components/hero2";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import Back3 from "../assets/Back3.png";
import ContactSection from "../components/ContectSec";

export default function Contect() {
  return (
    <div>
      <Hero3
        backgroundImage={Back3}
        title="Contect"
        breadcrumbs={[{ path: "/", label: "Home" }, { label: "Contect" }]}
      />
      <ContactSection/>
      <FeatureSection />
      <Footer />
    </div>
  );
}
