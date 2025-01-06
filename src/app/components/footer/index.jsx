import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-color_dark_red1">
      <div className="container mx-auto py-8 px-4 md:px-8 lg:px-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col items-center lg:items-start space-y-4">
          <div className="h-20 w-20">
            <Image
              src="/logo1.png"
              width={25}
              height={25}
              alt="logo"
              className="w-full"
              priority={true}
            />
          </div>
          <div className="w-full lg:w-72 text-justify text-sm md:text-base">
            MS Sofa Maker. Your trusted partner in premium sofa craftsmanship.
            Combining elegance, comfort, and durability to enhance your living
            space. Visit us for custom designs tailored to your lifestyle.
          </div>
        </div>

        {/* Important Links */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-semibold mb-4 text-center sm:text-left">
            Important Links
          </h3>
          <ul className="space-y-2 text-center sm:text-left">
            {['Home', 'About', 'Products', 'Services', 'Contact'].map((link) => (
              <li key={link}>
                <a
                  href={`/${link.toLowerCase()}`}
                  className="hover:text-color_light_red1 transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-semibold mb-4 text-center sm:text-left">
            Follow Us
          </h3>
          <div className="flex space-x-4 justify-center sm:justify-start">
            {[
              { icon: <FaFacebook size={24} />, link: 'https://facebook.com' },
              { icon: <FaTwitter size={24} />, link: 'https://twitter.com' },
              { icon: <FaInstagram size={24} />, link: 'https://instagram.com' },
              { icon: <FaLinkedin size={24} />, link: 'https://linkedin.com' },
            ].map(({ icon, link }, index) => (
              <div
                key={index}
                className="h-10 w-10 flex justify-center items-center text-white bg-red-800 rounded-full hover:text-color_dark_red1 hover:bg-white transition-all duration-300"
              >
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {icon}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center border-t border-gray-300 py-4">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} MS Sofa Maker. All rights reserved.
        </p>
        {/* <p className="text-sm text-gray-500 mt-2">
          Developed by{' '}
          <a
            href="https://yourcompany.com"
            className="text-blue-400 hover:underline"
          >
            The Duo Tech
          </a>
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;
