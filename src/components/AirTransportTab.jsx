import React from 'react';
import { FaCoins } from 'react-icons/fa';

const AirTransportTab = () => {
  const airTransportData = [
    {
      id: 1,
      imageUrl: 'https://t3.ftcdn.net/jpg/03/06/22/80/360_F_306228011_2jldV5x45r0Ou3IiFJNMj3PDJPXKfgEX.jpg',
      price: '5,000',
      currency: 'coins',
      available: true
    },
    {
      id: 2,
      imageUrl: 'https://media.gq-magazine.co.uk/photos/5d1398faeef921e6e09ff155/4:3/w_1560,h_1170,c_limit/airbus-helicopters-4-gq-3jun15-pr_b.jpg',
      price: '762,412,449.01 so\'m',
      currency: 'cash',
      available: false
    },
    {
      id: 3,
      imageUrl: 'https://www.robinsonheli.com/_next/image?url=https%3A%2F%2Frhc.nyc3.digitaloceanspaces.com%2Fstage%2F4a86422dee405dd3e38909a8f1a0cd41.jpg&w=1920&q=75',
      price: '1,000,666,339.33 so\'m',
      currency: 'cash',
      available: false
    },
    {
      id: 4,
      imageUrl: 'https://f.hubspotusercontent00.net/hubfs/6056258/plane-facts.jpg',
      price: '2,978,173,628.96 so\'m',
      currency: 'cash',
      available: false
    }
  ];

  return (
    <div className="pb-20 container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {airTransportData.map(card => (
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
        alt="Air Transport"
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

export default AirTransportTab;