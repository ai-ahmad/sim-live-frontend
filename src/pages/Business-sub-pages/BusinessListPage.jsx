import React from 'react';

const BusinessListPage = ({ setShowBusinessList, businesses, onBuyBusiness }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <button
        onClick={() => setShowBusinessList(false)}
        className="mb-4 bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded flex items-center"
      >
        <span className="mr-2">←</span> Назад
      </button>

      <h1 className="text-2xl font-bold mb-4">Доступные бизнесы</h1>

      {businesses.map((business, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">{business.name}</h3>
              <p className="text-sm text-gray-600">Доход: {business.income} в час</p>
            </div>
            <button
              onClick={() => onBuyBusiness(business)}
              className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
            >
              Buy
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusinessListPage;
