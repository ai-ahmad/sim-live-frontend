import React, { useState } from "react";
import { FaCoins, FaHome, FaCarAlt, FaShip, FaPlane, FaUserAlt } from 'react-icons/fa';
import Dom from "../components/HomeTab";
import HomeTab from "../components/HomeTab";
import PersonageTab from "../components/PersonageTab";
import CarsTab from "../components/CarsTab";
import WarshipsTab from "../components/WarshipsTab";
import AirTransportTab from "../components/AirTransportTab";

const App = () => {
  const [activeTab, setActiveTab] = useState('cars');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'cars':
        return <CarsTab />;
      case 'warships':
        return <WarshipsTab />;
      case 'airTransport':
        return <AirTransportTab />;
      case 'personage':
        return <PersonageTab />;
      case 'dom':
        return <HomeTab />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full flex flex-col items-center bg-gray-100">
      {/* Top Section: Coins and Money */}
      <div className="w-full h-16 mt-5 flex justify-between items-center px-4 lg:px-12">
        <div className="flex justify-start items-center bg-yellow-300 rounded-lg p-2 text-xl">
          <FaCoins className="mr-2" />
          <span>2</span>
        </div>
        <div className="flex justify-end items-center bg-green-300 rounded-lg p-2 text-xl">
          <span>89,080,053.45 so'm</span>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="flex justify-around w-full bg-white p-2 sm:p-4 mt-5 shadow-md rounded-lg">
        <div
          className={`flex flex-col items-center cursor-pointer ${activeTab === 'cars' ? 'text-purple-600' : 'text-gray-600'}`}
          onClick={() => setActiveTab('cars')}
        >
          <FaCarAlt className="text-2xl sm:text-3xl mb-1" />
          <span className="text-xs sm:text-sm">Cars</span>
        </div>
        <div
          className={`flex flex-col items-center cursor-pointer ${activeTab === 'warships' ? 'text-purple-600' : 'text-gray-600'}`}
          onClick={() => setActiveTab('warships')}
        >
          <FaShip className="text-2xl sm:text-3xl mb-1" />
          <span className="text-xs sm:text-sm">Warships</span>
        </div>
        <div
          className={`flex flex-col items-center cursor-pointer ${activeTab === 'airTransport' ? 'text-purple-600' : 'text-gray-600'}`}
          onClick={() => setActiveTab('airTransport')}
        >
          <FaPlane className="text-2xl sm:text-3xl mb-1" />
          <span className="text-xs sm:text-sm">Air Transport</span>
        </div>
        <div
          className={`flex flex-col items-center cursor-pointer ${activeTab === 'personage' ? 'text-purple-600' : 'text-gray-600'}`}
          onClick={() => setActiveTab('personage')}
        >
          <FaUserAlt className="text-2xl sm:text-3xl mb-1" />
          <span className="text-xs sm:text-sm">Personage</span>
        </div>
        <div
          className={`flex flex-col items-center cursor-pointer ${activeTab === 'dom' ? 'text-purple-600' : 'text-gray-600'}`}
          onClick={() => setActiveTab('dom')}
        >
          <FaHome className="text-2xl sm:text-3xl mb-1" />
          <span className="text-xs sm:text-sm">Dom</span>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-5 p-3 sm:p-5 w-full sm:w-11/12 bg-white shadow-md rounded-lg">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default App;
