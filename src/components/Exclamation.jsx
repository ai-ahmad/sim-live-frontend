import React, { useState } from "react";

const Exclamation = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleClick = () => {
    setIsZoomed(true);
    const modal = document.getElementById("my_modal_3");
    if (modal) {
      modal.showModal();
    }
    setTimeout(() => setIsZoomed(false), 100);
  };

  return (
    <div>
      <button onClick={handleClick}>
        <img
          className={`size-9 cursor-pointer ${
            isZoomed ? 'scale-125 z-50 transition-transform duration-300 ease-out' : 'transition-transform duration-300 ease-out'
          }`}
          src="./public/un.jpg"
          alt=""
        />
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </div>
  );
};

export default Exclamation;
