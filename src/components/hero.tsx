"use client";

import React from "react";
import { Button } from "./ui/button";
import { IoIosMailUnread } from "react-icons/io";
import Link from "next/link";
import { Roboto } from "next/font/google";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

// Importing Roboto font
const roboto = Roboto({
  subsets: ["latin"], 
  weight: ["400", "700"], 
  display: "swap", 
});

const Hero = () => {
  return (
    <div className={`mb-24 ${roboto.className}`}>
      {/* Hero Section with Framer Motion animation */}
      <motion.div
        className="hero min-h-[80vh] custom-img flex flex-col items-center justify-center bg-fixed bg-cover bg-center text-center"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }} 
      >
        {/* Typewriter Effect for Heading */}
        <motion.div
          className="text-5xl font-semibold text-gray-900 mb-4"
          initial={{ y: -100, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1, delay: 0.5 }} 
        >
          <Typewriter
            options={{
              strings: [
                "Clothique",
                "Redefining timeless elegance with contemporary fashion for every occasion",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </motion.div>

        {/* Call-to-Action Button with Framer Motion */}
        <motion.div
          className="mt-6"
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 0.8, delay: 1 }} 
        >
          <Link href="/contact">
            <Button className="text-lg font-medium tracking-wide px-6 py-3 flex items-center justify-center bg-transparent outline outline-offset-2 outline-orange-900 hover:rounded-3xl transition-all duration-300 hover:outline-orange-600 hover:bg-orange-500 text-black group">
              <IoIosMailUnread className="mr-2 bg-transparent group-hover:bg-white group-hover:scale-125 transition-transform duration-300 p-1 rounded" />
              Login with Email
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
