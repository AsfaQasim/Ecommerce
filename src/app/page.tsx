// import Navbar from '@/components/ui/navbar';

import Bestselling from "@/components/bestselling";
import Categories from "@/components/categories";

import Hero from "@/components/hero";
import Promotion from "@/components/promotion";
import Services from "@/components/services";
import React from "react";

const Page = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Promotion />
      <Categories />
      <Bestselling />
    </div>
  );
};

export default Page;
