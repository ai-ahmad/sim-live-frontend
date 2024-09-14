import React, { useState } from 'react';
import { FaCoins } from 'react-icons/fa';

const characters = [
  {
    img: "https://www.shutterstock.com/image-photo/beautiful-woman-profile-long-shiny-600nw-1922411411.jpg",
    id: 1,
    name: 'John Doe',
    role: 'Father',
    description: 'A strong and reliable figure in the family.',
  },
  {
    img: "https://st2.depositphotos.com/6903990/9849/i/450/depositphotos_98497804-stock-photo-girl-with-long-curly-hair.jpg",
    id: 2,
    name: 'Jane Doe',
    role: 'Mother',
    description: 'The caring and loving heart of the family.',
  },
  {
    img: "https://media.istockphoto.com/id/1282162788/photo/toothy-smile-and-look-full-of-fun-and-joy-on-the-face-curly-haired-tanned-woman-entertainment.jpg?s=612x612&w=0&k=20&c=t7kAKXf9GXcWiszCxg7Bz_BTtdL2RyTPe-dxj6Ljxt8=",
    id: 3,
    name: 'Sam Doe',
    role: 'Son',
    description: 'A young and energetic boy who loves adventures.',
  },
  {
    img: "https://media.istockphoto.com/id/1282162788/photo/toothy-smile-and-look-full-of-fun-and-joy-on-the-face-curly-haired-tanned-woman-entertainment.jpg?s=612x612&w=0&k=20&c=t7kAKXf9GXcWiszCxg7Bz_BTtdL2RyTPe-dxj6Ljxt8=",
    id: 4,
    name: 'Sam Doe Jr.',
    role: 'Son',
    description: 'Another energetic young boy.',
  },
  {
    img: "https://media.istockphoto.com/id/1282162788/photo/toothy-smile-and-look-full-of-fun-and-joy-on-the-face-curly-haired-tanned-woman-entertainment.jpg?s=612x612&w=0&k=20&c=t7kAKXf9GXcWiszCxg7Bz_BTtdL2RyTPe-dxj6Ljxt8=",
    id: 5,
    name: 'Jill Doe',
    role: 'Daughter',
    description: 'A creative and imaginative girl.',
  },
  {
    img: "https://media.istockphoto.com/id/1282162788/photo/toothy-smile-and-look-full-of-fun-and-joy-on-the-face-curly-haired-tanned-woman-entertainment.jpg?s=612x612&w=0&k=20&c=t7kAKXf9GXcWiszCxg7Bz_BTtdL2RyTPe-dxj6Ljxt8=",
    id: 6,
    name: 'Baby Doe',
    role: 'Infant',
    description: 'The newest member of the family.',
  }
];

const FamilyComponent = () => {
  const [coins, setCoins] = useState(characters.map(() => 0));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCharacterIndex, setSelectedCharacterIndex] = useState(null);
  const [tempCoins, setTempCoins] = useState(0);

  const handleThrowCoin = (index) => {
    setSelectedCharacterIndex(index);
    setTempCoins(0);
    setIsModalOpen(true);
  };

  const handleAddCoins = () => {
    setTempCoins(tempCoins + 100);
  };

  const handleSubtractCoins = () => {
    setTempCoins(Math.max(tempCoins - 100, 0));
  };

  const handleSendCoins = () => {
    const newCoins = [...coins];
    newCoins[selectedCharacterIndex] += tempCoins;
    setCoins(newCoins);
    closeModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCharacterIndex(null);
  };
  return (
    <div className=" relative  pb-20 container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {characters.map((character, index) => (
          <div
            key={character.id}
            className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center"
          >
            <img
              src={character.img}
              alt={character.name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{character.name}</h2>
            <h3 className="text-md text-gray-500 mb-2">{character.role}</h3>
            <p className="text-gray-600 mb-4">{character.description}</p>
            <p className="text-green-600 font-semibold mb-4">
              {coins[index]} <FaCoins className="inline" />
            </p>
            <button
              onClick={() => handleThrowCoin(index)}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Throw Coin
            </button>
          </div>
        ))}
      </div>  

      {isModalOpen && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg min-w-[300px] w-11/12 max-w-md">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={handleSubtractCoins}
                className="bg-red-500 text-white py-2 px-3 rounded-lg hover:bg-red-700 transition duration-200"
              >
                - <FaCoins className="inline" />
              </button>
              <span className="mx-4">{tempCoins} <FaCoins className="inline" /></span>
              <button
                onClick={handleAddCoins}
                className="bg-green-500 text-white py-2 px-3 rounded-lg hover:bg-green-700 transition duration-200"
              >
                + <FaCoins className="inline" />
              </button>
            </div>
            <button
              onClick={handleSendCoins}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 w-full transition duration-200"
            >
              Send
            </button>
            <button
              onClick={closeModal}
              className="mt-4 text-sm text-gray-500 underline w-full text-center"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FamilyComponent;
