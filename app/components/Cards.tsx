import React from 'react';

const Cards = () => {
  return (
    <main className="mt-6">
      <div className="grid grid-cols-3 gap-14 mt-6">
        {/* First Card */}
        <div className="bg-white p-4 rounded-2xl h-56 w-48 shadow-md cursor-pointer ease-linear transition-colors duration-300 hover:bg-[#b4c2dc]">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-lg font-semibold center">
                First Card
              </h1>
            </div>
          </div>
        </div>
        
        {/* Second Card */}
        <div className="bg-white p-4 rounded-2xl h-56 w-48 shadow-md cursor-pointer ease-linear transition-colors duration-300 hover:bg-[#b4c2dc]">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-lg font-semibold center">
                Second Card
              </h1>
            </div>
          </div>
        </div>
        
        {/* Third Card */}
        <div className="bg-white p-4 rounded-2xl h-56 w-48 shadow-md cursor-pointer ease-linear transition-colors duration-300 hover:bg-[#b4c2dc]">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-lg font-semibold center">
                Third Card
              </h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cards;
