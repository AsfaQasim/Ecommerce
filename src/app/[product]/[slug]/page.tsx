"use client";
import React, { useEffect, useState } from "react";
import { FaCartArrowDown, FaHeart } from "react-icons/fa";
import { LuMinus, LuPlus } from "react-icons/lu";
import Image from "next/image";
import { products } from "@/myproduct/product";

interface Product {
  src: string;
  alt: string;
  title: string;
  description: string;
  price: number;
  Category: string;
  slug: string;
  id: string;
}

const Slug = ({ params }: { params: { slug: string } }) => {
  const [productData, setproductData] = useState<Product>();
  useEffect(() => {
    const data = products.filter((val) => val.id === params.slug)[0];
    setproductData(data);
  },[]);

  const [path, setPath] = useState("/shoes.jpeg");
  if (productData)
    return (
      <div>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto max-w-full flex flex-wrap lg:flex-nowrap">
            {/* Left Side: Image */}
            <div className="lg:w-1/2 w-full flex flex-col items-center">
              {/* Main Image */}
              <Image
                alt="ecommerce"
                className="lg:w-3/4 w-full lg:h-auto h-[400px] object-cover object-center rounded-md shadow-md"
                src={productData.src}
                height={100}
                width={100}
              />

              {/* Thumbnails */}
              <div className="mt-5 overflow-x-auto">
                <div className="flex lg:justify-between justify-center items-center lg:space-x-4 space-x-2 w-max">
                  <div
                    onClick={() => setPath("/shoes.jpeg")}
                    className="min-w-[100px] h-[100px] flex-shrink-0 rounded-md shadow-md cursor-pointer"
                  >
                    <Image
                      src="/shoes.jpeg"
                      alt="Shoes"
                      width={100}
                      height={100}
                      className="rounded-md"
                    />
                  </div>
                  <div
                    onClick={() => setPath("/tshirt.jpeg")}
                    className="min-w-[100px] h-[100px] flex-shrink-0 rounded-md shadow-md cursor-pointer"
                  >
                    <Image
                      src="/tshirt.jpeg"
                      alt="T-shirt"
                      width={100}
                      height={100}
                      className="rounded-md"
                    />
                  </div>
                  <div
                    onClick={() => setPath("/pumpy.jpg")}
                    className="min-w-[100px] h-[100px] flex-shrink-0 rounded-md shadow-md cursor-pointer"
                  >
                    <Image
                      src="/pumpy.jpg"
                      alt="Pumpy"
                      width={100}
                      height={100}
                      className="rounded-md"
                    />
                  </div>
                  <div
                    onClick={() => setPath("/pants.webp")}
                    className="min-w-[100px] h-[100px] flex-shrink-0 rounded-md shadow-md cursor-pointer"
                  >
                    <Image
                      src="/pants.webp"
                      alt="Pants"
                      width={100}
                      height={100}
                      className="rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Right Side: Content */}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-base title-font text-gray-500 tracking-widest scroll-m-20 border-b pb-2 font-semibold first:mt-0">
                {productData.title}
              </h2>
              <h1 className="mt-3 text-gray-900 text-3xl title-font font-medium mb-1">
                Tops....
              </h1>

              <p className="mt-3 leading-relaxed sm:text-2xl">
               {productData.description}
              </p>
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
              <div className="flex mt-6 items-center pb-5 mb-5">
                <div className="flex">
                  <span className="mr-3 scroll-m-20 text-xl font-bold lg:text-xl">
                    Color
                  </span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" />
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" />
                  <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" />
                  <button className="border-2 border-gray-300 ml-1 bg-purple-500 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" />
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3 scroll-m-20 text-base text-black font-semibold tracking-tight">
                    Size
                  </span>
                </div>
                <label className="form-control w-full max-w-xs">
                  <select className="select select-bordered">
                    <option disabled selected>
                      Select Size
                    </option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXL</option>
                  </select>
                </label>
              </div>
              <div className="flex gap-4 items-center">
                <span className="mr-3 scroll-m-20 text-base text-black font-semibold tracking-tight flex items-center">
                  Quantity
                </span>
                <button className="text-xl font-semibold tracking-tight px-2 py-2 flex items-center justify-center outline outline-offset-2 outline-orange-900 hover:rounded-xl duration-300 hover:outline-orange-600 group rounded-lg">
                  <LuMinus className="mr-2" />
                  Less
                </button>
                <div>1</div>
                <button className="text-xl font-semibold tracking-tight px-2 py-2 flex items-center justify-center outline outline-offset-2 outline-orange-900 hover:rounded-xl duration-300 hover:outline-orange-600 group">
                  <LuPlus className="mr-2" />
                  Add
                </button>
              </div>
              <div className="divider"></div>
              <div className="flex justify-between items-center">
                <span className="title-font font-medium text-2xl text-gray-900">
                  $58.00
                </span>

                <button className="text-xl font-semibold tracking-tight px-3 py-3 flex items-center justify-center outline outline-offset-2 outline-orange-900 hover:rounded-3xl duration-300 hover:outline-orange-600 group">
                  <FaCartArrowDown className="mr-2" />
                  Add to cart
                </button>
              </div>
              <button className="text-xl font-semibold tracking-tight px-3 py-3 mt-7 w-full flex items-center justify-center outline outline-offset-2 outline-orange-900 hover:rounded-3xl duration-300 hover:outline-orange-600 group">
                <FaHeart className="mr-2" />
                Buy Now
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  else return null;
};

export default Slug;
