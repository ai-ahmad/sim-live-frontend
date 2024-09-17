import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../firebase";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../store/reducers/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const GameName = import.meta.env.VITE_APP_SUB_TITLE;
  const dispatch = useDispatch();

  const API_URL = import.meta.env.VITE_API_URL;

  // Utility function to save user data to localStorage
  const saveUserDataToLocalStorage = (data) => {
    localStorage.setItem('balance', data.balance);
    localStorage.setItem('uid', data.uid);
    localStorage.setItem('email', data.email);
    localStorage.setItem('shares', data.shares);
    localStorage.setItem('crypto', data.crypto);
    localStorage.setItem('inflationRate', data.inflationRate);
    localStorage.setItem('business', data.business);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await axios.post(`${API_URL}/api/auth/login-email`, {
        email,
        password,
      });

      saveUserDataToLocalStorage(response.data);

      // Dispatch user data to the Redux store
      dispatch(login({
        uid: response.data.uid,
        email: response.data.email,
        username: response.data.username,
        balance: response.data.balance,
        business: response.data.business,
        shares: response.data.shares,
        crypto: response.data.crypto,
        inflationRate: response.data.inflationRate
      }));

      toast.success(response.data.message);
      setEmail('');
      setPassword('');
      navigate('/');
    } catch (err) {
      setError("Ошибка входа. Проверьте свои данные.");
      toast.error(err.response?.data?.error || 'Ошибка входа.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleGoogleSignIn = async () => {
    setLoading(true);

    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const { user } = result;
      const token = await user.getIdToken();
  
      const response = await axios.post(`${API_URL}/api/auth/login-google`, {
        token,
      });

      saveUserDataToLocalStorage(response.data);

      // Dispatch user data to the Redux store
      dispatch(login({
        uid: response.data.uid,
        email: response.data.email,
        username: response.data.username,
        balance: response.data.balance,
        business: response.data.business,
        shares: response.data.shares,
        crypto: response.data.crypto,
        inflationRate: response.data.inflationRate
      }));

      toast.success(response.data.message);
      navigate("/");
    } catch (error) {
      console.error('Google sign-in error:', error);
      toast.error(error.response?.data?.error || 'Ошибка входа через Google.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='h-screen flex justify-center items-center bg-[url("registerBG.jpg")]'>
      <ToastContainer />
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
              aria-label="Email"
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
              aria-label="Password"
              required
            />
          </label>
        </div>

        <div className="flex justify-between items-center">
          <p></p>
          <Link to="/recovery" className="text-center link link-primary">
            Забыли пароль?
          </Link>
        </div>
        <label className="flex flex-col mt-2 gap-2 relative">
          <button type="button" onClick={handleGoogleSignIn} className="font-bold btn btn-accent btn-outline" disabled={loading}>
            <FcGoogle />
            <span>Sign in With Google</span>
          </button>
          <button className="font-bold btn btn-accent" disabled>
            <BsApple />
            Sign in With Apple ID
          </button>
        </label>
        <button className="mt-5 font-black font-mono text-lg tracking-wider btn btn-primary" disabled={loading}>
          Начать игру
        </button>
      </form>
    </div>
  );
};

export default Login;
