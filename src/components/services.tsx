"use client";

import React from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";
import { motion } from "framer-motion"; 

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const Services = () => {
  return (
    <div className={`mb-[100px] mt-[100px] ${roboto.className}`}>
      <section className="text-gray-600 body-font">
      
        <motion.div
          className="flex justify-center items-center mb-10"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }}     
          transition={{ duration: 1, ease: "easeOut" }} 
        >
          <p className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-gray-900">
            Our Services
          </p>
        </motion.div>

        <div className="container mx-auto px-4">
          {/* Grid of Service Items */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            initial={{ opacity: 0 }}        
            animate={{ opacity: 1 }}        
            transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }} 
          >
            {/* Service Item: Free Delivery */}
            <motion.div
              className="group flex flex-col items-center text-center bg-white shadow-md p-8 rounded-lg hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }}   
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: "easeOut", 
              }}
              whileHover={{
                scale: 1.05, 
                transition: { duration: 0.3 },
              }}
            >
              <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-gray-100 mb-4">
                <Image
                  src="/van.png"
                  alt="van"
                  width={100}
                  height={100}
                  className="w-16 h-16"
                />
              </div>
              <h2 className="text-gray-900 title-font font-bold text-lg mb-2 hover:text-orange-500 transition-colors duration-300">
                Free Delivery
              </h2>
              <p className="text-gray-600 text-base font-medium">
                Free delivery on orders above $1000
              </p>
            </motion.div>

            {/* Service Item: Secure Payment */}
            <motion.div
              className="group flex flex-col items-center text-center bg-white shadow-md p-8 rounded-lg hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}   
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: "easeOut", 
              }}
              whileHover={{
                scale: 1.05, 
                transition: { duration: 0.3 },
              }}
            >
              <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-gray-100 mb-4">
                <Image
                  src="/money.png"
                  alt="money"
                  width={100}
                  height={100}
                  className="w-16 h-16"
                />
              </div>
              <h2 className="text-gray-900 title-font font-bold text-lg mb-2 hover:text-orange-500 transition-colors duration-300">
                Secure Payment
              </h2>
              <p className="text-gray-600 text-base font-medium">
                Pay safely with our trusted partners.
              </p>
            </motion.div>

            {/* Service Item: 24/7 Support */}
            <motion.div
              className="group flex flex-col items-center text-center bg-white shadow-md p-8 rounded-lg hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }}   
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: "easeOut", 
              }}
              whileHover={{
                scale: 1.05, 
                transition: { duration: 0.3 },
              }}
            >
              <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-gray-100 mb-4">
                <Image
                  src="/service.png"
                  alt="service"
                  width={100}
                  height={100}
                  className="w-16 h-16"
                />
              </div>
              <h2 className="text-gray-900 title-font font-bold text-lg mb-2 hover:text-orange-500 transition-colors duration-300">
                24/7 Support
              </h2>
              <p className="text-gray-600 text-base font-medium">
                We&apos;re here for you anytime.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
