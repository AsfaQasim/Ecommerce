import React from "react";
import { Button } from "./ui/button";
import { IoIosMailUnread } from "react-icons/io";

const Hero = () => {
  return (
    <div className="mb-[100px]">
      <div className="hero min-h-[80vh] custom-img flex items-center justify-center max-w-full bg-fixed bg-no-repeat bg-center">
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-orange-900">
              Clothique
            </h1>
            <p className="mb-5 scroll-m-20 text-xl font-extrabold tracking-tight lg:text-5x">
              Redefining timeless elegance with contemporary fashion for every
              occasion.
            </p>
            <div className="mt-5 flex justify-center">
              <Button
                className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-5x px-6 py-3 
             flex items-center justify-center outline outline-offset-2 outline-orange-900 hover:rounded-3xl duration-300
             hover:outline-orange-600 group"
              >
                <IoIosMailUnread className="mr-2 bg-transparent group-hover:bg-orange-500 group-hover:scale-125 duration-300 p-1 rounded" />
                Login with Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
