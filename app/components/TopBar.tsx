import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoFilterSharp } from "react-icons/io5";
import ProfileHeader from "./ProfileHeader";
const TopBar = () => {
    return (
      <div className="bg-white p-2 rounded-2xl h-20 w-[80rem] shadow-sm flex justify-between">
        <div className="bg-gray-200 relative p-4 rounded-lg h-12 w-[40rem] top-2 left-1 shadow-sm flex items-center">
          <IoSearch className="text-gray-500 scale-125 mr-2" />
          <input
            type="text"
            className="bg-transparent outline-none placeholder-gray-400 text-gray-700 flex-grow"
            placeholder="Search"
          />
          <div className="bg-white p-2 rounded-lg relative left-1">
            <IoFilterSharp className="text-gray-500 scale-110" />
          </div>
        </div>
        <div className="relative right-80 top-3">
            {/* Work on drop down menu */}
          <ProfileHeader />
        </div>
      </div>
    );
  };
  
export default TopBar;
