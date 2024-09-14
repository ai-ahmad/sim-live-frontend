import React from "react";
import { useLocation, Link } from "react-router-dom";
import { FcBriefcase, FcBullish, FcBusiness, FcHome, FcPortraitMode } from "react-icons/fc";

const NavbarBottom = () => {
  const location = useLocation(); // Получаем текущий путь

  // Функция для проверки, является ли путь активным
  const isActive = (path) => location.pathname === path;

  return (
    <div className="btm-nav bg-base-300 text-2xl ">
      <Link
        to="/shop"
        className={`text-info ${isActive("/shop") ? "active" : ""}`}
      >
        <img width="32" height="32" src="https://img.icons8.com/arcade/64/shop.png" alt="shop"/>
      </Link>
      <Link
        to="/Businesses"
        className={`text-info ${isActive("/Businesses") ? "active" : ""}`}
      >
        <FcBriefcase />
      </Link>

      <Link to="/" className={`text-info ${isActive("/") ? "active" : ""}`}>
        <FcHome />
      </Link>
      <Link
        to="/trading"
        className={`text-info ${isActive("/trading") ? "active" : ""}`}
      >
        <FcBullish />
      </Link>
      <Link
        to="/profile"
        className={`text-info ${isActive("/profile") ? "active" : ""}`}
      >
        <FcPortraitMode />
      </Link>
    </div>
  );
};

export default NavbarBottom;
