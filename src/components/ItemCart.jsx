import React from "react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from "react-icons/ai";
const ItemCart = () => {
  return (
    <div className=" gap-2 flex shadow-md rounded-lg p-2 m-4">
      <AiOutlineDelete className=" absolute right-7 border hover:bg-gray-200 scale-120 cursor-pointer" />
      <img
        src="https://w7.pngwing.com/pngs/875/111/png-transparent-north-fish-seafood-dish-smoked-salmon-restaurant-grilled-fish-hd-soup-food-seafood-thumbnail.png"
        alt=""
        className="w-[50px] h-[50px]"
      />
      <div className=" leading-5 ">
        <h3 className=" font-bold text-gray-950">Onion Pizza</h3>
        <div className=" flex justify-between">
          <span className=" text-green-500 font-bold">Price 90</span>
          <div className=" flex justify-between absolute right-7 gap-2">
            <AiOutlinePlus className=" border-2 border-gray-200 hover:bg-green-500 rounded-md p-1 transition-all ease-linear cursor-pointer scale-140 text-xl smooth" />
            <span>1</span>
            <AiOutlineMinus className=" border-2 border-gray-200 hover:bg-red-500 rounded-md p-1 transition-all ease-linear cursor-pointer scale-140 text-xl smooth" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
