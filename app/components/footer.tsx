import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";

const Footer = () => {
  return (
    <>
     

      <div className='bg-[#2A254B] px-8 py-6 md:py-12 md:px-16 mt-8'>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6  md:gap-4">
            {/* Menu Section */}
            <div className="text-white lg:col-span-1 ">
              <h1 className="text-lg md:text-xl font-bold">Menu</h1>
              <div className="space-y-1">
                <h1><Link href={'/'}>New Arrivals</Link></h1>
                <h1><Link href={'/'}>Best sellers</Link></h1>
                <h1><Link href={'/'}>Recently viewed</Link></h1>
                <h1><Link href={'/'}>Popular this week</Link></h1>
                <h1><Link href={'/'}>All Products</Link></h1>
              </div>
            </div>

            {/* Categories Section */}
            <div className="text-white lg:col-span-1">
              <h1 className="text-lg md:text-xl font-bold">Categories</h1>
              <div className="space-y-1">
                <h1><Link href={'/'}>Crockery</Link></h1>
                <h1><Link href={'/'}>Furniture</Link></h1>
                <h1><Link href={'/'}>Homeware</Link></h1>
                <h1><Link href={'/'}>Plant pots</Link></h1>
                <h1><Link href={'/'}>Chairs</Link></h1>
              </div>
            </div>

            {/* Company Section */}
            <div className="text-white lg:col-span-1 col-span-2 md:col-span-1 md:pt-0 pt-6">
              <h1 className="text-lg md:text-xl font-bold">Our Company</h1>
              <div className="space-y-1">
                <h1><Link href='/about'>About us</Link></h1>
                <h1><Link href={'/'}>Vacancies</Link></h1>
                <h1><Link href={'/'}>Contact us</Link></h1>
                <h1><Link href={'/'}>Privacy</Link></h1>
                <h1><Link href={'/'}>Return policy</Link></h1>
              </div>
            </div>

            {/* Mailing List Section */}
            <div className="text-white md:col-span-3 lg:col-span-3 lg:w-[100%] md:pt-4 lg:pt-0 md:justify-self-center pt-6 col-span-2">
              <h1 className="text-lg md:text-xl font-bold md:text-center lg:text-start">Join our mailing list</h1>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="your@email.com"
                  className="w-full sm:w-[250px] lg:w-[400px] h-[48px] p-2 bg-transparent border text-white border-white rounded-md"
                />
                <button className="mt-2 sm:mt-0 sm:ml-2 w-full sm:w-[100px] h-[48px] bg-white text-[#2A254B] rounded-md">
                  Sign up
                </button>
              </div>
            </div>
          </div>

          <hr className='bg-[#4E4D93] my-8' />

          {/* Footer Bottom Section */}
          <div className='flex flex-wrap md:justify-between justify-center  items-center text-white gap-4 '>
            <div>
              <h1>Copyright 2022 Avion LTD</h1>
            </div>
            <div className='flex gap-4'>
              <Link href={'/'}><FaLinkedin size={20} /></Link>
              <Link href={'/'}><FaFacebookSquare size={20} /></Link>
              <Link href={'/'}><FaInstagram size={20} /></Link>
              <Link href={'/'}><IoLogoSkype size={20} /></Link>
              <Link href={'/'}><FaTwitter size={20} /></Link>
              <Link href={'/'}><FaPinterest size={20} /></Link>
            </div>
          </div>
        </div>

    </>
  );
};

export default Footer;
