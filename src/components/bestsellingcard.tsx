import React from "react";
import Image from "next/image";
import { FaCartArrowDown, FaHeart } from "react-icons/fa";
import Link from "next/link";

const Bestsellingcard = ({
  src,
  alt,
  title,
  description,
  price,
  category,
  slug,
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
  price: number;
  category: string;
  slug: string;
}) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl rounded-lg">
      {/* Wrapping Image and Title in Link */}
      <Link href={`/${category}/${slug}`}>
        <Image
          src={src}
          alt={alt}
          width={600}
          height={600}
          className="cursor-pointer"
        />
      </Link>
      <div className="card-body rounded-lg flex flex-col items-start">
        <Link href={`/${category}/${slug}`}>
          <h2 className="card-title text-2xl font-bold cursor-pointer">
            {title}
          </h2>
        </Link>
        <p className="text-gray-500">{description}</p>
        <p className="text-gray-500 font-medium">${price}</p>

        <div className="card-actions flex justify-evenly w-full mt-4">
          {/* Buy Now Button */}
          <button
            className="text-xl font-semibold tracking-tight px-3 py-3
             flex items-center justify-center outline outline-offset-2 outline-orange-900 hover:rounded-3xl duration-300
             hover:outline-orange-600 group"
          >
            <FaHeart className="mr-2" />
            Buy Now
          </button>

          {/* Add to Cart Button */}
          <button
            className="text-xl font-semibold tracking-tight px-3 py-3
             flex items-center justify-center outline outline-offset-2 outline-orange-900 hover:rounded-3xl
              duration-300 hover:outline-orange-600 group"
          >
            <FaCartArrowDown className="mr-2" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bestsellingcard;
