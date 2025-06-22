import React from "react";
import { motion } from "framer-motion";
import Back1 from "../assets/Back1.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative">
      <motion.img
        src={Back1}
        alt="Hero Banner"
        className="w-full h-[600px] object-cover"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <motion.div
        className="absolute top-1/3 right-16 transform -translate-y-1/2 bg-[#FFF3E3] p-8 max-w-sm rounded shadow-xl"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <motion.p
          className="text-sm text-gray-600 tracking-widest mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          New Arrival
        </motion.p>

        <motion.h1
          className="text-3xl font-bold text-[#B88E2F] leading-snug mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Discover Our <br /> New Collection
        </motion.h1>

        <motion.p
          className="text-gray-600 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </motion.p>

        <Link to="/shop">
          <motion.button
            className="bg-[#B88E2F] text-white px-6 py-3 font-semibold hover:brightness-110 transition duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            BUY NOW
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
