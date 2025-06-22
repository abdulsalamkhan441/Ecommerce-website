import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero3({
  backgroundImage,
  title,
  breadcrumbs = [],
  overlayOpacity = 0.6,
  overlayBlur = "sm",
  height = "h-64",
  className = "",
  titleSize = "text-3xl",
  titleAnimation = { whileHover: { scale: 1.05 } },
  animationSettings = {
    container: {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      transition: { duration: 0.8 }
    },
    overlay: {
      initial: { scale: 1.1 },
      animate: { scale: 1 },
      transition: { duration: 1.2, ease: "easeOut" }
    },
    content: {
      initial: { y: 20, opacity: 0 },
      whileInView: { y: 0, opacity: 1 },
      transition: { delay: 0.3, duration: 0.6 }
    },
    breadcrumbs: {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      transition: { delay: 0.5, duration: 0.6 }
    }
  }
}) {
  return (
    <motion.div
      className={`${height} w-full flex items-center justify-center relative mb-8 overflow-hidden ${className}`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      {...animationSettings.container}
      viewport={{ once: true }}
    >
      <motion.div
        className="absolute inset-0 bg-white"
        style={{
          opacity: overlayOpacity,
          backdropFilter: `blur(${overlayBlur})`,
        }}
        {...animationSettings.overlay}
      />

      <motion.div
        className="relative z-10 text-center"
        {...animationSettings.content}
        viewport={{ once: true }}
      >
        <motion.h1
          className={`${titleSize} font-bold text-black mb-2`}
          {...titleAnimation}
        >
          {title}
        </motion.h1>

        {breadcrumbs.length > 0 && (
          <motion.nav
            className="text-sm text-black space-x-1"
            {...animationSettings.breadcrumbs}
            viewport={{ once: true }}
          >
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {crumb.path ? (
                  <Link to={crumb.path}>
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="inline-block cursor-pointer"
                    >
                      {crumb.label}
                    </motion.span>
                  </Link>
                ) : (
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-700 font-medium inline-block"
                  >
                    {crumb.label}
                  </motion.span>
                )}
                {index < breadcrumbs.length - 1 && <span>{">"}</span>}
              </React.Fragment>
            ))}
          </motion.nav>
        )}
      </motion.div>
    </motion.div>
  );
}