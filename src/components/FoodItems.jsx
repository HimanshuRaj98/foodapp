import React from "react";
import FoodCards from "./FoodCards";
import FoodData from "../assets/data";

const FoodItems = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-center lg:justify-start mt-3">
      {FoodData.map((food) => {
        return (
          <FoodCards
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc.slice(0, 50)}
            rating={food.rating}
            img={food.img}
          />
        );
      })}
      <FoodCards />
    </div>
  );
};

export default FoodItems;
