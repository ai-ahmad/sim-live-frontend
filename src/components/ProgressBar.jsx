import React from "react";
import { motion } from "framer-motion";

const ProgressBar = ({ progress, level }) => {
  return (
    <div className="flex flex-col items-start w-56">
      {/* Level text with white color */}
      <p className="text-lg font-bold mb-2 text-white">{`Level: ${level}`}</p>

      <div
        className="w-full h-4 bg-gray-300 rounded-full overflow-hidden border border-black"
        style={{ position: "relative" }}
      >
        <motion.div
          initial={false} 
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
          style={{
            height: "100%",
            backgroundColor: "#4a90e2",
            borderRadius: "inherit",
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
