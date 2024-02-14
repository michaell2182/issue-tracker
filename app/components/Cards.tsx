import React from "react";

const Cards = () => {
  return (
    <main className="mt-6">
      <div className="grid grid-cols-3 gap-14 mt-6">
        {/* First Card */}
        <div className="bg-white p-4 rounded-2xl h-48 w-72 shadow-md cursor-pointer  transition ease-in-out delay-150 hover:bg-[#b4c2dc] hover:transform hover: hover:-translate-y-1 hover:scale-105 duration-300">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-lg font-semibold center">Third Card</h1>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="bg-white p-4 rounded-2xl h-48 w-72 shadow-md cursor-pointer  transition ease-in-out delay-150 hover:bg-[#b4c2dc] hover:transform hover: hover:-translate-y-1 hover:scale-105 duration-300">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-lg font-semibold center">Third Card</h1>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="bg-white p-4 rounded-2xl h-48 w-72 shadow-md cursor-pointer  transition ease-in-out delay-150 hover:bg-[#b4c2dc] hover:transform hover: hover:-translate-y-1 hover:scale-105 duration-300">
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
