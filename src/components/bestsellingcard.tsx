"use client";
import React from "react";
import Image from "next/image";
import { FaCartArrowDown, FaHeart } from "react-icons/fa";
import Link from "next/link";
import { easeIn, motion } from "framer-motion";

const Bestsellingcard = ({
  src,
  alt,
  title,
  description,
  price,
  slug,
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
  price?: number;
  Category:string,
  slug: string;
}) => {
  return (
    <motion.div
      className="card bg-base-100 w-80 shadow-xl rounded-lg overflow-hidden"
      initial={{ opacity: 0, scale: 0 }} 
      whileInView={{ opacity: 1, scale: 1 }} 
      viewport={{ once: true, amount: 0.5 }} 
      transition={{ duration: 0.6, ease:easeIn}} 
    >
     
      <Link href={`/products/${slug}`}>
     
        <Image
          src={src}
          alt={alt}
          width={320} 
          height={320} 
          className="cursor-pointer object-cover"
        />
        <div className="card-body rounded-lg flex flex-col items-start p-4">
        
          <h2 className="card-title text-xl font-semibold cursor-pointer">
            {title}
          </h2>
          <p className="text-gray-500 text-sm">{description}</p>

          {/* Conditional rendering for price */}
          <p className="text-gray-500 font-medium mt-2">
            {price ? `$${price.toFixed(2)}` : "Price Unavailable"}
          </p>
        </div>
      </Link>

      {/* Card Actions: Buy and Add to Cart buttons */}
      <div className="card-actions w-full p-4 flex gap-4">
        {/* Buy Now Button */}
        {price ? (
          <button
            className="btn btn-sm text-lg font-semibold px-4 py-2 flex items-center justify-center outline outline-offset-2 outline-orange-900 hover:rounded-3xl duration-300 hover:outline-orange-600 group"
            aria-label={`Buy ${title} now`}
          >
            <FaHeart className="mr-2" />
            Buy Now
          </button>
        ) : null}

        {/* Add to Cart Button */}
        <button
          className="btn btn-sm text-lg font-semibold px-4 py-2 flex items-center justify-center outline outline-offset-2 outline-orange-900 hover:rounded-3xl duration-300 hover:outline-orange-600 group"
          aria-label={`Add ${title} to cart`}
        >
          <FaCartArrowDown className="mr-2" />
          Add to cart
        </button>
      </div>
    </motion.div>
  );
};

export default Bestsellingcard;
