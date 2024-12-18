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
      Category : "white-tshirt",
      slug: "white-shirt"
    },
    {
      src: "/blacktshirt.jpg",
      alt: "tshirt",
      title: "T Shirt",
      description: "Black T-shirt",
      price: 100,
       Category : "black-tshirt",
      slug: "black-shirt"
    },
    {
      src: "/pumpy.jpg",
      alt: "pumpy",
      title: "Pumpy",
      description: "Decent Pumpy",
      price: 150,
       Category : "pumpy",
      slug: "pumpy"
    },
    {
        src: "/tshirt.jpeg",
        alt: "tshirt",
        title: "T Shirt",
        description: "White T-shirt",
        price: 125,
        Category : "pumpy",
      slug: "pumpy"
      },
      {
        src: "/blacktshirt.jpg",
        alt: "tshirt",
        title: "T Shirt",
        description: "Black T-shirt",
        price: 100,
        Category : "pumpy",
      slug: "pumpy"
      },
      {
        src: "/pumpy.jpg",
        alt: "pumpy",
        title: "Pumpy",
        description: "Decent Pumpy",
        price: 150,
        Category : "pumpy",
      slug: "pumpy"
      },
      {
        src: "/tshirt.jpeg",
        alt: "tshirt",
        title: "T Shirt",
        description: "White T-shirt",
        price: 125,
        Category : "pumpy",
      slug: "pumpy"
      },
      {
        src: "/blacktshirt.jpg",
        alt: "tshirt",
        title: "T Shirt",
        description: "Black T-shirt",
        price: 100,
        Category : "pumpy",
      slug: "pumpy"
      },
      {
        src: "/pumpy.jpg",
        alt: "pumpy",
        title: "Pumpy",
        description: "Decent Pumpy",
        price: 150,
        Category : "pumpy",
      slug: "pumpy"
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
            category= {item.Category}
            slug= {item.slug}

                     />
        ))}
      </div>
    </div>
  );
};

export default Product;
