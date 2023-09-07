import React from "react";
import NavBar from "../components/NavBar";
import FoodMenu from "../components/FoodMenu";
import FoodItems from "../components/FoodItems";

const Home = () => {
  return (
    <>
      <NavBar />
      <FoodMenu />
      <FoodItems />
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
    </>
  );
};

export default Home;
