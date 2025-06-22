import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CartItem from "../components/CartItem";
import CartTotals from "../components/CartTotals";
import { useCart } from "../components/CartContext";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function CartPage() {
  const { cartItems, updateQty, removeFromCart, getSubtotal, clearCart } = useCart();

  const handleUpdateQty = (itemId, newQty) => {
    updateQty(itemId, parseInt(newQty) || 1);
  };

  const handleRemoveItem = (index) => {
    removeFromCart(index);
  };

  const handleClearCart = () => {
    if (window.confirm("Are you sure you want to clear your cart?")) {
      clearCart();
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white min-h-screen p-6 md:p-12"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-2xl font-semibold mb-10"
        >
          Your Shopping Cart
        </motion.h1>

        <AnimatePresence mode="wait">
          {cartItems.length === 0 ? (
            <motion.div
              key="empty-cart"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
            >
              <p className="text-gray-600 mb-4">Your cart is currently empty</p>
              <motion.a
                href="/shop"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-700 transition-colors"
              >
                Continue Shopping
              </motion.a>
            </motion.div>
          ) : (
            <motion.div
              key="cart-items"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col lg:flex-row gap-10"
            >
              <motion.div variants={fadeIn} className="flex-1">
                <div className="bg-[#f9f6f1] p-4 rounded-md">
                  <div className="grid grid-cols-5 font-medium text-gray-600 text-sm px-2 py-3 border-b border-gray-200">
                    <span className="col-span-2">Product</span>
                    <span>Price</span>
                    <span>Quantity</span>
                    <span>Subtotal</span>
                  </div>

                  <AnimatePresence>
                    {cartItems.map((item, idx) => (
                      <motion.div
                        key={item.id || idx}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CartItem
                          item={item}
                          onQtyChange={(qty) => handleUpdateQty(item.id, qty)}
                          onRemove={() => handleRemoveItem(idx)}
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                <div className="flex justify-between mt-6 px-1">
                  <motion.button
                    onClick={handleClearCart}
                    whileHover={{ x: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-600 hover:text-red-600 transition-colors text-sm"
                  >
                    🗑 Clear Cart
                  </motion.button>
                  <motion.a
                    href="/shop"
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-600 hover:text-yellow-700 transition-colors text-sm"
                  >
                    ← Continue Shopping
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn}
                transition={{ delay: 0.2 }}
                className="bg-[#f9f6f1] rounded-lg p-6 w-full max-w-sm self-start"
              >
                <CartTotals subtotal={getSubtotal()} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.main>
  );
}