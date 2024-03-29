"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoHomeOutline } from "react-icons/io5";
import { BsTicketPerforated } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import { CiSettings } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";
import { IoFilterSharp } from "react-icons/io5";

const Sidebar = () => {
  const currentPath = usePathname();
  const [open, setOpen] = useState(true);

  const [iconsVisible, setIconsVisible] = useState(true);

  const links = [
    { label: "Dashboard", href: "/", icon: IoHomeOutline },
    { label: "Tickets", href: "/issues", icon: BsTicketPerforated },
    { label: "Team", href: "/team", icon: FaPeopleGroup },
    { label: "Reports", href: "/report", icon: GoGraph },
    { label: "Settings", href: "/settings", icon: CiSettings },
  ];


  const toggleSidebar = () => {
    setOpen(!open);
    setIconsVisible(true); // Ensure icons remain visible when toggling sidebar
  };

  return (
    <section className="">
      <div
        className={`bg-[#2C3A4F] min-h-screen ${
          open ? "w-60" : "w-16"
        } transition-width duration-500 rounded-r-2xl shadow-2xl text-gray-100 px-4 overflow-hidden`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={toggleSidebar}
        
          />
        </div>
        <div className="mt-4 flex flex-col gap-12 relative pl-8">
          {links.map((link, i) => (
            <Link key={link.href} href={link.href}>
              <div
                className={`mask whitespace-pre duration-500 ${
                  !open ? "opacity-0 translate-x-28 overflow-hidden" : ""
                }`}
              >
                <h2
                  className={`${
                    link.href === currentPath
                      ? "text-slate-50"
                      : "text-slate-400 bg-[#2C3A4F] hover:bg-[#455369] rounded-md p-2 hover:text-white transition-colors ease-in-out "
                  }`}
                >
                  <span className="flex items-center">
                    {React.createElement(link.icon, {
                      size: 20,
                      className: `mr-6 ${iconsVisible ? "" : "hidden"}`, // Hide icon when iconsVisible is false
                    })}
                    {link.label}
                  </span>
                </h2>
              </div>
            </Link>
          ))}
          <div className="p-2 border-b-2 border-slate-600"></div>
          <div className="mt-auto p-4 flex items-center translate-y-80 relative bottom-8">
            <IoLogOutOutline className="mr-6 size-5 cursor-pointer" />
            <Link href="/logout">
              <h2 className="block text-slate-400 hover:text-slate-200 transition-colors cursor-pointer">
                Logout
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
