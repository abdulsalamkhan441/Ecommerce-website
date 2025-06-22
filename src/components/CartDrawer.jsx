import React from "react";
import { useCart } from "../components/CartContext"; 
import { Link } from "react-router-dom";

export default function CartDrawer({ isOpen, onClose }) {
  const { cartItems, getSubtotal, removeFromCart } = useCart();

  return (
    <div
      className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-lg font-bold">Shopping Cart</h2>
        <button
          onClick={onClose}
          className="text-xl hover:text-gray-600 transition-colors"
        >
          ✕
        </button>
      </div>

      <div className="p-4 overflow-y-auto h-[calc(100%-160px)]">
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => {
            const price = item.price || 0;
            const qty = item.qty || 1;
            return (
              <div
                key={`${item.id || item.title}-${index}`}
                className="flex gap-4 mb-4 items-center"
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                )}
                <div className="flex-1">
                  <p className="font-semibold text-sm">
                    {item.title || "Untitled Item"}
                  </p>
                  <p className="text-sm">
                    {qty} × CAD {price.toLocaleString("en-IN")}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  ✕
                </button>
              </div>
            );
          })
        )}
      </div>

      <div className="p-4 border-t">
        <div className="flex justify-between mb-4">
          <span className="text-sm font-medium text-gray-700">Subtotal</span>
          <span className="text-sm font-bold text-yellow-600">
            CAD{" "}
            {getSubtotal().toLocaleString("en-IN", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </div>
        <div className="flex justify-between gap-2">
          <Link to="/Cart">
            <button className="border border-gray-300 rounded-full px-4 py-2 text-sm hover:bg-gray-100 w-full">
              Cart
            </button>
          </Link>
          <Link to="/Checkout">
            <button className="border border-gray-300 rounded-full px-4 py-2 text-sm hover:bg-gray-100 w-full">
              Checkout
            </button>
          </Link>
          <Link to="/Compare">
            <button className="border border-gray-300 rounded-full px-4 py-2 text-sm hover:bg-gray-100 w-full">
              Comparison
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
