"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdAdminPanelSettings } from "react-icons/md";
function Navbar() {
 const navOpt =[
  { name: "Home", link: "/" },
  { name: "Services", link: "/services" },
  { name: "Products", link: "/products" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" }
]
  const [navColor, setNavColor] = useState({
    _bg_color: "bg-transparent",
    _logo1: "flex",
    _logo2: "hidden",
    _text_color: "text-color_dark_red1",
  });
  function changeNavColor() {
    if (window.scrollY > 40) {
      setNavColor({
        _bg_color: "bg-color_dark_red1",
        _logo1: "hidden",
        _logo2: "flex",
        _text_color: "text-white",
      });
    } else {
      setNavColor({
        _bg_color: "bg-transparent",
        _logo1: "flex",
        _logo2: "hidden",
        _text_color: "text-color_dark_red1",
      });
    }
  }
  useEffect(() => {
    changeNavColor();
    window.addEventListener("scroll", changeNavColor);
  }, []);
  return (
    <nav
      className={`w-full flex items-center justify-center ${navColor._bg_color} fixed top-0 left-0 z-[80]`}
    >
      <div className=" max-w-1600px w-full flex items-center justify-center">
        <div className=" w-88% flex items-center justify-between flex-wrap py-[2px]">
          <Link
            href="/"
            className={`w-8% ${navColor._logo1} items-center justify-center`}
          >
            <Image
              src="logo1.png"
              width={25}
              height={25}
              alt="logo1"
              className=" w-full"
              priority={true}
            />
          </Link>
          <Link
            href="/"
            className={`w-8% ${navColor._logo2} items-center justify-center`}
          >
            <Image
              src="logo2.png"
              width={25}
              height={25}
              alt="logo1"
              className=" w-full "
              priority={true}
            />
          </Link>

          <div
            className={`flex items-center justify-center gap-4 text-p1 font-500 ${navColor._text_color}`}
          >
            {navOpt?.map((opt, ind) => {
              return (
                <Link href={`${opt.link}`} key={ind} className=" hover:underline">
                  {opt.name}
                </Link>
              );
            })}
            <Link
              href="/admin"
              className=" text-h4 hover:scale-90 transition-transform duration-200 ease-in-out"
            >
              <MdAdminPanelSettings />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
