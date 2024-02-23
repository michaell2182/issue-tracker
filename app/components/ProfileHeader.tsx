import React from "react";
import { IoIosNotifications } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";

const ProfileHeader = () => {
  return (
    <div className="container relative left-[7rem]">
      <div className="icon">
        <IoIosNotifications className="w-8 h-8 relative -right-36 top-4 text-[#56647b]" />
      </div>
      <div className="text">
        {/* <h1 className="text-xl absolute bottom-12 Inter font-bold whitespace-nowrap tracking-wider text-[#73747c]">
          Michael Lewis 
        </h1> */}

      </div>
      <div className="profile">
        <img
          src="https://source.unsplash.com/random"
          alt=""
          className="bg-gray-200 rounded-full my-2 w-14 h-14 relative left-48 bottom-10 text-[#56647b] "
        />
      </div>
      <FaAngleDown className="absolute -right-48 top-6 scale-150 text-gray-500 hover:bg-[#56647b] hover:text-white ease-in-out duration-300 rounded-full" />
    </div>
  );
};

export default ProfileHeader;
