import { useEffect } from "react";
import { motion } from "framer-motion";
import Elem1 from "../assets/Elem1.png";
import Elem2 from "../assets/Elem2.png";
import Elem3 from "../assets/Elem3.png";
import Elem4 from "../assets/Elem4.png";

const features = [
  {
    icon: Elem1,
    title: "High Quality",
    description: "Crafted from top materials",
  },
  {
    icon: Elem2,
    title: "Warranty Protection",
    description: "Over 2 years coverage",
  },
  {
    icon: Elem3,
    title: "Free Shipping",
    description: "Order over $150",
  },
  {
    icon: Elem4,
    title: "24/7 Support",
    description: "Dedicated assistance",
  },
];

function FeatureCard({ icon, title, description, index }) {
  return (
    <motion.div
      className="flex items-start gap-4 p-6 hover:shadow-md transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
      }}
    >
      <motion.div 
        className="w-12 h-12 flex-shrink-0  flex items-center justify-center"
        whileHover={{
          scale: 1.1,
          rotate: 5,
          transition: { type: "spring", stiffness: 400 }
        }}
      >
        <img 
          src={icon} 
          alt={title} 
          className="w-6 h-6 object-contain" 
        />
      </motion.div>

      <div>
        <motion.h3 
          className="font-semibold text-lg text-gray-800 mb-1"
          whileHover={{ color: "#D97706" }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-sm text-gray-600"
          whileHover={{ x: 2 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default function FeatureSection() {
  return (
    <section className="bg-[#faf6f0] py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            index={index}
            {...feature} 
          />
        ))}
      </div>
    </section>
  );
}