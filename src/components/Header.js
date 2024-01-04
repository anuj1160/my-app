import React from "react";

const Header = () => {
  return (
    <div className="bg-gray-800 p-4 md:p-8 mb-6 flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        <h1 className="text-white text-lg md:text-2xl font-extrabold tracking-tight">
          ROBOFRIENDS
        </h1>
      </div>
    </div>
  );
};

export default Header;
