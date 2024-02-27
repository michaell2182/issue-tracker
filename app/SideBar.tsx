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
import { useSession } from "next-auth/react";

const Sidebar = () => {
  const currentPath = usePathname();
  const [open, setOpen] = useState(true);
  const { status } = useSession();
  const [iconsVisible, setIconsVisible] = useState(true);

  const links = [
    { label: "Dashboard", href: "/", icon: IoHomeOutline },
    { label: "Tickets", href: "/issues/list", icon: BsTicketPerforated },
    { label: "Team", href: "/team", icon: FaPeopleGroup },
    { label: "Reports", href: "/report", icon: GoGraph },
    { label: "Settings", href: "/settings", icon: CiSettings },
  ];

  return (
    <section className="absolute top-0">
      <div
        className={`bg-white min-h-screen ${"w-60"} transition-width duration-500 rounded-r-2xl shadow-md text-gray-100 px-4 overflow-hidden p-16`}
      >
        <div className="py-3 flex justify-end">Logo</div>
        <div className="mt-4 flex flex-col gap-12 relative pl-8">
          {links.map((link, i) => (
            <Link key={link.href} href={link.href}>
              <div className={`mask whitespace-pre duration-500`}>
                <h2
                  className={`${
                    link.href === currentPath
                      ? "text-[#73747c]"
                      : "text-[#73747c] bg-white hover:bg-[#edeef9] rounded-md p-2 hover:text-[#2a3147] transition-colors ease-in-out "
                  }`}
                >
                  <span className="flex items-center">
                    {React.createElement(link.icon, {
                      size: 20,
                      className: `mr-6 ${iconsVisible ? "" : "hidden"}`,
                    })}
                    {link.label}
                  </span>
                </h2>
              </div>
            </Link>
          ))}
          <div className="mt-auto flex items-center translate-y-80 relative bottom-0 left-5">
            <IoLogOutOutline className="mr-6 size-5 cursor-pointer text-[#56647b]" />
            {status === "authenticated" && (
              <Link href="/api/auth/signout" className="text-[#56647b]">
                Log Out{" "}
              </Link>
            )}
            {status === "unauthenticated" && (
              <Link href="/api/auth/signin" className="text-[#56647b]">
                Log In{" "}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
