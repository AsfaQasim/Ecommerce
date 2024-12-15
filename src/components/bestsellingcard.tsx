import React from "react";
import Image from "next/image";
import { FaCartArrowDown } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Bestsellingcard = ({
  src,
  alt,
  title,
  description,
  price,
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
  price: number;
}) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl rounded-lg">
      <Image src={src} alt={alt} width={600} height={600} />
      <div className="card-body rounded-lg flex flex-col items-start">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <p className="text-gray-500">{description}</p>
        <p className="text-gray-500">${price}</p>
        <div className="card-actions flex justify-evenly w-full mt-4">
          <button
            className="text-xl font-semibold tracking-tight px-3 py-3
             flex items-center justify-center outline outline-offset-2 outline-orange-900 hover:rounded-3xl duration-300
             hover:outline-orange-600 group"
          >
            <FaHeart className="mr-2" />
            Buy Now
          </button>
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
