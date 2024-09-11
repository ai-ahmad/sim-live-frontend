import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseBalance } from "../store/actions/balanceActions";
import { getBalance } from "../store/actions/TimeValentAction";
import TrophyModal from "../components/TrophyModal";
import ProgressBar from "../components/ProgressBar";
import Exclamation from "../components/Exclamation";
import { motion } from "framer-motion";

const Home = () => {
  const balance = useSelector((state) => state.balance.balance);
  const TimeBalance = useSelector((state) => state.timeValent.TimeBalance);
  console.log(TimeBalance);
  const dispatch = useDispatch();
  const [isZoomed, setIsZoomed] = useState(false);
  
  const [clicks, setClicks] = useState(() => {
    return parseInt(localStorage.getItem("clicks")) || 0;
  });
  const [level, setLevel] = useState(() => {
    return parseInt(localStorage.getItem("level")) || 1;
  });
  const [progress, setProgress] = useState(() => {
    return parseInt(localStorage.getItem("progress")) || 0;
  });
  const clicksToNextLevel = 1000 + (level - 1) * 100;

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(increaseBalance(TimeBalance));
    }, 5000);
    return () => clearInterval(interval);
  }, [dispatch, TimeBalance]);

  const handleIncrease = () => {
    dispatch(increaseBalance(100));
    setIsZoomed(true);
    const updatedClicks = clicks + 1;
    setClicks(updatedClicks);
    const newProgress = (updatedClicks / clicksToNextLevel) * 100;
    setProgress(newProgress);

    if (updatedClicks >= clicksToNextLevel) {
      setLevel((prev) => prev + 1);
      setClicks(0);
      setProgress(0);
    }
  };

  useEffect(() => {
    if (isZoomed) {
      const timer = setTimeout(() => {
        setIsZoomed(false);
      }, 70);
      return () => clearTimeout(timer);
    }
  }, [isZoomed]);

  useEffect(() => {
    localStorage.setItem("level", level);
    localStorage.setItem("progress", progress);
    localStorage.setItem("clicks", clicks);
  }, [level, progress, clicks]);

  return (
    <div
      className="  relative h-screen bg-white overflow-hidden flex flex-col"
      style={{ maxHeight: "100vh" }}
    >
      <div className="absolute top-0 left-0 z-20 ml-5">
        <TrophyModal />
        <Exclamation />
      </div>

      <div className="relative w-full h-2/5">
        <img
          src="https://img.freepik.com/premium-photo/beige-wooden-bungalow-estate-created-using-generative-ai-technology_772924-8614.jpg?w=1380"
          alt="House"
          className="w-full absolute top-0 left-0 h-full object-cover"
        />
        <div className="relative z-10 mt-4 flex justify-end px-10 max-[1024px]:justify-center items-center space-x-4">
          <div className="flex items-center bg-white shadow-lg p-2 rounded-full">
            <img
              src="https://img.icons8.com/emoji/48/000000/money-bag-emoji.png"
              alt="Coins"
              className="size-5"
            />
            <span className="ml-2 text-lg font-bold text-yellow-500">2</span>
          </div>
          <div className="flex items-center bg-white shadow-lg p-2 rounded-full">
            <img
              src="https://img.icons8.com/color/48/000000/money--v1.png"
              alt="Money"
              className="w-6 h-6"
            />
            <span className="ml-2 text-lg font-bold text-green-500">
              {TimeBalance} so'm
            </span>
          </div>
        </div>
      </div>

      <div className="absolute top-1/3 left-0 right-0 flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-4 z-10">
          <p className="text-center text-xl font-semibold">Баланс</p>
          <p className="text-center text-2xl font-bold">
            {balance.toLocaleString()} so'm
          </p>
        </div>
      </div>

      <div
        className="h-1/2 flex justify-center items-center"
        onClick={handleIncrease}
      >
        <div className="flex justify-between gap-4">
          <img
            src="../public/money.jpg"
            alt="Money Increase"
            className={`size-32 cursor-pointer ${
              isZoomed
                ? "scale-125 z-50 transition-transform duration-300 ease-out"
                : "transition-transform duration-300 ease-out"
            }`}
          />
        </div>
      </div>

      <div className="absolute top-2 left-32 z-20 size-32">
        <ProgressBar progress={progress} level={level} />
      </div>
    </div>
  );
};

export default Home;
