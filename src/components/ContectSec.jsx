import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
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

const ContactSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full bg-white py-16 px-6 lg:px-20 font-sans text-gray-700"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold">Get In Touch With Us</h2>
          <motion.p 
            className="mt-2 text-gray-500 text-sm max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            For More Information About Our Product & Services. Please Feel Free To Drop Us
            An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </motion.p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <motion.div 
            variants={fadeIn}
            className="space-y-8 text-sm"
          >
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-start gap-4"
            >
              <MapPin className="w-6 h-6 text-yellow-600 mt-1" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-gray-600">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-start gap-4"
            >
              <Phone className="w-6 h-6 text-yellow-600 mt-1" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-600">Mobile: (+84) 546-6789</p>
                <p className="text-gray-600">Hotline: (+84) 456-6789</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-start gap-4"
            >
              <Clock className="w-6 h-6 text-yellow-600 mt-1" />
              <div>
                <p className="font-semibold">Working Time</p>
                <p className="text-gray-600">Monday–Friday: 9:00 – 22:00</p>
                <p className="text-gray-600">Saturday–Sunday: 9:00 – 21:00</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.form 
            variants={fadeIn}
            className="space-y-5"
          >
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-sm font-medium mb-1">Your name</label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                placeholder="Abc"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label className="block text-sm font-medium mb-1">Email address</label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                placeholder="Abc@def.com"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-sm font-medium mb-1">Subject</label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                placeholder="This is an optional"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label className="block text-sm font-medium mb-1">Message</label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                rows="4"
                placeholder="Hi! I'd like to ask about..."
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-500"
              />
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="bg-yellow-600 hover:bg-yellow-700 text-white text-sm px-6 py-2 rounded w-fit"
            >
              Submit
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactSection;