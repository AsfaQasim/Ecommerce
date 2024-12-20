import React from "react";

const Cart = () => {
  return (
    <div className="mt-[100px] px-4">
      <div className="w-full max-w-[300px] bg-myWhite py-3 px-4 rounded-md shadow-lg mx-auto lg:ml-auto lg:mr-[20px]">
        <h3 className="text-lg font-bold mb-4">Order Summary</h3>
        <div className="divider border-b my-2"></div>
        <div className="flex justify-between">
          <p className="text-sm text-gray-600 font-semibold">Sub total</p>
          <p className="text-sm text-gray-600 font-semibold">$1500</p>
        </div>

        <div className="flex justify-between">
          <p className="text-sm text-gray-600">Tax</p>
          <p className="text-sm text-gray-600 font-semibold">$150</p>
        </div>

        <div className="flex justify-between">
          <p className="text-sm text-gray-600">Total</p>
          <p className="text-sm text-gray-600 font-semibold">$1650</p>
        </div>
        <div className="divider border-b my-2"></div>
        <div className="flex justify-between">
          <h3 className="text-lg font-bold mb-4">Estimated Total</h3>
          <p className="text-sm text-gray-600 font-semibold">$1500</p>
        </div>
        <div className="divider border-b my-2"></div>

        <button className="w-full text-xl font-semibold tracking-tight px-2 py-2 flex items-center justify-center outline outline-offset-2 outline-orange-900 hover:rounded-xl duration-300 hover:outline-orange-600 group rounded-lg hover:bg-orange-300">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
