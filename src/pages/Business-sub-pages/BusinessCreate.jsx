import React, { useState, useEffect } from 'react'

const businesses = [
  {
    name: "Магазин",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: "bg-rose-500",
    types: [
      { name: "Продуктовый магазин", income: 1000000, cost: 5000000 },
      { name: "Магазин одежды", income: 1500000, cost: 7500000 },
      { name: "Электроника", income: 2000000, cost: 10000000 },
      { name: "Книжный магазин", income: 800000, cost: 4000000 },
    ],
  },
  {
    name: "Ресторан",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: "bg-amber-500",
    types: [
      { name: "Кафе", income: 1200000, cost: 6000000 },
      { name: "Фаст-фуд", income: 1800000, cost: 9000000 },
      { name: "Ресторан высокой кухни", income: 2500000, cost: 12500000 },
      { name: "Пиццерия", income: 1500000, cost: 7500000 },
    ],
  },
  {
    name: "IT-компания",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "bg-sky-500",
    types: [
      { name: "Веб-разработка", income: 3000000, cost: 15000000 },
      { name: "Мобильные приложения", income: 3500000, cost: 17500000 },
      { name: "Облачные сервисы", income: 4000000, cost: 20000000 },
      { name: "Кибербезопасность", income: 4500000, cost: 22500000 },
    ],
  },
]

export default function SimBusiness() {
  const [currentView, setCurrentView] = useState("main")
  const [selectedBusiness, setSelectedBusiness] = useState(null)
  const [myBusinesses, setMyBusinesses] = useState([])
  const [totalIncome, setTotalIncome] = useState(0)

  useEffect(() => {
    const total = myBusinesses.reduce((sum, business) => sum + business.income, 0)
    setTotalIncome(total)
  }, [myBusinesses])

  const handleBuyBusiness = (business) => {
    setMyBusinesses((prev) => [...prev, business])
    setCurrentView("main")
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 font-sans">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md mb-8 p-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16 text-blue-600">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg> */}
            <img className='size-16 rounded-full' src="https://yt3.googleusercontent.com/ytc/AIdro_kQ0De5HtsKcFUOAxSII-Roa7VwT4N4PJOgNNrGd8lsyjk=s900-c-k-c0x00ffffff-no-rj" alt="" />
            <div className="ml-4">
              <h2 className="text-2xl font-bold">Bekzod Mirzaaliyev</h2>
              <p className="text-lg text-gray-600">Tadbirkor</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-lg text-gray-600">Umumiy oylik daromad</p>
            <p className="text-3xl font-bold text-blue-600">{totalIncome.toLocaleString()} so'm</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      {currentView === "main" ? (
        <>
          {/* Businesses */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {businesses.map((business) => (
              <div
                key={business.name}
                className={`${business.color} rounded-lg shadow-md hover:shadow-lg transition cursor-pointer`}
                onClick={() => {
                  setSelectedBusiness(business)
                  setCurrentView("businessTypes")
                }}
              >
                <div className="p-6 text-white">
                  <div className="mb-4">{business.icon}</div>
                  <h3 className="text-xl font-semibold">{business.name}</h3>
                  <p className="mt-2 text-white/80">
                    {myBusinesses.filter((b) => b.name.includes(business.name)).length} компаний
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* My Businesses */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Мои компании</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {myBusinesses.map((business, index) => (
                  <div key={index} className="bg-gray-100 rounded-lg p-4">
                    <h3 className="text-lg font-semibold">{business.name}</h3>
                    <p className="text-gray-600 mt-2">{business.income.toLocaleString()} so'm в час</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        // Business Types View
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <button
                onClick={() => setCurrentView("main")}
                className="flex items-center text-blue-600 hover:text-blue-800 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Назад
              </button>
              <h2 className="text-2xl font-bold ml-4">{selectedBusiness.name}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedBusiness.types.map((type, index) => (
                <div key={index} className={`${selectedBusiness.color} rounded-lg shadow-md hover:shadow-lg transition`}>
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-semibold">{type.name}</h3>
                    <p className="mt-2">Доход: {type.income.toLocaleString()} so'm в час</p>
                    <p className="mt-2">Стоимость: {type.cost.toLocaleString()} so'm</p>
                    <button
                      className="mt-4 bg-white text-black hover:bg-gray-200 transition py-2 px-4 rounded"
                      onClick={() => handleBuyBusiness(type)}
                    >
                      Купить
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}