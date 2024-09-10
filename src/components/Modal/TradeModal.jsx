// src/components/Chart/ChartTrading.jsx
import React, { useEffect, useState } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns"; // Убедитесь, что этот модуль установлен
import useSocket from "../hooks/useSocket";

// Регистрация всех компонентов Chart.js
ChartJS.register(...registerables);

const ChartTrading = () => {
  const [chartData, setChartData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState("");
  const socket = useSocket();

  useEffect(() => {
    socket.on("updateCandlestickData", (data) => {
      setChartData({
        labels: data.labels,
        datasets: [
          {
            label: "Price",
            data: data.prices,
            borderColor: "#3e95cd",
            fill: false,
          },
        ],
      });
    });

    return () => {
      socket.off("updateCandlestickData");
    };
  }, [socket]);

  const handleBuy = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleConfirmBuy = () => {
    // Обработка покупки через API
    console.log(`Buying quantity: ${quantity}`);
    setShowModal(false);
  };

  return (
    <div className="p-4">
      <Line data={chartData} />
      <div className="mt-4">
        <button
          onClick={handleBuy}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Buy
        </button>
      </div>

      {/* Модальное окно */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4">Enter Quantity</h2>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-full border border-gray-300 rounded p-2 mb-4"
              placeholder="Enter quantity"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={handleConfirmBuy}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Confirm
              </button>
              <button
                onClick={handleModalClose}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
          <div
            onClick={handleModalClose}
            className="fixed inset-0 bg-black opacity-50"
          ></div>
        </div>
      )}
    </div>
  );
};

export default ChartTrading;
