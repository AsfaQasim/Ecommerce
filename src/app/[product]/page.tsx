import Bestsellingcard from "@/components/bestsellingcard";
import React from "react";


const Product = () => {
  const products = [
    {
      src: "/tshirt.jpeg",
      alt: "tshirt",
      title: "T Shirt",
      description: "White T-shirt",
      price: 125,
    },
    {
      src: "/blacktshirt.jpg",
      alt: "tshirt",
      title: "T Shirt",
      description: "Black T-shirt",
      price: 100,
    },
    {
      src: "/pumpy.jpg",
      alt: "pumpy",
      title: "Pumpy",
      description: "Decent Pumpy",
      price: 150,
    },
    {
        src: "/tshirt.jpeg",
        alt: "tshirt",
        title: "T Shirt",
        description: "White T-shirt",
        price: 125,
      },
      {
        src: "/blacktshirt.jpg",
        alt: "tshirt",
        title: "T Shirt",
        description: "Black T-shirt",
        price: 100,
      },
      {
        src: "/pumpy.jpg",
        alt: "pumpy",
        title: "Pumpy",
        description: "Decent Pumpy",
        price: 150,
      },
      {
        src: "/tshirt.jpeg",
        alt: "tshirt",
        title: "T Shirt",
        description: "White T-shirt",
        price: 125,
      },
      {
        src: "/blacktshirt.jpg",
        alt: "tshirt",
        title: "T Shirt",
        description: "Black T-shirt",
        price: 100,
      },
      {
        src: "/pumpy.jpg",
        alt: "pumpy",
        title: "Pumpy",
        description: "Decent Pumpy",
        price: 150,
      },
  ];

  return (
    <div className="container mx-auto">
      {/* Heading */}
      <div className="flex justify-center items-center mb-16 mt-16 px-4">
        <p className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl text-center">
          Our Categories
        </p>
      </div>

      {/* Products Grid */}
      <div className="flex flex-wrap justify-center gap-5">
        {products.map((item, i) => (
          <Bestsellingcard
            key={i}
            src={item.src}
            alt={item.alt}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
