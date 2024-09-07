import React from 'react';

const houses = [
  {
    img:"https://png.pngtree.com/background/20230410/original/pngtree-cartoon-game-house-landscape-warm-color-background-picture-image_2383482.jpg",
    id: 1,
    location: 'Downtown, City A',
    description: 'A beautiful 3-bedroom apartment with a stunning view of the city.',
    price: '$350,000',
  },
  {
    img:'https://img.freepik.com/premium-vector/digital-illustration-house-with-tower-bridge_613585-3065.jpg',
    id: 2,
    location: 'Suburbs, City B',
    description: 'A spacious 5-bedroom house with a large backyard and modern amenities.',
    price: '$450,000',
  },
  {
    img:'https://img.freepik.com/premium-photo/wooden-house-woods-cartoon-style-illustration-dark-background_888135-1396.jpg',
    id: 3,
    location: 'Countryside, City C',
    description: 'A cozy 2-bedroom cottage surrounded by nature and fresh air.',
    price: '$250,000',
  },
  {
    img:'https://img.freepik.com/premium-photo/wooden-house-woods-cartoon-style-illustration-dark-background_888135-1396.jpg',
    id: 3,
    location: 'Countryside, City C',
    description: 'A cozy 2-bedroom cottage surrounded by nature and fresh air.',
    price: '$250,000',
  },
  {
    img:'https://img.freepik.com/premium-photo/wooden-house-woods-cartoon-style-illustration-dark-background_888135-1396.jpg',
    id: 3,
    location: 'Countryside, City C',
    description: 'A cozy 2-bedroom cottage surrounded by nature and fresh air.',
    price: '$250,000',
  },
  {
    img:'https://img.freepik.com/premium-photo/wooden-house-woods-cartoon-style-illustration-dark-background_888135-1396.jpg',
    id: 3,
    location: 'Countryside, City C',
    description: 'A cozy 2-bedroom cottage surrounded by nature and fresh air.',
    price: '$250,000',
  },
];

const Xd = () => {
  return (
    <div className=" pb-20">
      <h2 className="flex items-center justify-center font-bold text-2xl text-secondary mb-8">
        Home Details
      </h2>
      <div className="grid grid-cols-1 grid:grid-cols-2 md:grid-cols-3 gap-8">
        {houses.map((house) => (
          <div key={house.id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
            <img src={house.img} alt="" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4 flex flex-col justify-between w-full h-full">
              <h2 className="text-xl font-bold mb-2 text-center">{house.location}</h2>
              <p className="text-gray-700 mb-4 text-center">{house.description}</p>
              <p className="text-green-600 font-semibold text-center">{house.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Xd;
