import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
const NavBar = () => {
  const dispatch = useDispatch();
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
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="w-full rounded border shadow p-2 text-sm border-gray-500"
        />
      </div>
    </nav>
  );
};

export default NavBar;
