"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Bestsellingcard from "@/components/bestsellingcard";
import { PantProduct, products, topProducts } from "@/myproduct/product";

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

const Product = ({ params }: { params: { product: string } }) => {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    if (params.product === "tops") {
      setProductList(topProducts);
    } else if (params.product === "pants") {
      setProductList(PantProduct);
    } else if (params.product === "all") {
      setProductList(products);
    }
  }, [params.product]);

  return (
    <div className="container mx-auto">
      {/* Heading */}
      <div className="flex justify-center items-center mb-16 mt-16 px-4">
        <p className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl text-center">
          Our Categories:{" "}
          {params.product.charAt(0).toUpperCase() + params.product.slice(1)}
        </p>
      </div>

      {/* Products Grid */}
      <div className="flex flex-wrap justify-center gap-5">
        {productList.map((item, i) => (
          <Link key={i} href={`/${params.product}/${item.id}`}>
            <Bestsellingcard
              src={item.src}
              alt={item.alt}
              title={item.title}
              description={item.description}
              price={item.price}
              category={item.Category}
              slug={item.slug}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;
