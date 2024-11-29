"use client";
import React from "react";
import "./style.css";
import Link from "next/link";
import { useFirebase } from "@/app/context/Firebase";


function Header() {
  const firebase = useFirebase();

  const handleAdd = () => {
    // Add your logic here
  };

  return (
    <header className="w-full flex items-center justify-center bg-gray-100">
      <div className="max-w-[1600px] w-full flex items-center justify-center px-4 md:px-8">
        <div className="w-full lg:w-11/12 xl:w-10/12 flex items-center justify-center py-16 min-h-[60vh] lg:min-h-screen z-10">
          <div className="w-full flex flex-col items-center justify-center gap-4 bg-color_light_white1 rounded-lg py-6 px-4 md:px-8">
            <h1 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold text-center leading-tight text-color_dark_red1 mb-4">
              MS SOFA MAKER & MODERN FURNITURE
            </h1>
            <h4 className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-semibold text-center leading-tight text-color_dark_red1 underline mb-4">
              Crafting Comfort, Elevating Style
            </h4>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] text-justify text-color_dark_red1 mt-3 leading-relaxed">
              At MS SOFA MAKER & MODERN FURNITURE, we take pride in crafting
              exquisite furniture that seamlessly blends style, comfort, and
              functionality. From bespoke sofas to contemporary furniture
              collections, we are committed to enhancing your living space with
              pieces that reflect your unique taste. Our dedication to quality
              craftsmanship and modern design ensures that each product not only
              meets but exceeds your expectations. Transform your home into a
              statement of elegance with furniture that stands the test of time.
            </p>
            <div
              onClick={handleAdd}
              className="bg-color_dark_red1 cursor-pointer text-white text-[14px] sm:text-[16px] md:text-[18px] font-medium px-8 sm:px-12 py-3 sm:py-4 hover:scale-95 transition-transform duration-200 ease-in-out rounded-md mt-4"
            >
              Contact
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
