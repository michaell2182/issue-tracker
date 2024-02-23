import React from "react";
import Welcome from "../section/components/Welcome";
import CardChart from "../section/components/CardChart";
import dynamic from 'next/dynamic';

const Cards = () => {
  return (
    // welcome message
    <main className="mt-6">
      <Welcome />
      <div className="grid grid-cols-4 mt-6 gap-8">
        {/* First Card */}
        <div className="bg-white p-4 rounded-3xl h-48 w-80 shadow-lg cursor-pointer relative top-14 transition ease-in-out delay-150 hover:bg-[#b4c2dc] hover:transform hover:-translate-y-1 hover:scale-105 duration-300">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-lg font-semibold center text-[#333335]">
                {/* <CardChart /> */}
              </h1>
              
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="bg-white p-4 rounded-3xl h-48 w-80 shadow-lg cursor-pointer relative top-14  transition ease-in-out delay-150 hover:bg-[#b4c2dc] hover:transform hover:-translate-y-1 hover:scale-105 duration-300">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-lg font-semibold center text-[#333335]">
                Second Card
              </h1>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="bg-white p-4 rounded-3xl h-48 w-80 shadow-lg cursor-pointer relative top-14 transition ease-in-out delay-150 hover:bg-[#b4c2dc] hover:transform hover:-translate-y-1 hover:scale-105 duration-300">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-lg font-semibold center text-[#333335]">
                Third Card
              </h1>
            </div>
          </div>
        </div>
       <h1 className="absolute top-[19rem] font-semibold text-2xl text-[#73747c]">
        Recent Tickets
        </h1>
      </div>
    </main>
  );
};

export default Cards;
