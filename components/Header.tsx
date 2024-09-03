"use client";

import logo from "@/public/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";

import {
  FaChevronDown,
  FaFacebook,
  FaInstagram,
  FaPaypal,
  FaPhone,
  FaSearch,
  FaTimes,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { CiMenuFries, CiMenuBurger } from "react-icons/ci";
import { useState } from "react";

type DropdownKeys = "dropdown_1" | "dropdown_2" | "dropdown_3" | "dropdown_4";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDropdown, setShowDropdown] = useState({
    dropdown_1: false,
    dropdown_2: false,
    dropdown_3: false,
    dropdown_4: false,
  });

  const toggleDropdown = (dropdown: DropdownKeys) => {
    setShowDropdown({
      dropdown_1: false,
      dropdown_2: false,
      dropdown_3: false,
      dropdown_4: false,
      [dropdown]: !showDropdown[dropdown],
    });
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <nav className="h-[70px] bg-white flex items-center justify-between px-4 shadow sticky top-0 select-none">
      <Link href="/">
        <Image
          src={logo}
          className="w-16 md:w-24 h-12 object-cover"
          alt="logo"
        />
      </Link>

      <div className="hidden md:flex justify-evenly items-center  w-1/2">
        <div className="relative">
          <div
            className="inline-flex items-center gap-1.5 text-gray-500 text-sm cursor-pointer hover:text-blue-300"
            onClick={() => toggleDropdown("dropdown_1")}
          >
            <span>Home</span>
            <FaChevronDown />
          </div>

          {showDropdown.dropdown_1 && (
            <ul className="bg-white shadow-lg rounded-lg px-6 py-3 absolute top-full right-0 border text-gray-500 text-sm flex flex-col gap-1 transition">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-500 hover:opacity-80 transition"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-500 hover:opacity-80 transition"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-500 hover:opacity-80 transition"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-blue-500 hover:opacity-80">
                  Logout
                </Link>
              </li>
            </ul>
          )}
        </div>

        <div className="relative">
          <div
            className="inline-flex items-center gap-1.5 text-gray-500 text-sm cursor-pointer hover:text-blue-300"
            onClick={() => toggleDropdown("dropdown_2")}
          >
            <span>About Us</span>
            <FaChevronDown />
          </div>

          {showDropdown.dropdown_2 && (
            <ul className="bg-white shadow-lg rounded-lg px-6 py-3 absolute top-full right-0 border text-gray-500 text-sm flex flex-col gap-1 transition">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-500 hover:opacity-80 transition"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-500 hover:opacity-80 transition"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-500 hover:opacity-80 transition"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-blue-500 hover:opacity-80">
                  Logout
                </Link>
              </li>
            </ul>
          )}
        </div>

        <div className="relative">
          <div
            className="inline-flex items-center gap-1.5 text-gray-500 text-sm cursor-pointer hover:text-blue-300"
            onClick={() => toggleDropdown("dropdown_3")}
          >
            <span>Pages</span>
            <FaChevronDown />
          </div>

          {showDropdown.dropdown_3 && (
            <ul className="bg-white shadow-lg rounded-lg px-6 py-3 absolute top-full right-0 border text-gray-500 text-sm flex flex-col gap-1 transition">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-500 hover:opacity-80 transition"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-500 hover:opacity-80 transition"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-500 hover:opacity-80 transition"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-blue-500 hover:opacity-80">
                  Logout
                </Link>
              </li>
            </ul>
          )}
        </div>

        <div className="relative">
          <div
            className="inline-flex items-center gap-1.5 text-gray-500 text-sm cursor-pointer hover:text-blue-300"
            onClick={() => toggleDropdown("dropdown_4")}
          >
            <span>Blog</span>
            <FaChevronDown />
          </div>

          {showDropdown.dropdown_4 && (
            <ul className="bg-white shadow-lg rounded-lg px-6 py-3 absolute top-full right-0 border text-gray-500 text-sm flex flex-col gap-1 transition">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-500 hover:opacity-80 transition"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-500 hover:opacity-80 transition"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-500 hover:opacity-80 transition"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-blue-500 hover:opacity-80">
                  Logout
                </Link>
              </li>
            </ul>
          )}
        </div>

        <div className="relative">
          <div className="inline-flex items-center gap-1.5 text-gray-500 text-sm cursor-pointer hover:text-blue-300">
            <span>Contact</span>
          </div>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-2 ">
        <FaPhone className="text-white bg-blue-500 w-9 h-9 rounded-full p-2.5" />
        <div className="flex flex-col">
          <span className="text-gray-400 text-sm">Hot Line Number</span>
          <span className="font-semibold text-sm">+123 45678 900</span>
        </div>
      </div>

      <div className=" border-x-2 border-gray-200 py-4 px-2 flex justify-end items-end justify-self-end   ml-auto mr-2 md:ml-0 md:mr-0">
        <FaSearch className="text-gray-600 w-5 cursor-pointer" />
      </div>

      <div className="md:hidden">
        <CiMenuBurger size={20} onClick={toggleSidebar} />
      </div>

      <div className=" hidden md:block">
        <CiMenuFries
          size={22}
          className="cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>

      {/* sidebar content */}
      {showSidebar && (
        <div
          className="fixed top-0 right-0 w-full h-full bg-black/60 z-10"
          onClick={() => setShowSidebar(false)}
        >
          <div
            className="bg-white w-2/3 md:w-1/3 lg:w-1/4 h-full ml-auto p-4 md:p-6 flex flex-col gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* sidebar top */}
            <div className="flex justify-between items-center">
              <Image
                src={logo}
                className="w-16 md:w-24 h-12 object-cover border-b-2 border-purple-400"
                alt="logo"
              />

              <FaTimes
                size={35}
                onClick={() => setShowSidebar(false)}
                className="cursor-pointer border-2 border-purple-400 text-purple-400 p-2"
              />
            </div>

            <div>
              <h2 className="mb-3 font-bold">Categories</h2>
              <ul className="text-sm text-gray-600 list-disc flex flex-col gap-[2px] ml-4 font-semibold">
                <li>Products</li>
                <li>Products</li>
                <li>Fashion</li>
                <li>Appliances</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 font-bold">Phone Number</h2>
              <ul className="text-sm text-gray-600  flex flex-col gap-[2px] font-semibold">
                <li>+880 175 123 4567</li>
                <li>+880 175 123 4567</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 font-bold">Email Address</h2>
              <ul className="text-sm text-gray-600  flex flex-col gap-[2px] font-semibold">
                <li>info@example.com </li>
                <li>support@example.com</li>
              </ul>
            </div>

            <div className="flex items-center gap-3 md:gap-6">
              <FaFacebook
                size={28}
                className="text-blue-500 cursor-pointer hover:text-blue-300 transition"
              />
              <FaTwitter
                size={28}
                className="text-blue-500 cursor-pointer hover:text-blue-300 transition"
              />
              <FaInstagram
                size={28}
                className="text-blue-500 cursor-pointer hover:text-blue-300 transition"
              />
              <FaPaypal
                size={28}
                className="text-blue-500 cursor-pointer hover:text-blue-300 transition"
              />
              <FaYoutube
                size={28}
                className="text-blue-500 cursor-pointer hover:text-blue-300 transition"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
