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
];

const FamilyComponent = () => {
  const [coins, setCoins] = useState(characters.map(() => 0));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCharacterIndex, setSelectedCharacterIndex] = useState(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [tempCoins, setTempCoins] = useState(0); // Temporary state to track changes

  const handleThrowCoin = (index, event) => {
    const buttonRect = event.target.getBoundingClientRect();
    setModalPosition({
      top: buttonRect.top - 50, // Positioning the modal just above the button
      left: buttonRect.left + buttonRect.width / 2 - 50, // Center the modal horizontally
    });
    setSelectedCharacterIndex(index);
    setTempCoins(0); // Reset temp coins to 0 when modal opens
    setIsModalOpen(true);
  };

  const handleAddCoins = () => {
    setTempCoins(tempCoins + 100);
  };

  const handleSubtractCoins = () => {
    setTempCoins(Math.max(tempCoins - 100, 0)); // Prevent going below 0
  };

  const handleSendCoins = () => {
    const newCoins = [...coins];
    newCoins[selectedCharacterIndex] += tempCoins; // Apply the temp coin changes
    setCoins(newCoins);
    closeModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCharacterIndex(null);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full bg-gray-100 rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Character</th>
            <th className="py-3 px-6 text-left">Role</th>
            <th className="py-3 px-6 text-center">Description</th>
            <th className="py-3 px-6 text-center">Coins</th>
            <th className="py-3 px-6 text-center">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {characters.map((character, index) => (
            <tr key={character.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                  <div className="mr-2">
                    <img src={character.img} alt={character.name} className="w-10 h-10 rounded-full" />
                  </div>
                  <span>{character.name}</span>
                </div>
              </td>
              <td className="py-3 px-6 text-left">
                <span>{character.role}</span>
              </td>
              <td className="py-3 px-6 text-center">
                <span>{character.description}</span>
              </td>
              <td className="py-3 px-6 text-center">
                <span>{coins[index]} <FaCoins className="inline" /></span>
              </td>
              <td className="py-3 px-6 text-center">
                <button
                  onClick={(event) => handleThrowCoin(index, event)}
                  className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-700"
                >
                  Throw Coin
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div
          className="fixed bg-white p-4 rounded-lg shadow-lg"
          style={{
            position: 'fixed',
            top: `${modalPosition.top}px`,
            left: `${modalPosition.left}px`,
            transform: 'translate(-50%, -100%)', // Align the modal above the button
            zIndex: 1000,
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <button
              onClick={handleSubtractCoins}
              className="bg-red-500 text-white py-2 px-3 rounded-lg hover:bg-red-700"
            >
              - <FaCoins className="inline" />
            </button>
            <span className="mx-4">{tempCoins} <FaCoins className="inline" /></span>
            <button
              onClick={handleAddCoins}
              className="bg-green-500 text-white py-2 px-3 rounded-lg hover:bg-green-700"
            >
              + <FaCoins className="inline" />
            </button>
          </div>
          <button
            onClick={handleSendCoins}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 w-full"
          >
            Send
          </button>
          <button
            onClick={closeModal}
            className="mt-2 text-sm text-gray-500 underline w-full text-center"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default FamilyComponent;
