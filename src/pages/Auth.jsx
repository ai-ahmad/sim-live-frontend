import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaLock } from "react-icons/fa";
import { BsApple } from "react-icons/bs";

const Auth = () => {
  const apiUrl = import.meta.env.VITE_APP_SUB_TITLE;

  return (
    <div className='h-screen flex  justify-center items-center bg-[url("loginBG.jpg")]'>
      <form
        action=""
        className="w-5/6 xl:w-2/4 min-h-[70vh] flex flex-col justify-between xl:h-1/2 bg-base-300 bg-opacity-80 rounded-2xl p-5 shadow-lg shadow-cyan-400 border-2 border-primary"
      >
        <p className="text-center font-mono font-black text-primary">
          {apiUrl}
        </p>
        <div className="flex flex-col gap-2">
          <label className="input input-bordered text-primary placeholder:text-primary input-primary flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" className="grow" placeholder="Please enter your gmail" />
          </label>
          <label className="input input-bordered text-primary placeholder:text-primary input-primary flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="password" className="grow " value="password" />
          </label>
        </div>

        <div className="flex justify-between items-center">
          <p></p>
          <Link to="/recovery" className="text-center link link-primary">
            Вы забыли свой пароль?
          </Link>
        </div>
        <label className="flex flex-col mt-2 gap-2 relative">
          <button className="font-bold btn btn-accent btn-outline" disabled>
            <FcGoogle />
            <span>Sign in With Google</span>
          </button>
          <button className="font-bold btn btn-accent" disabled>
            <BsApple />
            Sign in With Apple ID
          </button>
          <div className="flex items-center absolute text-accent animate-pulse top-0 left-0 bg-slate-900 bg-opacity-60 rounded-lg justify-center gap-2 font-bold text-2xl w-full h-full">
            <FaLock />
            <span>Soon...</span>
          </div>
        </label>
        <button className="mt-5 font-black font-mono text-lg tracking-wider btn btn-primary ">
          Начать игру
        </button>
      </form>
    </div>
  );
};

export default Auth;





     {/* Stats and Other Information */}
      {/* <div className="mt-4 text-center">
        <p className="text-gray-600">Чистая стоимость</p>
        <p className="text-lg text-green-700">1 064 129,45 so'm</p>
        <p className="text-gray-600 mt-2">Баланс</p>
        <p className="text-lg text-green-700">1 064 129,45 so'm</p>
        <p className="text-gray-600 mt-2">Бизнес</p>
        <p className="text-lg text-green-700">0,00 so'm</p>
        <p className="text-gray-600 mt-2">Акции</p>
        <p className="text-lg text-green-700">0,00 so'm</p>
        <p className="text-gray-600 mt-2">Криптовалюта</p>
        <p className="text-lg text-green-700">0,00 so'm</p>
        <p className="text-gray-600 mt-2">Уровень инфляции</p>
        <p className="text-lg text-red-700">1.00%</p>
      </div> */}  
