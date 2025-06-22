import { useState } from "react";
import { motion } from "framer-motion";
import { products2 } from "../Data/Productlist2";
import { Link } from "react-router-dom";
import { useCart } from "../components/CartContext";

export default function ShopGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const { addToCart } = useCart();

  const totalPages = Math.ceil(products2.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products2.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const nextPage = () => paginate(currentPage + 1);
  const prevPage = () => paginate(currentPage - 1);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <motion.div key={product.name} variants={item} whileHover={{ y: -5 }}>
              <Link
                to="/Pdetails"
                className="relative group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 block"
              >
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                />

                {product.tag && (
                  <motion.span
                    className="absolute top-4 left-4 text-white text-xs px-2 py-1 rounded-full z-10"
                    style={{
                      backgroundColor:
                        product.tag === "New" ? "#10B981" : "#EF4444",
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {product.tag}
                  </motion.span>
                )}

                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex flex-col gap-4 items-center justify-center transition-all duration-300 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="bg-white px-4 py-2 rounded font-medium hover:bg-yellow-500 hover:text-white transition pointer-events-auto"
                    onClick={e => {
                      e.preventDefault();
                      addToCart({
                        title: product.name,
                        price: product.price,
                        image: product.image,
                        qty: 1,
                      });
                    }}
                  >
                    Add to cart
                  </motion.button>
                  <div className="flex space-x-4 text-white text-sm">
                    <motion.div
                      className="flex items-center space-x-1 pointer-events-auto"
                      whileHover={{ scale: 1.1 }}
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
                        className="flex items-center space-x-1 pointer-events-auto"
                        whileHover={{ scale: 1.1 }}
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
                      </motion.div>
                    </Link>

                    <motion.div
                      className="flex items-center space-x-1 pointer-events-auto"
                      whileHover={{ scale: 1.1 }}
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

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{product.desc}</p>
                  <div className="mt-2">
                    <span className="text-base font-medium text-gray-900">
                      {product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="text-sm text-gray-400 line-through ml-2">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 text-lg">
            No products found on this page.
          </div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex justify-center mt-12 mb-16 space-x-2"
      >
        <motion.button
          onClick={prevPage}
          disabled={currentPage === 1}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: currentPage === 1 ? 1 : 1.05 }}
          className={`w-12 h-12 border rounded-full transition ${
            currentPage === 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-[#F9F1E7] text-gray-800 hover:bg-yellow-500 hover:text-white"
          }`}
        >
          &lt;
        </motion.button>

        {[...Array(totalPages)].map((_, i) => (
          <motion.button
            key={i}
            onClick={() => paginate(i + 1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`w-12 h-12 border rounded-full transition ${
              currentPage === i + 1
                ? "bg-yellow-500 text-white"
                : "bg-[#F9F1E7] text-gray-800 hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </motion.button>
        ))}

        <motion.button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: currentPage === totalPages ? 1 : 1.05 }}
          className={`w-12 h-12 border rounded-full transition ${
            currentPage === totalPages
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-[#F9F1E7] text-gray-800 hover:bg-yellow-500 hover:text-white"
          }`}
        >
          &gt;
        </motion.button>
      </motion.div>
    </div>
  );
}
