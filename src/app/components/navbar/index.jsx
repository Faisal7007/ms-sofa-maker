"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdAdminPanelSettings, MdClose, MdMenu } from "react-icons/md";
import { usePathname, useRouter } from 'next/navigation';
import { useFirebase } from "@/app/context/Firebase";
function Navbar() {
  const router = useRouter();
  const firebase=useFirebase()
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuColor, setMenuColor] = useState('color_dark_red1')
  const [menuBgColor, setmenuBgColor] = useState('black')

  const handleAdminClick = () => {
    router.push('/admin');
  };
  
  useEffect(()=>{
    firebase.checkSession()
    // console.log(firebase,'firebase in Navbar')
  },[])

 const navOpt =[
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Products", link: "/products" },
  { name: "Services", link: "/services" },
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
        // _blur_effect: "backdrop-blur-lg"
      });
      setMenuColor('white')
      setmenuBgColor('color_dark_red1')
    } else {
      setNavColor({
        _bg_color: "bg-transparent",
        _logo1: "flex",
        _logo2: "hidden",
        _text_color: "text-color_dark_red1",
      });
      setMenuColor('color_dark_red1')
      setmenuBgColor('white')

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
            className={`w-[8%] ${navColor._logo1} items-center justify-center`}
          >
            <Image
              src="/logo1.png"
              width={25}
              height={25}
              alt="/logo1"
              className=" w-full "
              priority={true}
            />
          </Link>
          <Link
            href="/"
            className={`w-8% ${navColor._logo2} items-center justify-center`}
          >
            <Image
              src="/logo2.png"
              width={25}
              height={25}
              alt="logo1"
              className=" w-full "
              priority={true}
            />
          </Link>
          <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <MdClose className={`text-${menuColor} size-10`} /> : <MdMenu className={`text-${menuColor} size-10`}/>}
        </div>
{/* 
          <div
            className={`flex items-center justify-center gap-4 text-p1 font-500 ${navColor._text_color}`}
          > */}
          <div
          className={`text-p1 font-500 ${navColor._text_color} -mt-4  absolute top-[60px] left-0 w-full bg-${menuBgColor} md:bg-transparent flex flex-col items-center md:flex-row md:static md:w-auto md:gap-8 transition-all duration-300 ${
            isMobileMenuOpen
              ? "block md:flex"
              : "hidden md:flex"
          } z-[100] md:z-auto`}
        >
            {navOpt?.map((opt, ind) => {
            const isActive = pathname === opt.link;
              return (
                <Link href={`${opt.link}`} key={ind}  className={`relative ${isMobileMenuOpen?'mb-6':'mb-0'} after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] 
        after:bg-current after:transition-all after:duration-300 hover:after:w-full ${
          isActive ? "after:w-full text-bold" : ""
        }`} onClick={() => setIsMobileMenuOpen(false)}>
                  {opt.name}
                  
                </Link>
              );
            })}
            <div
              onClick={handleAdminClick}
              className=" text-h4 hover:scale-90 transition-transform duration-200 ease-in-out cursor-pointer"
            >
              <MdAdminPanelSettings />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
