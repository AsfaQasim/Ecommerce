"use client";

import React, { useEffect, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import Image from "next/image";
import { useParams } from "next/navigation"; 
import { products } from "@/myproduct/product"; // Import your product data

interface Product {
  src: string;
  alt: string;
  title: string;
  description: string;
  price?: number;
  Category: string;
  slug: string;
  id: string;
  thumbnails?: { src: string; alt: string }[]; // Add thumbnails array if needed
}

const Slug = () => {
  const params = useParams(); // useParams provides access to the slug
  const [productData, setProductData] = useState<Product | undefined>();
  const [path, setPath] = useState<string | undefined>("");

  useEffect(() => {
    if (!params.slug) return; // Ensure params.slug exists
    const data = products.find((product) => product.id === params.slug);
    setProductData(data);
    if (data) setPath(data.src); // Set initial product image
  }, [params.slug]);

  if (!productData) return <div>Loading...</div>; // Handle loading state

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto max-w-full flex flex-wrap lg:flex-nowrap">
          {/* Left Side: Image */}
          <div className="lg:w-1/2 w-full flex flex-col items-center">
            {/* Main Image */}
            <Image
              alt={productData.alt || "Product Image"}
              className="lg:w-3/4 w-full lg:h-auto h-[400px] object-cover object-center rounded-md shadow-md"
              src={path || "/default-image.jpg"}
              height={400}
              width={400}
            />
            {/* Thumbnails */}
            <div className="mt-5 overflow-x-auto">
              <div className="flex lg:justify-between justify-center items-center lg:space-x-4 space-x-2 w-max">
                {productData.thumbnails?.map((thumbnail, index) => (
                  <div
                    key={index}
                    onClick={() => setPath(thumbnail.src)}
                    className="min-w-[100px] h-[100px] flex-shrink-0 rounded-md shadow-md cursor-pointer"
                  >
                    <Image
                      src={thumbnail.src}
                      alt={thumbnail.alt}
                      width={100}
                      height={100}
                      className="rounded-md"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-base title-font text-gray-500 tracking-widest">
              {productData.title}
            </h2>
            <h1 className="mt-3 text-gray-900 text-3xl title-font font-medium mb-1">
              {productData.Category}
            </h1>
            <p className="mt-3 leading-relaxed sm:text-2xl">
              {productData.description}
            </p>

            {/* Rating (optional) */}
            <div className="mt-3 rating rating-sm">
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-600"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-600"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>

            {/* Price and Add to Cart Button */}
            <div className="flex mt-6 items-center pb-5 mb-5">
              <div className="flex">
                <span className="mr-3 text-xl font-bold">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6" />
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6" />
                <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6" />
                <button className="border-2 border-gray-300 ml-1 bg-purple-500 rounded-full w-6 h-6" />
              </div>
            </div>

            {/* Price and Cart */}
            <div className="flex justify-between items-center">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${productData.price?.toFixed(2)}
              </span>
              <button className="text-xl font-semibold tracking-tight px-3 py-3 flex items-center justify-center outline outline-offset-2 outline-orange-900 hover:rounded-3xl duration-300 hover:outline-orange-600 group">
                <FaCartArrowDown className="mr-2" />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slug;
