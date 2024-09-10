import React, { useState } from "react";
import ChartTrading from "../components/Chart/ChartTrading";
import TradeModal from "../components/Modal/TradeModal";

const TradingAlpaca = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionType, setActionType] = useState("");

  const handleBuyClick = () => {
    setActionType("buy");
    setIsModalOpen(true);
  };

  const handleSellClick = () => {
    setActionType("sell");
    setIsModalOpen(true);
  };

  const handleModalSubmit = (quantity) => {
    console.log(`Perform ${actionType} with quantity: ${quantity}`);
    // Здесь можно добавить логику для отправки данных на сервер
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between mb-4">
        <button onClick={handleBuyClick} className="btn bg-blue-500">
          Buy
        </button>
        <button onClick={handleSellClick} className="btn bg-red-500">
          Sell
        </button>
      </div>
      <ChartTrading />
      <TradeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
      />
    </div>
  );
};

export default TradingAlpaca;
