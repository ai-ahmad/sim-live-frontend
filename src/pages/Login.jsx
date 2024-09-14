import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaLock } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../firebase";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const GameName = import.meta.env.VITE_APP_SUB_TITLE;

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/login-email", {
        email,
        password,
      });
      console.log(response.data)
    } catch (err) {
      setError("Ошибка входа. Проверьте свои данные.");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const { user } = result;
  
      const token = await user.getIdToken();
  
      const response = await axios.post('http://localhost:5000/api/login-google', {
        token,
      });
      console.log(response.data);
  
      const { uid, displayName, email } = user;
  
      const { balance, business, shares, crypto, inflationRate } = response.data;
  
      localStorage.setItem('uid', uid);
      localStorage.setItem('username', displayName || response.data.username);
      localStorage.setItem('email', email);
      localStorage.setItem('balance', balance.toString());
      localStorage.setItem('business', business);
      localStorage.setItem('shares', shares.toString());
      localStorage.setItem('crypto', crypto.toString());
      localStorage.setItem('inflationRate', inflationRate.toString());
  
      toast.success(response.data.message);
    } catch (error) {
      console.error('Google sign-in error:', error);
      toast.error(error.response?.data?.error || 'Ошибка входа через Google.');
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[url('loginBG.jpg')]">
      <form
        onSubmit={handleLogin}
        className="w-5/6 xl:w-2/4 min-h-[70vh] flex flex-col justify-between xl:h-1/2 bg-base-300 bg-opacity-80 rounded-2xl p-5 shadow-lg shadow-cyan-400 border-2 border-primary"
      >
        <p className="text-center font-mono font-black text-primary">
          {GameName}
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
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Введите ваш email"
              className="grow"
              required
            />
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
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите ваш пароль"
              className="grow"
              required
            />
          </label>
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <div className="flex justify-between items-center">
          <p></p>
          <Link to="/recovery" className="text-center link link-primary">
            Забыли пароль?
          </Link>
        </div>
        <label className="flex flex-col mt-2 gap-2 relative">
          <button type="button" onClick={handleGoogleSignIn} className="font-bold btn btn-accent btn-outline">
            <FcGoogle />
            <span>Sign in With Google</span>
          </button>
          <button className="font-bold btn btn-accent" disabled>
            <BsApple />
            Sign in With Apple ID
          </button>
        </label>
        <button className="mt-5 font-black font-mono text-lg tracking-wider btn btn-primary">
          Начать игру
        </button>
      </form>
    </div>
  );
};

export default Login;
