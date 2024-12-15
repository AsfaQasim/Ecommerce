import React from "react";

const Promotion = () => {
  return (
    <div className="mb-[100px] mt-[100px]">
      {/* Heading */}
      <div className="flex justify-center items-center mb-[50px]">
        <p className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
          Our Promotion
        </p>
      </div>

   

      {/* Duplicate Promotions Section (If needed, you can modify the content here) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-16 mt-8">
        {/* Promo 3 */}
        <div className="hero bg-base-200 min-h-[400px] promo-1 rounded-2xl">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="scroll-m-20 border-b pb-2 text-4xl font-bold tracking-tight">
                Get upto <span className="text-orange-900">60%</span> off
              </h1>
              <p className="scroll-m-20 text-xl font-semibold tracking-tight lg:text-xl">
                Flash sale get upto 60% off on the season variant
              </p>
            </div>
          </div>
        </div>

        {/* Promo 4 */}
        <div className="hero bg-base-200 min-h-[400px] promo-2 rounded-2xl">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="scroll-m-20 border-b pb-2 text-4xl font-bold tracking-tight">
                Get upto <span className="text-orange-900">30%</span> off
              </h1>
              <p className="scroll-m-20 text-xl font-semibold tracking-tight lg:text-xl">
                Flash sale get upto 30% off on the new Jewellery Arrival
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
