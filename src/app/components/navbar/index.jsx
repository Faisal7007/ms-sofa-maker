"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdAdminPanelSettings } from "react-icons/md";
function Navbar() {
  const [navOpt] = useState([
    "Home",
    "Services",
    "Products",
    "About",
    "Contact",
  ]);
  const [navColor, setNavColor] = useState({
    _bg_color: "bg-transparent",
    _logo1: "flex",
    _logo2: "hidden",
    _text_color: "text-color_dark_red",
  });
  function changeNavColor() {
    if (window.scrollY > 40) {
      setNavColor({
        _bg_color: "bg-color_dark_red",
        _logo1: "hidden",
        _logo2: "flex",
        _text_color: "text-white",
      });
    } else {
      setNavColor({
        _bg_color: "bg-transparent",
        _logo1: "flex",
        _logo2: "hidden",
        _text_color: "text-color_dark_red",
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
        <div className=" w-88% flex items-center justify-between flex-wrap h-[71px] py-[2px]">
          <Link
            href="/"
            className={`w-16% ${navColor._logo1} items-center justify-center h-full`}
          >
            <Image
              src="/logo1.png" // my selection without bg
              width={25}
              height={25}
              alt="logo1"
              className=" w-full h-full"
              priority={true}
            />
          </Link>
          <Link
            href="/"
            className={`w-16% ${navColor._logo2} items-center justify-center h-full`}
          >
            <Image
              src="/logo3.png" // my selection with bg
              width={25}
              height={25}
              alt="logo1"
              className=" w-full h-full bg-color_dark_red"
              priority={true}
            />
          </Link>
          {/* <Link href="/" className=" w-16% flex items-center justify-center">
            <Image
              src="/logo2.png"
              width={25}
              height={25}
              alt="logo1"
              className=" w-full"
              priority={true}
            />
          </Link>

          <Link href="/" className=" w-16% flex items-center justify-center">
            <Image
              src="/logo4.png"
              width={25}
              height={25}
              alt="logo1"
              className=" w-full bg-black"
              priority={true}
            />
          </Link>
          <Link href="/" className=" w-16% flex items-center justify-center">
            <Image
              src="/logo5.png"
              width={25}
              height={25}
              alt="logo1"
              className=" w-full"
              priority={true}
            />
          </Link>
          <Link href="/" className=" w-16% flex items-center justify-center">
            <Image
              src="/logo6.png"
              width={25}
              height={25}
              alt="logo1"
              className=" w-full"
              priority={true}
            />
          </Link>
          <Link href="/" className=" w-16% flex items-center justify-center">
            <Image
              src="/logo3.png"
              width={25}
              height={25}
              alt="logo1"
              className=" w-full bg-black"
              priority={true}
            />
          </Link>
          <Link href="/" className=" w-16% flex items-center justify-center">
            <Image
              src="/logo4.png"
              width={25}
              height={25}
              alt="logo1"
              className=" w-full bg-color_dark_red"
              priority={true}
            />
          </Link> */}
          <div
            className={`flex items-center justify-center gap-4 text-p1 font-500 ${navColor._text_color}`}
          >
            {navOpt?.map((opt, ind) => {
              return (
                <Link href="/" key={ind} className=" hover:underline">
                  {opt}
                </Link>
              );
            })}
            <Link
              href="/"
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
