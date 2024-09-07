import React, { useState, useEffect } from "react";
import moment from "moment";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const NavbarTop = () => {
  const [currentDate, setCurrentDate] = useState({
    year: moment().year(),
    month: moment().month(),
    day: moment().date(),
  });
  const [locationState, setLocationState] = useState(true);
  const balance = useSelector((state) => state.balance.balance);
  const location = useLocation();

  useEffect(() => {
    setLocationState(location.pathname !== "/");
  }, [location]);

  console.log(locationState);

  useEffect(() => {
    setCurrentDate((prevDate) => ({
      ...prevDate,
      month: String(prevDate.month).padStart(2, "0"),
      day: String(prevDate.day).padStart(2, "0"),
    }));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate((prevDate) => {
        const newDate = moment()
          .year(prevDate.year)
          .month(prevDate.month - 1)
          .date(prevDate.day)
          .add(1, "days");
        return {
          year: newDate.year(),
          month: String(newDate.month() + 1).padStart(2, "0"),
          day: String(newDate.date()).padStart(2, "0"),
        };
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const formatBalance = (amount) => {
    return new Intl.NumberFormat("uz-UZ").format(amount) + " UZS";
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Life Sim</a>
      </div>
      <div className="flex-none gap-2">
        <motion.div
          className="flex gap-5 text-center auto-cols-max"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="flex items-center p-2 rounded-box text-neutral-content">
            <motion.span
              className="font-mono text-lg"
              key={currentDate.year}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {currentDate.year}
            </motion.span>
            :
            <motion.span
              className="font-mono text-lg"
              key={currentDate.month}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {currentDate.month}
            </motion.span>
            :
            <motion.span
              className="font-mono text-lg"
              key={currentDate.day}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {currentDate.day}
            </motion.span>
          </div>
        </motion.div>
        {locationState && (
          <motion.div
            className="flex gap-5 text-center auto-cols-max text-xs text-accent rounded-2xl border border-accent"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <div className="flex items-center p-2 rounded-box">
              <motion.span
                className="font-mono"
                key={balance}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {formatBalance(balance)}
              </motion.span>
            </div>
          </motion.div>
        )}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-[999] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
