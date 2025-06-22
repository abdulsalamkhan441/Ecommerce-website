import React from "react";
import { motion } from "framer-motion";
import { products2 } from "../Data/Productlist2.jsx";
import { Link } from "react-router-dom";
import { useCart } from "../components/CartContext";

const cardVariants = {
  offscreen: { y: 20, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const hoverEffect = {
  scale: 1.02,
  transition: { duration: 0.3 }
};

export default function ProductGrid2() {
  const { addToCart } = useCart();

  return (
    <div className="max-w-[1440px] mx-auto">
      <section className="py-8 md:py-16 bg-white px-4 sm:px-8 lg:px-12 xl:px-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl font-semibold text-gray-800 text-center mb-6 md:mb-10"
        >
          Our Products
        </motion.h2>

        <div className="overflow-x-auto">
          <motion.div 
            className="flex gap-4 md:gap-6 pb-4"
            style={{ width: `calc(${products2.length} * (100% + 1rem))` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {products2.map((p, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                className="flex-shrink-0"
              >
                <Link
                  to="/Pdetails"
                  className="relative group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 block"
                >
                  <motion.div
                    whileHover={hoverEffect}
                    className="group relative min-w-[250px] sm:min-w-[280px] md:min-w-[300px] border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300"
                  >
                    {p.tag && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-full text-white ${
                          p.tag === "New" ? "bg-green-500" : "bg-red-500"
                        }`}
                      >
                        {p.tag}
                      </motion.span>
                    )}
                    <div className="aspect-square overflow-hidden">
                      <motion.img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <div className="p-3 md:p-4 text-left">
                      <h3 className="text-base md:text-lg font-medium text-gray-800">
                        {p.name}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-500 line-clamp-2">
                        {p.desc}
                      </p>
                      <div className="mt-2 text-gray-800 font-semibold">
                        {p.price}{" "}
                        {p.oldPrice && (
                          <span className="text-gray-400 line-through ml-2 text-xs md:text-sm font-normal">
                            {p.oldPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black bg-opacity-50 flex flex-col gap-3 items-center justify-center space-x-2 md:space-x-4"
                    >
                      <motion.button
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart({
                            title: p.name,
                            price: p.price,
                            image: p.image,
                            qty: 1,
                          });
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white px-3 py-1 md:px-4 md:py-2 rounded text-xs md:text-base font-medium hover:bg-yellow-500 hover:text-white transition"
                      >
                        Add to cart
                      </motion.button>
                      <div className="flex space-x-4 text-white text-sm">
                        <motion.div 
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center space-x-1 cursor-pointer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                            />
                          </svg>
                          <span>Share</span>
                        </motion.div>
                        <Link to="/Compare">
                          <motion.div 
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center space-x-1 cursor-pointer"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                              />
                            </svg>
                            <span>Compare</span>
                          </motion.div>
                        </Link>
                        <motion.div 
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center space-x-1 cursor-pointer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                          <span>Like</span>
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}