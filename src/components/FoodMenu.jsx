import React, { useEffect, useState } from "react";
import FoodData from "../assets/data";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

const FoodMenu = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
    console.log(categories);
  }, []);

  return (
    <div className=" mx-6">
      <h3 className=" font-semibold">Pick My Food</h3>
      <div className=" flex gap-2 overflow-x-auto scroll-smooth lg:overflow-hidden">
        {/*
        
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
        </button> */}
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={` px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
            selectedCategory === "All" && "bg-green-500 text-white"
          }`}
        >
          All
        </button>

        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={` px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
                selectedCategory === category && "bg-green-500 text-white"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FoodMenu;
