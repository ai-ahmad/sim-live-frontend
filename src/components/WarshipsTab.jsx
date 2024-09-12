import React from 'react';
import { FaCoins } from 'react-icons/fa';

const WarshipsTab = () => {
  const warshipData = [
    {
      id: 1,
      imageUrl: 'https://media.istockphoto.com/id/627763960/photo/american-modern-warship-in-the-ocean.jpg?s=612x612&w=0&k=20&c=D5Mm6FSL7qTA0tyyKJJULqn85uL5KOlSOG2r10y7tpU=',
      price: '10,000',
      currency: 'coins',
      available: true
    },
    {
      id: 2,
      imageUrl: 'https://features.csis.org/china-shadow-warships/assets/vsaL3DGhBI/gettyimages-1348816123-4096x2731.jpeg',
      price: '1,500,000,000.00 so\'m',
      currency: 'cash',
      available: false
    },
    {
      id: 3,
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/028/841/693/large_2x/large-warship-firing-on-the-open-sea-free-photo.jpg',
      price: '900,000,000.00 so\'m',
      currency: 'cash',
      available: false
    },
    {
      id: 4,
      imageUrl: 'https://i0.wp.com/warriormaven.com/wp-content/uploads/2024/07/js_atagoddg-177.jpg?fit=600%2C399&ssl=1',
      price: '2,500,000,000.00 so\'m',
      currency: 'cash',
      available: false
    }
  ];

  return (
    <div className="pb-20 container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {warshipData.map(card => (
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
        alt="Warship"
        className="w-full h-2/3 object-cover"
      />
      {/* Price and Buy Button */}
      <div className="absolute bottom-0 w-full p-4 bg-gray-100 flex justify-between items-center">
        <div className="flex items-center text-gray-700">
          {data.currency === 'coins' ? (
            <FaCoins className="text-yellow-500 mr-2" />
          ) : (
            <span className="text-green-600 mr-2">$</span>
          )}
          <span className="text-xs">{data.price}</span>
        </div>
        <button
          disabled={!data.available}
          className={`px-4 py-2 rounded-lg ${
            data.available ? 'bg-blue-500 text-white' : 'bg-blue-500 text-white cursor-not-allowed'
          }`}
        >
          Купить
        </button>
      </div>
    </div>
  );
};

export default WarshipsTab;
