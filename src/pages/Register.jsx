import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
import { FaLock } from 'react-icons/fa';
import { auth, googleAuthProvider, signInWithPopupFunc } from '../firebase'; 
import { ToastContainer, toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast CSS

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match'); // Show error message
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/register-email', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      toast.success(response.data.message); // Show success message

      if (response.status === 200) {
        navigate('/auth');
      }
    } catch (error) {
      console.error('Registration error:', error);
      toast.error(error.response ? error.response.data.error : 'Registration failed.');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopupFunc(auth, googleAuthProvider);
      const { user } = result;
      const token = await user.getIdToken();

      const response = await axios.post('http://localhost:5000/api/register-google', {
        token,
      });

      toast.success('Google sign-in successful!');
      // navigate('/auth');
    } catch (error) {
      console.error('Google sign-in error:', error);
      toast.error(error.response.data.error);
    }
  };

  return (
    <div className='h-screen flex justify-center items-center bg-[url("registerBG.jpg")]'>
      <form
        onSubmit={handleSubmit}
        className="w-5/6 xl:w-2/4 min-h-[70vh] flex flex-col justify-between xl:h-1/2 bg-base-300 bg-opacity-80 rounded-2xl p-5 shadow-lg shadow-cyan-400 border-2 border-primary"
      >
        <ToastContainer /> {/* Add ToastContainer for showing toasts */}
        
        <p className="text-center font-mono font-black text-primary">Регистрация</p>

        <div className="flex flex-col gap-2">
          <label className="input input-bordered text-primary placeholder:text-primary input-primary flex items-center gap-2">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="grow"
              placeholder="Введите ваше имя пользователя"
              required
            />
          </label>

          <label className="input input-bordered text-primary placeholder:text-primary input-primary flex items-center gap-2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="grow"
              placeholder="Введите ваш email"
              required
            />
          </label>

          <label className="input input-bordered text-primary placeholder:text-primary input-primary flex items-center gap-2">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="grow"
              placeholder="Введите пароль"
              required
            />
          </label>

          <label className="input input-bordered text-primary placeholder:text-primary input-primary flex items-center gap-2">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="grow"
              placeholder="Повторите пароль"
              required
            />
          </label>
        </div>

        <div className="flex justify-between items-center">
          <p></p>
          <Link to="/login" className="text-center link link-primary">Уже есть аккаунт?</Link>
        </div>

        <label className="flex flex-col mt-2 gap-2 relative">
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="font-bold btn btn-accent btn-outline"
          >
            <FcGoogle />
            <span>Зарегистрироваться с Google</span>
          </button>
          <button className="font-bold btn btn-accent" disabled>
            <BsApple />
            Зарегистрироваться с Apple ID
          </button>
        </label>

        <button
          type="submit"
          className="mt-5 font-black font-mono text-lg tracking-wider btn btn-primary"
        >
          Регистрация
        </button>
      </form>
    </div>
  );
};

export default Register;
