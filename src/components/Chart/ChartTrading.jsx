import React, { useEffect, useState } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import axios from "axios";

// Регистрация всех компонентов Chart.js
ChartJS.register(...registerables);

const ChartTrading = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Price",
        data: [],
        borderColor: "#3e95cd",
        fill: false,
      },
    ],
  });
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    // Define the function to fetch data from Alpaca API
    const fetchCandlestickData = async () => {
      try {
        const response = await axios.get(
          "https://data.alpaca.markets/v1beta3/crypto/:loc/bars",
          {
            params: {
              symbols: "BTC/USD,LTC/USD",
              timeframe: "1Min",
            },
            headers: {
              APCA_API_KEY_ID: import.meta.env.VITE_ALPACA_API_KEY,
              APCA_API_SECRET_KEY: import.meta.env.VITE_ALPACA_SECRET_KEY,
            },
          }
        );

        const data = response.data;
        console.log("Received candlestick data:", data);

        // Convert API data to chart format
        if (data && data.bars) {
          const labels = data.bars.map((bar) => bar.timestamp);
          const prices = data.bars.map((bar) => bar.close);

          setChartData({
            labels,
            datasets: [
              {
                label: "Price",
                data: prices,
                borderColor: "#3e95cd",
                fill: false,
              },
            ],
          });
        } else {
          console.error("Invalid data format received:", data);
        }
      } catch (error) {
        console.error("Error fetching data from Alpaca API:", error);
      }
    };

    fetchCandlestickData();
  }, []);

  // const handleBuy = () => {
  //   setShowModal(true);
  // };

  // const handleModalClose = () => {
  //   setShowModal(false);
  // };

  // const handleQuantityChange = (e) => {
  //   setQuantity(e.target.value);
  // };

  // const handleConfirmBuy = () => {
  //   console.log(`Buying quantity: ${quantity}`);
  //   setShowModal(false);
  // };

  return (
    // <div className="p-4">
    //   <Line data={chartData} options={{ responsive: true }} />
    //   <div className="mt-4">
    //     <button
    //       onClick={handleBuy}
    //       className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    //     >
    //       Buy
    //     </button>
    //   </div>

    //   {/* Модальное окно */}
    //   {showModal && (
    //     <div className="fixed inset-0 flex items-center justify-center z-50">
    //       <div className="bg-white p-6 rounded shadow-lg w-80">
    //         <h2 className="text-lg font-bold mb-4">Enter Quantity</h2>
    //         <input
    //           type="number"
    //           value={quantity}
    //           onChange={handleQuantityChange}
    //           className="w-full border border-gray-300 rounded p-2 mb-4"
    //           placeholder="Enter quantity"
    //         />
    //         <div className="flex justify-end space-x-2">
    //           <button
    //             onClick={handleConfirmBuy}
    //             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    //           >
    //             Confirm
    //           </button>
    //           <button
    //             onClick={handleModalClose}
    //             className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
    //           >
    //             Cancel
    //           </button>
    //         </div>
    //       </div>
    //       <div
    //         onClick={handleModalClose}
    //         className="fixed inset-0 bg-black opacity-50"
    //       ></div>
    //     </div>
    //   )}
    // </div>
    <></>
  );
};

export default ChartTrading;
