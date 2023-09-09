import React from "react";
import { GrClose } from "react-icons/gr";
import ItemCart from "./ItemCart";
const Cart = () => {
  return (
    <>
      <div className=" fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white">
        <div className=" flex justify-between items-center p-5">
          <span className=" text-xl font-bold text-gray-9   00">My Order </span>
          <GrClose className=" border-2 border-gray-400 font-bold p-1 text-xl rounded-md hover:text-red-400 hover:border-red-500 cursor-pointer" />
        </div>

        <ItemCart />
        <ItemCart />
        <ItemCart />

        <div className=" absolute bottom-0 mb-5">
          <h3 className=" text-gray-700 font-semibold">Items</h3>
          <h3 className=" text-gray-700 font-semibold">Total Amount</h3>
          <hr className=" w-[90vw] lg:w-[18vw]" />
          <button className=" bg-green-500 text-white font-bold px-3 py-2 rounded-lg lg:w-[18vw] w-[90vw] items-center">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
