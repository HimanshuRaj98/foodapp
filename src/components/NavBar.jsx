import React from "react";

const NavBar = () => {
  return (
    <nav className="flex flex-col lg:flex-row justify-between mx-6 py-3 mb-5">
      <div>
        <h3 className=" text-gray-800 text-xl font-blod ">
          {new Date().toUTCString()}
        </h3>
        <h1 className=" font-bold text-2xl">FoodApp</h1>
      </div>
      <div>
        <input
          type="text"
          name="search"
          id=""
          placeholder="Search Here"
          autoComplete="false"
          className="w-full rounded border shadow p-2 text-sm border-gray-500"
        />
      </div>
    </nav>
  );
};

export default NavBar;
