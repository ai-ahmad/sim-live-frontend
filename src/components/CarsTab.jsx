import React from 'react';
import { FaCoins } from 'react-icons/fa';

const CarsTab = () => {
  const carsData = [
    {
      id: 1,
      imageUrl: 'https://images6.alphacoders.com/105/thumb-1920-1054668.jpg',
      price: '15,000',
      currency: 'coins',
      available: true
    },
    {
      id: 2,
      imageUrl: 'https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_960_720.jpg',
      price: '850,000,000.00 so\'m',
      currency: 'cash',
      available: false
    },
    {
      id: 3,
      imageUrl: 'https://i3.mbib.ru/car_generation_images/000/002/252/medium/img.jpg?1592287181',
      price: '1,200,000,000.00 so\'m',
      currency: 'cash',
      available: false
    },
    {
      id: 4,
      imageUrl: 'https://fergana.agency/siteapi/media/images/b7595727-7cc8-4872-a8dc-e691743548bd.jpeg?width=1355 ',
      price: '2,500,000,000.00 so\'m',
      currency: 'cash',
      available: false
    }
  ];

  return (
    <div className="pb-20 container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {carsData.map(card => (
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
        alt="Car"
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
            data.available ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Купить
        </button>
      </div>
    </div>
  );
};

export default CarsTab;
