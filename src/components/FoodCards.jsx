import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CardSlice";
const FoodCards = ({ id, name, price, desc, rating, img, handleToast }) => {
  const dispatch = useDispatch();
  return (
    <div className=" p-5 font-bold w-[250px] py-6 mx-6 flex flex-col gap-2 bg-white rounded-lg">
      <img
        src={img}
        alt=""
        className=" cursor-grab hover:scale-110 w-auto h-[130px] transition-all duration-300 ease-in-out"
      />
      <div className=" text-sm justify-between flex ">
        <h2>{name}</h2>
        <span className=" text-green-400">₹{price}</span>
      </div>
      <p className=" text-sm font-normal">{desc}..</p>
      <div className=" flex justify-between">
        <span className="flex justify-center items-center">
          <AiFillStar className=" mr-1 text-yellow-400" />
          {rating}
        </span>
        <button
          onClick={() =>
            dispatch(addToCart({ id, name, price, rating, img, quantity: 1 }),
            handleToast(name),)
          }
          className=" p-1 text-white bg-green-500 hover:bg-green-700 rounded-lg text-sm"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCards;
