import React, { useState, useEffect } from "react";
import BusinessListPage from "./BusinessListPage";
import App from "./BusinessCharts";
export default function BusinessCreate() {
  const [showBusinessList, setShowBusinessList] = useState(false);
  const [myBusinesses, setMyBusinesses] = useState([]); // State for purchased businesses
  const [totalIncome, setTotalIncome] = useState(0); // State for total income

  const businesses = [
    { name: "Ресторан", income: 5000000 },
    { name: "Магазин", income: 3500000 },
    { name: "IT-компания", income: 8000000 },
  ];

  const handleBuyBusiness = (business) => {
    setMyBusinesses((prevBusinesses) => [...prevBusinesses, business]);
  };

  useEffect(() => {
    const total = myBusinesses.reduce(
      (sum, business) => sum + business.income,
      0
    );
    setTotalIncome(total);
  }, [myBusinesses]);

  const BusinessPage = () => (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Бизнес</h1>

      <div className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg p-4">
        <div className="justify-between">
          <span className="text-xl font-semibold mb-2">
            {totalIncome.toLocaleString()} so'm{" "}
            <p className="text-sm">бщий доход в час</p>{" "}
          </span>
        </div>
       
      </div>

      <button
        onClick={() => setShowBusinessList(true)}
        className="w-full mb-4 bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded"
      >
        Запустить бизнес
      </button>

      {/* Flex container for the chart and companies */}
      <div className="flex flex-col lg:flex-row lg:space-x-4 mt-4">
        {/* Chart Component */}
        <div className="lg:w-1/2 w-full mb-4">
          <App />
        </div>

        {/* My Businesses Section */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-xl font-bold mb-2">Мои компании</h2>
          {myBusinesses.length === 0 ? (
            <p className="text-gray-600">Вы еще не купили ни одной компании.</p>
          ) : (
            myBusinesses.map((business, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 mb-4"
              >
                <div className="flex items-center">
                  <div className="mr-2">🏭</div>
                  <div>
                    <h3 className="font-semibold">{business.name}</h3>
                    <p className="text-sm text-gray-600">1 компаний</p>
                    <p className="text-sm">
                      {business.income.toLocaleString()} so'm в час
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {showBusinessList ? (
        <BusinessListPage
          setShowBusinessList={setShowBusinessList}
          businesses={businesses}
          onBuyBusiness={handleBuyBusiness} // Pass the buy handler
        />
      ) : (
        <BusinessPage />
      )}
    </div>
  );
}
