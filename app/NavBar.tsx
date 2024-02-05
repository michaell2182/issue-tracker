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
    <nav className="flex space-x-6 border-b mb-5 fixedpx-5 h-14 items-center">
      <Link href="/">
        <BsAndroid />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link key={link.href} className={classnames({
            'text-zinc-100': link.href === currentPath,
            'text-zinc-400': link.href !== currentPath,
            'hover:text-zinc-200 transition-colors': true
          })} href={link.href}>
            {link.label}{" "}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
