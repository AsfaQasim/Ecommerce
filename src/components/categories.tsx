import React from "react";
import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="container mx-auto">
      {/* Heading */}
      <div className="flex justify-center items-center mb-16 mt-16 px-4">
        <p className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl text-center">
          Our Categories
        </p>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16 px-4 sm:px-8 lg:px-10">
        {/* Category 1 */}
        <div className="relative group w-full aspect-square overflow-hidden">
          <Link href="/tops">
            <Image
              src="/top.jpg"
              alt="tops"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <div
              className="absolute bottom-0 left-0 w-full bg-black bg-opacity-80 text-white
              text-center py-3 transform translate-y-full group-hover:translate-y-0
              transition-transform duration-300"
            >
              <h1 className="uppercase text-xl sm:text-2xl font-semibold">Tops</h1>
            </div>
          </Link>
        </div>

        {/* Category 2 */}
        <div className="relative group w-full aspect-square overflow-hidden">
          <Link href="/pants">
            <Image
              src="/pntss.jpg"
              alt="pants"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <div
              className="absolute bottom-0 left-0 w-full bg-black bg-opacity-80 text-white
              text-center py-3 transform translate-y-full group-hover:translate-y-0
              transition-transform duration-300"
            >
              <h1 className="uppercase text-xl sm:text-2xl font-semibold">Pants</h1>
            </div>
          </Link>
        </div>

        {/* Category 3 */}
        <div className="relative group w-full aspect-square overflow-hidden">
          <Link href="/accessories">
            <Image
              src="/jj.jpeg"
              alt="jewellery"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <div
              className="absolute bottom-0 left-0 w-full bg-black bg-opacity-80 text-white
              text-center py-3 transform translate-y-full group-hover:translate-y-0
              transition-transform duration-300"
            >
              <h1 className="uppercase text-xl sm:text-2xl font-semibold">Jewellery</h1>
            </div>
          </Link>
        </div>

        {/* Category 4 */}
        <div className="relative group w-full aspect-square overflow-hidden">
          <Link href="/shoes">
            <Image
              src="/shoes.jpeg"
              alt="shoes"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <div
              className="absolute bottom-0 left-0 w-full bg-black bg-opacity-80 text-white
              text-center py-3 transform translate-y-full group-hover:translate-y-0
              transition-transform duration-300"
            >
              <h1 className="uppercase text-xl sm:text-2xl font-semibold">Shoes</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
