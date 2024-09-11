import React from 'react';
import { FaCoins } from 'react-icons/fa';

const HomeTab = () => {
  const cardsData = [
    {
      id: 1,
      imageUrl: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyaminmellish-186077.jpg&fm=jpg',
      price: '1,000',
      currency: 'coins',
      available: false
    },
    {
      id: 2,
      imageUrl: 'https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg',
      price: '762,412,449.01 so\'m',
      currency: 'cash',
      available: false
    },
    {
      id: 3,
      imageUrl: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?cs=srgb&dl=pexels-binyaminmellish-1396122.jpg&fm=jpg',
      price: '1,000,666,339.33 so\'m',
      currency: 'cash',
      available: false
    },
    {
      id: 4,
      imageUrl: 'https://t4.ftcdn.net/jpg/02/79/95/39/360_F_279953994_TmVqT7CQhWQJRLXev4oFmv8GIZTgJF1d.jpg',
      price: '2,978,173,628.96 so\'m',
      currency: 'cash',
      available: false
    }
  ];

  return (
    <div className="container mx-auto pb-20 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {cardsData.map(card => (
          <Card key={card.id} data={card} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ data }) => {
  return (
    <div className="relative w-full h-96 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
      {/* Image */}
      <img
        src={data.imageUrl}
        alt="Item"
        className="w-full h-2/3 object-cover"
      />
      {/* Price and Buy Button */}
      <div className="absolute bottom-0 w-full p-4 bg-gray-200 flex justify-between items-center">
        <div className="flex items-center text-gray-700">
          {data.currency === 'coins' ? (
            <FaCoins className="text-yellow-500 mr-2" />
          ) : (
            <span className="text-green-600 mr-2">$</span>
          )}
          <span className='text-xs'>{data.price}</span>
        </div>
        <button
          disabled={!data.available}
          className={`px-4 py-2 rounded-lg ${
            data.available ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Купить
        </button>
      </div>
    </div>
  );
};

export default HomeTab;
