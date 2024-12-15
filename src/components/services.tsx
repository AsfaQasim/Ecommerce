import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <div className="mb-[100px] mt-[100px]">
      <section className="text-gray-600 body-font">
        <div className="flex justify-center items-center">
          <p className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
            Our Services
          </p>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-col items-center lg:w-3/5 mx-auto pb-10 mb-10 border-gray-200 gap-10">
            {/* Service Item */}
            <div className="flex flex-col items-center text-center">
              <div className="sm:w-32 sm:h-32 h-20 w-20 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0">
                <Image
                  src={"/van.png"}
                  alt="vanpic"
                  width={100}
                  height={100}
                  className="w-20 h-20"
                />
              </div>
              <div className="mt-6">
                <h2 className="text-gray-900 title-font font-medium mb-2 scroll-m-20 text-xl tracking-tight lg:text-3xl hover:text-orange-500 transition-colors duration-300">
                  Free Delivery
                </h2>
                <p className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0 hover:text-orange-500 transition-colors duration-300">
                  Free delivery on orders above $1000
                </p>
              </div>
            </div>
            {/* Repeat Service Items */}
            <div className="flex flex-col items-center text-center">
              <div className="sm:w-32 sm:h-32 h-20 w-20 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0">
                <Image
                  src={"/money.png"}
                  alt="vanpic"
                  width={100}
                  height={100}
                  className="w-20 h-20"
                />
              </div>
              <div className="mt-6">
                <h2 className="text-gray-900 title-font font-medium mb-2 scroll-m-20 text-xl tracking-tight lg:text-3xl hover:text-orange-500 transition-colors duration-300">
                  Secure Payment
                </h2>
                <p className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0 hover:text-orange-500 transition-colors duration-300">
                  Pay safely with our trusted partners.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="sm:w-32 sm:h-32 h-20 w-20 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0">
                <Image
                  src={"/service.png"}
                  alt="vanpic"
                  width={100}
                  height={100}
                  className="w-20 h-20"
                />
              </div>
              <div className="mt-6">
                <h2 className="text-gray-900 title-font font-medium mb-2 scroll-m-20 text-xl tracking-tight lg:text-3xl hover:text-orange-500 transition-colors duration-300">
                  24/7 Support
                </h2>
                <p className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0 hover:text-orange-500 transition-colors duration-300">
                  We're here for you anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
