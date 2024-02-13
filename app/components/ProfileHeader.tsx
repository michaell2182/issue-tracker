import React from "react";
import { IoIosNotifications } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";

const ProfileHeader = () => {
  return (
    <div className="container relative left-[7rem]">
      <div className="icon">
        <IoIosNotifications className="scale-150 relative right-16 top-3 text-[#56647b]" />
      </div>
      <div className="text">
        <h1 className="text-md absolute bottom-12 Inter font-bold whitespace-nowrap tracking-wider">
          Michael Lewis
        </h1>
        <h3 className="text-sm text-gray-500 absolute bottom-6 Inter font-semibold whitespace-nowrap ">
          Web Developer
        </h3>
      </div>
      <div className="profile">
        <img
          src="https://source.unsplash.com/random"
          alt=""
          className="bg-gray-200 rounded-xl my-2 w-12 h-12 relative left-40 bottom-7 text-[#56647b] "
        />
      </div>
      <FaAngleDown className="absolute -right-48 top-4 scale-125 text-gray-500 hover:bg-[#56647b] hover:text-white ease-in-out duration-300 rounded-full" />
    </div>
  );
};

export default ProfileHeader;
