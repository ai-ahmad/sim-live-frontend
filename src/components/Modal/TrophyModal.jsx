import React, { useState } from "react";

const TrophyModal = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleClick = () => {
    setIsZoomed(true);
    const modal = document.getElementById("my_modal_4");
    if (modal) {
      modal.showModal();
    }
    setTimeout(() => setIsZoomed(false), 100); 
  };

  return (
    <div>
      <button onClick={handleClick}>
        <img
          src="./public/abu.jpg"
          alt="Trophy"
          className={`cursor-pointer ${isZoomed ? 'scale-125 z-50 transition-transform duration-300 ease-out' : 'transition-transform duration-300 ease-out'}`}
          style={{ width: '100px', height: '100px' }} 
        />
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default TrophyModal;
