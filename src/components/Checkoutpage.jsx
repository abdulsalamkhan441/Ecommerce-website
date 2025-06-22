import React from "react";
import { motion } from "framer-motion";
import { useCart } from "../components/CartContext"; 

export default function CheckoutPage() {
  const { cartItems, getSubtotal } = useCart(); 

  return (
    <section className="min-h-screen bg-white text-black py-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 w-full"
        >
          <h2 className="text-2xl font-semibold mb-4">Billing details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Company Name (Optional)</label>
            <input
              type="text"
              placeholder="Company Name (Optional)"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Country</label>
            <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>Sri Lanka</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Street Address</label>
            <input
              type="text"
              placeholder="Street address"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Town / City</label>
            <input
              type="text"
              placeholder="Town / City"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Province</label>
            <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>Western Province</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">ZIP Code</label>
            <input
              type="text"
              placeholder="ZIP code"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Phone</label>
            <input
              type="text"
              placeholder="Phone"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <input
              type="email"
              placeholder="Email address"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <textarea
            placeholder="Additional Information"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 h-24 resize-none"
          ></textarea>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full border border-gray-200 p-6 rounded-xl shadow-md"
        >
          <div className="flex justify-between mb-4">
            <p className="font-semibold">Product</p>
            <p className="font-semibold">Subtotal</p>
          </div>

          {cartItems.length === 0 ? (
            <div className="mb-2 text-gray-500">Your cart is empty.</div>
          ) : (
            cartItems.map((item, idx) => (
              <div className="flex justify-between mb-2" key={idx}>
                <p>
                  {item.title || item.name} × {item.qty}
                </p>
                <p>
                  CAD {(item.price * item.qty).toLocaleString("en-IN")}
                </p>
              </div>
            ))
          )}

          <div className="flex justify-between border-t border-gray-300 pt-2">
            <p className="font-medium">Subtotal</p>
            <p>
              CAD {getSubtotal().toLocaleString("en-IN", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>

          <div className="flex justify-between mt-2">
            <p className="font-bold text-lg">Total</p>
            <p className="font-bold text-orange-500 text-lg">
              CAD {getSubtotal().toLocaleString("en-IN", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <label className="flex items-start gap-2">
              <input type="radio" name="payment" defaultChecked className="mt-1" />
              <span>
                <strong>Direct Bank Transfer</strong>
                <br />
                Make your payment directly into our bank account. Please use your
                Order ID as the payment reference. Your order will not be shipped
                until the funds have cleared in our account.
              </span>
            </label>

            <label className="flex items-center gap-2 opacity-50 cursor-not-allowed">
              <input type="radio" name="payment" disabled /> Direct Bank Transfer
            </label>

            <label className="flex items-center gap-2 opacity-50 cursor-not-allowed">
              <input type="radio" name="payment" disabled /> Cash On Delivery
            </label>
          </div>

          <p className="text-sm mt-4">
            Your personal data will be used to support your experience throughout
            this website, to manage access to your account, and for other purposes
            described in our <span className="underline cursor-pointer">privacy policy</span>.
          </p>

          <button className="mt-6 w-full py-3 rounded-lg border border-black hover:bg-black hover:text-white transition duration-300">
            Place order
          </button>
        </motion.div>
      </div>
    </section>
  );
}
