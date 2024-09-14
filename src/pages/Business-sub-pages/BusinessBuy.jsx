import React from 'react'
import { FaInfoCircle } from 'react-icons/fa'

const businessCards = [
  {
    id: 1,
    businessName: "IT Company",
    personName: "Abdulloh Isroilov",
    price: 99.99,
    imageUrl: "https://st2.depositphotos.com/3591429/5246/i/450/depositphotos_52467319-stock-photo-business-people-working-in-office.jpg",
    profitHoure: "2000000 sóm",
  },
  {
    id: 2,
    businessName: "Fermann Company",
    personName: "Bekzod Mirzaaliyev",
    price: 149.99,
    imageUrl: "https://www.treehugger.com/thmb/FzkB97bX9o4ZU7U3CkWqPSXNg6Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/01_how-to-start-a-smallfarm-business-078A0200-85691d6710a34d14a47e2f63ebaf91c5.jpg",
    profitHoure: "12000000 sóm",
  },
  {
    id: 3,
    businessName: "Game club",
    personName: "Ahmad Ahmedov",
    price: 79.99,
    imageUrl: "https://ml.globenewswire.com/Resource/Download/f2b576ce-ca01-4b61-957a-3c08e0adae92",
    profitHoure: "15000000 sóm",
  }
]

const BusinessBuy = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {businessCards.map((card) => (
        <div key={card.id} className="border border-gray-300 rounded-lg overflow-hidden shadow-md">
          <div className="relative h-48">
            <img
              src={card.imageUrl}
              alt={card.businessName}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 left-2 bg-white rounded-full p-1 flex items-center justify-center">
              <FaInfoCircle className="text-black h-6 w-6" />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold text-center">
                {card.businessName}
              </h3>
            </div>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-500 mb-2">Left by: {card.personName}</p>
            <p className="text-md text-gray-700 mb-2">Profit per Hour: <strong>{card.profitHoure}</strong></p>
            <p className="text-lg font-semibold mb-4">${card.price.toFixed(2)}</p>
            <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
              Purchase
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BusinessBuy
