import React from "react";
import { motion } from "framer-motion";
import Img14 from "../assets/Img14.png";
import Img12 from "../assets/Img12.png";
import Img13 from "../assets/Img13.png";
import { Link } from "react-router-dom";

export default function Hero2() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textItem = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageItem = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "anticipate",
      },
    },
  };

  return (
    <div className="w-full min-h-screen bg-white text-gray-800 font-sans">
      <section className="w-full bg-[#f9f1e7] py-16 px-10 lg:px-28 flex flex-col lg:flex-row items-center gap-10 overflow-hidden">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex-1 max-w-md"
        >
          <motion.h2
            variants={textItem}
            className="text-3xl lg:text-4xl font-bold mb-4"
          >
            50+ Beautiful rooms inspiration
          </motion.h2>
          <motion.p variants={textItem} className="mb-6 text-gray-600">
            Our designer already made a lot of beautiful prototype of rooms that
            inspire you.
          </motion.p>
          <Link to="/shop">
            <motion.button
              variants={textItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-600 text-white px-6 py-3 font-medium rounded hover:bg-yellow-700 transition"
            >
              Explore More
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1 flex gap-4 items-base gap-6"
        >
          <motion.div variants={imageItem} className="relative w-full max-w-md">
            <motion.img
              src={Img12}
              alt="Main"
              className="w-full rounded"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
          <motion.img
            variants={imageItem}
            src={Img13}
            alt="Side 1"
            className="w-full h-full object-cover rounded hidden lg:block"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
          />
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-6 text-center flex flex-col"
      >
        <motion.h3
          className="text-3xl font-medium mb-2 shrink-0"
          whileInView={{ scale: [1, 1.05, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Share your setup with <br />
          <span className="font-bold">#FuniroFurniture</span>
        </motion.h3>
        <motion.div
          className="w-full"
          whileInView={{
            opacity: [0.8, 1],
            transition: { duration: 0.6 },
          }}
          viewport={{ once: true }}
        >
          <img className="w-full" src={Img14} alt="" />
        </motion.div>
      </motion.section>
    </div>
  );
}
