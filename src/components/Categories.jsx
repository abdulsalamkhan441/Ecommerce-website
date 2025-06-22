import React from 'react';
import { motion } from 'framer-motion';
import Img1 from '../assets/Img1.png';
import Img2 from '../assets/Img2.png';
import Img3 from '../assets/Img3.png';

const categories = [
  { title: 'Dining', image: Img1 },
  { title: 'Living', image: Img2 },
  { title: 'Bedroom', image: Img3 },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    },
  },
};

export default function Categories() {
  return (
    <section className="py-16 text-center">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold text-gray-800 mb-2"
      >
        Browse The Range
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-500 mb-10"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </motion.p>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-wrap justify-center gap-6 px-4"
      >
        {categories.map((cat, idx) => (
          <motion.div 
            key={idx} 
            variants={item}
            whileHover={{ scale: 1.05 }}
            className="w-72 cursor-pointer group"
          >
            <motion.img 
              src={cat.image} 
              alt={cat.title} 
              className="rounded-lg w-full h-72 object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
            <p className="mt-4 text-lg font-medium text-gray-700 group-hover:text-yellow-600 transition-colors duration-300">
              {cat.title}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}