import React from "react";
import Bestsellingcard from "./bestsellingcard";

const Bestselling = () => {
  const products = [
    {
      src: "/tshirt.jpeg",
      alt: "tshirt",
      title: "T Shirt",
      description: "White T-shirt",
      price: 125,
      category: "Tshirt",
      slug: "white-tshirt"
    },
    {
      src: "/blacktshirt.jpg",
      alt: "tshirt",
      title: "T Shirt",
      description: "Black T-shirt",
      price: 100,
       category: "Tshirt",
      slug: "black-tshirt"
    },
    {
      src: "/pumpy.jpg",
      alt: "pumpy",
      title: "Pumpy",
      description: "Decent Pumpy",
      price: 150,
       category: "pumpy",
      slug: "pumpy"
    },
  ];

  return (
    <div className="container mx-auto max-w-full">
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
            Category= {item.category}
            slug=  {item.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default Bestselling;
