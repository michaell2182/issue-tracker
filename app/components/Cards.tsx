import React from "react";

const Cards = () => {
  return (
    <main className="mt-6">
      <div className="grid grid-cols-3 gap-14 mt-6">
        {/* First Card */}
        <div className="bg-white p-4 rounded-2xl h-48 w-72 shadow-md cursor-pointer  transition-colors  hover:bg-[#b4c2dc] hover:transform hover: ease-in-out duration-700">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-lg font-semibold center">Third Card</h1>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="bg-white p-4 rounded-2xl h-48 w-72 shadow-md cursor-pointer  transition-colors  hover:bg-[#b4c2dc] hover:transform hover: ease-in-out duration-700">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-lg font-semibold center">Third Card</h1>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="bg-white p-4 rounded-2xl h-48 w-72 shadow-md cursor-pointer  transition-colors  hover:bg-[#b4c2dc] hover:transform hover: ease-in-out duration-700">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-lg font-semibold center">Third Card</h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cards;
