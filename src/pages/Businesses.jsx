import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { FaTachometerAlt, FaShoppingCart, FaPlusSquare } from "react-icons/fa";

const Businesses = () => {
  const [selected, setSelected] = useState(""); // State to track the selected button
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    setSelected(path); // Update the selected button
    navigate(path);
  };

  return (
    <div className="flex">
      <div className="drawer lg:drawer-open w-2/12 lg:bg-base-200">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center min-h-full">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
            onClick={() => handleNavigate("")}
          >
            Open
          </label>
        </div>
        <div className="drawer-side w-full">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="w-64 text-base-content bg-base-300 lg:bg-transparent min-h-full p-4">
            <li>
              <button
                onClick={() => handleNavigate("")}
                className={`flex items-center px-4 py-2 w-full rounded-lg ${
                  selected === "" 
                    ? "bg-gradient-to-r from-purple-400 to-blue-500 text-white" 
                    : "hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-500 hover:text-white"
                }`}
              >
                <FaTachometerAlt className="mr-2" /> Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate("buy")}
                className={`flex items-center px-4 py-2 w-full rounded-lg mt-2 ${
                  selected === "buy" 
                    ? "bg-gradient-to-r from-purple-400 to-blue-500 text-white" 
                    : "hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-500 hover:text-white"
                }`}
              >
                <FaShoppingCart className="mr-2" /> Buy Business
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate("create")}
                className={`flex items-center px-4 py-2 w-full rounded-lg mt-2 ${
                  selected === "create" 
                    ? "bg-gradient-to-r from-purple-400 to-blue-500 text-white" 
                    : "hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-500 hover:text-white"
                }`}
              >
                <FaPlusSquare className="mr-2" /> Create Business
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-5 w-full lg:w-10/12 transition-all duration-300">
        <Outlet />
      </div>
    </div>
  );
};

export default Businesses;
