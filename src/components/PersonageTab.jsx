import React from 'react';
import { FaCoins } from 'react-icons/fa';

const PersonageTab = () => {
  const personageData = [
    {
      id: 1,
      imageUrl: 'https://img.freepik.com/free-vector/male-female-farmer-characters-set_107791-29357.jpg', // New image URL
      price: '2,000',
      currency: 'coins',
      available: true
    },
    {
      id: 2,
      imageUrl: 'https://img.freepik.com/free-vector/woman-character-shop-people-buyer-mall_107791-29417.jpg', // New image URL
      price: '1,500',
      currency: 'coins',
      available: false
    },
    {
      id: 3,
      imageUrl: 'https://img.freepik.com/free-vector/young-characters-in-cartoon-style_1196-544.jpg', // New image URL
      price: '1,000',
      currency: 'coins',
      available: false
    },
    {
      id: 4,
      imageUrl: 'https://img.freepik.com/free-vector/designers-working-process-man-woman-illustrators_107791-9159.jpg', // New image URL
      price: '500',
      currency: 'coins',
      available: false
    }
  ];

  return (
    <div className="container mx-auto pb-20 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {personageData.map(personage => (
          <Card key={personage.id} data={personage} />
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
        alt="Character"
        className="w-full h-2/3 object-cover"
      />
      {/* Price and Buy Button */}
      <div className="absolute bottom-0 w-full p-4 bg-gray-100 flex flex-col items-center gap-2">
        <div className="flex items-center text-gray-700">
          {data.currency === 'coins' ? (
            <FaCoins className="text-yellow-500 mr-2" />
          ) : (
            <span className="text-green-600 mr-2">$</span>
          )}
          <span className='text-sm font-semibold'>{data.price}</span>
        </div>
        <button
          disabled={!data.available}
          className={`w-full px-4 py-2 rounded-lg text-center ${
            data.available ? 'bg-blue-500 text-white' : 'bg-blue-500 text-white cursor-not-allowed'
          }`}
        >
          Купить
        </button>
      </div>
    </div>
  );
};

export default PersonageTab;
