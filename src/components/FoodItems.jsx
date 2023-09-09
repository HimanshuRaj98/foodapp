import React from "react";
import toast, { Toaster } from "react-hot-toast";
import FoodCards from "./FoodCards";
import FoodData from "../assets/data";
import { useSelector } from "react-redux";
const FoodItems = () => {
  const handleToast = (name) => {
    toast.success(`${name} Added In Cart`);
  };

  const Search = useSelector((state) => state.search.search);
  const category = useSelector((state) => state.category.category);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-5 justify-center lg:justify-start mt-3">
        {FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(Search.toLowerCase());
          } else {
            return (
              category === food.category &&
              food.name.toLowerCase().includes(Search.toLowerCase())
            );
          }
        }).map((food) => (
          <FoodCards
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc.slice(0, 50)}
            rating={food.rating}
            img={food.img}
            handleToast={handleToast}
          />
        ))}
      </div>
    </>
  );
};

export default FoodItems;

// {FoodData.map((food) => {
//   return (
//     <FoodCards
//       key={food.id}
//       id={food.id}
//       name={food.name}
//       price={food.price}
//       desc={food.desc.slice(0, 50)}
//       rating={food.rating}
//       img={food.img}
//       handleToast={handleToast}
//     />
//   );
// })}
