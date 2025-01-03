"use client";

import { IconYhoikinav } from "./icon/icon";
import Link from "next/link";
// Komponen untuk menu item
const NavItem = ({ href, label }: { href: string; label: string }) => (
  <Link legacyBehavior href={href}>
    <a className="text-gray-500 text-sm font-semibold hover:text-green-600 transition">
      {label}
    </a>
  </Link>
);

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact-us", label: "Contact Us" },
];

// Komponen utama Navbar
const Navbar = () => {
  return (
    <nav className="z-[9999] fixed w-full bg-transparent border-b border-transparent shadow-md">
      <div className=" flex h-16 bg-white items-center">
        <div className="clip-trapezoid w-2/5 md:w-1/4 gap-x-6 flex items-center justify-center h-full bg-green-500">
          <IconYhoikinav />
          <strong className=" text-white text-xl md:text-2xl">YHOIKI</strong>
        </div>
        <div className=" hidden md:flex w-full h-full gap-x-5 px-10 items-center">
          {navItems.map((item, index) => (
            <NavItem key={index} href={item.href} label={item.label} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
