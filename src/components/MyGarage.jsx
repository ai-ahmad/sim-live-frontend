import React, { useState } from 'react';

const MyGarage = () => {
  const [cars, setCars] = useState([
    {
      id: 1,
      name: 'Mercedes-Benz CLS 63 AMG',
      image: 'https://img.gta5-mods.com/q75/images/2012-mercedes-benz-cls-63-amg-w218-addon/f01dc2-1.png',
      purchaseDate: '2024-06-15',
      purchasePrice: '$120,000',
      mileage: '15,000 miles',
      condition: 'Excellent',
    },
    {
      id: 2,
      name: 'BMW M5 CS',
      image: 'https://gamecheck.ru/uploads/posts/2022-01/1642957672_m5_cs-2.png',
      purchaseDate: '2023-08-21',
      purchasePrice: '$150,000',
      mileage: '10,000 miles',
      condition: 'Good',
    },
    {
      id: 3,
      name: 'Porsche 911 Turbo',
      image: 'https://911uk.com/data/attachments/94/94751-510a1a6daa4a3baa95fd259af7a00a45.jpg',
      purchaseDate: '2022-11-03',
      purchasePrice: '$175,000',
      mileage: '5,000 miles',
      condition: 'Like New',
    },
    {
      id: 3,
      name: 'Porsche 911 Turbo',
      image: 'https://911uk.com/data/attachments/94/94751-510a1a6daa4a3baa95fd259af7a00a45.jpg',
      purchaseDate: '2022-11-03',
      purchasePrice: '$175,000',
      mileage: '5,000 miles',
      condition: 'Like New',
    },
    {
      id: 3,
      name: 'Porsche 911 Turbo',
      image: 'https://911uk.com/data/attachments/94/94751-510a1a6daa4a3baa95fd259af7a00a45.jpg',
      purchaseDate: '2022-11-03',
      purchasePrice: '$175,000',
      mileage: '5,000 miles',
      condition: 'Like New',
    },
    {
      id: 3,
      name: 'Porsche 911 Turbo',
      image: 'https://911uk.com/data/attachments/94/94751-510a1a6daa4a3baa95fd259af7a00a45.jpg',
      purchaseDate: '2022-11-03',
      purchasePrice: '$175,000',
      mileage: '5,000 miles',
      condition: 'Like New',
    },
  ]);

  const [friends] = useState([
    { id: 1, name: 'John Doe', job: 'Software Engineer' },
    { id: 2, name: 'Jane Smith', job: 'Doctor' },
    { id: 3, name: 'Alice Johnson', job: 'Teacher' },
  ]);

  const [selectedCar, setSelectedCar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleGift = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const handleGiftToFriend = (friend) => {
    alert(`You have gifted the ${selectedCar.name} to ${friend.name}!`);
    setCars(cars.filter(c => c.id !== selectedCar.id));
    setIsModalOpen(false);
  };

  const filteredCars = cars.filter(car =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.purchasePrice.includes(searchTerm)
  );

  return (
    <div className="pb-20 container">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">My Garage - SimLife</h1>

      {/* Search */}
      <div className="mb-6 flex justify-center items-center">
        <input
          type="text"
          placeholder="Search cars by name or price..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded-lg w-full max-w-xs"
        />
      </div>

      {/* Car List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredCars.map((car) => (
          <div key={car.id} className=" rounded-lg shadow-lg p-4">
            <img src={car.image} alt={car.name} className="rounded-md mb-4 w-full h-48 object-cover" />
            <h2 className="text-xl font-bold text-primary mb-2">{car.name}</h2>
            <p className="text-gray-600 mb-2">Purchased on: <span className="text-black">{car.purchaseDate}</span></p>
            <p className="text-gray-600 mb-2">Price: <span className="text-black">{car.purchasePrice}</span></p>
            <p className="text-gray-600 mb-2">Mileage: <span className="text-black">{car.mileage}</span></p>
            <p className="text-gray-600 mb-4">Condition: <span className="text-black">{car.condition}</span></p>
            <button
              onClick={() => handleGift(car)}
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-purple-800"
            >
              Gift this Car
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className=" p-6 rounded-lg shadow-lg w-11/12 max-w-md">
            <h2 className="text-xl font-bold mb-4">Select a Friend to Gift {selectedCar.name}</h2>
            <table className="w-full text-left mb-4">
              <thead>
                <tr>
                  <th className="py-2">Name</th>
                  <th className="py-2">Job</th>
                  <th className="py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {friends.map(friend => (
                  <tr key={friend.id}>
                    <td className="py-2">{friend.name}</td>
                    <td className="py-2">{friend.job}</td>
                    <td className="py-2">
                      <button
                        onClick={() => handleGiftToFriend(friend)}
                        className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-purple-800"
                      >
                        Gift
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyGarage;
