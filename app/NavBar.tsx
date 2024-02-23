"use client";
import React from "react";
import Link from "next/link";
import { BsAndroid } from "react-icons/bs";
import { usePathname } from "next/navigation";
import classnames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  
  return (
    <nav className="flex justify-center items-center bg-gray-100 border-b mb-5 h-14">
      <div className="max-w-screen-lg flex justify-between items-center w-full px-5">
        <Link href="/">
          <BsAndroid className="text-2xl cursor-pointer" />
        </Link>
        <ul className="flex space-x-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                className={classnames({
                  'text-zinc-900': link.href === currentPath,
                  'text-zinc-500': link.href !== currentPath,
                  'hover:text-zinc-800 transition-colors': true
                })}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
