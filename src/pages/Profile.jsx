import React from "react";

const Profile = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center bg-gray-100 p-4">
      <div className="w-full h-1/2 bg-center bg-cover relative">
        <img
          src="https://248006.selcdn.ru/main/iblock/c4d/c4def2b61b5ba7382e465c306cd155db/64df55189e4f6ede9724757591587444.png"
          alt="Top Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 right-0 flex justify-between p-4 text-white">
          tepasi coin turaduga
        </div>
      </div>



      <div className="w-full h-1/2 bg-center bg-cover relative">
        <div className="mt-28">
        <div className="text-center mb-2">
        <p className="text-lg font-medium">Война в:</p>
        <button className="bg-red-500 text-white text-xl font-semibold py-2 px-6 rounded-full mt-2">
          16 : 15 : 51 : 00
        </button>
      </div>
      <div className="text-center mt-4">
        <p className="text-md font-medium">Победитель последнего раунда</p>
        <div className="flex items-center justify-center mt-2">
          <img src="https://flagcdn.com/w40/tr.png" alt="Turkey Flag" className="w-6 h-4 mr-2" />
          <span className="text-lg font-bold">Turkey</span>
        </div>
      </div>
        </div>
        <img
          src="/xz.jpg" 
          alt="Character"
          className="absolute left-1/2 top-[-4rem] transform -translate-x-1/2 z-10 w-32 h-48"
        />
      </div>
    </div>
  );
};

export default Profile;
