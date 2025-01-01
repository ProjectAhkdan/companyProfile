"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Komponen untuk menu item
const NavItem = ({ href, label }: { href: string; label: string }) => (
    <Link legacyBehavior href={href}>
        <a className="text-gray-800 hover:text-green-600 transition">{label}</a>
    </Link>
);

const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact Us" },
];

// Komponen utama Navbar
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-white shadow-md fixed w-full">
            <div className="w-full mx-auto sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <nav>
                        <div className="flex items-center space-x-4">
                            <Link legacyBehavior href="/">
                                <a className="flex items-center space-x-2">
                                    <Image
                                        src="/logo.png"
                                        alt="Logo"
                                        width={30}
                                        height={30}
                                    />
                                    <span className="text-green-500 text-2xl font-bold">Yhoiki</span>
                                </a>
                            </Link>
                        </div>
                    </nav>


                    {/* tampilan dekstop */}
                    <div className="hidden md:flex space-x-6">
                        {navItems.map((item) => (
                            <NavItem key={item.href} href={item.href} label={item.label} />
                        ))}
                    </div>
                    <div className="flex justify-between">
                        {/* tampilan mobile */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden text-gray-800 focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* menu mobile */}
            {isOpen && (
                <div className="md:hidden bg-gray-50">
                    {navItems.map((item) => (
                        <div key={item.href} className="px-4 py-2">
                            <NavItem href={item.href} label={item.label} />
                        </div>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;