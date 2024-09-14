import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Businesses = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };
  const navigate = useNavigate();

  return (
    <div className="flex">
      <div className="drawer lg:drawer-open w-2/12 lg:bg-base-200">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center min-h-full">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
            onClick={() => navigate("")}
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
          <ul className="menu w-80 text-base-content bg-base-300 lg:bg-transparent min-h-full p-4">
            {/* Sidebar content here */}
            <li>
              <button onClick={() => navigate("")}>Dashboard</button>
            </li>
            <li>
              <button onClick={() => navigate("buy")}>Buy Business</button>
            </li>
            <li>
              <button onClick={() => navigate("create")}>
                Create Business
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-5 w-full lg:w-10/12 transition-all duration-300">
        <Outlet /> {/* This should update based on the route */}
      </div>
    </div>
  );
};

export default Businesses;
