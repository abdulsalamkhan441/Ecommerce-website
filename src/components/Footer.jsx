import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


export default function Footer() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const hoverEffect = {
    scale: 1.05,
    transition: { type: "spring", stiffness: 400 },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="bg-gray-50 py-16 px-6 lg:px-28"
    >
      <motion.div
        variants={container}
        className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-600"
      >
        <motion.div variants={item}>
          <motion.h4
            whileHover={hoverEffect}
            className="text-lg font-bold text-black mb-4"
          >
            Funiro.
          </motion.h4>
          <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </motion.div>

        <motion.div variants={item}>
          <motion.h5
            whileHover={hoverEffect}
            className="text-black font-semibold mb-2"
          >
            Links
          </motion.h5>
          <ul className="space-y-1">
            {["Home", "Shop", "About", "Contect"].map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <Link
                  to={`/${link === "Home" ? "" : link}`}
                  className="hover:underline"
                >
                  {link}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={item}>
          <motion.h5
            whileHover={hoverEffect}
            className="text-black font-semibold mb-2"
          >
            Help
          </motion.h5>
          <ul className="space-y-1">
            {["Payment Options", "Returns", "Privacy Policies"].map(
              (item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </motion.li>
              )
            )}
          </ul>
        </motion.div>

        <motion.div variants={item}>
          <motion.h5
            whileHover={hoverEffect}
            className="text-black font-semibold mb-2"
          >
            Newsletter
          </motion.h5>
          <motion.div
            whileHover={hoverEffect}
            className="flex border-b border-gray-400"
          >
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="bg-transparent outline-none py-1 text-sm flex-grow"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-black font-semibold"
            >
              SUBSCRIBE
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-10 text-center text-gray-400 text-xs"
      >
        2023 Funiro. All rights reserved
      </motion.div>
    </motion.footer>
  );
}
