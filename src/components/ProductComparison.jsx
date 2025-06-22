import React from "react";
import { motion } from "framer-motion";
import Img5 from "../assets/Img5.png";
import Img6 from "../assets/Img6.png";
import { Link } from "react-router-dom";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const ProductComparison = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full min-h-screen bg-white p-6 font-sans text-sm text-gray-700 max-w-[1200px] mx-auto"
    >
      <motion.div 
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
        className="grid lg:grid-cols-3 gap-6 mb-10"
      >
        <motion.div variants={fadeIn} className="space-y-2">
          <p className="text-sm font-medium">Go to Product page for more Products</p>
          <Link to="/Shop">
            <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xs text-yellow-500 underline"
          >
            View More
          </motion.button>
          </Link>
        </motion.div>

        <motion.div 
          variants={fadeIn}
          className="flex gap-6 justify-center"
        >
          {[{ img: Img5, name: "Asgaard Sofa", price: "Rs. 250,000.00", rating: "4.7", reviews: "20 reviews" },
            { img: Img6, name: "Outdoor Sofa Set", price: "Rs. 220,000.00", rating: "4.3", reviews: "15 reviews" }].map((product, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="w-[150px] text-center"
              >
                <motion.img 
                  src={product.img} 
                  alt={`Product ${i+1}`} 
                  className="mx-auto w-full h-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  loading="lazy"
                />
                <p className="mt-2 font-semibold text-base">{product.name}</p>
                <p className="text-gray-600 text-sm">{product.price}</p>
                <p className="text-yellow-500 text-sm font-medium">
                  ★ {product.rating} <span className="text-gray-400 font-normal">{product.reviews}</span>
                </p>
              </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        className="space-y-10"
      >
        {["General", "Product", "Dimensions", "Warranty", "Domestic Warranty"].map((sectionTitle, sectionIndex) => {
          const sectionData = [
            [
              ["Sofa Package", "1 sectional sofa", "1 Three Seater, 2 Single Seater"],
              ["Model Number", "TP62GRM-6598", "DT10BLGR-658"],
              ["Secondary Material", "Solid Wood", "Solid Wood"],
              ["Configuration", "L-shaped", "L-shaped"],
              ["Upholstery Material", "Fabric + Cotton", "Fabric + Cotton"],
              ["Upholstery Color", "Bright Grey & Lion", "Bright Grey & Lion"]
            ],
            [
              ["Filling Material", "Foam", "Mattress"],
              ["Finish Type", "Bright Grey & Lion", "Bright Grey & Lion"],
              ["Adjustable Headrest", "No", "Yes"],
              ["Maximum Load Capacity", "300 KG", "300 KG"],
              ["Origin of Manufacture", "India", "India"]
            ],
            [
              ["Width", "265.32 cm", "265.32 cm"],
              ["Height", "70 cm", "70 cm"],
              ["Depth", "167.76 cm", "167.76 cm"],
              ["Weight", "45 KG", "65 KG"],
              ["Seat Height", "41.52 cm", "41.52 cm"],
              ["Leg Height", "5.48 cm", "5.48 cm"]
            ],
            [
              ["Warranty Summary", "1 Year Manufacturing Warranty", "2 Year Manufacturing Warranty"],
              ["Warranty Service Type", "For Warranty Claims or Issues, contact support@furni.com", "For Warranty Claims or Issues, contact support@furni.com"],
              ["Covered in Warranty", "Only manufacturing defects", "Only manufacturing defects"],
              ["Not Covered in Warranty", "Damage from misuse, wear & tear, or installation issues", "Damage from misuse, wear & tear, or installation issues"]
            ],
            [
              ["Domestic Warranty", "1 Year", "3 Months"]
            ]
          ][sectionIndex];

          return (
            <motion.div key={sectionTitle} variants={fadeIn}>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{sectionTitle}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {sectionData.map(([label, val1, val2], i) => (
                  <React.Fragment key={i}>
                    <div className="font-medium">{label}</div>
                    <div className="text-gray-600">{val1}</div>
                    <div className="text-gray-600">{val2}</div>
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default ProductComparison;
