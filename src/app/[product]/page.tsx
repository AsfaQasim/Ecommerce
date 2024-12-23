"use client"
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link"; 
import Bestsellingcard from "@/components/bestsellingcard";

import {
  jewelleryProduct,
  PantProduct,
  shoesProduct,
  topProduct,
} from "@/myproduct/product";


interface Product {
  src: string;
  alt: string;
  title: string;
  description: string;
  price?: number;
  Category: string;
  slug: string;
  id: string;
}

const ProductPage = () => {
  const params = useParams();
  const productCategory = params?.product; 
  const [productList, setProductList] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!productCategory) return;

    // Dynamically update the product list based on category
    switch (productCategory) {
      case "tops":
        setProductList(topProduct || []);
        break;
      case "pants":
        setProductList(PantProduct || []);
        break;
      case "accessories":
        setProductList(jewelleryProduct || []);
        break;
      case "shoes":
        setProductList(shoesProduct || []);
        break;
      default:
        setProductList([]);
    }

    setIsLoading(false); 
  }, [productCategory]);

  return (
    <div className="container mx-auto">
      {/* Heading */}
      <div className="flex justify-center items-center mb-16 mt-16 px-4">
        <p className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl text-center">
          Our Categories:{" "}
          {typeof productCategory === "string"
            ? productCategory.charAt(0).toUpperCase() + productCategory.slice(1)
            : "Unknown"}
        </p>
      </div>

      {/* Products Grid */}
      <div className="flex flex-wrap justify-evenly gap-5">
        {!isLoading && productList.length > 0 ? (
          productList.map((item) => (
          
            <Link key={item.id} href={`/${productCategory}/${item.id}`}>
             
              <Bestsellingcard
                src={item.src}
                alt={item.alt}
                title={item.title}
                description={item.description}
                price={item.price}
                Category={item.Category}
                slug={item.slug}
              />
            </Link>
          ))
        ) : (
          <div className="text-center mt-20">
            <p className="text-lg font-semibold">
              {isLoading ? "Loading..." : "No products found."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
