import React from "react";

const FoodMenu = () => {
  return (
    <div className=" mx-6">
      <h3 className=" font-semibold">Pick My Food</h3>
      <div className=" flex gap-2 overflow-x-auto scroll-smooth lg:overflow-hidden">
        <button className=" px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">
          All
        </button>
        <button className=" px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">
          Breakfast
        </button>
        <button className=" px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">
          Lunch
        </button>
        <button className=" px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">
          Snacks
        </button>
        <button className=" px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">
          Dinner
        </button>
      </div>
    </div>
  );
};

export default FoodMenu;
