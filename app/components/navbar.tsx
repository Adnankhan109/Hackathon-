'use client';
import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
import { IoIosContact } from 'react-icons/io';
import { IoMenu, IoClose } from 'react-icons/io5';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="p-4 w-full h-auto">
      {/* Top Section */}
      <div className="flex justify-between items-center py-2">
        {/* Search Icon for Large Screens (Tablet and above) */}
        <div className="hidden md:block">
          <CiSearch size={25} className="text-[#2A254B]" />
        </div>

        {/* Logo */}
        <h1 className="text-[#22202E] text-xl md:text-2xl md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          Avion
        </h1>

        {/* Cart and Contact Icons for Large Screens */}
        <div className="hidden md:flex gap-4">
          <Link href="/Cart">
            <IoCartOutline size={25} className="text-[#2A254B]" />
          </Link>
          <IoIosContact size={25} className="text-[#2A254B]" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="flex items-center gap-4 md:hidden">
          <CiSearch size={25} className="text-[#2A254B]" />
          <button
            className="text-2xl focus:outline-none z-30"
            onClick={toggleMenu}
          >
            {!menuOpen ? <IoMenu /> : <IoClose />}
          </button>
        </div>
      </div>

      <hr />

      {/* Mobile Navigation Links */}
      <header
        className={`fixed top-0 right-0 py-6 h-full w-3/4 bg-white shadow-lg transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:static md:w-auto md:translate-x-0 md:bg-transparent md:shadow-none z-20`}
      >
        {/* Close Button in Mobile Menu */}
        {menuOpen && (
          <div className="flex justify-end p-4 md:hidden">
            <button
              className="text-2xl focus:outline-none"
              onClick={toggleMenu}
            >
              
            </button>
          </div>
        )}

        <ul className="flex flex-col md:flex-row justify-center items-start md:items-center gap-4 md:gap-8 text-[#726E8D] text-base p-6 md:p-0">
          {['Plant pots', 'Ceramics', 'Tables', 'Chairs', 'Crockery', 'Tableware', 'Cutlery'].map((item) => (
            // <li className='' key={item}>
            //   <a href="/">{item}</a>
            // </li>
            <li className="relative group" key={item}>
  <a 
    href="/" 
    className="text-gray-800 hover:text-black transition-colors duration-300"
  >
    {item}
    <span 
      className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"
    ></span>
  </a>
</li>

          ))}
          
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
