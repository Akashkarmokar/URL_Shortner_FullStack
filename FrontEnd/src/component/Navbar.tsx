"use client";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const [menu, isMenuOpen] = useState(false);
    const router = useRouter();

    const handleMenu = () => {
        console.log("clicked");
        isMenuOpen(!menu);
    };

    const handleLogout = () => {
        Cookies.remove("token");
        router.push("/signin");
    };
    return (
        <nav className="mx-auto flex w-[92%] items-center justify-end py-6 text-white">
            <div
                className={`absolute ${menu ? "top-[10%]" : "top-[-110%]"} left-0 flex min-h-[30vh] w-full items-center bg-[#171d32] px-4 opacity-100 md:static md:min-h-fit md:w-auto`}
            >
                <ul className="flex flex-col gap-2 md:flex-row md:items-center md:gap-[2vw]">
                    <a href="#about" onClick={handleLogout}>
                        <li className="hover:text-gray-500">
                            Logout ( Username )
                        </li>
                    </a>
                    {/* <a href="#contact">
                        <li className="hover:text-gray-500">Contact</li>
                    </a> */}
                </ul>
            </div>

            {/* Hamburger menu icon */}
            <div className="md:hidden">
                <Menu
                    className={`cursor-pointer ${menu ? "text-gray-300" : "text-white"}`}
                    onClick={handleMenu}
                />
            </div>
        </nav>
    );
};

export default Navbar;
