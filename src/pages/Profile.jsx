import React, { useState } from "react";
  import Xd from "../components/Xd";
import FamilyComponent from "../components/FamilyComponent";
import Cls from "../components/MyGarage";
import { MdFamilyRestroom } from "react-icons/md";
import { MdGarage } from "react-icons/md";
import { FaHouseChimneyMedical } from "react-icons/fa6";

const Profile = () => {
  const [showAutomobile, setShowAutomobile] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const [showFamily, setShowFamily] = useState(false);

  const toggleAutomobileSection = () => {
    setShowAutomobile(!showAutomobile);
    setShowHome(false);
    setShowFamily(false);
  };

  const toggleHomeSection = () => {
    setShowHome(!showHome);
    setShowAutomobile(false);
    setShowFamily(false);
  };

  const toggleFamilySection = () => {
    setShowFamily(!showFamily);
    setShowAutomobile(false);
    setShowHome(false);
  };

  return (
    <div className="w-full  flex flex-col items-center bg-gray-100">
     <div className="w-full h-[50vh] bg-center bg-cover relative">
  <img
    src="https://248006.selcdn.ru/main/iblock/c4d/c4def2b61b5ba7382e465c306cd155db/64df55189e4f6ede9724757591587444.png"
    alt="Top Background"
    className="w-full h-full object-cover"
  />
  <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4">
    <p className="mb-4 font-semibold text-info text-2xl">Account Information:</p>
    <div className="mb-4">
      <img
        className="rounded-full w-20 h-20"
        src="https://c4.wallpaperflare.com/wallpaper/46/727/663/eva-elfie-sweater-white-hair-hd-wallpaper-preview.jpg"
        alt=""
      />
    </div>
    <div className="flex flex-row w-full justify-center space-x-8 mb-4">
      <p className="text-info">
        Username: <span className="font-medium text-secondary">Eva</span>
      </p>
      <p className="text-info">
        Surname: <span className="font-medium text-secondary">Sexy</span>
      </p>
    </div>
    <div className="flex flex-row w-full justify-center space-x-8 mb-4">
      <p className="text-info">
        Age: <span className="font-medium text-secondary">20</span>
      </p>
      <p className="text-info">
        Job: <span className="font-medium text-secondary">Porno Hub</span>
      </p>
    </div>
    <div className="flex flex-row w-full justify-center space-x-8 mb-4">
      <p className="text-info">
        Salary:{" "}
        <span className="font-medium text-secondary">10000000$</span>
      </p>
    </div>
  </div>
</div>


      <div className="py-3">
        <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
          <li>
            <a onClick={toggleAutomobileSection}>
             
             
              <MdGarage className="size-5"/>
              My  Automobile
            </a>
          </li>
          <li>
            <a onClick={toggleHomeSection}>
             
              <FaHouseChimneyMedical className="size-5"/>

             My Home
              <span className="badge badge-sm badge-warning">NEW</span>
            </a>
          </li>
          <li>
            <a onClick={toggleFamilySection}>
             
              <MdFamilyRestroom  className="size-5"/>
              My Family
              <span className="badge badge-xs badge-info"></span>
            </a>
          </li>
        </ul>
      </div>

      {showAutomobile && (
           <Cls/>
      )}

      {showHome && (
        

            <Xd />
      )}

      {showFamily && (
            <FamilyComponent />
      )}

      {!showAutomobile && !showHome && !showFamily && (
       <div className="w-full pb-20 bg-center bg-cover relative flex flex-col md:flex-row justify-center items-center gap-4 p-4">
       <div className="bg-white rounded-lg p-6 w-full md:w-80 h-auto md:h-72 text-gray-800 shadow-xl">
         <h2 className="text-xl font-bold mb-4 text-center text-primary">
           Study Details
         </h2>
         <div className="mb-2">
           <p className="text-gray-600">
             Status: <span className="font-medium">Pending</span>
           </p>
         </div>
         <div className="mb-2">
           <p className="text-gray-600">
             Start Time: <span className="font-medium">2024-04-28</span>
           </p>
         </div>
         <div className="mb-2">
           <p className="text-gray-600">
             End Time: <span className="font-medium">2027-04-27</span>
           </p>
         </div>
         <div className="mb-2">
           <p className="text-gray-600">
             Direction: <span className="font-medium">Economist</span>
           </p>
         </div>
       </div>
     
       <div className="bg-white rounded-lg p-6 w-full md:w-80 h-auto md:h-72 text-gray-800 shadow-xl">
         <h2 className="text-xl font-bold mb-4 text-center text-accent">
           Degree
         </h2>
         <div className="mb-2">
           <p className="text-gray-600">
             Study: <span className="font-medium">Middle</span>
           </p>
         </div>
         <div className="mb-2">
           <p className="text-gray-600">
             Education: <span className="font-medium">Middle</span>
           </p>
         </div>
       </div>
     
       <div className="bg-white rounded-lg p-6 w-full md:w-80 h-auto md:h-72 text-gray-800 shadow-xl">
         <h2 className="text-xl font-bold mb-4 text-center text-secondary">
           Diplom
         </h2>
         <div className="mb-2">
           <p className="text-gray-600">
             Status: <span className="font-medium">Pending</span>
           </p>
         </div>
         <div className="mb-2">
           <p className="text-gray-600">
             Education Center:{" "}
             <span className="font-medium">Detdom University</span>
           </p>
         </div>
         <div className="mb-2">
           <p className="text-gray-600">
             End Time: <span className="font-medium">2024-04-12</span>
           </p>
         </div>
       </div>
     </div>
     
      )}
    </div>
  );
};

export default Profile;
