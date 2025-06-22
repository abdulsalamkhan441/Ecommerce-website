import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/Navbar";
import ProductDetailPage from "../components/ProductDetailPage";
import ProductGrid2 from "../components/ProductGrid2";
import Footer from "../components/Footer";

export default function ProductPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <main className="">
      <ProductDetailPage/>
      <ProductGrid2/>
      <Footer/>
    </main>
  );
}
