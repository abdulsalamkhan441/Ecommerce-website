import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Img15 from "../assets/Img15.png";
import Img16 from "../assets/Img16.png";
import Img17 from "../assets/Img17.png";
import Img18 from "../assets/Img18.png";
import Img19 from "../assets/Img19.png";
import Img20 from "../assets/Img20.png";
import Img21 from "../assets/Img21.png";
import { Link } from "react-router-dom";
import { useCart } from "../components/CartContext";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } }
};

export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [currentImage, setCurrentImage] = useState(Img15);
  const [showZoom, setShowZoom] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const imageRef = useRef(null);

  const sizes = ["L", "XL", "XS"];
  const colors = ["#523F25", "#000", "#F1DDAA"];
  const thumbnails = [Img16, Img17, Img18, Img19];
  const { addToCart } = useCart();

  const handleQuantityChange = (type) => {
    setQuantity((prev) =>
      type === "increment" ? prev + 1 : Math.max(1, prev - 1)
    );
  };

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <div className="bg-[#f9f6f1] py-4 px-4 sm:px-8 lg:px-12 xl:px-20 text-sm">
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex items-center space-x-2"
        >
          <Link to="/" className="text-neutral-500 hover:text-black">Home</Link>
          <span>/</span>
          <Link to="/Shop" className="text-neutral-500 hover:text-black">Shop</Link>
          <span>/</span>
          <span className="text-black font-medium">Asgaard sofa</span>
        </motion.div>
      </div>

      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 py-10 grid grid-cols-1 md:grid-cols-2 gap-12 bg-white">
        <motion.div 
          variants={scaleUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row gap-4"
        >
          <div className="flex md:flex-col gap-3">
            {thumbnails.map((imgSrc, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentImage(imgSrc)}
                className={`w-[74px] h-[44px] bg-[#f9f1e7] flex items-center justify-center cursor-pointer transition-all ${
                  currentImage === imgSrc ? "border-2 border-black" : "border border-gray-200"
                }`}
              >
                <img
                  src={imgSrc}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          <div className="relative flex-1 bg-[#f9f1e7] border border-gray-200">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative w-full h-full min-h-[300px] flex items-center justify-center"
              onMouseEnter={() => setShowZoom(true)}
              onMouseLeave={() => setShowZoom(false)}
              onMouseMove={handleMouseMove}
            >
              <motion.img
                ref={imageRef}
                src={currentImage}
                alt="Asgaard Sofa"
                className="object-contain w-full h-auto max-h-[500px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                key={currentImage}
              />

              {showZoom && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="hidden md:block absolute left-full top-0 ml-4 w-[300px] h-[300px] bg-white border shadow-lg overflow-hidden z-10"
                >
                  <div
                    className="w-full h-full bg-no-repeat"
                    style={{
                      backgroundImage: `url(${currentImage})`,
                      backgroundSize: "200%",
                      backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                    }}
                  />
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-2xl font-semibold">Asgaard sofa</h1>
          <p className="text-xl text-yellow-700 mt-1">$ 2,501</p>

          <div className="flex items-center mt-2 space-x-1 text-yellow-400">
            <span>★★★★☆</span>
            <span className="text-xs text-gray-500">5 Customer Review</span>
          </div>

          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>

          <div className="mt-6">
            <p className="font-semibold mb-2">Size</p>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <motion.span
                  key={size}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-1 border rounded cursor-pointer hover:bg-gray-100"
                >
                  {size}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <p className="font-semibold mb-2">Color</p>
            <div className="flex gap-3">
              {colors.map((color, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  className="w-6 h-6 rounded-full cursor-pointer border"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center border px-3 py-1 rounded"
            >
              <button
                onClick={() => handleQuantityChange("decrement")}
                className="text-lg"
              >
                -
              </button>
              <span className="px-3">{quantity}</span>
              <button
                onClick={() => handleQuantityChange("increment")}
                className="text-lg"
              >
                +
              </button>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => addToCart({
                title: "Asgaard sofa",
                price: "CAD $2501",
                image: currentImage,
                qty: quantity,
              })}
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
            >
              Add To Cart
            </motion.button>
            <Link to="/Compare">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="border px-6 py-2 rounded hover:bg-gray-100 transition"
              >
                + Compare
              </motion.button>
            </Link>
          </div>

          <div className="text-sm text-gray-500 mt-6 space-y-1">
            <p><span className="font-medium">SKU:</span> SS001</p>
            <p><span className="font-medium">Category:</span> Sofas</p>
            <p><span className="font-medium">Tags:</span> Sofa, Chair, Home, Shop</p>
            <p>
              <span className="font-medium">Share:</span>
              <span className="inline-flex gap-2 ml-2 text-black">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-twitter"></i>
              </span>
            </p>
          </div>
        </motion.div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 mt-8">
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="border-b flex gap-8 text-sm font-medium"
        >
          <button
            className={`py-2 ${
              activeTab === "description" ? "border-b-2 border-black" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`py-2 ${
              activeTab === "additional" ? "border-b-2 border-black" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("additional")}
          >
            Additional Information
          </button>
          <button
            className={`py-2 ${
              activeTab === "reviews" ? "border-b-2 border-black" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews [5]
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-gray-600 text-sm"
        >
          {activeTab === "description" && (
            <>
              <p className="mb-4">
                Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and
                sound of Marshall, unplugs the chords, and takes the show on the
                road. <br /> Weighing in under 7 pounds, the Kilburn is a
                lightweight piece of vintage styled engineering. Setting the bar
                as one of the loudest speakers in its class, the Kilburn is a
                compact, stout-hearted hero with a well-balanced audio which
                boasts a clear midrange and extended highs for a sound that is
                both articulate and pronounced. The analogue knobs allow you to
                fine tune the controls to your personal preferences while the
                guitar-influenced leather strap enables easy and stylish travel.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.img
                  src={Img20}
                  alt="Sofa Image 1"
                  className="w-full rounded"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  loading="lazy"
                />
                <motion.img
                  src={Img21}
                  alt="Sofa Image 2"
                  className="w-full rounded"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  loading="lazy"
                />
              </div>
            </>
          )}
          {activeTab === "additional" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <p><strong>Material:</strong> 100% Leather</p>
              <p><strong>Dimensions:</strong> 80 x 60 x 40 cm</p>
              <p><strong>Weight:</strong> 30kg</p>
              <p><strong>Warranty:</strong> 2 Years</p>
            </motion.div>
          )}
          {activeTab === "reviews" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <div>
                <p className="font-semibold text-black">John Doe</p>
                <p>★★★★☆</p>
                <p className="text-sm text-gray-500">Very comfortable and stylish. Worth the price!</p>
              </div>
              <div>
                <p className="font-semibold text-black">Jane Smith</p>
                <p>★★★★★</p>
                <p className="text-sm text-gray-500">Absolutely love this sofa. Great quality!</p>
              </div>
              <div>
                <p className="font-semibold text-black">Ahmed Khan</p>
                <p>★★★☆☆</p>
                <p className="text-sm text-gray-500">Good but delivery was delayed.</p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </section>
    </motion.div>
  );
}
