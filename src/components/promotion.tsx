"use client"; // This is to indicate that this component is client-side rendered
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const Promotion = () => {
  return (
    <div className="mb-[100px] mt-[100px]">
      {/* Heading with Scroll Reveal */}
      <motion.div
        className="flex justify-center items-center mb-[50px]"
        initial={{ opacity: 0 }} // Start with opacity 0
        whileInView={{ opacity: 1 }} // Reveal with opacity 1 when in view
        transition={{ duration: 1 }} // Duration of the reveal animation
        viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the element is in view
      >
        <p className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
          Our Promotion
        </p>
      </motion.div>

      {/* Promotions Section with Scroll Reveal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-16 mt-8">
        {/* Promo 1 */}
        <motion.div
          className="hero bg-base-200 min-h-[400px] promo-1 rounded-2xl"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeInOut" }} 
          viewport={{ once: true, amount: 0.5 }} 
        >
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="scroll-m-20 border-b pb-2 text-4xl font-bold tracking-tight">
                Get upto <span className="text-orange-900">60%</span> off
              </h1>
              <p className="scroll-m-20 text-xl font-semibold tracking-tight lg:text-xl">
                Flash sale get upto 60% off on the season variant
              </p>
            </div>
          </div>
        </motion.div>

        {/* Promo 2 */}
        <motion.div
          className="hero bg-base-200 min-h-[400px] promo-2 rounded-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }} 
          viewport={{ once: true, amount: 0.5 }} 
        >
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="scroll-m-20 border-b pb-2 text-4xl font-bold tracking-tight">
                Get upto <span className="text-orange-900">30%</span> off
              </h1>
              <p className="scroll-m-20 text-xl font-semibold tracking-tight lg:text-xl">
                Flash sale get upto 30% off on the new Jewellery Arrival
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Promotion;
