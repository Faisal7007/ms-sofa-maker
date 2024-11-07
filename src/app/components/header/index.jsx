import React from "react";
import "./style.css";
import Link from "next/link";
function Header() {
  return (
    <header className=" w-full flex items-center justify-center">
      <div className=" max-w-1600px w-full flex items-center justify-center">
        <div className=" w-88% flex items-center justify-center py-16 min-h-screen z-10">
          <div className=" w-full flex items-center justify-center flex-col gap-1 bg-color_light_white1 rounded-16px py-4 px-2">
            <h1 className=" text-h1 font-700 text-center leading-none text-color_dark_red1">
              MS SOFA MAKER & MODERN FURNITURE
            </h1>
            <h4 className=" text-h4 font-700 leading-none text-center text-color_dark_red1 underline">
              Crafting Comfort, Elevating Style
            </h4>
            <p className=" text-p1 font-500 text-center text-color_dark_red1 leading-btn2 mt-3">
              At MS SOFA MAKER & MODERN FURNITURE, we take pride in crafting
              exquisite furniture that seamlessly blends style, comfort, and
              functionality. From bespoke sofas to contemporary furniture
              collections, we are committed to enhancing your living space with
              pieces that reflect your unique taste. Our dedication to quality
              craftsmanship and modern design ensures that each product not only
              meets but exceeds your expectations. Transform your home into a
              statement of elegance with furniture that stands the test of time.
            </p>
            <Link
              href="/contact"
              className=" bg-color_dark_red1 text-white text-p1 font-500 leading-none px-12 py-4 hover:scale-90 transition-transform duration-200 ease-in-out rounded-8px mt-3"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
