import React, { useState, useEffect } from "react";
import moment from "moment";

const NavbarTop = () => {
  const [currentDate, setCurrentDate] = useState({
    year: moment().year(),
    month: moment().month() + 1, // Moment.js months are zero-indexed, so add 1
    day: moment().date(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(prevDate => {
        const newDate = moment()
          .year(prevDate.year)
          .month(prevDate.month - 1) // Subtract 1 since months are 0-indexed in Moment.js
          .date(prevDate.day)
          .add(1, 'days');
        return {
          year: newDate.year(),
          month: (newDate.month() + 1) < 10 ? `0${newDate.month() + 1}` : (newDate.month() + 1).toString(),
          day: newDate.date() < 10 ? `0${newDate.date()}` : newDate.date().toString(),
        };
      });
    }, 5000); // Updates every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Life Sim</a>
      </div>
      <div className="flex-none gap-2">
        <div className="flex gap-5 text-center auto-cols-max">
          <div className="flex flex-col p-2 rounded-box text-neutral-content">
            <span className="font-mono text-lg">
              <span>{currentDate.year}</span>:
              <span>{currentDate.month < 10 ? `0${currentDate.month}` : currentDate.month}</span>:
              <span>{currentDate.day}</span>

            </span>
          </div>
        </div>
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
