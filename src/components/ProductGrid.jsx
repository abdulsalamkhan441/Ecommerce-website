import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { products } from "../Data/productlist1";
import { useCart } from "../components/CartContext";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    scale: 1.03,
    transition: { type: "spring", stiffness: 400 },
  },
};

export default function ProductGrid() {
  const [showAll, setShowAll] = useState(false);
  const displayedProducts = showAll ? products : products.slice(0, 8);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleProductClick = (product) => {
    navigate("/Pdetails", { state: { product } });
  };

  return (
    <section className="py-16 bg-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold text-gray-800 mb-10"
      >
        Our Products
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      >
        {displayedProducts.map((p, idx) => (
          <motion.div
            key={idx}
            variants={item}
            whileHover="hover"
            className="relative border rounded-lg overflow-hidden shadow-sm hover:shadow-md cursor-pointer"
            onClick={() => handleProductClick(p)}
          >
            {p.tag && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 + idx * 0.05 }}
                className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-full text-white ${
                  p.tag === "New" ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {p.tag}
              </motion.span>
            )}

            <motion.img
              src={p.image}
              alt={p.name}
              className="w-full h-64 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            />

            <div className="p-4 text-left">
              <h3 className="text-lg font-medium text-gray-800">{p.name}</h3>
              <p className="text-sm text-gray-500">{p.desc}</p>
              <div className="mt-2 text-gray-800 font-semibold">
                {p.price}{" "}
                {p.oldPrice && (
                  <span className="text-gray-400 line-through ml-2 text-sm font-normal">
                    {p.oldPrice}
                  </span>
                )}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black bg-opacity-50 flex flex-col gap-y-2 items-center justify-center"
            >
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="bg-white px-4 py-2 rounded font-medium hover:bg-yellow-500 hover:text-white transition"
                onClick={() =>
                  addToCart({
                    title: p.name,
                    price: p.price,
                    image: p.image,
                    qty: 1,
                  })
                }
              >
                Add to cart
              </motion.button>
              <div className="flex space-x-4 text-white text-sm">
                <div className="flex items-center space-x-1">
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
                </div>
                <Link to="/Compare">
                  <div
                    className="flex items-center space-x-1"
                    onClick={e => e.stopPropagation()}
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
                  </div>
                </Link>
                <Link to="/Cart">
                  <div
                    className="flex items-center space-x-1"
                    onClick={e => e.stopPropagation()}
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
                  </div>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {products.length > 8 && !showAll && (
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          onClick={() => setShowAll(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 px-6 py-3 border border-yellow-600 text-yellow-600 font-semibold hover:bg-yellow-600 hover:text-white transition"
        >
          Show More
        </motion.button>
      )}
    </section>
  );
}
